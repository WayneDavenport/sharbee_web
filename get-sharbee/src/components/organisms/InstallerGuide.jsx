const steps = [
  {
    number: '1',
    title: 'Run the Executable',
    tag: 'Instant Extraction',
    description:
      "Sharbee uses the Squirrel for Windows installation framework. When you launch the .exe, it doesn't open a giant, bloated setup wizard — it instantly extracts the application files directly into your local user directory and drops a shortcut onto your Desktop in under three seconds.",
  },
  {
    number: '2',
    title: 'Bypass the Windows SmartScreen Flag',
    tag: 'Standard Security Step',
    description:
      'Because this standalone executable is compiled freshly from our development environment and distributed outside the centralized Microsoft Store ecosystem, Windows may temporarily display a blue "Windows protected your PC" warning filter. This is standard behavior for newly launched independent software.',
  },
  {
    number: '3',
    title: "Click 'More Info' to Run",
    tag: 'Authorize Execution',
    description:
      'To proceed with the local network setup, simply click the small "More info" link inside the blue Windows popup window, then select the "Run anyway" button that appears. The installer will instantly complete, launch the app, and prompt you to paste your premium license key.',
  },
]

export function InstallerGuide() {
  return (
    <section
      id="installer"
      className="scroll-mt-20 border-t border-zinc-800/80 bg-[#09090f]/80 px-4 py-20 backdrop-blur-sm sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-sky-400">
            About the Standalone Installer
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
            Three seconds from download to running
          </h2>
          <p className="mt-3 text-zinc-400">
            The standalone Squirrel build skips the bloated wizard. Here's
            exactly what to expect.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-lg font-bold text-sky-400"
              >
                {step.number}
              </span>
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500">
                {step.tag}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/[0.06] p-5">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p className="text-sm leading-relaxed text-amber-100/90">
            <strong className="font-semibold text-amber-200">
              Expect a SmartScreen prompt.
            </strong>{' '}
            The blue "Windows protected your PC" screen is normal for
            independent software. Click <strong>More info</strong> →{' '}
            <strong>Run anyway</strong> to continue. Sharbee is safe — it simply
            isn't routed through the Microsoft Store signing pipeline.
          </p>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-sky-400/30 bg-sky-400/[0.06] p-5">
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p className="text-sm leading-relaxed text-sky-100/90">
            <strong className="font-semibold text-sky-200">
              Absolute Privacy Guarantee.
            </strong>{' '}
            Whether you run the Microsoft Store edition or the standalone
            Squirrel build, Sharbee's core architecture remains exactly the
            same: all data streaming and chat routing occur strictly
            peer-to-peer over your private local Wi-Fi. No cloud middle-men, no
            external database logging, and absolute structural data privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
