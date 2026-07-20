import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Solutions } from '@/components/sections/Solutions'
import { Process } from '@/components/sections/Process'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { CTA } from '@/components/sections/CTA'

const About = lazy(() =>
  import('@/components/sections/About').then((module) => ({ default: module.About })),
)
const Faqs = lazy(() =>
  import('@/components/sections/Faqs').then((module) => ({ default: module.Faqs })),
)
const Testimonials = lazy(() =>
  import('@/components/sections/Testimonials').then((module) => ({ default: module.Testimonials })),
)

function SectionFallback() {
  return <div className="h-20 animate-pulse rounded-2xl bg-white/5" aria-hidden="true" />
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-radial-premium text-slate-100">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2"
      >
        Saltar al contenido principal
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(124,140,255,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(19,36,67,0.4),transparent_45%)]" />

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Process />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Faqs />
          <Testimonials />
        </Suspense>
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
