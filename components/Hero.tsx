export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-dq-green-700 to-dq-green-800 px-4 py-10 text-center text-white sm:py-14">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dq-yellow-400">
          Dosquebradas, Risaralda
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Albergues Oficiales
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-base text-dq-green-50 sm:text-lg">
          Consulta los puntos de albergue disponibles, conoce su ubicación y
          encuentra la mejor ruta para llegar.
        </p>
        <div className="mt-7">
          <a
            href="#buscar-cercano"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-dq-yellow-500 px-6 text-base font-bold text-dq-green-900 shadow-lg shadow-black/10 transition-colors hover:bg-dq-yellow-400 focus-visible:outline focus-visible:outline-4 focus-visible:outline-dq-yellow-200 sm:w-auto sm:px-8"
          >
            📍 Encontrar albergue más cercano
          </a>
        </div>
      </div>
    </section>
  );
}
