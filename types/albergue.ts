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
 * Categoría del punto:
 * - "albergue": punto de alojamiento temporal para la comunidad.
 * - "punto_atencion": punto de atención médica/institucional (p. ej. un
 *   hospital militar instalado en un coliseo) que NO es un albergue,
 *   aunque comparta la misma estructura de datos y se muestre en el
 *   mismo mapa.
 */
export type CategoriaPunto = "albergue" | "punto_atencion";

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
  categoria: CategoriaPunto;
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
