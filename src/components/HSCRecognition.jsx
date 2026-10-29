import { FiAward } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PortfolioImage from "@/components/PortfolioImage";
import { recognition } from "@/data/portfolio";

export default function HSCRecognition() {
  const details = [
    { label: "Award year", value: recognition.awardYear },
    { label: "Category", value: recognition.category },
    { label: "Conferred by", value: recognition.conferredBy },
    { label: "Occasion", value: recognition.occasion },
  ];

  return (
    <section
      id="recognition"
      aria-labelledby="recognition-heading"
      className="relative overflow-hidden bg-navy-950 px-4 py-24 text-white sm:px-6 md:py-32 lg:px-8"
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="recognition-heading"
          eyebrow={recognition.eyebrow}
          heading={recognition.heading}
          intro={recognition.summary}
          tone="dark"
        />

        <div className="grid items-center gap-10 md:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Medal */}
          <Reveal className="flex flex-col items-center">
            <figure className="flex flex-col items-center">
              <div className="relative aspect-square w-56 overflow-hidden rounded-full border-2 border-gold p-2 shadow-[0_0_60px_-15px_rgba(176,141,60,0.6)] md:w-72">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <PortfolioImage image={recognition.medal} fill sizes="288px" className="object-cover" />
                </div>
              </div>
              <figcaption className="mt-6 flex items-center gap-2 text-sm text-slate-300">
                <FiAward className="text-gold-light" aria-hidden="true" />
                Medal of Commendation
              </figcaption>
            </figure>
          </Reveal>

          {/* Certificate */}
          <Reveal delay={0.1}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden border border-gold/40 bg-navy-900 shadow-2xl">
                <PortfolioImage
                  image={recognition.certificate}
                  fill
                  sizes="(min-width: 768px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-slate-400">Certificate of Commendation</figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((item) => (
              <div key={item.label} className="bg-navy-950 p-6">
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-gold-light">{item.label}</dt>
                <dd className="mt-2 font-serif text-lg text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Citation */}
        <Reveal as="figure" className="mx-auto mt-16 max-w-3xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">Official Citation</p>
          <blockquote className="font-serif text-xl font-light italic leading-relaxed text-slate-100 md:text-2xl">
            <p>&ldquo;{recognition.citation}&rdquo;</p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
