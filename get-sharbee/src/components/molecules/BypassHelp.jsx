import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export function BypassHelp() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ top: 0, right: 0 })

  useEffect(() => {
    if (!open || !buttonRef.current) return

    const updatePosition = () => {
      const rect = buttonRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      })
    }

    updatePosition()
    window.addEventListener('scroll', updatePosition)
    window.addEventListener('resize', updatePosition)

    function handlePointerDown(event) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        !event.target.closest('[role="dialog"]')
      ) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    }
  }, [open])

  const dialog = open
    ? createPortal(
        <div
          role="dialog"
          aria-label="Windows SmartScreen instructions"
          className="fixed z-[99999] w-72 rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-left shadow-2xl shadow-black/50"
          style={{
            top: `${position.top}px`,
            right: `${position.right}px`,
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -top-1.5 right-3 h-3 w-3 rotate-45 border-l border-t border-zinc-700 bg-zinc-950"
          />
          <p className="text-sm font-semibold text-white">
            Windows will let you download
          </p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-400">
            SmartScreen may show a blue{' '}
            <span className="text-zinc-200">"Windows protected your PC"</span>{' '}
            screen because the standalone build ships outside the Store. It's
            safe — just authorize it:
          </p>
          <ol className="mt-3 space-y-2 text-xs text-zinc-300">
            <li className="flex gap-2">
              <span className="font-semibold text-sky-400">1.</span>
              Click the small <span className="text-white">"More info"</span>{' '}
              link in the popup.
            </li>
            <li className="flex gap-2">
              <span className="font-semibold text-sky-400">2.</span>
              Click <span className="text-white">"Run anyway"</span> to launch.
            </li>
          </ol>
          <a
            href="#installer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex text-xs font-medium text-sky-400 hover:text-sky-300"
          >
            See full installer guide →
          </a>
        </div>,
        document.body,
      )
    : null

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Why does Windows warn me?"
        aria-expanded={open}
        className="group relative flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/60 bg-zinc-950 text-sm font-bold text-sky-300 transition-colors hover:bg-sky-400 hover:text-zinc-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse rounded-full shadow-[0_0_10px_2px_rgba(56,189,248,0.7)]"
        />
        <span className="relative">?</span>
      </button>
      {dialog}
    </>
  )
}
