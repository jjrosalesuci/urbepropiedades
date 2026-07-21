import { Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
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

        <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-soft" action="#" method="post">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-200">
              Nombre
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-300"
                name="name"
                required
              />
            </label>
            <label className="text-sm text-slate-200">
              Teléfono
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-300"
                name="phone"
                type="tel"
                required
              />
            </label>
          </div>
          <label className="mt-4 block text-sm text-slate-200">
            Correo
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-300"
              name="email"
              required
            />
          </label>
          <label className="mt-4 block text-sm text-slate-200">
            Tipo de consulta
            <select
              className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-300"
              name="topic"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Elegí una opción
              </option>
              <option value="vender">Quiero vender</option>
              <option value="comprar">Quiero comprar</option>
              <option value="alquilar">Quiero alquilar</option>
              <option value="tasar">Quiero tasar</option>
              <option value="administracion">Administración de alquileres</option>
              <option value="otros">Otros</option>
            </select>
          </label>
          <label className="mt-4 block text-sm text-slate-200">
            Contanos brevemente
            <textarea
              className="mt-2 min-h-32 w-full rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-indigo-300"
              name="message"
              required
            />
          </label>

          <Button type="submit" className="mt-6 gap-2">
            Enviar consulta <Send size={16} />
          </Button>
        </form>
      </div>
    </Section>
  )
}
