import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { Container } from './Container'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow?: string
  title?: string
  subtitle?: string
  className?: string
}>

export function Section({ id, eyebrow, title, subtitle, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${className}`.trim()}>
      <Container>
        {(eyebrow || title || subtitle) && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            {eyebrow ? (
              <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? <p className="mt-4 text-base text-slate-300 sm:text-lg">{subtitle}</p> : null}
          </motion.header>
        )}
        {children}
      </Container>
    </section>
  )
}
