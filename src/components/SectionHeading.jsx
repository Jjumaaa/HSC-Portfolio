import Reveal from "@/components/Reveal";
import KenyaStripe from "@/components/KenyaStripe";

export default function SectionHeading({ id, eyebrow, heading, intro, tone = "light", align = "center" }) {
  const dark = tone === "dark";
  const centered = align === "center";

  return (
    <Reveal className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <KenyaStripe className={`mb-5 ${centered ? "mx-auto" : ""}`} />
      <p
        className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
          dark ? "text-gold-light" : "text-gold-dark"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {heading}
      </h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
