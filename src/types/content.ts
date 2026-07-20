import type { LucideIcon } from 'lucide-react'

export type NavItem = {
  label: string
  href: string
}

export type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type SolutionItem = {
  title: string
  description: string
  icon: LucideIcon
}

export type ProcessStep = {
  step: string
  title: string
  description: string
}

export type AboutValue = {
  title: string
  description: string
  icon: LucideIcon
}

export type TeamMember = {
  name: string
  role: string
  initials: string
}

export type Faq = {
  question: string
  answer: string
}

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

export type StatItem = {
  value: number
  label: string
  suffix?: string
}
