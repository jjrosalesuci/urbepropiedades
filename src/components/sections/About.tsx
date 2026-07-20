import { motion } from 'framer-motion'
import { aboutIntro, aboutValues, teamMembers } from '@/data/siteContent'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

export function About() {
  return (
    <Section
      id="nosotros"
      eyebrow="Nosotros"
      title="Una inmobiliaria cercana, moderna y confiable"
      subtitle={aboutIntro}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {aboutValues.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <Card className="h-full">
              <value.icon size={28} className="text-blue-200" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-medium text-white">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{value.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-2xl font-medium text-white">Nuestro equipo</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-300">
          Personas reales, disponibles y capacitadas para acompañarte en cada operación.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-soft"
            >
              <div
                className="grid h-12 w-12 shrink-0 place-content-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 font-display text-sm font-semibold text-white shadow-glow"
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{member.name}</p>
                <p className="text-xs text-slate-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
