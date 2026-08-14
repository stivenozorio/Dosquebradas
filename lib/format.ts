import type { Albergue } from "@/types/albergue";
import { DATO_NO_DISPONIBLE, MUNICIPIO_DEFECTO } from "@/lib/constants";

/** Formatea una fecha ISO a formato legible en español; null → texto estándar. */
export function formatearFecha(fechaIso: string | null): string {
  if (!fechaIso) return DATO_NO_DISPONIBLE;
  const fecha = new Date(fechaIso);
  if (Number.isNaN(fecha.getTime())) return DATO_NO_DISPONIBLE;
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(fecha);
}

/** Construye el texto de ubicación combinando barrio, dirección y municipio. */
export function formatUbicacion(albergue: Albergue): string {
  const partes = [albergue.barrio, albergue.direccion].filter(
    (parte): parte is string => Boolean(parte)
  );
  if (partes.length === 0) return MUNICIPIO_DEFECTO;
  return `${partes.join(", ")}, ${MUNICIPIO_DEFECTO}`;
}

/** Texto para cualquier campo opcional que pueda ser null. */
export function formatOpcional(valor: string | number | null): string {
  if (valor === null || valor === "") return DATO_NO_DISPONIBLE;
  return String(valor);
}
