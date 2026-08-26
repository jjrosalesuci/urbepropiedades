import { Building2, Globe, Mail, Phone, Printer } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { businessCards, contactInfo, socialLinks, solutions } from '@/data/siteContent'

// Descripciones cortas específicas para el folleto impreso. La copia extensa
// de `siteContent.ts` se lee bien en pantalla, pero en A5 obliga a usar una
// tipografía demasiado pequeña; acá reformulamos cada servicio en una línea
// legible con una fuente un par de puntos más grande.
const flyerServiceCopy: Record<string, string> = {
  'Venta de propiedades': 'Publicamos y negociamos para vender al mejor valor.',
  Alquileres: 'Inquilinos calificados y contratos sólidos.',
  Tasación: 'Informe profesional del valor real de tu propiedad.',
  'Administración de alquileres': 'Cobros, liquidaciones y mantenimiento integral.',
  'Asesoría legal': 'Contratos, boletos y escrituras con respaldo profesional.',
  'Inversión inmobiliaria': 'Oportunidades de renta y reventa a tu medida.',
}

const highlightedSolutions = solutions.slice(0, 6)
const card = businessCards[0]

// El flyer se imprime en A5 (148 × 210 mm). Esta regla @page sólo se aplica a
// esta página porque es un entry point independiente (`flyer/index.html`).
const flyerPrintStyles = `
  @media print {
    @page {
      size: A5 portrait;
      margin: 0;
    }
    html, body {
      background: #04091c !important;
    }
  }
`

export function FlyerPage() {
  return (
    <div className="min-h-screen bg-base-950 text-slate-100 print:min-h-0">
      <style dangerouslySetInnerHTML={{ __html: flyerPrintStyles }} />

      <div className="flex justify-center gap-3 border-b border-white/10 bg-base-900 py-4 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
        >
          <Printer size={16} aria-hidden="true" />
          Imprimir flyer
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-[160mm] justify-center px-4 py-10 print:max-w-none print:px-0 print:py-0">
        <article className="flyer-sheet card-print relative flex h-[210mm] w-[148mm] shrink-0 flex-col overflow-hidden bg-[#04091c] text-slate-100 shadow-soft print:rounded-none print:shadow-none">
          {/* Fondo decorativo con el mismo lenguaje visual que las tarjetas.
              Se baja la opacidad para no aclarar el fondo al imprimir y así
              mantener buen contraste con el texto blanco. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-premium opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl"
          />

          <div className="relative flex h-full flex-col px-8 py-9">
            {/* Encabezado con el mismo logotipo y ratio de las tarjetas. */}
            <header className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-content-center rounded-xl bg-indigo-500 text-white shadow-glow">
                  <Building2 size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold tracking-wide text-white">
                    Urbe Propiedades
                  </p>
                  <p className="text-[11px] text-slate-300">Inmobiliaria de confianza</p>
                </div>
              </div>
              <p className="rounded-full border border-blue-200/20 bg-blue-400/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                Venta · Alquiler · Tasación
              </p>
            </header>

            {/* Título principal. */}
            <section className="mt-7">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-blueGlow">
                Tu próximo paso inmobiliario
              </p>
              <h1 className="mt-2 font-display text-[26px] font-semibold leading-[1.1] text-white">
                Te acompañamos en cada paso de tu operación inmobiliaria
              </h1>
              <p className="mt-3 text-[13px] font-medium leading-relaxed text-slate-100">
                Asesoría personalizada, transparente y con experiencia local para vender,
                alquilar, tasar, administrar e invertir en propiedades.
              </p>
            </section>

            {/* Servicios destacados. */}
            <section className="mt-6">
              <p className="inline-flex rounded-full border border-blue-200/30 bg-blue-400/15 px-3 py-1 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-50">
                Nuestros servicios
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2.5">
                {highlightedSolutions.map((solution) => (
                  <li
                    key={solution.title}
                    className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.06] p-2.5"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-content-center rounded-md bg-indigo-500 text-white shadow-glow">
                      <solution.icon className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[12px] font-semibold text-white">{solution.title}</p>
                      <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-100">
                        {flyerServiceCopy[solution.title] ?? solution.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contacto + QR, con el mismo lenguaje que la tarjeta. */}
            <section className="mt-auto pt-6">
              <div className="flex items-end justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-white">{card.name}</p>
                  <p className="mt-1 inline-flex rounded-full border border-blue-200/30 bg-blue-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-50">
                    {card.role}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-[12px] font-medium text-slate-100">
                    <li className="flex items-center gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/10 text-blueGlow">
                        <Phone size={11} aria-hidden="true" />
                      </span>
                      {contactInfo.phone}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="grid h-5 w-5 shrink-0 place-content-center rounded-full bg-white/10 text-blueGlow">
                        <Mail size={11} aria-hidden="true" />
                      </span>
                      <span className="truncate">{contactInfo.email}</span>
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
                    size={68}
                    bgColor="#ffffff"
                    fgColor="#1e1b4b"
                    level="M"
                    className="rounded-md p-1"
                  />
                  <span className="text-center text-[8px] uppercase tracking-[0.14em] text-slate-200">
                    WhatsApp
                  </span>
                </div>
              </div>

              <footer className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] uppercase tracking-[0.16em] text-slate-300">
                <span>Inmobiliaria de confianza</span>
                <span>{contactInfo.hours}</span>
              </footer>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
