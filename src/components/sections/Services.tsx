import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { featureItems, stats } from '@/data/siteContent'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1100
    const start = performance.now()
    let rafId = 0

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function Services() {
  return (
    <Section
      id="servicios"
      eyebrow="Por qué elegirnos"
      title="Asesoramiento inmobiliario con criterio y transparencia"
      subtitle="Combinamos conocimiento del mercado, tecnología y trato humano para acompañar cada operación."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featureItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
          >
            <Card>
              <item.icon size={24} className="text-blue-200" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.03] to-white/[0.06] p-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
              <CountUp target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
