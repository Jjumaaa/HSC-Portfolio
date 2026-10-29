import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { biography } from "@/data/portfolio";

export default function Biography() {
  return (
    <section id="biography" aria-labelledby="biography-heading" className="bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="biography-heading" eyebrow={biography.eyebrow} heading={biography.heading} align="left" />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <Reveal className="space-y-6 text-base leading-relaxed text-slate-700 md:text-lg">
            {biography.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <figure className="mt-10 border-l-2 border-gold pl-6">
              <blockquote className="font-serif text-xl italic text-navy-900 md:text-2xl">
                <p>&ldquo;{biography.pullQuote.text}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-3 text-sm text-slate-500">{biography.pullQuote.attribution}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} as="aside" aria-label="Key facts">
            <dl className="divide-y divide-line border-y border-line">
              {biography.facts.map((fact) => (
                <div key={fact.label} className="py-5">
                  <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">{fact.label}</dt>
                  <dd className="mt-1 font-serif text-lg text-navy-950">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-20">
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">Guiding Values</h3>
          <ul className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {biography.values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 0.06} className="bg-white p-6">
                <p className="font-serif text-xl font-semibold text-navy-950">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
