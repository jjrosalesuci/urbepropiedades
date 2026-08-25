import {
  Award,
  Banknote,
  Building2,
  ClipboardList,
  Handshake,
  HeartHandshake,
  Home,
  KeyRound,
  Landmark,
  MapPin,
  Megaphone,
  Ruler,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react'
import type {
  AboutValue,
  BusinessCard,
  Faq,
  FeatureItem,
  NavItem,
  ProcessStep,
  SolutionItem,
  StatItem,
  TeamMember,
  Testimonial,
} from '@/types/content'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const featureItems: FeatureItem[] = [
  {
    title: 'Asesoría personalizada',
    description:
      'Escuchamos tus objetivos y armamos una estrategia inmobiliaria hecha a tu medida.',
    icon: HeartHandshake,
  },
  {
    title: 'Experiencia local',
    description:
      'Conocemos el mercado y los barrios donde operamos para orientarte con datos reales.',
    icon: MapPin,
  },
  {
    title: 'Tasación profesional',
    description:
      'Valoramos tu propiedad con criterios objetivos, comparables y visión de mercado.',
    icon: Ruler,
  },
  {
    title: 'Transparencia total',
    description:
      'Comisiones claras, contratos revisados y comunicación honesta en cada etapa.',
    icon: ShieldCheck,
  },
  {
    title: 'Acompañamiento integral',
    description:
      'Te guiamos desde la primera consulta hasta la escrituración y la postventa.',
    icon: Handshake,
  },
  {
    title: 'Trayectoria comprobada',
    description:
      'Operaciones cerradas con clientes que nos recomiendan y vuelven a elegirnos.',
    icon: Award,
  },
]

export const solutions: SolutionItem[] = [
  {
    title: 'Venta de propiedades',
    description:
      'Publicamos, difundimos y negociamos para vender en el mejor tiempo y valor posible.',
    icon: Home,
  },
  {
    title: 'Alquileres',
    description:
      'Encontramos inquilinos calificados y protegemos tu renta con contratos sólidos.',
    icon: KeyRound,
  },
  {
    title: 'Tasación',
    description:
      'Informe profesional del valor real de tu propiedad basado en el mercado actual.',
    icon: Ruler,
  },
  {
    title: 'Administración de alquileres',
    description:
      'Cobros, liquidaciones, mantenimiento y gestión integral para propietarios.',
    icon: ClipboardList,
  },
  {
    title: 'Asesoría legal',
    description:
      'Revisión de contratos, boletos y escrituras junto a profesionales de confianza.',
    icon: Scale,
  },
  {
    title: 'Inversión inmobiliaria',
    description:
      'Detectamos oportunidades de renta y reventa alineadas a tu perfil de inversor.',
    icon: Landmark,
  },
  {
    title: 'Marketing inmobiliario',
    description:
      'Fotografía, video, tours virtuales y difusión en portales y redes sociales.',
    icon: Megaphone,
  },
  {
    title: 'Créditos hipotecarios',
    description:
      'Te orientamos en la búsqueda y gestión del crédito que mejor se adapta a vos.',
    icon: Banknote,
  },
  {
    title: 'Emprendimientos',
    description:
      'Comercialización de proyectos y desarrollos desde el pozo hasta la entrega.',
    icon: Building2,
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Contacto inicial',
    description:
      'Conversamos para entender tu necesidad: vender, comprar, alquilar, tasar o invertir.',
  },
  {
    step: '02',
    title: 'Diagnóstico y tasación',
    description:
      'Analizamos la propiedad y el mercado para definir el valor y la estrategia adecuada.',
  },
  {
    step: '03',
    title: 'Estrategia y publicación',
    description:
      'Producimos el material, publicamos en los portales clave y activamos difusión.',
  },
  {
    step: '04',
    title: 'Visitas y negociación',
    description:
      'Coordinamos visitas con clientes calificados y negociamos para cuidar tus intereses.',
  },
  {
    step: '05',
    title: 'Cierre y postventa',
    description:
      'Acompañamos la firma, la escrituración y quedamos disponibles después de la operación.',
  },
]

export const aboutIntro =
  'Somos una inmobiliaria orientada al asesoramiento cercano y a resultados concretos. Combinamos experiencia en el mercado, herramientas modernas de comercialización y un trato humano para acompañarte en cada decisión inmobiliaria.'

export const aboutValues: AboutValue[] = [
  {
    title: 'Confianza',
    description:
      'Cada operación se sostiene en información clara, contratos revisados y compromisos cumplidos.',
    icon: ShieldCheck,
  },
  {
    title: 'Cercanía',
    description:
      'Escuchamos, respondemos y estamos disponibles cuando nos necesitás, no solo al cerrar.',
    icon: HeartHandshake,
  },
  {
    title: 'Excelencia',
    description:
      'Cuidamos cada detalle de la presentación, la difusión y la negociación de tu propiedad.',
    icon: Sparkles,
  },
  {
    title: 'Resultado',
    description:
      'Trabajamos con foco en concretar operaciones sostenibles para todas las partes.',
    icon: Target,
  },
]

export const teamMembers: TeamMember[] = [
  { name: 'Janet Dominguez', role: 'Agente inmobiliario', initials: 'JD' },
]

export const faqs: Faq[] = [
  {
    question: '¿Cuánto cobran de comisión?',
    answer:
      'La comisión se acuerda antes de comenzar y se detalla por escrito. Depende del tipo de operación (venta o alquiler) y del servicio contratado. No hay costos ocultos.',
  },
  {
    question: '¿La tasación tiene costo?',
    answer:
      'La primera tasación orientativa es sin cargo y sin compromiso. Si necesitás un informe formal para trámites o sucesiones, te pasamos un presupuesto específico.',
  },
  {
    question: '¿En qué zonas operan?',
    answer:
      'Trabajamos principalmente en la ciudad y alrededores. Contactanos con la dirección de la propiedad y te confirmamos si podemos asistirte.',
  },
  {
    question: '¿Cuánto tarda en venderse una propiedad?',
    answer:
      'Depende del valor de publicación, el estado del inmueble y la demanda del segmento. En la tasación te damos una estimación realista según el mercado actual.',
  },
  {
    question: '¿Qué documentación necesito para poner una propiedad en venta?',
    answer:
      'Título de propiedad, planos, impuestos al día y datos del titular. Si falta algo, te orientamos en cómo gestionarlo antes de publicar.',
  },
  {
    question: '¿Cómo funciona la administración de alquileres?',
    answer:
      'Nos ocupamos de la búsqueda del inquilino, contrato, cobro mensual, liquidación al propietario y coordinación de mantenimiento. Vos recibís tu renta sin preocuparte por la gestión.',
  },
  {
    question: '¿Ayudan con créditos hipotecarios?',
    answer:
      'Sí. Te orientamos sobre las líneas disponibles, requisitos y bancos, para que llegues a la operación con el financiamiento más conveniente.',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'María Fernández',
    role: 'Propietaria',
    company: 'Vendió su departamento',
    quote:
      'Me acompañaron en todo el proceso, con información clara y una comunicación excelente. La venta se cerró en menos tiempo del que esperaba.',
  },
  {
    name: 'Javier Ortiz',
    role: 'Inquilino',
    company: 'Alquiló su primera casa',
    quote:
      'Fueron muy transparentes con los requisitos y los tiempos. Nos ayudaron a resolver la documentación sin vueltas.',
  },
  {
    name: 'Lucía Torres',
    role: 'Inversora',
    company: 'Compró para renta',
    quote:
      'Me mostraron opciones acordes a mi presupuesto y objetivos. Hoy tengo la propiedad alquilada y administrada por ellos.',
  },
]

export const stats: StatItem[] = [
  { value: 500, label: 'Operaciones concretadas', suffix: '+' },
  { value: 98, label: 'Clientes satisfechos', suffix: '%' },
  { value: 15, label: 'Años de trayectoria', suffix: '+' },
]

export const contactInfo = {
  email: 'srajanet.dominguez@gmail.com',
  phone: '097 001 151',
  whatsapp: '097 001 151',
  address: 'Dirección de la oficina, Ciudad',
  hours: 'Lunes a viernes de 9 a 18 h',
  agentName: 'Janet Dominguez',
  agentRole: 'Agente inmobiliario',
}

export const socialLinks = {
  instagram: 'https://www.instagram.com/urbepropiedades/',
  instagramHandle: '@urbepropiedades',
  facebook: 'https://www.facebook.com/people/Urbe-Propiedades/61592181718042/',
  whatsapp: 'https://wa.me/097001151',
}

export const businessCards: BusinessCard[] = [
  {
    name: contactInfo.agentName,
    role: contactInfo.agentRole,
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
    website: 'urbepropiedades.com',
  },
]
