import { useEffect, useState } from 'react'
import { ArrowRight, Close, Menu } from './Icons'
import { Logo, wrap } from './ui'

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled || open
          ? 'border-line bg-paper/85 shadow-[0_8px_30px_-20px_rgb(37_37_37/0.25)] backdrop-blur-md'
          : 'border-transparent bg-paper/0'
      }`}
    >
      <nav className={`${wrap} flex h-[76px] items-center justify-between`} aria-label="Main">
        <a href="#home" aria-label="Shahd Azzam — back to top" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative px-3.5 py-2 text-[14.5px] font-medium transition-colors ${
                  active === l.id ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-moss transition-all duration-300 ${
                    active === l.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-paper shadow-[0_8px_20px_-10px_rgb(49_92_76/0.8)] transition hover:bg-moss-deep sm:inline-flex"
          >
            Let's Talk
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-paper text-ink md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-line transition-[max-height,opacity] duration-500 md:hidden ${
          open ? 'max-h-[100dvh] border-t opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <ul className={`${wrap} flex flex-col py-4`}>
          {navLinks.map((l, i) => (
            <li key={l.id} className="border-b border-line last:border-0">
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4 font-serif text-3xl"
              >
                {l.label}
                <span className="font-serif text-sm italic text-ink-soft">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="pt-5 pb-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-moss px-5 py-3.5 font-semibold text-paper"
            >
              Let's Talk <ArrowRight className="size-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
