import type { Albergue } from "@/types/albergue";

/**
 * Fuente de datos de los albergues oficiales de Dosquebradas.
 *
 * Este archivo es la ÚNICA fuente de verdad para los datos de albergues.
 * Los componentes visuales no deben contener datos "hardcodeados": todo
 * dato mostrado en pantalla debe originarse aquí.
 *
 * Reglas de carga de datos:
 * - No se inventan coordenadas, direcciones exactas, teléfonos,
 *   capacidad, horarios ni fuentes oficiales.
 * - Cuando un dato no ha sido confirmado oficialmente se deja en `null`
 *   y la interfaz debe mostrar "Información no disponible".
 * - Cuando exista un panel administrativo, este arreglo pasará a ser
 *   reemplazado por una consulta a base de datos (ver lib/ para los
 *   puntos de extensión ya preparados).
 */
export const albergues: Albergue[] = [
  {
    id: "polideportivo-campestre-b",
    nombre: "Polideportivo del Campestre B",
    tipo: "Polideportivo",
    estado: "disponible",
    direccion: null,
    barrio: null,
    latitud: null,
    longitud: null,
    telefono: null,
    capacidad: null,
    observaciones: null,
    ultimaActualizacion: null,
    fuente: null,
    fuenteUrl: null,
  },
  {
    id: "centro-vida-violetas",
    nombre: "Centro Vida Violetas",
    tipo: "Centro Vida",
    estado: "disponible",
    direccion: null,
    barrio: "Violetas",
    latitud: null,
    longitud: null,
    telefono: null,
    capacidad: null,
    observaciones: null,
    ultimaActualizacion: null,
    fuente: null,
    fuenteUrl: null,
  },
  {
    id: "centro-vida-jose-argemiro-cardenas",
    nombre: "Centro Vida José Argemiro Cárdenas",
    tipo: "Centro Vida",
    estado: "disponible",
    direccion: null,
    barrio: null,
    latitud: null,
    longitud: null,
    telefono: null,
    capacidad: null,
    observaciones: null,
    ultimaActualizacion: null,
    fuente: null,
    fuenteUrl: null,
  },
];
