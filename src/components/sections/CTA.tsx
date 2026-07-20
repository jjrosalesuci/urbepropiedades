import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'

export function CTA() {
  return (
    <Section id="cta" className="pt-10">
      <div className="rounded-3xl border border-blue-200/20 bg-gradient-to-r from-blue-600/70 via-indigo-600/70 to-cyan-500/60 p-8 text-center shadow-glow sm:p-12">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          ¿Querés saber cuánto vale tu propiedad?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-100/90">
          Agendá una tasación sin cargo y sin compromiso. Te asesoramos con datos reales del
          mercado para que tomes la mejor decisión.
        </p>
        <Button asLink href="#contacto" className="mt-8 gap-2 bg-white text-slate-900 hover:brightness-100">
          Agenda una tasación <ArrowRight size={16} />
        </Button>
      </div>
    </Section>
  )
}
