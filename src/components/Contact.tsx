import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, ChevronDown, Info, Mail, MapPin, Phone, Send } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, wrap } from './ui'

export const EMAIL = 'shhdzam745@gmail.com'
export const PHONE_DISPLAY = '010 1589 2322'
export const PHONE_HREF = 'tel:+201015892322'

/** Formspree form endpoint; submissions are forwarded to the email registered on the form. */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjywjlle'

type Status = 'idle' | 'submitting' | 'success' | 'error'
const emptyForm = { name: '', email: '', type: '', message: '' }

/** Submission time in Cairo time, e.g. "Monday, November 24, 2025 at 10:15 PM (Cairo time)". */
function formatSubmittedAt(date: Date) {
  const cairo = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    dateStyle: 'full',
    timeStyle: 'short',
    hour12: true,
  }).format(date)
  return `${cairo} (Cairo time)`
}

const projectTypes = [
  'English-to-Arabic Translation',
  'Arabic-to-English Translation',
  'Document Translation',
  'Proofreading & Editing',
  'Website Localization',
  'Software Localization',
  'Something else',
]

const field =
  'w-full rounded-xl border border-line bg-paper/70 px-4 py-3.5 text-[15px] text-ink placeholder:text-ink-soft/60 transition focus:border-moss focus:bg-white focus:ring-4 focus:ring-moss/10 focus:outline-none disabled:opacity-60'

export function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const inFlight = useRef(false)

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inFlight.current) return
    inFlight.current = true
    setStatus('submitting')
    setErrorMsg('')

    const honeypot = (e.currentTarget.elements.namedItem('_gotcha') as HTMLInputElement | null)?.value ?? ''

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // Formspree lists these fields, in this order, as labelled rows in the notification email.
        // `email` is kept as the exact key so Formspree sets it as the Reply-To address.
        body: JSON.stringify({
          _subject: 'New Portfolio Message | Shahd Azzam',
          'New message from your portfolio!': 'Shahd Azzam Portfolio · English-to-Arabic Translator',
          'Full Name': form.name.trim(),
          email: form.email.trim(),
          Subject: form.type,
          Message: form.message.trim(),
          'Submitted On': formatSubmittedAt(new Date()),
          _gotcha: honeypot,
        }),
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { errors?: { message: string }[] } | null
        throw new Error(data?.errors?.map((x) => x.message).join(' ') || 'The message could not be sent.')
      }
      setForm(emptyForm)
      setStatus('success')
    } catch (err) {
      const offline = err instanceof TypeError
      setErrorMsg(
        offline
          ? 'Network error. Please check your connection and try again.'
          : err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.',
      )
      setStatus('error')
    } finally {
      inFlight.current = false
    }
  }

  const submitting = status === 'submitting'

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className={`${wrap} grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-5">
          <SectionLabel index="06">Contact</SectionLabel>
          <h2 className={`${h2Class} mt-6`}>
            Have a Project <span className="italic text-moss">in Mind?</span>
          </h2>
          <p className="mt-7 max-w-md text-[17px] leading-relaxed text-ink-soft">
            Let's work together to make your message clear and meaningful in Arabic.
          </p>

          <ul className="mt-12 space-y-3">
            <ContactRow href={`mailto:${EMAIL}`} icon={<Mail />} label="Email" value={EMAIL} />
            <ContactRow href={PHONE_HREF} icon={<Phone />} label="Phone" value={PHONE_DISPLAY} ltr />
            <li className="flex items-center gap-4 rounded-2xl border border-line px-5 py-4">
              <span className="grid size-11 place-items-center rounded-full bg-moss-tint text-moss">
                <MapPin />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">Location</span>
                <span className="block font-medium">Egypt · Working remotely</span>
              </span>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl bg-moss p-6 text-paper">
            <p className="font-serif text-[22px] leading-snug">Need English content translated into Arabic?</p>
            <p className="mt-2 text-[14.5px] leading-relaxed text-paper/80">
              Send me your text's length, purpose, and deadline, and I'll reply with a quote and timeline.
            </p>
            <a
              href="#contact-form"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-moss-deep transition hover:bg-white"
            >
              Request a quote
              <ArrowUpRight className="size-4 rotate-90 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div id="contact-form" className="scroll-mt-28 rounded-[1.75rem] border border-line bg-white p-6 shadow-soft sm:p-10">
            {status !== 'success' ? (
              <form onSubmit={onSubmit} aria-busy={submitting} className="grid gap-5 sm:grid-cols-2">
                {/* Spam honeypot: hidden from people, ignored by Formspree when empty */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

                <Field label="Name" htmlFor="name">
                  <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update('name')} disabled={submitting} className={field} placeholder="Your name" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update('email')} disabled={submitting} className={field} placeholder="you@example.com" />
                </Field>
                <Field label="Project Type" htmlFor="type" full>
                  <div className="relative">
                    <select
                      id="type"
                      name="projectType"
                      required
                      value={form.type}
                      onChange={update('type')}
                      disabled={submitting}
                      className={`${field} appearance-none pr-11 ${form.type ? '' : 'text-ink-soft/80'}`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t} className="text-ink">
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-ink-soft" />
                  </div>
                </Field>
                <Field label="Message" htmlFor="message" full>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    disabled={submitting}
                    className={`${field} resize-y`}
                    placeholder="Tell me about your text: length, purpose, audience, and deadline."
                  />
                </Field>

                {status === 'error' && (
                  <div role="alert" className="flex gap-3 rounded-xl border border-[#e3c4bd] bg-[#f8ebe7] p-4 text-sm leading-relaxed text-[#7a2e1f] sm:col-span-2">
                    <Info className="mt-0.5 size-[18px] shrink-0" />
                    <p>
                      <strong className="font-semibold">Your message wasn't sent.</strong> {errorMsg} You can try
                      again, or email me directly at{' '}
                      <a href={`mailto:${EMAIL}`} className="font-semibold underline underline-offset-2">
                        {EMAIL}
                      </a>
                      .
                    </p>
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-ink-soft">Your details are only used to reply to your message.</p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-moss px-7 py-4 text-[15px] font-semibold text-paper shadow-[0_14px_30px_-14px_rgb(49_92_76/0.9)] transition hover:-translate-y-0.5 hover:bg-moss-deep disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:bg-moss"
                  >
                    {submitting ? (
                      <>
                        Sending…
                        <span className="size-4 animate-spin rounded-full border-2 border-paper/35 border-t-paper" aria-hidden />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div role="status" className="animate-fade-up py-6 text-center sm:py-10">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-moss text-paper shadow-[0_14px_30px_-14px_rgb(49_92_76/0.9)] ring-8 ring-moss-tint">
                  <Check className="size-7" />
                </span>
                <h3 className="mt-8 font-serif text-3xl">
                  Thank you! <span className="italic text-moss">Message sent.</span>
                </h3>
                <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="rounded-full border border-ink/15 px-6 py-3.5 font-semibold transition hover:border-ink/40"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Field({ label, htmlFor, full, children }: { label: string; htmlFor: string; full?: boolean; children: React.ReactNode }) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      {children}
    </div>
  )
}

function ContactRow({ href, icon, label, value, ltr }: { href: string; icon: React.ReactNode; label: string; value: string; ltr?: boolean }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center gap-4 rounded-2xl border border-line bg-white px-5 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-moss/30 hover:shadow-soft"
      >
        <span className="grid size-11 place-items-center rounded-full bg-moss-tint text-moss transition-colors group-hover:bg-moss group-hover:text-paper">
          {icon}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">{label}</span>
          <span dir={ltr ? 'ltr' : undefined} className="block truncate font-medium">
            {value}
          </span>
        </span>
        <ArrowUpRight className="size-5 text-ink-soft transition group-hover:text-moss" />
      </a>
    </li>
  )
}
