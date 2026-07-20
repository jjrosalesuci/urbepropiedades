import { motion } from 'framer-motion'
import { processSteps } from '@/data/siteContent'
import { Section } from '@/components/ui/Section'

export function Process() {
  return (
    <Section
      id="proceso"
      eyebrow="Nuestro proceso"
      title="Un camino claro para tu operación inmobiliaria"
      subtitle="Cinco etapas simples para llegar al cierre con confianza y sin sorpresas."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-300/60 to-indigo-400/20 md:left-1/2 md:-translate-x-1/2" />

        <ol className="space-y-5 md:space-y-8">
          {processSteps.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0"
              >
                <span className="absolute left-[0.57rem] top-8 h-4 w-4 rounded-full border border-indigo-200/70 bg-slate-900 md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-soft ${
                    isEven ? 'md:col-start-1 md:text-right' : 'md:col-start-2'
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-blue-200">Paso {item.step}</p>
                  <h3 className="mt-2 font-display text-xl font-medium text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </Section>
  )
}
