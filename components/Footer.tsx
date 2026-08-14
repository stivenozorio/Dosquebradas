import DosquebradasEmblem from "@/components/DosquebradasEmblem";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-dq-yellow-500/40 bg-dq-green-900 text-dq-green-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-center gap-3">
          <DosquebradasEmblem className="h-9 w-9 shrink-0" />
          <div>
            <p className="font-bold uppercase tracking-wide text-white">
              Albergues Oficiales – Dosquebradas
            </p>
            <p className="text-sm text-dq-green-200">
              Información para la comunidad
            </p>
          </div>
        </div>

        <div className="mt-6 border-t border-dq-green-700 pt-6 text-sm">
          <p className="text-dq-green-200">Creado por:</p>
          <p className="font-semibold text-white">
            Edil Jhon Stiven Sanpedro Osorio
          </p>
          <p className="mt-1 text-dq-green-100">
            310 280 0503{" "}
            <span className="text-dq-green-300">
              (contacto del creador de la plataforma, no es línea oficial de
              emergencias)
            </span>
          </p>
          <p className="text-dq-green-100">Dosquebradas, Risaralda</p>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-dq-green-700 pt-6 text-sm">
          <a
            href="https://www.dosquebradas.gov.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-dq-yellow-400 underline underline-offset-2 hover:text-dq-yellow-300"
          >
            Página oficial de la Alcaldía de Dosquebradas ↗
          </a>
          <a
            href="https://whatsapp.com/channel/0029VbDGSA9KAwElTAuGtt2p"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center font-medium text-dq-yellow-400 underline underline-offset-2 hover:text-dq-yellow-300"
          >
            Canal oficial de WhatsApp de la Alcaldía ↗
          </a>
        </div>

        <p className="mt-6 border-t border-dq-green-700 pt-6 text-xs leading-relaxed text-dq-green-300">
          Esta plataforma es informativa y no reemplaza las instrucciones
          oficiales de las autoridades. En caso de emergencia, sigue siempre
          las indicaciones de la Alcaldía de Dosquebradas y de los
          organismos de gestión del riesgo.
        </p>
      </div>
    </footer>
  );
}
