import { AppWindow, ArrowUpRight, FileText, Globe, Languages, PenLine, Swap } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, wrap } from './ui'

const services = [
  {
    icon: Languages,
    title: 'English-to-Arabic Translation',
    text: 'Accurate and natural translation of English content into clear, fluent Arabic.',
    tag: 'EN → AR',
    primary: true,
  },
  {
    icon: Swap,
    title: 'Arabic-to-English Translation',
    text: 'Clear Arabic-to-English translation that preserves the original message and context.',
    tag: 'AR → EN · Secondary',
  },
  {
    icon: FileText,
    title: 'Document Translation',
    text: 'Translation of general documents, reports, articles, and business materials.',
    tag: 'Documents',
  },
  {
    icon: PenLine,
    title: 'Proofreading & Editing',
    text: 'Reviewing Arabic texts for grammar, spelling, clarity, and consistency.',
    tag: 'Arabic review',
  },
  {
    icon: Globe,
    title: 'Website Localization',
    text: 'Adapting website content to communicate naturally with Arabic-speaking audiences.',
    tag: 'Web content',
  },
  {
    icon: AppWindow,
    title: 'Software Localization',
    text: 'Translating software interface strings, buttons, menus, and user-facing messages.',
    tag: 'UI strings',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white/50 py-24 lg:py-36">
      <div className={wrap}>
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02">Services</SectionLabel>
            <h2 className={`${h2Class} mt-6`}>
              Translation services, <span className="italic text-moss">crafted with care.</span>
            </h2>
          </div>
          <p className="text-[17px] leading-relaxed text-ink-soft lg:col-span-5 lg:pb-2">
            From a single page to a full website, every project receives the same careful attention to meaning,
            clarity, and tone.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, tag, primary }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 90}>
              <article
                className={`group relative flex h-full flex-col rounded-[1.5rem] border p-7 transition duration-500 hover:-translate-y-1.5 hover:border-moss/25 hover:bg-white hover:shadow-lift sm:p-8 ${
                  primary ? 'border-moss/30 bg-white shadow-soft' : 'border-line bg-paper'
                }`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-12 place-items-center rounded-2xl transition-colors duration-500 group-hover:bg-moss group-hover:text-paper ${
                      primary ? 'bg-moss text-paper' : 'bg-moss-tint text-moss'
                    }`}
                  >
                    <Icon className="size-[22px]" />
                  </span>
                  {primary ? (
                    <span className="rounded-full bg-moss-tint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-moss">
                      Primary specialization
                    </span>
                  ) : (
                    <span className="font-serif text-[15px] italic text-ink-soft">0{i + 1}</span>
                  )}
                </div>
                <h3 className="mt-10 font-serif text-[26px] leading-[1.15] tracking-[-0.01em]">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
                <div className="mt-auto flex items-center justify-between pt-9">
                  <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-semibold tracking-wide text-ink-soft">
                    {tag}
                  </span>
                  <ArrowUpRight className="size-5 -translate-x-1 text-moss opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-12 text-center text-[15px] text-ink-soft">
            English-to-Arabic translation is my core focus, for general, business, and digital content.{' '}
            <a href="#contact" className="font-semibold text-moss underline decoration-moss/30 underline-offset-4 transition hover:decoration-moss">
              Not sure which service fits? Let's talk it through.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
