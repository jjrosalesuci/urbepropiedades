import { Mail, MapPin, MessageCircle, Phone, User } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { contactInfo } from '@/data/siteContent'

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de tu próxima operación"
      subtitle="Contanos qué estás buscando y te respondemos con una propuesta clara y sin compromiso."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-soft">
          <h3 className="font-display text-2xl font-medium text-white">Información de contacto</h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-200" size={18} />
              {contactInfo.email}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-200" size={18} />
              {contactInfo.phone}
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="text-blue-200" size={18} />
              WhatsApp: {contactInfo.whatsapp}
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-200" size={18} />
              {contactInfo.address}
            </li>
            <li className="flex items-center gap-3">
              <User className="text-blue-200" size={18} />
              {contactInfo.agentRole}: {contactInfo.agentName}
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-300">
            Atención: {contactInfo.hours}. Te respondemos en menos de 24 h hábiles.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 shadow-soft">
          <iframe
            src="https://dealgine.aseresoft.com/embed/forms/urbe-p-contactform"
            width="100%"
            frameBorder="0"
            title="Formulario de contacto Urbe Propiedades"
            style={{ border: 0 }}
            className="h-[520px] w-full rounded-xl bg-white md:h-[700px]"
          />
        </div>
      </div>
    </Section>
  )
}
