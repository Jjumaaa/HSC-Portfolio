import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/data/portfolio";

export default function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-heading" className="bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading id="timeline-heading" eyebrow={timeline.eyebrow} heading={timeline.heading} />

        <ol className="relative">
          {/* Vertical line: left on mobile, centred on desktop */}
          <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-line md:left-1/2 md:-translate-x-1/2" />

          {timeline.events.map((event, index) => {
            const right = index % 2 === 1;
            return (
              <li key={`${event.title}-${index}`} className="relative pb-12 pl-10 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                    event.highlight ? "border-gold bg-gold" : "border-navy-700 bg-white"
                  }`}
                />
                <Reveal
                  y={16}
                  className={`${right ? "md:col-start-2" : "md:text-right"} ${
                    event.highlight ? "border border-gold/60 bg-paper p-6" : ""
                  }`}
                >
                  <p className="font-serif text-2xl font-semibold text-gold-dark">{event.year}</p>
                  <h3 className="mt-1 text-lg font-semibold text-navy-950">{event.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-wider text-slate-500">{event.organisation}</p>
                  <p className="mt-3 leading-relaxed text-slate-600">{event.description}</p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
