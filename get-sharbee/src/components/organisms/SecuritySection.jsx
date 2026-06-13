export function SecuritySection() {
  const points = [
    'End-to-end on your LAN — traffic stays on your WiFi or wired network.',
    'Ephemeral sessions — history clears when the host closes. Nothing persisted to disk by default.',
    'No vendor lock-in — download the standalone installer or grab it from the Microsoft Store.',
  ]

  return (
    <section
      id="security"
      className="border-t border-zinc-800/80 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-8 sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Your files, your network
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Sharbee is local-first by design. We never proxy your transfers
            through external servers.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-zinc-300">
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-400/15 text-sky-400"
                >
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
