import type { Albergue } from "@/types/albergue";
import { DATO_NO_DISPONIBLE, MUNICIPIO_DEFECTO } from "@/lib/constants";

const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

/** Desfase fijo de Bogotá (UTC-5, Colombia no aplica horario de verano). */
const OFFSET_BOGOTA_MINUTOS = -5 * 60;

/**
 * Formatea una fecha ISO a texto legible en español (hora de Bogotá);
 * null → texto estándar.
 *
 * Se formatea a mano en vez de usar `Intl.DateTimeFormat`: distintas
 * versiones de ICU entre el motor de Node (SSR) y el del navegador
 * (hidratación) pueden insertar caracteres de espacio distintos alrededor
 * de "a. m./p. m.", lo que React reporta como error de hidratación aunque
 * el texto se vea igual. El cálculo manual es 100% determinista.
 */
export function formatearFecha(fechaIso: string | null): string {
  if (!fechaIso) return DATO_NO_DISPONIBLE;
  const fecha = new Date(fechaIso);
  if (Number.isNaN(fecha.getTime())) return DATO_NO_DISPONIBLE;

  const bogota = new Date(fecha.getTime() + OFFSET_BOGOTA_MINUTOS * 60000);

  const dia = bogota.getUTCDate();
  const mes = MESES[bogota.getUTCMonth()];
  const anio = bogota.getUTCFullYear();

  let horas = bogota.getUTCHours();
  const minutos = bogota.getUTCMinutes().toString().padStart(2, "0");
  const periodo = horas < 12 ? "a. m." : "p. m.";
  horas = horas % 12;
  if (horas === 0) horas = 12;

  return `${dia} de ${mes} de ${anio}, ${horas}:${minutos} ${periodo}`;
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
