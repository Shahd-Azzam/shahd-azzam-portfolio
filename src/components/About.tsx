import studio from '../assets/studio.jpg'
import { Award, Globe, PenLine, Search } from './Icons'
import { Reveal } from './Reveal'
import { SectionLabel, h2Class, wrap } from './ui'

const highlights = [
  { icon: Search, title: 'Attention to detail', text: 'Every word, phrase, and punctuation mark is read with care.' },
  { icon: PenLine, title: 'Linguistic accuracy', text: 'Correct grammar, spelling, terminology, and meaning in Arabic.' },
  { icon: Globe, title: 'Cultural awareness', text: 'Phrasing that feels natural and appropriate to Arabic-speaking readers.' },
  { icon: Award, title: 'Commitment to quality', text: 'Each translation is reviewed before it reaches you.' },
]

export function About() {
  return (
    <section id="about" className="border-t border-line py-24 lg:py-36">
      <div className={wrap}>
        <Reveal>
          <blockquote className="max-w-5xl">
            <p className="font-serif text-[30px] font-light leading-[1.22] tracking-[-0.015em] sm:text-[40px] lg:text-[50px]">
              <span className="text-moss">“</span>I help individuals and businesses communicate clearly with
              Arabic-speaking audiences through{' '}
              <em className="text-moss">accurate, natural, and culturally appropriate</em> translations.
              <span className="text-moss">”</span>
            </p>
          </blockquote>
        </Reveal>

        <div className="mt-20 grid gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={studio}
                alt="A quiet writing desk with a notebook, fountain pen, coffee, and an olive branch"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.03]"
                loading="lazy"
              />
              <figcaption className="absolute right-4 bottom-4 left-4 flex items-center justify-between gap-4 rounded-2xl border border-white/60 bg-paper/90 px-5 py-4 backdrop-blur-md">
                <span>
                  <span className="block font-serif text-lg leading-tight">Shahd Azzam</span>
                  <span className="block text-xs font-medium text-ink-soft">English-to-Arabic Translator</span>
                </span>
                <span lang="ar" dir="rtl" className="font-arabic text-2xl text-moss">
                  شهد عزّام
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7 lg:pt-6">
            <Reveal>
              <SectionLabel index="01">About me</SectionLabel>
              <h2 className={`${h2Class} mt-6`}>
                More Than Translation. <span className="italic text-moss">It's About Connection.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-[17px] leading-[1.8] text-ink-soft">
                I am a native Arabic speaker with fluent English, specializing in English-to-Arabic translation. My
                English proficiency allows me to understand the source text fully, and my native command of Arabic
                lets me express it naturally. I work with close attention to detail, linguistic accuracy, and cultural
                awareness, preserving the original meaning, keeping the appropriate tone, and making sure every text
                speaks clearly to its Arabic-speaking audience.
              </p>

              <dl className="mt-9 flex flex-wrap gap-3">
                {[
                  ['Arabic', 'Native'],
                  ['English', 'Fluent'],
                ].map(([lang, level]) => (
                  <div key={lang} className="flex items-center gap-3 rounded-full border border-line bg-white px-5 py-2.5">
                    <dt className="text-sm font-semibold">{lang}</dt>
                    <span className="h-3.5 w-px bg-line" aria-hidden />
                    <dd className="font-serif text-[15px] italic text-moss">{level}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={i * 80} className="group bg-paper p-6 transition-colors hover:bg-white sm:p-7">
                  <Icon className="size-6 text-moss transition-transform duration-500 group-hover:-translate-y-0.5" />
                  <h3 className="mt-5 font-serif text-[21px] leading-tight">{title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
