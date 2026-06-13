const variants = {
  primary:
    'bg-sky-400 text-zinc-950 hover:bg-sky-300 shadow-lg shadow-sky-400/20',
  secondary:
    'border border-zinc-700 bg-zinc-900/80 text-zinc-100 hover:border-zinc-500 hover:bg-zinc-800',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
  disabled: 'border border-zinc-800 bg-zinc-900/40 text-zinc-500 cursor-not-allowed opacity-60',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  as: Component = 'button',
  ...props
}) {
  const resolvedVariant = disabled ? 'disabled' : variant

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${sizes[size]} ${variants[resolvedVariant]} ${className}`}
      disabled={disabled}
      {...props}
    />
  )
}
