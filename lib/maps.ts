import type { Albergue } from "@/types/albergue";
import { MUNICIPIO_DEFECTO } from "@/lib/constants";
import { tieneCoordenadas } from "@/lib/geo";
import { formatUbicacion } from "@/lib/format";

export type PlataformaMapas = "ios" | "otro";

/** Detecta si el navegador corre en un dispositivo Apple (para usar Apple Maps). */
export function detectarPlataformaMapas(): PlataformaMapas {
  if (typeof navigator === "undefined") return "otro";
  const ua = navigator.userAgent || "";
  const esIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (ua.includes("Macintosh") && (navigator.maxTouchPoints ?? 0) > 1);
  return esIOS ? "ios" : "otro";
}

/**
 * Construye el enlace de navegación hacia un albergue.
 * Usa coordenadas confirmadas cuando existen; si no, arma una búsqueda
 * por nombre y ubicación (sin inventar coordenadas).
 */
export function construirUrlComoLlegar(
  albergue: Albergue,
  plataforma: PlataformaMapas = "otro"
): string {
  if (tieneCoordenadas(albergue)) {
    const { latitud, longitud } = albergue;
    return plataforma === "ios"
      ? `https://maps.apple.com/?daddr=${latitud},${longitud}&dirflg=d`
      : `https://www.google.com/maps/dir/?api=1&destination=${latitud},${longitud}`;
  }

  const textoBusqueda = [albergue.nombre, formatUbicacion(albergue)]
    .filter(Boolean)
    .join(", ");
  const query = encodeURIComponent(textoBusqueda || MUNICIPIO_DEFECTO);

  return plataforma === "ios"
    ? `https://maps.apple.com/?q=${query}`
    : `https://www.google.com/maps/search/?api=1&query=${query}`;
}
