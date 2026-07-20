import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary'
    asLink?: boolean
    href?: string
  }
>

export function Button({
  children,
  variant = 'primary',
  className = '',
  asLink = false,
  href = '#',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-glow hover:scale-[1.02] hover:brightness-110'
      : 'border border-white/15 bg-white/5 text-slate-100 backdrop-blur hover:bg-white/10'

  if (asLink) {
    return (
      <a className={`${base} ${styles} ${className}`.trim()} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className={`${base} ${styles} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
