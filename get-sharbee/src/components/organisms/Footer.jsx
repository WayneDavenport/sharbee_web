import { Logo } from '@/components/atoms/Logo'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo />
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} Sharbee. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
