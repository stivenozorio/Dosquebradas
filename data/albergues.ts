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
    categoria: "albergue",
    estado: "no_disponible",
    direccion: "Contiguo al parque infantil y la manzana 13/14 del sector.",
    barrio: "Campestre B",
    latitud: 4.8336,
    longitud: -75.6906,
    telefono: null,
    capacidad: null,
    observaciones: "Sin cupo disponible.",
    ultimaActualizacion: "2026-08-14T03:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
  {
    id: "centro-vida-violetas",
    nombre: "Centro Vida Violetas",
    tipo: "Centro Vida",
    categoria: "albergue",
    estado: "disponible",
    direccion: null,
    barrio: "Violetas",
    latitud: 4.8189,
    longitud: -75.6616,
    telefono: null,
    capacidad: null,
    observaciones: null,
    ultimaActualizacion: "2026-08-14T04:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
  {
    id: "centro-vida-jose-argemiro-cardenas",
    nombre: "Centro Vida José Argemiro Cárdenas",
    tipo: "Centro Vida",
    categoria: "albergue",
    estado: "disponible",
    direccion:
      "En la sede del Club de la Tercera Edad (adultos mayores) de Dosquebradas, sector Santa Isabel / La Capilla, cerca a la Av. Ferrocarril.",
    barrio: null,
    latitud: 4.8378,
    longitud: -75.6705,
    telefono: null,
    capacidad: null,
    observaciones: null,
    ultimaActualizacion: "2026-08-14T00:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
  {
    id: "minuto-de-dios",
    nombre: "Minuto de Dios",
    tipo: "Punto de alojamiento",
    categoria: "albergue",
    estado: "no_disponible",
    direccion: "Sector La Graciela.",
    barrio: "Minuto de Dios",
    latitud: 4.8283,
    longitud: -75.6969,
    telefono: null,
    capacidad: null,
    observaciones: "Reportado como copado (sin cupo disponible).",
    ultimaActualizacion: "2026-08-14T05:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
];
