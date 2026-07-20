import { useEffect, useState } from 'react'
import { Menu, X, Building2 } from 'lucide-react'
import { navItems } from '@/data/siteContent'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-white/10 bg-slate-950/80 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Navegación principal">
          <a href="#inicio" className="group inline-flex items-center gap-2" aria-label="Ir al inicio">
            <span className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-glow">
              <Building2 size={18} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              Urbe Propiedades
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-slate-200 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asLink href="#contacto">
              Contactar asesor
            </Button>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-content-center rounded-xl border border-white/15 text-slate-100 lg:hidden"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <Container className="py-4">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button asLink href="#contacto" className="mt-4 w-full" onClick={() => setIsOpen(false)}>
              Contactar asesor
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
