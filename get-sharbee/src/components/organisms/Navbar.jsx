import { Button } from '@/components/atoms/Button'
import { Logo } from '@/components/atoms/Logo'
import { useWindowsDownload } from '@/context/WindowsDownloadContext'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Support', href: '#support' },
]

export function Navbar() {
  const { url, loading } = useWindowsDownload()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#09090f]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          as="a"
          href={url ?? '#hero'}
          size="sm"
          disabled={loading}
          aria-disabled={loading}
          className="hidden sm:inline-flex"
        >
          {loading ? 'Loading…' : 'Download'}
        </Button>

        <Button
          as="a"
          href={url ?? '#hero'}
          size="sm"
          disabled={loading}
          aria-disabled={loading}
          className="sm:hidden"
        >
          {loading ? '…' : 'Get'}
        </Button>
      </nav>
    </header>
  )
}
