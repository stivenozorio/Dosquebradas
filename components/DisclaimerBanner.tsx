export default function DisclaimerBanner() {
  return (
    <div
      role="note"
      aria-label="Información importante"
      className="border-b border-dq-yellow-300 bg-dq-yellow-50 px-4 py-4"
    >
      <div className="mx-auto flex max-w-2xl items-start gap-3">
        <span className="text-xl leading-none" aria-hidden="true">
          ⚠️
        </span>
        <p className="text-sm leading-relaxed text-dq-yellow-900">
          <span className="font-bold">Información importante:</span> los
          estados de los albergues pueden cambiar durante una emergencia.
          Verifica siempre la información disponible y sigue las
          indicaciones de las autoridades competentes.
        </p>
      </div>
    </div>
  );
}
