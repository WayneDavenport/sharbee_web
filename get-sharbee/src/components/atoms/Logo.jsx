export function Logo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-white ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-cyan-500 text-sm font-bold text-zinc-950"
      >
        S
      </span>
      Sharbee
    </span>
  )
}
