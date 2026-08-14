"use client";

import dynamic from "next/dynamic";
import type { Albergue } from "@/types/albergue";

const AlberguesMap = dynamic(() => import("@/components/map/AlberguesMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center rounded-2xl border border-dq-gray-200 bg-dq-gray-50 text-sm text-dq-gray-600">
      Cargando mapa…
    </div>
  ),
});

interface MapSectionProps {
  albergues: Albergue[];
  seleccionadoId: string | null;
  onSeleccionar: (id: string) => void;
}

export default function MapSection({
  albergues,
  seleccionadoId,
  onSeleccionar,
}: MapSectionProps) {
  return (
    <section id="mapa" aria-labelledby="mapa-titulo" className="scroll-mt-20">
      <h2
        id="mapa-titulo"
        className="text-xl font-bold text-dq-green-900 sm:text-2xl"
      >
        Mapa de albergues
      </h2>
      <p className="mt-1 text-sm text-dq-gray-600">
        Toca un marcador para ver el detalle y la ruta hacia ese albergue.
      </p>
      <div className="mt-4 h-[420px] w-full">
        <AlberguesMap
          albergues={albergues}
          seleccionadoId={seleccionadoId}
          onSeleccionar={onSeleccionar}
        />
      </div>
    </section>
  );
}
