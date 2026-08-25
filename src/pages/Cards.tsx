import { Building2, Globe, Mail, Phone, Printer } from 'lucide-react'
import { businessCards } from '@/data/siteContent'

const CARDS_PER_SHEET = 8

function BusinessCardFace() {
  const card = businessCards[0]

  return (
    <div className="card-print relative flex h-[55mm] w-[85mm] flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-base-950 bg-radial-premium p-4 text-slate-100 shadow-soft print:rounded-none print:border-slate-300 print:shadow-none">
      <span className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-indigoGlow/40 to-blueGlow/20 blur-2xl" aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-10 -left-8 h-24 w-24 rounded-full bg-gradient-to-tr from-blueGlow/20 to-indigoGlow/10 blur-2xl" aria-hidden="true" />

      <div className="relative flex items-center gap-2">
        <span className="grid h-8 w-8 place-content-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-glow">
          <Building2 size={16} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-wide text-white">
          Urbe Propiedades
        </span>
      </div>

      <div className="relative">
        <p className="font-display text-lg font-semibold text-white">{card.name}</p>
        <p className="mt-1 inline-flex rounded-full border border-blue-200/20 bg-blue-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-100">
          {card.role}
        </p>
      </div>

      <ul className="relative space-y-1.5 text-[11px] text-slate-300">
        <li className="flex items-center gap-2">
          <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/5 text-blueGlow">
            <Phone size={11} aria-hidden="true" />
          </span>
          {card.phone}
        </li>
        <li className="flex items-center gap-2">
          <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/5 text-blueGlow">
            <Mail size={11} aria-hidden="true" />
          </span>
          {card.email}
        </li>
        <li className="flex items-center gap-2 text-slate-400">
          <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/5 text-blueGlow">
            <Globe size={11} aria-hidden="true" />
          </span>
          {card.website}
        </li>
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
