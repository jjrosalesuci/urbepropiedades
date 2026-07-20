import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/data/siteContent'
import { Section } from '@/components/ui/Section'

export function Faqs() {
  return (
    <Section
      id="faq"
      eyebrow="Preguntas frecuentes"
      title="Resolvemos tus dudas antes de operar"
      subtitle="Estas son las consultas que más recibimos sobre venta, alquiler, tasación y administración."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, index) => (
          <motion.details
            key={item.question}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-soft open:border-blue-300/40 open:bg-white/[0.06]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-base font-medium text-white marker:content-none">
              <span>{item.question}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-blue-200 transition-transform duration-300 group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </Section>
  )
}
