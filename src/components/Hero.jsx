"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import PortfolioImage from "@/components/PortfolioImage";
import KenyaStripe from "@/components/KenyaStripe";
import { person, hero } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-paper px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:px-8"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-gold/20"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr] lg:gap-20">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          <KenyaStripe className="mx-auto mb-6 md:mx-0" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-semibold leading-[1.05] text-navy-950 sm:text-5xl lg:text-7xl"
          >
            {person.fullName}
          </h1>
          <p className="mt-4 font-serif text-xl italic text-navy-700 md:text-2xl">{person.title}</p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:mx-0 md:text-lg">
            {person.intro}
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-navy-800"
            >
              {hero.primaryCta.label}
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-navy-900 px-6 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 text-left sm:grid-cols-3">
            {hero.highlights.map((item) => (
              <div key={item.label}>
                <dt className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-500">{item.label}</dt>
                <dd className="mt-1 font-serif text-lg text-navy-950">{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 mx-auto w-full max-w-[300px] md:order-2 md:max-w-[400px]"
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -bottom-4 -right-4 h-full w-full border border-gold" />
            <div className="relative aspect-[4/5] overflow-hidden bg-navy-900 shadow-2xl">
              <PortfolioImage
                image={person.portrait}
                fill
                preload
                sizes="(min-width: 768px) 400px, 300px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
