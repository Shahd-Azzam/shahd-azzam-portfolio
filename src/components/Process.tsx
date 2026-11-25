import { Eye, Languages, Package, Search } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, wrap } from './ui'

const steps = [
  { icon: Search, title: 'Understanding', text: 'Understanding the source text, purpose, and target audience.' },
  { icon: Languages, title: 'Translation', text: 'Producing an accurate and natural translation.' },
  { icon: Eye, title: 'Review', text: 'Checking grammar, spelling, terminology, and consistency.' },
  { icon: Package, title: 'Delivery', text: 'Delivering the final document in the requested format.' },
]

export function Process() {
  return (
    <section id="process" className="bg-sand/55 py-24 lg:py-36">
      <div className={wrap}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel index="04">Process</SectionLabel>
          </div>
          <h2 className={`${h2Class} mt-6`}>
            My Translation <span className="italic text-moss">Process</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            A clear, four-step workflow, so you always know where your project stands.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-sand-deep bg-sand-deep md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 100} className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-white lg:p-9">
              <div className="flex items-start justify-between">
                <span className="font-serif text-[64px] font-light leading-none text-moss/30 transition-colors duration-500 group-hover:text-moss">
                  0{i + 1}
                </span>
                <Icon className="mt-2 size-5 text-ink-soft transition-colors group-hover:text-moss" />
              </div>
              <h3 className="mt-12 font-serif text-[26px] leading-tight">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{text}</p>
              <span
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-moss transition-all duration-700 group-hover:w-full"
                aria-hidden
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
