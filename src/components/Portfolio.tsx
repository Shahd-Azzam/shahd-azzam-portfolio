import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowRight, Close, Eye, Info } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, highlight, markDark, markLight, wrap } from './ui'

const samples = [
  {
    id: 'general',
    title: 'General Content Translation',
    type: 'General content',
    register: 'Neutral, formal',
    en: 'Education is one of the most powerful tools for creating opportunities and building a better future.',
    ar: 'يُعد التعليم أحد أقوى الوسائل لخلق الفرص وبناء مستقبل أفضل.',
    hlEn: 'most powerful tools',
    hlAr: 'أقوى الوسائل',
    note: '“Tools” is rendered as «الوسائل» (means) rather than a word-for-word «أدوات», a choice that suits formal Arabic prose. Opening with «يُعد» keeps the register measured and formal.',
  },
  {
    id: 'business',
    title: 'Business Translation',
    type: 'Corporate message',
    register: 'Professional',
    en: 'Our mission is to provide reliable solutions that help businesses grow and build stronger relationships with their customers.',
    ar: 'تتمثل مهمتنا في تقديم حلول موثوقة تساعد الشركات على النمو وبناء علاقات أقوى مع عملائها.',
    hlEn: 'Our mission is',
    hlAr: 'تتمثل مهمتنا في',
    note: 'Instead of the literal «مهمتنا هي», the sentence opens with «تتمثل مهمتنا في», a structure that reads naturally in Arabic corporate writing.',
  },
  {
    id: 'web',
    title: 'Website Content Localization',
    type: 'E-commerce copy',
    register: 'Friendly, inviting',
    en: 'Discover our latest collection and enjoy a seamless shopping experience.',
    ar: 'اكتشف أحدث مجموعاتنا واستمتع بتجربة تسوق سهلة ومميزة.',
    hlEn: 'seamless shopping experience',
    hlAr: 'تجربة تسوق سهلة ومميزة',
    note: '“Seamless” has no single natural Arabic equivalent, so it becomes «سهلة ومميزة» (easy and distinctive), keeping the warm, persuasive tone of marketing copy.',
  },
]

export function Portfolio() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const dialog = useRef<HTMLDialogElement>(null)
  const s = samples[active]

  const onKey = (e: KeyboardEvent) => {
    const dir = ['ArrowDown', 'ArrowRight'].includes(e.key) ? 1 : ['ArrowUp', 'ArrowLeft'].includes(e.key) ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + samples.length) % samples.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section id="portfolio" className="py-24 lg:py-36">
      <div className={wrap}>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03">Portfolio</SectionLabel>
            <h2 className={`${h2Class} mt-6`}>
              Translation <span className="italic text-moss">Samples</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-moss/25 bg-moss-tint px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-moss">
              <span className="size-1.5 rounded-full bg-moss" aria-hidden /> Self-created Demonstration Samples
            </span>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Short passages I wrote and translated to demonstrate my approach to English-to-Arabic translation.
              They are demonstration samples, not paid client projects.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="Translation samples"
            aria-orientation="vertical"
            className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col"
          >
            {samples.map((item, i) => {
              const selected = i === active
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabs.current[i] = el
                  }}
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls="sample-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKey}
                  className={`group relative min-w-[250px] shrink-0 overflow-hidden rounded-2xl border p-5 text-left transition duration-300 sm:p-6 lg:min-w-0 ${
                    selected
                      ? 'border-moss/30 bg-white shadow-soft'
                      : 'border-line bg-transparent hover:border-ink/15 hover:bg-white/60'
                  }`}
                >
                  <span
                    className={`absolute inset-y-0 left-0 w-[3px] bg-moss transition-transform duration-500 ${
                      selected ? 'scale-y-100' : 'scale-y-0'
                    }`}
                    aria-hidden
                  />
                  <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                    Sample 0{i + 1}
                    <ArrowRight
                      className={`size-4 text-moss transition duration-300 ${selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                    />
                  </span>
                  <span className="mt-3 block font-serif text-[22px] leading-tight">{item.title}</span>
                  <span className="mt-1 block text-sm text-ink-soft">{item.type}</span>
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id="sample-panel"
            aria-labelledby={`tab-${s.id}`}
            className="overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft lg:col-span-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-6 py-4 sm:px-8">
              <p className="text-sm font-semibold">
                <span className="font-serif text-base font-normal italic text-moss">0{active + 1}</span>
                <span className="mx-2 text-line">/</span>
                {s.title}
              </p>
              <span className="rounded-full bg-sand px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Demonstration sample
              </span>
            </div>

            <div key={s.id} className="animate-fade-up relative grid md:grid-cols-2">
              <div dir="ltr" lang="en" className="p-7 text-left sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-soft">English · Source</p>
                <p className="mt-6 font-serif text-[23px] leading-[1.5] sm:text-[27px]">
                  {highlight(s.en, s.hlEn, markLight)}
                </p>
              </div>
              <div dir="rtl" lang="ar" className="bg-moss p-7 text-right text-paper sm:p-10">
                <p className="text-[13px] text-paper/80">العربية · الترجمة</p>
                <p className="mt-5 font-arabic text-[24px] leading-[2] sm:text-[28px]">
                  {highlight(s.ar, s.hlAr, markDark)}
                </p>
              </div>
              <span
                className="absolute top-1/2 left-1/2 hidden size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-paper text-moss shadow-soft md:grid"
                aria-hidden
              >
                <ArrowRight className="size-5" />
              </span>
            </div>

            <div key={`${s.id}-meta`} className="animate-fade-up grid gap-6 border-t border-line p-7 sm:p-8 md:grid-cols-12">
              <dl className="grid grid-cols-3 gap-4 md:col-span-5 md:grid-cols-1 md:gap-3">
                {[
                  ['Direction', 'EN → AR'],
                  ['Content', s.type],
                  ['Tone', s.register],
                ].map(([k, v]) => (
                  <div key={k} className="md:flex md:items-baseline md:justify-between md:gap-4">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">{k}</dt>
                    <dd className="mt-1 text-sm font-medium md:mt-0 md:text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="rounded-2xl bg-paper p-5 md:col-span-7">
                <p className="font-serif text-sm italic text-moss">Translator's note</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.note}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
          <button
            type="button"
            onClick={() => dialog.current?.showModal()}
            className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-7 py-4 text-[15px] font-semibold transition hover:-translate-y-0.5 hover:border-moss/40 hover:shadow-soft"
          >
            <Eye className="size-[18px] text-moss" />
            View Translation Samples
          </button>
          <p className="flex items-center gap-2 text-sm text-ink-soft">
            <Info className="size-4" /> All samples are self-created for demonstration purposes.
          </p>
        </Reveal>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="samples-title"
        onClick={(e) => e.target === dialog.current && dialog.current?.close()}
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(980px,calc(100%-2rem))] overflow-y-auto rounded-[1.75rem] bg-paper p-0 text-ink shadow-lift backdrop:bg-ink/55 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-paper/95 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-moss">
              Demonstration samples · English → Arabic
            </p>
            <h3 id="samples-title" className="mt-1 font-serif text-2xl sm:text-3xl">
              Translation Samples
            </h3>
          </div>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-white transition hover:border-ink/30"
            aria-label="Close samples"
          >
            <Close />
          </button>
        </div>
        <div className="space-y-6 p-6 sm:p-8">
          {samples.map((item, i) => (
            <article key={item.id} className="overflow-hidden rounded-2xl border border-line bg-white">
              <header className="flex items-baseline gap-3 border-b border-line px-6 py-4">
                <span className="font-serif italic text-moss">0{i + 1}</span>
                <h4 className="font-semibold">{item.title}</h4>
              </header>
              <div className="grid md:grid-cols-2">
                <p dir="ltr" lang="en" className="p-6 text-left font-serif text-[20px] leading-[1.5]">
                  {item.en}
                </p>
                <p
                  dir="rtl"
                  lang="ar"
                  className="border-t border-line bg-moss-tint/60 p-6 text-right font-arabic text-[21px] leading-[2] md:border-t-0 md:border-r"
                >
                  {item.ar}
                </p>
              </div>
              <p className="border-t border-line px-6 py-4 text-sm leading-relaxed text-ink-soft">
                <span className="font-serif italic text-moss">Note — </span>
                {item.note}
              </p>
            </article>
          ))}
          <p className="text-center text-sm text-ink-soft">
            These passages were written and translated by Shahd Azzam as portfolio samples. They are not client work.
          </p>
        </div>
      </dialog>
    </section>
  )
}
