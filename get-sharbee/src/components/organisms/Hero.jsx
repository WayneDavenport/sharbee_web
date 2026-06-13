import { Button } from '@/components/atoms/Button'
import { MicrosoftStoreBadge } from '@/components/molecules/MicrosoftStoreBadge'
import { useWindowsDownload } from '@/context/WindowsDownloadContext'

function DownloadIcon() {
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
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
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
  const { url, loading, error } = useWindowsDownload()

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
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

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <MicrosoftStoreBadge />
          <Button
            as="a"
            href={url ?? undefined}
            variant="secondary"
            size="lg"
            disabled={loading || !url}
            aria-disabled={loading || !url}
          >
            <DownloadIcon />
            {loading ? 'Resolving installer…' : 'Windows Installer (.exe)'}
          </Button>
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-400" role="alert">
            Could not resolve the latest installer. Try again shortly.
          </p>
        )}

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
