import sharbeeIcon from '@/assets/sharbee_icon.png'

export function Logo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-semibold tracking-tight text-white ${className}`}
    >
      <img
        src={sharbeeIcon}
        alt=""
        aria-hidden="true"
        className="h-12 w-12 rounded-lg"
        width="48"
        height="48"
      />
      Sharbee
    </span>
  )
}
