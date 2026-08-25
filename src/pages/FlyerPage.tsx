import { Container } from '@/components/ui/Container'
import { contactInfo, solutions } from '@/data/siteContent'

const highlightedSolutions = solutions.slice(0, 6)

export function FlyerPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 print:min-h-0">
      <div className="flex justify-center gap-3 border-b border-slate-200 bg-slate-50 py-4 print:hidden">
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Imprimir flyer
        </button>
      </div>

      <Container className="max-w-3xl py-10 print:max-w-none print:py-0">
        <header className="flex items-center justify-between border-b-2 border-slate-900 pb-6">
          <div>
            <p className="font-display text-2xl font-semibold tracking-tight">Urbe Propiedades</p>
            <p className="text-sm text-slate-600">Inmobiliaria de confianza</p>
          </div>
          <p className="text-right text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Venta · Alquiler · Tasación
          </p>
        </header>

        <section className="mt-8">
          <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Te acompañamos en cada paso de tu operación inmobiliaria
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-700">
            Asesoría personalizada, transparente y con experiencia local para vender, alquilar,
            tasar, administrar e invertir en propiedades.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-slate-800">
            Nuestros servicios
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {highlightedSolutions.map((solution) => (
              <li key={solution.title} className="flex items-start gap-3">
                <solution.icon className="mt-0.5 h-5 w-5 shrink-0 text-slate-700" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-900">{solution.title}</p>
                  <p className="text-sm text-slate-600">{solution.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border-2 border-slate-900 p-6">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.12em] text-slate-800">
            Contacto
          </h2>
          <dl className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-slate-900">Agente</dt>
              <dd className="text-slate-700">
                {contactInfo.agentName} · {contactInfo.agentRole}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Teléfono / WhatsApp</dt>
              <dd className="text-slate-700">{contactInfo.phone}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Email</dt>
              <dd className="text-slate-700">{contactInfo.email}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Dirección</dt>
              <dd className="text-slate-700">{contactInfo.address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Horario</dt>
              <dd className="text-slate-700">{contactInfo.hours}</dd>
            </div>
          </dl>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
          urbepropiedades.com
        </footer>
      </Container>
    </div>
  )
}
