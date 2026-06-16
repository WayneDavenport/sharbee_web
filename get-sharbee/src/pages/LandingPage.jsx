import { Navbar } from '@/components/organisms/Navbar'
import { Hero } from '@/components/organisms/Hero'
import { FeatureGrid } from '@/components/organisms/FeatureGrid'
import { PurchaseOptions } from '@/components/organisms/PurchaseOptions'
import { InstallerGuide } from '@/components/organisms/InstallerGuide'
import { SecuritySection } from '@/components/organisms/SecuritySection'
import { SupportForm } from '@/components/organisms/SupportForm'
import { Footer } from '@/components/organisms/Footer'

export function LandingPage() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <PurchaseOptions />
        <InstallerGuide />
        <SecuritySection />
        <section
          id="support"
          className="border-t border-zinc-800/80 px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Support
              </h2>
              <p className="mt-3 text-zinc-400">
                Questions, feedback, or enterprise inquiries — we read every
                message.
              </p>
            </div>
            <div className="max-w-xl">
              <SupportForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
