import { Dialog } from '@/components/molecules/Dialog'

export function PrivacyDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} title="Privacy Policy">
      <div className="prose prose-invert prose-sm max-w-none">
        <p className="text-sm text-zinc-400">
          <strong>Effective Date:</strong> June 15, 2026
          <br />
          <strong>Last Updated:</strong> June 15, 2026
        </p>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">Overview</h3>
          <p className="mt-2 text-zinc-300">
            Sharbee is a local-first file transfer and chat application. This
            privacy policy explains what data Sharbee collects, how it's used,
            and your rights.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            What Data We Collect
          </h3>

          <h4 className="mt-4 font-medium text-white">App Usage Data</h4>
          <p className="mt-2 text-zinc-300">
            <strong className="text-white">
              Sharbee collects NO user data.
            </strong>{' '}
            Specifically:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>No analytics or tracking</strong> — We do not collect
              usage statistics, crash reports, or telemetry of any kind.
            </li>
            <li>
              <strong>No accounts or registration</strong> — You choose a
              display name locally; we never see it.
            </li>
            <li>
              <strong>No cloud storage</strong> — All files and messages stay on
              your local network. Nothing is uploaded to our servers.
            </li>
            <li>
              <strong>No internet connection required</strong> — Sharbee works
              entirely over your local Wi-Fi network.
            </li>
          </ul>

          <h4 className="mt-4 font-medium text-white">
            Data Stored Locally on Your Device
          </h4>
          <p className="mt-2 text-zinc-300">
            When you use Sharbee, the following data is stored{' '}
            <strong>only on your device</strong>:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Display name</strong> — Stored in your browser's
              LocalStorage (web version) or the app's local storage (desktop
              version)
            </li>
            <li>
              <strong>Chat messages</strong> — Stored in memory only; deleted
              when the host app closes
            </li>
            <li>
              <strong>Files</strong> — Temporarily stored in memory during
              transfer; not persisted to disk by the app
            </li>
          </ul>
          <p className="mt-2 text-zinc-300">
            <strong>This data never leaves your local network.</strong>
          </p>

          <h4 className="mt-4 font-medium text-white">
            Contact Form (Optional)
          </h4>
          <p className="mt-2 text-zinc-300">
            If you use the <strong>Contact</strong> feature in the app's menu,
            your name, email, and message are sent to{' '}
            <strong>Web3Forms</strong> (a third-party email service) to deliver
            your message to us. Web3Forms' privacy policy applies to that
            submission:{' '}
            <a
              href="https://web3forms.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300"
            >
              https://web3forms.com/privacy
            </a>
          </p>
          <p className="mt-2 text-zinc-300">
            Web3Forms does not store your messages after delivery. We receive
            your message via email and handle it according to this policy.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            How We Use Your Data
          </h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Contact form submissions</strong> — We use your email and
              message only to respond to your inquiry. We do not add you to
              mailing lists or share your information with third parties.
            </li>
            <li>
              <strong>App usage data</strong> — We don't collect any, so we
              can't use any.
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            Third-Party Services
          </h3>
          <p className="mt-2 text-zinc-300">
            Sharbee uses the following third-party services:
          </p>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-zinc-300">
            <li>
              <strong>Web3Forms</strong> (optional, contact form only) —{' '}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <strong>GitHub</strong> (optional, for checking for app updates) —{' '}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300"
              >
                Privacy Policy
              </a>
            </li>
          </ol>
          <p className="mt-2 text-zinc-300">
            The update checker queries GitHub's public API to see if a new
            version is available. No personal information is sent.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">Data Retention</h3>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Chat messages and files</strong> — Deleted automatically
              when the host app closes (memory-only storage)
            </li>
            <li>
              <strong>Contact form submissions</strong> — Retained in our email
              inbox until your inquiry is resolved, then deleted
            </li>
            <li>
              <strong>Display name</strong> — Stored indefinitely in your
              browser/app local storage; you can clear it anytime by changing
              your name or clearing browser data
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">Your Rights</h3>
          <p className="mt-2 text-zinc-300">
            Since Sharbee does not collect or store your data on our servers,
            there is no data for us to access, export, or delete. You have full
            control:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Delete your data</strong> — Clear your browser's
              LocalStorage or uninstall the app
            </li>
            <li>
              <strong>Opt out of contact form</strong> — Simply don't use the
              Contact feature in the menu
            </li>
          </ul>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            Children's Privacy
          </h3>
          <p className="mt-2 text-zinc-300">
            Sharbee does not knowingly collect data from children under 13.
            Since we collect no user data, we have no way to verify ages.
            Parents should supervise their children's use of the app.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">
            Changes to This Policy
          </h3>
          <p className="mt-2 text-zinc-300">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with a new "Last Updated" date.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">Security</h3>
          <p className="mt-2 text-zinc-300">
            All file transfers and chat messages happen{' '}
            <strong>over your local network only</strong>. We recommend using
            Sharbee on trusted networks (home, office) and not on public Wi-Fi
            where other users could potentially intercept traffic. Sharbee does
            not encrypt local network traffic.
          </p>
        </section>

        <section className="mt-6">
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-zinc-300">
            If you have questions about this privacy policy, contact us:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-300">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:wayne@mediaq.io"
                className="text-sky-400 hover:text-sky-300"
              >
                wayne@mediaq.io
              </a>
            </li>
            <li>
              <strong>Via the app:</strong> Menu → Contact
            </li>
          </ul>
        </section>

        <div className="mt-8 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
          <p className="text-sm font-medium text-sky-400">Summary</p>
          <p className="mt-2 text-sm text-zinc-300">
            Sharbee is a local-first app. Your files and messages never leave
            your network. We collect no analytics, no usage data, and no
            personal information. The only exception is the optional contact
            form, which uses Web3Forms to deliver your message to us via email.
          </p>
        </div>
      </div>
    </Dialog>
  )
}
