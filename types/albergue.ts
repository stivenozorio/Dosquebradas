/**
 * Estados posibles de un albergue.
 * "no_confirmado" se usa cuando no hay información oficial verificada.
 */
export type EstadoAlbergue =
  | "disponible"
  | "limitado"
  | "no_disponible"
  | "no_confirmado";

/**
 * Modelo de datos de un albergue oficial.
 *
 * Cualquier campo sin confirmación oficial debe quedar en `null`.
 * No se deben inventar coordenadas, direcciones, teléfonos, capacidades
 * ni horarios.
 */
export interface Albergue {
  id: string;
  nombre: string;
  tipo: string;
  estado: EstadoAlbergue;
  direccion: string | null;
  barrio: string | null;
  latitud: number | null;
  longitud: number | null;
  telefono: string | null;
  capacidad: number | null;
  observaciones: string | null;
  ultimaActualizacion: string | null;
  fuente: string | null;
  fuenteUrl: string | null;
}
