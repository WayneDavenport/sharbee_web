import { MicrosoftStoreBadge } from '@/components/molecules/MicrosoftStoreBadge'
import { StandaloneButton } from '@/components/molecules/StandaloneButton'
import { BypassHelp } from '@/components/molecules/BypassHelp'

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

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

function FeatureList({ items }) {
  return (
    <ul className="mt-6 space-y-3 text-sm text-zinc-300">
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <CheckIcon />
          <span>
            <strong className="font-medium text-white">{item.title}:</strong>{' '}
            {item.description}
          </span>
        </li>
      ))}
    </ul>
  )
}

const storeFeatures = [
  {
    title: 'Managed by Windows',
    description:
      'Installs safely in an isolated environment with instant trust validation.',
  },
  {
    title: 'Auto-Updates',
    description: 'Always stay on the latest build without manual downloads.',
  },
  {
    title: 'One-Click Setup',
    description: 'No installer wizards or security prompts.',
  },
]

const standaloneFeatures = [
  {
    title: '100% Local Control',
    description: 'A completely standalone, portable-friendly utility wrapper.',
  },
  {
    title: 'Direct Dev Support',
    description: 'Bypasses giant app store fee structures to fuel future features.',
  },
  {
    title: 'Instant Activation',
    description:
      'Includes a lifetime premium license key delivered straight to your inbox.',
  },
]

export function PurchaseOptions() {
  return (
    <section
      id="download"
      className="border-t border-zinc-800/80 bg-[#09090f]/80 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose Your Workspace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Two ways to get Sharbee — both run the exact same local-first
            engine.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Microsoft Store Edition
              </h3>
              <p className="mt-1 text-sm font-medium text-sky-400">
                The Seamless Experience
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Get Sharbee with automated background updates and zero
                configuration. Ideal for users who prefer managed installations
                directly integrated with Windows security frameworks.
              </p>
              <FeatureList items={storeFeatures} />
            </div>
            <div className="mt-8 flex flex-1 items-end">
              <MicrosoftStoreBadge className="w-full" />
            </div>
          </article>

          <article className="relative flex flex-col rounded-2xl border border-sky-400/40 bg-gradient-to-br from-sky-400/[0.07] to-zinc-900/50 p-8">
            <span className="absolute right-6 top-6 rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
              Support indie dev
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Direct Standalone Build (Squirrel)
              </h3>
              <p className="mt-1 text-sm font-medium text-sky-400">
                The Indie Developer Edition
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Purchase and download the raw Windows executable directly from
                our secure vault via Lemon Squeezy. Opting for the standalone
                build keeps Sharbee lightweight, localized, and ensures 100% of
                your support goes directly toward funding independent
                development.
              </p>
              <FeatureList items={standaloneFeatures} />
            </div>
            <div className="mt-8 flex flex-1 items-end">
              <div className="relative w-full">
                <StandaloneButton size="lg" className="h-[52px] w-full">
                  <CartIcon />
                  Get Standalone Build ($)
                </StandaloneButton>
                <div className="absolute -right-2 -top-3">
                  <BypassHelp />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
