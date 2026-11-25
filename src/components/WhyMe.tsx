import { ArrowRight, Check } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, wrap } from './ui'

const reasons = [
  { title: 'Accuracy and attention to detail', text: 'A careful reading of the source and a thorough check of every line.' },
  { title: 'Natural and fluent language', text: 'Arabic that reads as if it were written in Arabic, not translated into it.' },
  { title: 'Respect for original meaning and tone', text: 'Formal, friendly, or persuasive, the voice of your text stays intact.' },
  { title: 'Clear communication', text: 'Questions raised early and updates shared openly throughout the project.' },
  { title: 'Commitment to deadlines', text: 'Realistic timelines agreed upfront, then delivered as promised.' },
]

export function WhyMe() {
  return (
    <section id="why" className="relative overflow-hidden bg-moss-deep py-24 text-paper lg:py-36">
      <span
        lang="ar"
        className="pointer-events-none absolute -bottom-24 -left-6 select-none font-arabic text-[360px] leading-none text-paper/[0.04]"
        aria-hidden
      >
        معنى
      </span>
      <div className={`${wrap} relative grid gap-14 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="05" tone="dark">
              Why work with me
            </SectionLabel>
            <h2 className={`${h2Class} mt-6`}>
              Why Work <span className="italic text-[#b9cfc4]">With Me</span>
            </h2>
            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-paper/75">
              Careful work, honest communication, and genuine respect for every word you trust me with.
            </p>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-paper px-7 py-4 text-[15px] font-semibold text-moss-deep transition hover:-translate-y-0.5 hover:bg-white"
            >
              Start a conversation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <ul className="divide-y divide-paper/15 border-y border-paper/15 lg:col-span-7">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={i * 70} className="group flex items-start gap-6 py-7 sm:gap-8 sm:py-8">
              <span className="pt-1.5 font-serif text-[15px] italic text-[#b9cfc4]">0{i + 1}</span>
              <div className="flex-1">
                <h3 className="font-serif text-[24px] leading-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-[28px]">
                  {r.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-paper/70">{r.text}</p>
              </div>
              <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-paper/20 text-[#b9cfc4] transition-colors duration-500 group-hover:border-paper group-hover:bg-paper group-hover:text-moss-deep">
                <Check className="size-4" />
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
