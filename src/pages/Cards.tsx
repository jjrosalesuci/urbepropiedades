import { Building2, Globe, Mail, Phone, Printer } from 'lucide-react'
import type { ReactNode } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { businessCards, socialLinks } from '@/data/siteContent'

const CARDS_PER_SHEET = 8

function BusinessCardFace() {
  const card = businessCards[0]

  return (
    <div className="card-print relative flex h-[55mm] w-[85mm] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#050b1f] p-4 text-slate-100 shadow-soft print:rounded-none print:border-slate-300 print:shadow-none">
      <div className="relative flex items-center gap-2">
        <span className="grid h-8 w-8 place-content-center rounded-lg bg-indigo-500 text-white shadow-glow">
          <Building2 size={16} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white">
          Urbe Propiedades
        </span>
      </div>

      <div className="relative flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold text-white">{card.name}</p>
          <p className="mt-1 inline-flex rounded-full border border-blue-200/30 bg-blue-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-50">
            {card.role}
          </p>

          <ul className="mt-2 space-y-1.5 text-[11px] font-medium text-slate-100">
            <li className="flex items-center gap-2">
              <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/10 text-blueGlow">
                <Phone size={11} aria-hidden="true" />
              </span>
              {card.phone}
            </li>
            <li className="flex items-center gap-2">
              <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/10 text-blueGlow">
                <Mail size={11} aria-hidden="true" />
              </span>
              {card.email}
            </li>
            <li className="flex items-center gap-2 text-slate-200">
              <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/10 text-blueGlow">
                <Globe size={11} aria-hidden="true" />
              </span>
              {card.website}
            </li>
          </ul>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-1">
          <QRCodeSVG
            value={socialLinks.whatsapp}
            size={56}
            bgColor="#ffffff"
            fgColor="#1e1b4b"
            level="M"
            className="rounded-md p-1"
          />
          <span className="text-center text-[8px] uppercase tracking-[0.1em] text-slate-200">
            WhatsApp
          </span>
        </div>
      </div>
    </div>
  )
}

/**
 * Envuelve cada tarjeta con una zona de sangría y marcas de corte sutiles en
 * las cuatro esquinas, para guiar el corte a guillotina o tijera sin
 * arriesgar el diseño de la tarjeta vecina.
 */
function CardWithBleed({ children }: { children: ReactNode }) {
  return (
    <div className="card-bleed relative p-0 print:p-[3mm]">
      {children}
    </div>
  )
}

export function Cards() {
  const sheet = Array.from({ length: CARDS_PER_SHEET })
  const agentName = businessCards[0].name

  return (
    <div className="min-h-screen bg-base-950 py-12 text-slate-100 print:bg-white print:py-0">
      <div className="mx-auto w-full max-w-4xl px-4 print:hidden">
        <h1 className="font-display text-2xl font-semibold text-white">
          Tarjetas de presentación
        </h1>
        <p className="mt-2 text-sm text-slate-300">
          Hoja lista para imprimir con tarjetas de {agentName}. Usá el botón para
          imprimir directamente desde el navegador.
        </p>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
        >
          <Printer size={16} aria-hidden="true" />
          Imprimir tarjetas
        </button>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 place-items-center gap-4 px-4 sm:grid-cols-2 print:mt-0 print:max-w-none print:grid-cols-2 print:place-items-center print:gap-0 print:px-0">
        {sheet.map((_, index) => (
          <CardWithBleed key={index}>
            <BusinessCardFace />
          </CardWithBleed>
        ))}
      </div>
    </div>
  )
}
