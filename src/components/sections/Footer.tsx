import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { contactInfo, socialLinks } from '@/data/siteContent'

const currentYear = new Date().getFullYear()

export function Footer() {
  const socialItems = [
    { label: 'Instagram', href: socialLinks.instagram, icon: Instagram },
    { label: 'Facebook', href: socialLinks.facebook, icon: Facebook },
    { label: 'WhatsApp', href: socialLinks.whatsapp, icon: MessageCircle },
  ]

  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-display text-lg font-semibold text-white">Urbe Propiedades</p>
            <p className="mt-2 text-sm text-slate-300">
              Inmobiliaria dedicada a la venta, alquiler y administración de propiedades.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Inmobiliaria</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#proceso">Proceso</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Servicios</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#soluciones">Venta y alquiler</a></li>
              <li><a href="#soluciones">Tasación</a></li>
              <li><a href="#soluciones">Administración</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Ayuda</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#faq">Preguntas frecuentes</a></li>
              <li><a href="#contacto">Contacto</a></li>
              <li><a href="/flyer">Flyer para imprimir</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-100">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phone}</li>
              <li>WhatsApp: {contactInfo.whatsapp}</li>
              <li>{contactInfo.address}</li>
            </ul>
            <div className="mt-4 flex gap-2">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-9 w-9 place-content-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright © {currentYear} Urbe Propiedades. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  )
}
