"use client";

import { useMemo, useState } from "react";
import type { Albergue, EstadoAlbergue } from "@/types/albergue";
import SearchAndFilters from "@/components/SearchAndFilters";
import AlbergueCard from "@/components/AlbergueCard";
import NearestShelterFinder from "@/components/NearestShelterFinder";
import MapSection from "@/components/map/MapSection";

interface AlberguesExplorerProps {
  albergues: Albergue[];
}

export default function AlberguesExplorer({
  albergues,
}: AlberguesExplorerProps) {
  const [query, setQuery] = useState("");
  const [filtro, setFiltro] = useState<EstadoAlbergue | "todos">("todos");
  const [seleccionadoId, setSeleccionadoId] = useState<string | null>(null);

  const soloAlbergues = useMemo(
    () => albergues.filter((a) => a.categoria === "albergue"),
    [albergues]
  );
  const puntosAtencion = useMemo(
    () => albergues.filter((a) => a.categoria === "punto_atencion"),
    [albergues]
  );

  function coincideTexto(albergue: Albergue, texto: string) {
    return (
      texto.length === 0 ||
      albergue.nombre.toLowerCase().includes(texto) ||
      albergue.tipo.toLowerCase().includes(texto) ||
      (albergue.barrio ?? "").toLowerCase().includes(texto)
    );
  }

  const albergesFiltrados = useMemo(() => {
    const texto = query.trim().toLowerCase();
    return soloAlbergues.filter((albergue) => {
      const coincideFiltro = filtro === "todos" || albergue.estado === filtro;
      return coincideTexto(albergue, texto) && coincideFiltro;
    });
  }, [soloAlbergues, query, filtro]);

  const puntosAtencionFiltrados = useMemo(() => {
    const texto = query.trim().toLowerCase();
    return puntosAtencion.filter((punto) => coincideTexto(punto, texto));
  }, [puntosAtencion, query]);

  function seleccionarAlbergue(id: string) {
    setSeleccionadoId(id);
  }

  return (
    <div className="flex flex-col gap-10">
      <NearestShelterFinder
        albergues={soloAlbergues}
        onSeleccionar={seleccionarAlbergue}
      />

      <section id="albergues" aria-labelledby="albergues-titulo" className="scroll-mt-20">
        <h2
          id="albergues-titulo"
          className="text-xl font-bold text-dq-green-900 sm:text-2xl"
        >
          Albergues disponibles
        </h2>

        <div className="mt-4">
          <SearchAndFilters
            query={query}
            onQueryChange={setQuery}
            filtro={filtro}
            onFiltroChange={setFiltro}
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {albergesFiltrados.map((albergue) => (
            <AlbergueCard
              key={albergue.id}
              albergue={albergue}
              destacado={albergue.id === seleccionadoId}
              onVerEnMapa={(id) => {
                setSeleccionadoId(id);
                document
                  .getElementById("mapa")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            />
          ))}
          {albergesFiltrados.length === 0 && (
            <p className="col-span-full rounded-xl border border-dq-gray-200 bg-white p-6 text-center text-sm text-dq-gray-600">
              No encontramos albergues que coincidan con tu búsqueda.
            </p>
          )}
        </div>
      </section>

      {puntosAtencionFiltrados.length > 0 && (
        <section
          id="puntos-atencion"
          aria-labelledby="puntos-atencion-titulo"
          className="scroll-mt-20"
        >
          <h2
            id="puntos-atencion-titulo"
            className="text-xl font-bold text-dq-blue-700 sm:text-2xl"
          >
            🏥 Puntos de atención (no son albergues)
          </h2>
          <p className="mt-1 text-sm text-dq-gray-600">
            Estos puntos brindan atención médica o institucional durante la
            emergencia, pero no son sitios de alojamiento.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {puntosAtencionFiltrados.map((punto) => (
              <AlbergueCard
                key={punto.id}
                albergue={punto}
                destacado={punto.id === seleccionadoId}
                onVerEnMapa={(id) => {
                  setSeleccionadoId(id);
                  document
                    .getElementById("mapa")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
            ))}
          </div>
        </section>
      )}

      <MapSection
        albergues={albergues}
        seleccionadoId={seleccionadoId}
        onSeleccionar={seleccionarAlbergue}
      />
    </div>
  );
}
