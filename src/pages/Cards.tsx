import { Home, Mail, Phone, Printer } from 'lucide-react'
import { businessCards } from '@/data/siteContent'

const CARDS_PER_SHEET = 8

function BusinessCardFace() {
  const card = businessCards[0]

  return (
    <div className="card-print flex h-[55mm] w-[85mm] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-4 text-slate-100 shadow-soft print:rounded-none print:border-slate-300 print:shadow-none">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-content-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
          <Home size={16} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white">
          Urbe Propiedades
        </span>
      </div>

      <div>
        <p className="font-display text-lg font-semibold text-white">{card.name}</p>
        <p className="text-xs text-slate-300">{card.role}</p>
      </div>

      <ul className="space-y-1 text-[11px] text-slate-300">
        <li className="flex items-center gap-2">
          <Phone size={12} className="text-blue-200" aria-hidden="true" />
          {card.phone}
        </li>
        <li className="flex items-center gap-2">
          <Mail size={12} className="text-blue-200" aria-hidden="true" />
          {card.email}
        </li>
        <li className="text-slate-400">{card.website}</li>
      </ul>
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

      <div className="mx-auto mt-10 grid w-full max-w-4xl grid-cols-1 place-items-center gap-4 px-4 sm:grid-cols-2 print:mt-0 print:max-w-none print:grid-cols-2 print:place-items-start print:gap-2 print:px-0">
        {sheet.map((_, index) => (
          <BusinessCardFace key={index} />
        ))}
      </div>
    </div>
  )
}
