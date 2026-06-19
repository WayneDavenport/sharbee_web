import { Button } from '@/components/atoms/Button'
import { MicrosoftStoreBadge } from '@/components/molecules/MicrosoftStoreBadge'
import { StandaloneButton } from '@/components/molecules/StandaloneButton'
import { BypassHelp } from '@/components/molecules/BypassHelp'
import sharbeeIcon from '@/assets/sharbee_icon.png'

function CartIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/*         <img
          src={sharbeeIcon}
          alt="Sharbee"
          width="96"
          height="96"
          className="mx-auto mb-6 h-20 w-20 drop-shadow-[0_0_25px_rgba(56,189,248,0.35)] sm:h-24 sm:w-24"
        /> */}
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sky-400">
          Local-first file sharing
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Blazing fast file transfers across your local network.
          <span className="mt-2 block text-zinc-400">
            No cloud required.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Sharbee moves files at LAN speed with zero configuration. Share with
          anyone on your WiFi — desktop or mobile — without routing through a
          third-party cloud.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <MicrosoftStoreBadge className="w-full sm:w-64" />
          <div className="relative w-full sm:w-64">
            <StandaloneButton
              variant="secondary"
              size="lg"
              className="h-[52px] w-full"
            >
              <CartIcon />
              Get Standalone Build
            </StandaloneButton>
            <div className="absolute -right-2 -top-3">
              <BypassHelp />
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          <a href="#download" className="text-sky-400 hover:text-sky-300">
            Compare editions
          </a>{' '}
          — Microsoft Store vs. direct standalone build.
        </p>

        <div className="mt-5">
          <Button variant="disabled" size="md" disabled aria-disabled="true">
            <AppleIcon />
            macOS App — Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}
