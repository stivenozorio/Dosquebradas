import type { EstadoAlbergue } from "@/types/albergue";

/**
 * Configuración visual y semántica de cada estado de albergue.
 * El estado siempre se comunica con ícono + texto, nunca solo con color,
 * para garantizar accesibilidad a personas con daltonismo o lectores
 * de pantalla.
 */
export interface EstadoConfig {
  label: string;
  icono: string;
  descripcion: string;
  clasesBadge: string;
  clasesPunto: string;
}

export const ESTADOS_CONFIG: Record<EstadoAlbergue, EstadoConfig> = {
  disponible: {
    label: "Disponible",
    icono: "🟢",
    descripcion: "El albergue reporta cupo disponible.",
    clasesBadge:
      "bg-dq-green-50 text-dq-green-800 border border-dq-green-200",
    clasesPunto: "bg-dq-green-600",
  },
  limitado: {
    label: "Capacidad limitada",
    icono: "🟠",
    descripcion: "El albergue reporta poca disponibilidad de cupo.",
    clasesBadge: "bg-amber-50 text-amber-800 border border-amber-200",
    clasesPunto: "bg-amber-500",
  },
  no_disponible: {
    label: "No disponible",
    icono: "🔴",
    descripcion: "El albergue reporta que no tiene cupo disponible.",
    clasesBadge: "bg-red-50 text-red-800 border border-red-200",
    clasesPunto: "bg-red-600",
  },
  no_confirmado: {
    label: "Información no confirmada",
    icono: "⚪",
    descripcion: "Aún no hay confirmación oficial sobre el estado actual.",
    clasesBadge: "bg-slate-100 text-slate-700 border border-slate-300",
    clasesPunto: "bg-slate-400",
  },
};

export const FILTROS_ESTADO: { value: EstadoAlbergue | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "disponible", label: "🟢 Disponibles" },
  { value: "limitado", label: "🟠 Capacidad limitada" },
  { value: "no_disponible", label: "🔴 No disponibles" },
];
