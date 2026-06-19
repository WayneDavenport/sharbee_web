import {
  MICROSOFT_STORE_BADGE_SRC,
  MICROSOFT_STORE_URL,
} from '@/config/links'

export function MicrosoftStoreBadge({ className = '' }) {
  return (
    <a
      href={MICROSOFT_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Sharbee from Microsoft Store"
      className={`inline-flex items-center justify-center transition-opacity hover:opacity-90 ${className}`}
    >
      <img
        src={MICROSOFT_STORE_BADGE_SRC}
        alt="Download from Microsoft Store"
        width={200}
        height={52}
        className="h-[52px] w-auto max-w-full"
      />
    </a>
  )
}
