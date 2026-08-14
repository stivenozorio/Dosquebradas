const CANAL_WHATSAPP_URL = "https://whatsapp.com/channel/0029VbDGSA9KAwElTAuGtt2p";

export default function CanalOficialCallout() {
  return (
    <div className="border-b border-dq-green-200 bg-dq-green-50 px-4 py-4">
      <div className="mx-auto flex max-w-2xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-dq-green-900">
          <span className="font-bold">📢 Mantente informado y ayuda:</span>{" "}
          sigue el canal oficial de WhatsApp de la Alcaldía de Dosquebradas
          para novedades verificadas de la emergencia, incluidas las cuentas
          oficiales para donaciones.
        </p>
        <a
          href={CANAL_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-dq-green-700 px-4 text-sm font-bold text-white transition-colors hover:bg-dq-green-800"
        >
          Abrir canal de WhatsApp ↗
        </a>
      </div>
    </div>
  );
}
