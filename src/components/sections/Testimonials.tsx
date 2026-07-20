import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/data/siteContent'
import { Section } from '@/components/ui/Section'

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((value) => (value + 1) % testimonials.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  const goTo = (direction: 'prev' | 'next') => {
    setActiveIndex((value) => {
      if (direction === 'prev') {
        return value === 0 ? testimonials.length - 1 : value - 1
      }
      return (value + 1) % testimonials.length
    })
  }

  const item = testimonials[activeIndex]

  return (
    <Section
      id="testimonios"
      eyebrow="Testimonios"
      title="Lo que dicen nuestros clientes"
      subtitle="Cada operación es una historia. Estas son algunas de las personas que confiaron en nosotros."
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center shadow-soft backdrop-blur-sm sm:p-12">
        <Quote className="mx-auto text-blue-200" size={28} />
        <div className="mt-6 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <p className="font-display text-2xl leading-relaxed text-white">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">{item.name}</p>
                <p>
                  {item.role} · {item.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Testimonio anterior"
            onClick={() => goTo('prev')}
            className="grid h-10 w-10 place-content-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Siguiente testimonio"
            onClick={() => goTo('next')}
            className="grid h-10 w-10 place-content-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  )
}
