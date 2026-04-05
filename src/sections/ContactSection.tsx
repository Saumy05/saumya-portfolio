import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa6'
import { useState } from 'react'
import type { FormEvent } from 'react'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import { API_URL } from '../config/env'
import { contactLinks } from '../data/portfolioData'

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [validationErrors, setValidationErrors] = useState<FormErrors>({})

  const validateForm = (values: FormValues): FormErrors => {
    const nextErrors: FormErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Name is required.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!emailRegex.test(values.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!values.message.trim()) {
      nextErrors.message = 'Message is required.'
    }

    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formValues: FormValues = { name, email, message }
    const nextErrors = validateForm(formValues)
    setValidationErrors(nextErrors)
    setSuccess(false)
    setError('')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    try {
      setLoading(true)

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        const responseData: unknown = await response.json().catch(() => null)
        const responseMessage =
          typeof responseData === 'object' &&
          responseData !== null &&
          'message' in responseData &&
          typeof responseData.message === 'string'
            ? responseData.message
            : 'Failed to send message. Please try again.'

        throw new Error(responseMessage)
      }

      setName(initialValues.name)
      setEmail(initialValues.email)
      setMessage(initialValues.message)
      setValidationErrors({})
      setSuccess(true)
    } catch (requestError) {
      setSuccess(false)
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container id="contact" className="py-20 sm:py-24">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build backend systems that scale"
        subtitle="Open to backend engineering internships, AI-focused product roles, and high-impact development collaborations."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-slate-700/80 bg-slate-900/65 p-6 text-sm text-slate-300">
          <a
            href={`mailto:${contactLinks.email}`}
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaRegEnvelope size={16} className="text-accent" />
            {contactLinks.email}
          </a>
          <a
            href={contactLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaLinkedin size={16} className="text-accent" />
            LinkedIn
          </a>
          <a
            href={contactLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/70 px-4 py-3 transition hover:border-accent"
          >
            <FaGithub size={16} className="text-accent" />
            GitHub
          </a>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="space-y-4 rounded-2xl border border-slate-700/80 bg-slate-900/65 p-6"
        >
          <div>
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value)
                if (validationErrors.name) {
                  setValidationErrors((prev) => ({ ...prev, name: undefined }))
                }
              }}
              placeholder="Your Name"
              aria-invalid={Boolean(validationErrors.name)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
            />
            {validationErrors.name && (
              <p className="mt-1 text-xs text-rose-300">{validationErrors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                if (validationErrors.email) {
                  setValidationErrors((prev) => ({ ...prev, email: undefined }))
                }
              }}
              placeholder="Your Email"
              aria-invalid={Boolean(validationErrors.email)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
            />
            {validationErrors.email && (
              <p className="mt-1 text-xs text-rose-300">{validationErrors.email}</p>
            )}
          </div>

          <div>
            <textarea
              value={message}
              onChange={(event) => {
                setMessage(event.target.value)
                if (validationErrors.message) {
                  setValidationErrors((prev) => ({ ...prev, message: undefined }))
                }
              }}
              placeholder="Message"
              rows={4}
              aria-invalid={Boolean(validationErrors.message)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-accent focus:outline-none"
            />
            {validationErrors.message && (
              <p className="mt-1 text-xs text-rose-300">{validationErrors.message}</p>
            )}
          </div>

          {success && (
            <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
              Message sent successfully. I will get back to you soon.
            </p>
          )}

          {error && (
            <p className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading && (
              <span
                className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent"
                aria-hidden="true"
              />
            )}
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </Container>
  )
}

export default ContactSection
