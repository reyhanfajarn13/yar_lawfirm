import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  variant = 'outline-dark',
  href,
  onClick,
  className = '',
}) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors cursor-pointer'

  const variants = {
    'outline-dark': 'border border-black text-black hover:bg-black hover:text-white',
    'outline-white': 'border border-white text-white hover:bg-white hover:text-black',
    'solid-dark': 'bg-black text-white border border-black hover:bg-white hover:text-black',
    'solid-white': 'bg-white text-black hover:bg-transparent hover:text-white border border-white',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight className="w-4 h-4" />
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      <ArrowRight className="w-4 h-4" />
    </button>
  )
}
