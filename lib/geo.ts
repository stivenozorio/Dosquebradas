import type { Albergue } from "@/types/albergue";

const RADIO_TIERRA_KM = 6371;

function aRadianes(grados: number): number {
  return (grados * Math.PI) / 180;
}

/** Distancia en kilómetros entre dos coordenadas usando la fórmula de Haversine. */
export function calcularDistanciaKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const dLat = aRadianes(lat2 - lat1);
  const dLon = aRadianes(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(aRadianes(lat1)) *
      Math.cos(aRadianes(lat2)) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return RADIO_TIERRA_KM * c;
}

export function formatearDistancia(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

export type AlbergueConCoordenadas = Albergue & {
  latitud: number;
  longitud: number;
};

/** Type guard: un albergue tiene coordenadas confirmadas y utilizables. */
export function tieneCoordenadas(
  albergue: Albergue
): albergue is AlbergueConCoordenadas {
  return albergue.latitud !== null && albergue.longitud !== null;
}

export interface AlbergueCercano {
  albergue: AlbergueConCoordenadas;
  distanciaKm: number;
}

/**
 * Encuentra el albergue con coordenadas confirmadas más cercano a una
 * ubicación dada. Devuelve `null` si ningún albergue tiene coordenadas.
 */
export function encontrarAlbergueMasCercano(
  albergues: Albergue[],
  latUsuario: number,
  lonUsuario: number
): AlbergueCercano | null {
  const conCoordenadas = albergues.filter(tieneCoordenadas);
  if (conCoordenadas.length === 0) return null;

  let masCercano: AlbergueCercano | null = null;
  for (const albergue of conCoordenadas) {
    const distanciaKm = calcularDistanciaKm(
      latUsuario,
      lonUsuario,
      albergue.latitud,
      albergue.longitud
    );
    if (!masCercano || distanciaKm < masCercano.distanciaKm) {
      masCercano = { albergue, distanciaKm };
    }
  }
  return masCercano;
}
