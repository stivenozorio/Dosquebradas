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
    estado: "no_disponible",
    direccion: "Contiguo al parque infantil y la manzana 13/14 del sector.",
    barrio: "Campestre B",
    latitud: 4.8328,
    longitud: -75.679,
    telefono: null,
    capacidad: null,
    observaciones: "Sin cupo disponible.",
    ultimaActualizacion: "2026-08-14T00:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
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
    direccion:
      "Sector Santa Isabel / La Capilla, cerca a la Av. Ferrocarril y la zona administrativa del Centro Vida de Dosquebradas.",
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
    id: "centro-vida-frailes",
    nombre: "Centro Vida Frailes",
    tipo: "Centro Vida",
    estado: "no_confirmado",
    direccion:
      "Sector Frailes, sobre la vía principal del barrio hacia la zona comunitaria/cancha de Frailes.",
    barrio: "Frailes",
    latitud: 4.8215,
    longitud: -75.6582,
    telefono: null,
    capacidad: null,
    observaciones: "Estado de disponibilidad pendiente de confirmación oficial.",
    ultimaActualizacion: "2026-08-14T00:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
  {
    id: "coliseo-municipal-dosquebradas",
    nombre: "Coliseo Municipal de Dosquebradas",
    tipo: "Coliseo",
    estado: "no_confirmado",
    direccion: null,
    barrio: null,
    latitud: 4.8383,
    longitud: -75.6741,
    telefono: null,
    capacidad: null,
    observaciones:
      "Punto de atención con apoyo del hospital militar y 20 carpas de contingencia instaladas.",
    ultimaActualizacion: "2026-08-14T00:00:00-05:00",
    fuente: "Referencia suministrada por el administrador de la plataforma",
    fuenteUrl: null,
  },
];
