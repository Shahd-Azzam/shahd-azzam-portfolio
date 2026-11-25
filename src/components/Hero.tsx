import { ArrowRight, Check, Languages, MapPin, Swap } from './Icons'
import { highlight, markDark, markLight, wrap } from './ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_55%_at_85%_30%,rgb(233_227_216/0.9),transparent_70%)]"
        aria-hidden
      />
      <div className={`${wrap} grid items-center gap-16 pt-10 pb-20 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-28`}>
        <div className="lg:col-span-6 xl:col-span-6">
          <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
            Shahd Azzam · <span className="text-moss">English-to-Arabic Translator</span>
          </p>
          <p className="animate-fade-up mt-4 flex items-center gap-3 font-serif text-lg italic text-moss">
            <span className="h-px w-10 bg-moss/50" aria-hidden />
            Bridging Languages, Connecting Meaning.
          </p>
          <h1
            className="animate-fade-up mt-7 font-serif text-[52px] font-light leading-[0.98] tracking-[-0.03em] [animation-delay:80ms] sm:text-7xl xl:text-[88px]"
          >
            Words Matter.
            <br />
            <span className="italic text-moss">Meaning</span> Matters More.
          </h1>
          <p className="animate-fade-up mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-soft [animation-delay:160ms] sm:text-xl">
            English-to-Arabic translation that preserves meaning, tone, and cultural context.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2.5 rounded-full bg-moss px-7 py-4 text-[15px] font-semibold text-paper shadow-[0_14px_30px_-14px_rgb(49_92_76/0.9)] transition hover:-translate-y-0.5 hover:bg-moss-deep"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper/60 px-7 py-4 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:border-ink/40 hover:bg-white"
            >
              Contact Me
            </a>
          </div>

          <ul className="animate-fade-up mt-14 grid gap-5 border-t border-line pt-7 [animation-delay:320ms] sm:grid-cols-3 sm:gap-4">
            <InfoItem icon={<MapPin className="size-[18px]" />} label="Location" value="Based in Egypt" />
            <InfoItem icon={<Swap className="size-[18px]" />} label="Specialization" value="English → Arabic" />
            <InfoItem
              icon={
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-moss/50" />
                  <span className="relative size-2.5 rounded-full bg-moss" />
                </span>
              }
              label="Status"
              value="Available for Freelance Projects"
            />
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:200ms] lg:col-span-6 lg:pl-6">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white text-moss">
        {icon}
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">{label}</span>
        <span className="mt-0.5 block text-[14.5px] font-medium leading-snug">{value}</span>
      </span>
    </li>
  )
}

function Lines({ widths }: { widths: string[] }) {
  return (
    <div className="mt-5 space-y-2" aria-hidden>
      {widths.map((w, i) => (
        <div key={i} className="h-[5px] rounded-full bg-current opacity-[0.09]" style={{ width: w }} />
      ))}
    </div>
  )
}

function HeroVisual() {
  return (
    <figure
      className="relative mx-auto aspect-[3/4] w-full max-w-[540px] sm:aspect-[5/6]"
      aria-label="An English sentence and its Arabic translation shown as two documents"
    >
      {/* backdrop */}
      <div className="absolute inset-[7%_0_5%_9%] rounded-[2.25rem] bg-sand" aria-hidden />
      <div
        className="absolute inset-[7%_0_5%_9%] rounded-[2.25rem] opacity-60 [background-image:radial-gradient(rgb(49_92_76/0.18)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        aria-hidden
      />
      <span
        lang="ar"
        className="absolute top-[4%] right-[5%] select-none font-arabic text-[150px] leading-none text-moss/[0.12] sm:text-[190px]"
        aria-hidden
      >
        ع
      </span>
      <span
        className="absolute bottom-[3%] left-[1%] select-none font-serif text-[150px] italic leading-none text-moss/[0.12] sm:text-[190px]"
        aria-hidden
      >
        A
      </span>

      {/* English source document */}
      <div className="animate-float absolute top-[9%] left-0 z-10 w-[76%]">
        <div className="-rotate-[3deg] rounded-2xl border border-line bg-white p-5 text-ink shadow-soft sm:p-7">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-soft">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-ink/30" /> Source · English
            </span>
            <span className="rounded-full border border-line px-2 py-0.5 tracking-[0.12em]">LTR</span>
          </div>
          <p lang="en" className="mt-5 font-serif text-[15px] leading-snug sm:text-[19px]">
            {highlight(
              'Education is one of the most powerful tools for creating opportunities and building a better future.',
              'most powerful tools',
              markLight,
            )}
          </p>
          <Lines widths={['100%', '82%', '58%']} />
        </div>
      </div>

      {/* connector */}
      <svg
        className="absolute top-[38%] left-[22%] z-0 h-[26%] w-[52%]"
        viewBox="0 0 200 100"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M8 4 C 20 90, 150 10, 194 96" stroke="#315C4C" strokeOpacity="0.55" strokeWidth="1.4" strokeDasharray="3 6" />
      </svg>
      <div
        className="absolute top-[48%] left-[40%] z-30 grid size-14 place-items-center rounded-full bg-moss text-paper shadow-lift ring-[7px] ring-paper sm:size-16"
        aria-hidden
      >
        <Languages className="size-6" />
      </div>

      {/* Arabic translated document */}
      <div className="animate-float-slow absolute right-0 bottom-[11%] z-20 w-[78%]">
        <div
          dir="rtl"
          lang="ar"
          className="rotate-[2deg] rounded-2xl bg-moss p-5 text-paper shadow-lift sm:p-7"
        >
          <div className="flex items-center justify-between text-[12px] text-paper/75">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-paper/60" /> الترجمة · العربية
            </span>
            <span
              dir="ltr"
              className="rounded-full border border-paper/25 px-2 py-0.5 font-sans text-[10px] font-semibold tracking-[0.12em]"
            >
              RTL
            </span>
          </div>
          <p className="mt-4 font-arabic text-[18px] leading-[1.95] sm:text-[23px]">
            {highlight('يُعد التعليم أحد أقوى الوسائل لخلق الفرص وبناء مستقبل أفضل.', 'أقوى الوسائل', markDark)}
          </p>
          <Lines widths={['100%', '70%']} />
        </div>
      </div>

      {/* translation checklist */}
      <div className="absolute bottom-0 left-[3%] z-30 flex items-center gap-3 rounded-full border border-line bg-white/95 px-4 py-2.5 text-[12px] font-semibold text-ink shadow-soft backdrop-blur sm:gap-4 sm:text-[13px]">
        {['Meaning', 'Tone', 'Context'].map((t) => (
          <span key={t} className="flex items-center gap-1.5">
            <Check className="size-3.5 text-moss" />
            {t}
          </span>
        ))}
      </div>
    </figure>
  )
}
