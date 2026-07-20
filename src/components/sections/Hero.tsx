import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
import heroImg from '@/assets/hero.svg'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const transitionEase = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-16 sm:pt-20">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: transitionEase }}
              className="mb-6 inline-flex rounded-full border border-blue-200/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100"
            >
              Inmobiliaria de confianza
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: transitionEase }}
              className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Tu próxima operación inmobiliaria, en las mejores manos.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: transitionEase }}
              className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg lg:mx-0"
            >
              Venta, alquiler, tasación y administración de propiedades con asesoría personalizada,
              información clara y acompañamiento en cada paso.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: transitionEase }}
              className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button asLink href="#contacto" className="gap-2">
                <CalendarClock size={16} /> Agenda una tasación
              </Button>
              <Button asLink href="#soluciones" variant="secondary" className="gap-2">
                Ver nuestros servicios <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-blue-400/10 to-cyan-300/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl p-6">
              <img
                src={heroImg}
                alt="Composición abstracta de asesoramiento inmobiliario premium"
                loading="eager"
                decoding="async"
                className="mx-auto w-full max-w-md animate-float"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
