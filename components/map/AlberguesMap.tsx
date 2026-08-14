"use client";

import { useEffect, useRef, type MutableRefObject } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import type { Albergue } from "@/types/albergue";
import { ESTADOS_CONFIG } from "@/lib/estado";
import { formatUbicacion } from "@/lib/format";
import { tieneCoordenadas } from "@/lib/geo";
import { construirUrlComoLlegar, detectarPlataformaMapas } from "@/lib/maps";
import { CENTRO_DOSQUEBRADAS, ZOOM_INICIAL } from "@/lib/mapConfig";

const COLOR_BORDE_MARCADOR: Record<Albergue["estado"], string> = {
  disponible: "#1f7a48",
  limitado: "#d97706",
  no_disponible: "#c81e2c",
  no_confirmado: "#6b7280",
};

function crearIcono(albergue: Albergue) {
  const config = ESTADOS_CONFIG[albergue.estado];
  const colorBorde = COLOR_BORDE_MARCADOR[albergue.estado];
  return L.divIcon({
    className: "",
    html: `<span style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:9999px;background:white;border:3px solid ${colorBorde};box-shadow:0 2px 6px rgba(0,0,0,0.35);font-size:16px;">${config.icono}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -17],
  });
}

interface AjustarVistaProps {
  posiciones: [number, number][];
}

/**
 * Encuadra el mapa para que todos los marcadores queden visibles al
 * cargar, en vez de depender de un centro y zoom fijos que pueden dejar
 * albergues fuera de la vista inicial (p. ej. al agregar uno más alejado).
 * Solo se ejecuta cuando cambia el conjunto de coordenadas, no en cada
 * render, para no "saltar" la vista mientras el usuario navega el mapa.
 */
function AjustarVista({ posiciones }: AjustarVistaProps) {
  const map = useMap();

  useEffect(() => {
    if (posiciones.length === 0) return;
    if (posiciones.length === 1) {
      map.setView(posiciones[0], 15);
      return;
    }
    map.fitBounds(L.latLngBounds(posiciones), {
      padding: [32, 32],
      maxZoom: 16,
    });
    // Se compara por valor (JSON) a propósito: solo debe reencuadrar
    // cuando cambia el conjunto de coordenadas, no en cada render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(posiciones), map]);

  return null;
}

interface ControladorMapaProps {
  albergues: Albergue[];
  seleccionadoId: string | null;
  markerRefs: MutableRefObject<Record<string, L.Marker | null>>;
}

function ControladorMapa({
  albergues,
  seleccionadoId,
  markerRefs,
}: ControladorMapaProps) {
  const map = useMap();

  useEffect(() => {
    if (!seleccionadoId) return;
    const albergue = albergues.find((a) => a.id === seleccionadoId);
    if (albergue && tieneCoordenadas(albergue)) {
      map.flyTo([albergue.latitud, albergue.longitud], 16, { duration: 0.6 });
      markerRefs.current[seleccionadoId]?.openPopup();
    }
  }, [seleccionadoId, albergues, map, markerRefs]);

  return null;
}

interface AlberguesMapProps {
  albergues: Albergue[];
  seleccionadoId: string | null;
  onSeleccionar: (id: string) => void;
}

export default function AlberguesMap({
  albergues,
  seleccionadoId,
  onSeleccionar,
}: AlberguesMapProps) {
  const conCoordenadas = albergues.filter(tieneCoordenadas);
  const posiciones: [number, number][] = conCoordenadas.map((a) => [
    a.latitud,
    a.longitud,
  ]);
  const markerRefs = useRef<Record<string, L.Marker | null>>({});
  const plataforma = detectarPlataformaMapas();

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-dq-gray-200">
      <MapContainer
        center={CENTRO_DOSQUEBRADAS}
        zoom={ZOOM_INICIAL}
        scrollWheelZoom={false}
        className="h-full min-h-[320px] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AjustarVista posiciones={posiciones} />
        <ControladorMapa
          albergues={albergues}
          seleccionadoId={seleccionadoId}
          markerRefs={markerRefs}
        />
        {conCoordenadas.map((albergue) => (
          <Marker
            key={albergue.id}
            position={[albergue.latitud, albergue.longitud]}
            icon={crearIcono(albergue)}
            ref={(instance) => {
              markerRefs.current[albergue.id] = instance;
            }}
            eventHandlers={{ click: () => onSeleccionar(albergue.id) }}
          >
            <Popup>
              <div className="min-w-[180px] space-y-1">
                <p className="font-bold text-dq-green-900">{albergue.nombre}</p>
                <p className="text-sm">
                  {ESTADOS_CONFIG[albergue.estado].icono}{" "}
                  {ESTADOS_CONFIG[albergue.estado].label}
                </p>
                <p className="text-xs text-dq-gray-600">
                  {formatUbicacion(albergue)}
                </p>
                <a
                  href={construirUrlComoLlegar(albergue, plataforma)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm font-semibold text-dq-green-700 underline underline-offset-2"
                >
                  📍 Cómo llegar
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {conCoordenadas.length === 0 && (
        <div className="pointer-events-none absolute inset-0 z-[400] flex items-center justify-center bg-white/85 p-6 text-center">
          <p className="max-w-xs text-sm font-medium text-dq-gray-800">
            Aún no hay coordenadas oficiales confirmadas para mostrar
            marcadores. Se agregarán en cuanto la autoridad competente las
            confirme.
          </p>
        </div>
      )}
    </div>
  );
}
