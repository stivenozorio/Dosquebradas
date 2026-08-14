import type { Albergue } from "@/types/albergue";
import EstadoBadge from "@/components/EstadoBadge";
import ComoLlegarButton from "@/components/ComoLlegarButton";
import { formatearFecha, formatOpcional, formatUbicacion } from "@/lib/format";
import { tieneCoordenadas } from "@/lib/geo";

interface AlbergueCardProps {
  albergue: Albergue;
  onVerEnMapa: (id: string) => void;
  destacado?: boolean;
}

export default function AlbergueCard({
  albergue,
  onVerEnMapa,
  destacado = false,
}: AlbergueCardProps) {
  const puedeVerEnMapa = tieneCoordenadas(albergue);

  return (
    <article
      id={`albergue-${albergue.id}`}
      className={`flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm transition-shadow ${
        destacado
          ? "border-dq-yellow-500 ring-2 ring-dq-yellow-400"
          : "border-dq-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-dq-green-900">
            {albergue.nombre}
          </h3>
          <p className="text-sm font-medium text-dq-gray-600">
            {albergue.tipo}
          </p>
        </div>
        <EstadoBadge estado={albergue.estado} />
      </div>

      <dl className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-dq-gray-800 sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-dq-gray-600">Ubicación</dt>
          <dd>{formatUbicacion(albergue)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-dq-gray-600">
            Última actualización
          </dt>
          <dd>{formatearFecha(albergue.ultimaActualizacion)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-dq-gray-600">
            Fuente de información
          </dt>
          <dd>
            {albergue.fuente ? (
              albergue.fuenteUrl ? (
                <a
                  href={albergue.fuenteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dq-green-700 underline underline-offset-2 hover:text-dq-green-900"
                >
                  {albergue.fuente} ↗
                </a>
              ) : (
                albergue.fuente
              )
            ) : (
              formatOpcional(albergue.fuente)
            )}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-dq-gray-600">Observaciones</dt>
          <dd>{formatOpcional(albergue.observaciones)}</dd>
        </div>
      </dl>

      <div className="mt-1 flex flex-col gap-2 sm:flex-row">
        <ComoLlegarButton albergue={albergue} />
        <button
          type="button"
          onClick={() => onVerEnMapa(albergue.id)}
          disabled={!puedeVerEnMapa}
          aria-label={
            puedeVerEnMapa
              ? `Ver ${albergue.nombre} en el mapa`
              : `Ubicación de ${albergue.nombre} no disponible en el mapa`
          }
          title={
            puedeVerEnMapa
              ? undefined
              : "Coordenadas exactas aún no confirmadas oficialmente"
          }
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-dq-green-700 px-4 text-sm font-bold text-dq-green-800 transition-colors hover:bg-dq-green-50 disabled:cursor-not-allowed disabled:border-dq-gray-200 disabled:text-dq-gray-600 disabled:hover:bg-transparent"
        >
          🗺️ Ver en mapa
        </button>
      </div>
      {!puedeVerEnMapa && (
        <p className="text-xs text-dq-gray-600">
          Ubicación exacta pendiente de confirmación oficial.
        </p>
      )}
    </article>
  );
}
