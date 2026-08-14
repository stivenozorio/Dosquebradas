import { ESTADOS_CONFIG } from "@/lib/estado";
import type { EstadoAlbergue } from "@/types/albergue";

interface EstadoBadgeProps {
  estado: EstadoAlbergue;
  className?: string;
}

export default function EstadoBadge({ estado, className = "" }: EstadoBadgeProps) {
  const config = ESTADOS_CONFIG[estado];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${config.clasesBadge} ${className}`}
    >
      <span aria-hidden="true">{config.icono}</span>
      {config.label}
    </span>
  );
}
