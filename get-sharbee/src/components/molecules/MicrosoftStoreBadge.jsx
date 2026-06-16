import { MICROSOFT_STORE_URL } from '@/config/links'

export function MicrosoftStoreBadge({ className = '' }) {
  return (
    <a
      href={MICROSOFT_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Sharbee from Microsoft Store"
      className={`inline-flex h-[52px] items-center justify-center gap-3 rounded-md border border-zinc-700 bg-black px-4 transition-colors hover:border-zinc-500 hover:bg-zinc-950 ${className}`}
    >
      <MicrosoftLogo />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] uppercase tracking-wide text-zinc-400">
          Get it from
        </span>
        <span className="text-base font-semibold text-white">Microsoft</span>
      </span>
    </a>
  )
}

function MicrosoftLogo() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 23 23"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="1" y="1" width="10" height="10" fill="#f25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7fba00" />
      <rect x="1" y="12" width="10" height="10" fill="#00a4ef" />
      <rect x="12" y="12" width="10" height="10" fill="#ffb900" />
    </svg>
  )
}
