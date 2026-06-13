export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-400">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    </article>
  )
}
