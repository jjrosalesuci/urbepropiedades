import type { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  className?: string
}>

export function Card({ className = '', children }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300/30 hover:bg-white/[0.06] ${className}`.trim()}
    >
      {children}
    </article>
  )
}
