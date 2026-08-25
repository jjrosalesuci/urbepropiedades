import { Building2, Mail, Phone, Printer } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { Container } from '@/components/ui/Container'
import { contactInfo, socialLinks, solutions } from '@/data/siteContent'

const highlightedSolutions = solutions.slice(0, 6)

export function FlyerPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 print:min-h-0">
      <div className="flex justify-center gap-3 border-b border-slate-200 bg-slate-50 py-4 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
        >
          <Printer size={16} aria-hidden="true" />
          Imprimir flyer
        </button>
      </div>

      <Container className="max-w-3xl py-10 print:max-w-none print:py-0">
        <header className="relative overflow-hidden rounded-2xl bg-indigo-950 px-6 py-8 text-white print:rounded-none print:px-0">
          <div className="relative flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-content-center rounded-xl bg-indigo-500 text-white shadow-glow">
                <Building2 size={22} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold tracking-tight">Urbe Propiedades</p>
                <p className="text-sm text-slate-300">Inmobiliaria de confianza</p>
              </div>
            </div>
            <p className="hidden text-right text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 sm:block">
              Venta · Alquiler · Tasación
            </p>
          </div>
        </header>

        <section className="mt-8">
          <h1 className="font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
            Te acompañamos en cada paso de tu operación inmobiliaria
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            Asesoría personalizada, transparente y con experiencia local para vender, alquilar,
            tasar, administrar e invertir en propiedades.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Nuestros servicios
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlightedSolutions.map((solution) => (
              <li
                key={solution.title}
                className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 print:border-slate-300 print:bg-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-content-center rounded-lg bg-indigo-500 text-white">
                  <solution.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-slate-900">{solution.title}</p>
                  <p className="text-sm text-slate-600">{solution.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 print:border-2 print:border-slate-900 print:bg-white">
          <h2 className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Contacto
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-slate-900">Agente</dt>
              <dd className="text-slate-700">
                {contactInfo.agentName} · {contactInfo.agentRole}
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 font-semibold text-slate-900">
                <Phone size={14} className="text-blue-600" aria-hidden="true" />
                Teléfono / WhatsApp
              </dt>
              <dd className="text-slate-700">{contactInfo.phone}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 font-semibold text-slate-900">
                <Mail size={14} className="text-blue-600" aria-hidden="true" />
                Email
              </dt>
              <dd className="text-slate-700">{contactInfo.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Horario</dt>
              <dd className="text-slate-700">{contactInfo.hours}</dd>
            </div>
          </dl>
          <div className="mt-5 flex items-center gap-3 border-t border-indigo-100 pt-5">
            <QRCodeSVG
              value={socialLinks.whatsapp}
              size={72}
              bgColor="#ffffff"
              fgColor="#1e1b4b"
              level="M"
              className="rounded-md border border-indigo-100 p-1"
            />
            <p className="text-sm text-slate-700">
              Escaneá el código para escribirle por WhatsApp a {contactInfo.agentName}.
            </p>
          </div>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
          urbepropiedades.com
        </footer>
      </Container>
    </div>
  )
}
