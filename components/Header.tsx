import DosquebradasEmblem from "@/components/DosquebradasEmblem";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dq-yellow-500/60 bg-dq-green-800">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <DosquebradasEmblem className="h-10 w-10 shrink-0" />
        <div className="min-w-0">
          <p className="truncate text-sm font-bold uppercase tracking-wide text-white sm:text-base">
            Albergues Oficiales
          </p>
          <p className="truncate text-xs text-dq-green-100">
            Dosquebradas, Risaralda
          </p>
        </div>
        <nav
          aria-label="Navegación rápida"
          className="ml-auto hidden shrink-0 items-center gap-4 text-sm font-medium text-dq-green-50 sm:flex"
        >
          <a href="#albergues" className="hover:text-dq-yellow-400">
            Albergues
          </a>
          <a href="#mapa" className="hover:text-dq-yellow-400">
            Mapa
          </a>
        </nav>
      </div>
    </header>
  );
}
