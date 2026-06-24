import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import { SUPPORT_EMAIL, WEB3FORMS_ACCESS_KEY } from '@/config/links'

const initialForm = { name: '', email: '', message: '' }

function validate({ name, email, message }) {
  const errors = {}

  if (!name.trim()) {
    errors.name = 'Name is required.'
  }

  if (!email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!message.trim()) {
    errors.message = 'Message is required.'
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-zinc-300">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400'

export function SupportForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) return

    setLoading(true)
    setSubmitError(null)

    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('message', form.message)
      formData.append('subject', `Sharbee Support: Message from ${form.name}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setForm(initialForm)
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sky-400/40 bg-gradient-to-br from-sky-400/10 to-zinc-900/50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-400/20">
          <svg
            className="h-6 w-6 text-sky-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-white">Message sent!</p>
        <p className="mt-2 text-sm text-zinc-400">
          Thanks for reaching out. We will get back to you at{' '}
          <span className="text-sky-400">{form.email || 'your email'}</span> soon.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
    >
      <div className="space-y-5">
        <Field id="name" label="Name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            disabled={loading}
          />
        </Field>

        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            disabled={loading}
          />
        </Field>

        <Field id="message" label="Message" error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-y`}
            placeholder="How can we help?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            disabled={loading}
          />
        </Field>

        {/* Honeypot — hidden from humans, filled by bots */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-6 w-full sm:w-auto"
      >
        {loading ? 'Sending…' : 'Send message'}
      </Button>

      <p className="mt-4 text-xs text-zinc-500">
        Messages are sent to{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-sky-400 hover:text-sky-300">
          {SUPPORT_EMAIL}
        </a>
      </p>
    </form>
  )
}
