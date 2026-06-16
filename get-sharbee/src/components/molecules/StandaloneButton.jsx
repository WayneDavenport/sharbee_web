import { Button } from '@/components/atoms/Button'
import { LEMONSQUEEZY_CHECKOUT_URL } from '@/config/links'

/**
 * Triggers the Lemon Squeezy checkout overlay. The `lemonsqueezy-button`
 * class is bound by lemon.js (loaded in index.html); the `?embed=1` param
 * on the checkout URL opens it as an overlay instead of a new page.
 */
export function StandaloneButton({ className = '', children, ...props }) {
  return (
    <Button
      as="a"
      href={LEMONSQUEEZY_CHECKOUT_URL}
      className={`lemonsqueezy-button ${className}`}
      {...props}
    >
      {children}
    </Button>
  )
}
