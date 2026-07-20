import { motion } from 'framer-motion'
import { solutions } from '@/data/siteContent'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function Solutions() {
  return (
    <Section
      id="soluciones"
      eyebrow="Nuestros servicios"
      title="Soluciones inmobiliarias integrales"
      subtitle="Desde vender o alquilar tu propiedad hasta administrarla, tasarla o invertir: cubrimos todo el ciclo."
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {solutions.map((solution, index) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <Card className="h-full">
              <solution.icon size={32} className="text-blue-200" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-medium text-white">{solution.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{solution.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
