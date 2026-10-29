import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="bg-paper px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="achievements-heading"
          eyebrow={achievements.eyebrow}
          heading={achievements.heading}
          intro={achievements.intro}
        />

        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line lg:grid-cols-4">
            {achievements.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse bg-white p-6 text-center md:p-8">
                <dt className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</dt>
                <dd className="font-serif text-3xl font-semibold text-navy-900 md:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {achievements.items.map((item, index) => (
            <Reveal
              as="li"
              key={`${item.title}-${index}`}
              delay={(index % 2) * 0.08}
              className="group relative border border-line bg-white p-7 transition-shadow hover:shadow-lg md:p-8"
            >
              <span aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-gold/70 transition-colors group-hover:bg-kenya-green" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-navy-900/5 px-3 py-1 text-xs font-medium text-navy-800">{item.tag}</span>
                <span className="text-sm text-slate-500">{item.year}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-navy-950">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
