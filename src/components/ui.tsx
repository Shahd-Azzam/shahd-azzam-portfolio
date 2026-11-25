import type { ReactNode } from 'react'

export const wrap = 'mx-auto w-full max-w-7xl px-5 sm:px-8'

export const h2Class =
  'font-serif text-[40px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-[58px]'

export function SectionLabel({
  index,
  children,
  tone = 'light',
}: {
  index: string
  children: ReactNode
  tone?: 'light' | 'dark'
}) {
  const color = tone === 'light' ? 'text-moss' : 'text-[#b9cfc4]'
  const rule = tone === 'light' ? 'bg-moss/40' : 'bg-[#b9cfc4]/40'
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${color}`}>
      <span className="font-serif text-[15px] font-normal italic normal-case tracking-normal">
        {index}
      </span>
      <span className={`h-px w-8 ${rule}`} aria-hidden />
      {children}
    </p>
  )
}

export function Logo({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'
  return (
    <span className="flex items-center gap-3">
      <span
        className={`relative grid size-11 shrink-0 place-items-center rounded-full border ${
          dark ? 'border-paper/25' : 'border-moss/30 bg-paper'
        }`}
        aria-hidden
      >
        <span className={`font-serif text-[19px] leading-none ${dark ? 'text-paper' : 'text-moss'}`}>
          <span className="italic">S</span>
          <span className="-ml-[3px]">A</span>
        </span>
        <span
          className={`absolute -bottom-px left-1/2 h-[3px] w-3 -translate-x-1/2 rounded-full ${
            dark ? 'bg-[#b9cfc4]' : 'bg-moss'
          }`}
        />
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-[18px] font-medium tracking-[-0.01em]">Shahd Azzam</span>
        <span
          className={`block text-[10.5px] font-semibold uppercase tracking-[0.2em] ${
            dark ? 'text-paper/60' : 'text-ink-soft'
          }`}
        >
          EN → AR Translator
        </span>
      </span>
    </span>
  )
}

/** Wraps the first occurrence of `phrase` in a soft marker highlight. */
export function highlight(text: string, phrase: string, markClass: string) {
  const i = text.indexOf(phrase)
  if (i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <mark className={`box-decoration-clone ${markClass}`}>{phrase}</mark>
      {text.slice(i + phrase.length)}
    </>
  )
}

export const markLight =
  'bg-[#ffff00] text-moss-deep'
export const markDark =
  'bg-[#ffff00] text-moss-deep'
