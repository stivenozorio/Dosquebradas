import type { EstadoAlbergue } from "@/types/albergue";
import { FILTROS_ESTADO } from "@/lib/estado";

interface SearchAndFiltersProps {
  query: string;
  onQueryChange: (query: string) => void;
  filtro: EstadoAlbergue | "todos";
  onFiltroChange: (filtro: EstadoAlbergue | "todos") => void;
}

export default function SearchAndFilters({
  query,
  onQueryChange,
  filtro,
  onFiltroChange,
}: SearchAndFiltersProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="buscador-albergues" className="sr-only">
        Buscar un albergue
      </label>
      <div className="relative">
        <span
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-dq-gray-600"
          aria-hidden="true"
        >
          🔎
        </span>
        <input
          id="buscador-albergues"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar un albergue…"
          className="min-h-12 w-full rounded-xl border border-dq-gray-200 bg-white pl-11 pr-4 text-base text-dq-gray-800 shadow-sm outline-none focus:border-dq-green-600 focus:ring-2 focus:ring-dq-green-200"
        />
      </div>

      <div
        role="group"
        aria-label="Filtrar albergues por estado"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {FILTROS_ESTADO.map((opcion) => {
          const activo = opcion.value === filtro;
          return (
            <button
              key={opcion.value}
              type="button"
              onClick={() => onFiltroChange(opcion.value)}
              aria-pressed={activo}
              className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors ${
                activo
                  ? "border-dq-green-700 bg-dq-green-700 text-white"
                  : "border-dq-gray-200 bg-white text-dq-gray-800 hover:border-dq-green-400"
              }`}
            >
              {opcion.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
