import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from './Contact'
import { ArrowUp } from './Icons'
import { navLinks } from './Nav'
import { Logo, wrap } from './ui'

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className={`${wrap} pt-20 pb-10`}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Logo tone="dark" />
            <p className="mt-10 max-w-lg font-serif text-[34px] font-light leading-[1.15] tracking-[-0.01em] sm:text-[44px]">
              Bridging Languages, <span className="italic text-[#b9cfc4]">Connecting Meaning.</span>
            </p>
          </div>
          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/60">Navigate</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-paper/85 transition hover:text-white hover:underline hover:underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-paper/60">Get in touch</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={`mailto:${EMAIL}`} className="break-all text-paper/85 transition hover:text-white hover:underline hover:underline-offset-4">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a href={PHONE_HREF} className="text-paper/85 transition hover:text-white hover:underline hover:underline-offset-4">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="text-paper/60">Based in Egypt</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-paper/10 pt-8 text-sm text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shahd Azzam. All rights reserved.</p>
          <p>English-to-Arabic Translator</p>
          <a href="#home" className="inline-flex items-center gap-2 transition hover:text-white">
            Back to top <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
