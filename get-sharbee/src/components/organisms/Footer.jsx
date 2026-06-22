import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/atoms/Logo'
import { PrivacyDialog } from '@/components/organisms/PrivacyDialog'

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false)

  return (
    <>
      <footer className="border-t border-zinc-800/80 bg-[#09090f]/90 px-4 py-10 backdrop-blur-sm sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Logo />
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-sm text-zinc-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Sharbee. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyDialog open={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  )
}
