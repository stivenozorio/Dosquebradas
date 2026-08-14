interface DosquebradasEmblemProps {
  className?: string;
}

/**
 * Emblema simplificado inspirado en los colores institucionales del
 * escudo y la bandera de Dosquebradas: cuarteles en gris y verde,
 * franja amarilla (engranaje/industria) y borde azul-rojo.
 * No es una reproducción oficial del escudo, es una marca propia de
 * esta plataforma que usa la misma paleta institucional.
 */
export default function DosquebradasEmblem({
  className,
}: DosquebradasEmblemProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Emblema Albergues Oficiales Dosquebradas"
    >
      <rect x="1" y="1" width="46" height="46" rx="10" fill="#1e4b8c" />
      <rect x="3" y="3" width="42" height="42" rx="8" fill="#c81e2c" />
      <rect x="5" y="5" width="38" height="38" rx="7" fill="#f4f5f4" />
      <path d="M5 12a7 7 0 0 1 7-7h12v19H5z" fill="#d3d6d1" />
      <path d="M24 5h12a7 7 0 0 1 7 7v12H24z" fill="#1f7a48" />
      <path d="M5 24h19v19H12a7 7 0 0 1-7-7z" fill="#f5b400" />
      <path d="M24 24h19v12a7 7 0 0 1-7 7H24z" fill="#d3d6d1" />
      <circle cx="24" cy="24" r="5.5" fill="#fbfaf6" stroke="#144f2e" strokeWidth="1.5" />
      <path
        d="M24 20.2c.5 1.1 1.6 1.7 1.6 2.9 0 1-.7 1.9-1.6 1.9s-1.6-.9-1.6-1.9c0-1.2 1.1-1.8 1.6-2.9Z"
        fill="#1f7a48"
      />
    </svg>
  );
}
