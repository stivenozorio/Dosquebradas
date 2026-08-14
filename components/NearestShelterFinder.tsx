"use client";

import { useState } from "react";
import type { Albergue } from "@/types/albergue";
import { ESTADOS_CONFIG } from "@/lib/estado";
import {
  encontrarAlbergueMasCercano,
  formatearDistancia,
  tieneCoordenadas,
} from "@/lib/geo";
import { formatUbicacion } from "@/lib/format";
import ComoLlegarButton from "@/components/ComoLlegarButton";

type Estado =
  | { tipo: "inicial" }
  | { tipo: "buscando" }
  | { tipo: "resultado"; albergueId: string; distanciaKm: number }
  | { tipo: "sin_coordenadas" }
  | { tipo: "error"; mensaje: string };

interface NearestShelterFinderProps {
  albergues: Albergue[];
  onSeleccionar: (id: string) => void;
}

function irAlAlbergue(id: string, onSeleccionar: (id: string) => void) {
  onSeleccionar(id);
  const el = document.getElementById(`albergue-${id}`);
  el?.scrollIntoView({ behavior: "smooth", block: "center" });
}

export default function NearestShelterFinder({
  albergues,
  onSeleccionar,
}: NearestShelterFinderProps) {
  const [estado, setEstado] = useState<Estado>({ tipo: "inicial" });
  const [mostrarSeleccionManual, setMostrarSeleccionManual] = useState(false);

  function buscarUbicacion() {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setEstado({
        tipo: "error",
        mensaje: "Este navegador no permite obtener tu ubicación.",
      });
      setMostrarSeleccionManual(true);
      return;
    }

    setEstado({ tipo: "buscando" });

    navigator.geolocation.getCurrentPosition(
      (posicion) => {
        const resultado = encontrarAlbergueMasCercano(
          albergues,
          posicion.coords.latitude,
          posicion.coords.longitude
        );
        if (!resultado) {
          setEstado({ tipo: "sin_coordenadas" });
          setMostrarSeleccionManual(true);
          return;
        }
        setEstado({
          tipo: "resultado",
          albergueId: resultado.albergue.id,
          distanciaKm: resultado.distanciaKm,
        });
      },
      (error) => {
        const mensaje =
          error.code === error.PERMISSION_DENIED
            ? "No concediste permiso de ubicación. Puedes elegir un albergue manualmente."
            : "No fue posible obtener tu ubicación. Puedes elegir un albergue manualmente.";
        setEstado({ tipo: "error", mensaje });
        setMostrarSeleccionManual(true);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  const albergueResultado =
    estado.tipo === "resultado"
      ? albergues.find((a) => a.id === estado.albergueId) ?? null
      : null;

  return (
    <section
      id="buscar-cercano"
      aria-labelledby="buscar-cercano-titulo"
      className="scroll-mt-20 rounded-2xl border border-dq-green-200 bg-dq-green-50 p-5"
    >
      <h2
        id="buscar-cercano-titulo"
        className="text-lg font-bold text-dq-green-900"
      >
        Albergue más cercano
      </h2>
      <p className="mt-1 text-sm text-dq-gray-700">
        Usa tu ubicación actual para saber cuál albergue queda más cerca.
        No guardamos tu ubicación en ningún momento.
      </p>

      <button
        type="button"
        onClick={buscarUbicacion}
        disabled={estado.tipo === "buscando"}
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-dq-green-700 px-6 text-base font-bold text-white transition-colors hover:bg-dq-green-800 disabled:opacity-70 sm:w-auto"
      >
        {estado.tipo === "buscando"
          ? "Buscando tu ubicación…"
          : "📍 Usar mi ubicación"}
      </button>

      {estado.tipo === "resultado" && albergueResultado && (
        <div className="mt-5 rounded-xl border border-dq-yellow-400 bg-white p-4">
          <p className="text-sm font-semibold text-dq-gray-600">
            Albergue recomendado ·{" "}
            {formatearDistancia(estado.distanciaKm)} de tu ubicación
          </p>
          <p className="mt-1 text-lg font-bold text-dq-green-900">
            {albergueResultado.nombre}
          </p>
          <p className="text-sm text-dq-gray-700">
            {ESTADOS_CONFIG[albergueResultado.estado].icono}{" "}
            {ESTADOS_CONFIG[albergueResultado.estado].label} ·{" "}
            {formatUbicacion(albergueResultado)}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <ComoLlegarButton albergue={albergueResultado} />
            <button
              type="button"
              onClick={() =>
                irAlAlbergue(albergueResultado.id, onSeleccionar)
              }
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-lg border border-dq-green-700 px-4 text-sm font-bold text-dq-green-800 transition-colors hover:bg-dq-green-50"
            >
              Ver detalles
            </button>
          </div>
        </div>
      )}

      {estado.tipo === "sin_coordenadas" && (
        <p className="mt-4 text-sm text-dq-gray-700">
          Por ahora ningún albergue tiene coordenadas confirmadas
          oficialmente, así que no podemos calcular la distancia. Elige uno
          manualmente en la lista de abajo.
        </p>
      )}

      {estado.tipo === "error" && (
        <p className="mt-4 text-sm text-dq-gray-700" role="alert">
          {estado.mensaje}
        </p>
      )}

      {mostrarSeleccionManual && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-dq-gray-700">
            Elegir un albergue manualmente:
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {albergues.map((albergue) => (
              <li key={albergue.id}>
                <button
                  type="button"
                  onClick={() => irAlAlbergue(albergue.id, onSeleccionar)}
                  className="min-h-11 rounded-full border border-dq-green-700 bg-white px-4 text-sm font-semibold text-dq-green-800 hover:bg-dq-green-50"
                >
                  {albergue.nombre}
                  {tieneCoordenadas(albergue) ? "" : " (sin coordenadas)"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
