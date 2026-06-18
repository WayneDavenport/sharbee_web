import { MICROSOFT_STORE_URL } from '@/config/links'

export function MicrosoftStoreBadge({ className = '', disabled = false }) {
  const Component = disabled ? 'div' : 'a'
  const props = disabled
    ? {
        'aria-disabled': 'true',
      }
    : {
        href: MICROSOFT_STORE_URL,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': 'Get Sharbee from Microsoft Store',
      }

  return (
    <Component
      className={`inline-flex h-[52px] items-center justify-center gap-3 rounded-md border px-4 transition-colors ${
        disabled
          ? 'cursor-not-allowed border-zinc-800 bg-zinc-900/40 opacity-60'
          : 'border-zinc-700 bg-black hover:border-zinc-500 hover:bg-zinc-950'
      } ${className}`}
      {...props}
    >
      <MicrosoftLogo disabled={disabled} />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[10px] uppercase tracking-wide ${
            disabled ? 'text-zinc-500' : 'text-zinc-400'
          }`}
        >
          {disabled ? 'Microsoft Store' : 'Get it from'}
        </span>
        <span
          className={`text-base font-semibold ${
            disabled ? 'text-zinc-500' : 'text-white'
          }`}
        >
          {disabled ? 'Coming Soon!' : 'Microsoft'}
        </span>
      </span>
    </Component>
  )
}

function MicrosoftLogo({ disabled }) {
  const colors = disabled
    ? {
        red: '#52525b',
        green: '#52525b',
        blue: '#52525b',
        yellow: '#52525b',
      }
    : {
        red: '#f25022',
        green: '#7fba00',
        blue: '#00a4ef',
        yellow: '#ffb900',
      }

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 23 23"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="1" y="1" width="10" height="10" fill={colors.red} />
      <rect x="12" y="1" width="10" height="10" fill={colors.green} />
      <rect x="1" y="12" width="10" height="10" fill={colors.blue} />
      <rect x="12" y="12" width="10" height="10" fill={colors.yellow} />
    </svg>
  )
}
