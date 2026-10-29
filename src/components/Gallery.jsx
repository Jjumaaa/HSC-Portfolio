"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PortfolioImage from "@/components/PortfolioImage";
import { gallery } from "@/data/portfolio";

export default function Gallery() {
  const items = gallery.items;
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);
  const triggerRefs = useRef([]);
  const lastTrigger = useRef(null);

  // Keep the native <dialog> in sync with React state. showModal() gives us
  // focus trapping, Escape-to-close and an inert page background for free.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  function open(index) {
    lastTrigger.current = index;
    setOpenIndex(index);
  }

  function handleClose() {
    setOpenIndex(null);
    triggerRefs.current[lastTrigger.current]?.focus();
  }

  function step(delta) {
    setOpenIndex((current) => (current + delta + items.length) % items.length);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  }

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-paper px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="gallery-heading" eyebrow={gallery.eyebrow} heading={gallery.heading} />

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <Reveal as="li" key={item.src} delay={(index % 3) * 0.08}>
              <figure>
                <button
                  type="button"
                  ref={(el) => (triggerRefs.current[index] = el)}
                  onClick={() => open(index)}
                  aria-label={`Open larger view: ${item.caption}`}
                  aria-haspopup="dialog"
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-navy-900"
                >
                  <PortfolioImage
                    image={item}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-900 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <FiMaximize2 />
                  </span>
                </button>
                <figcaption className="mt-3 text-sm text-slate-600">{item.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        onKeyDown={handleKeyDown}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        aria-label={current ? `Image ${openIndex + 1} of ${items.length}: ${current.caption}` : "Image viewer"}
        className="m-auto w-[calc(100%-2rem)] max-w-5xl bg-transparent p-0 backdrop:bg-ink/85 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex flex-col">
            <div className="mb-3 flex items-center justify-between gap-4 text-white">
              <p className="text-sm text-slate-300" aria-live="polite">
                {openIndex + 1} / {items.length}
              </p>
              <button
                type="button"
                autoFocus
                onClick={() => dialogRef.current.close()}
                aria-label="Close image viewer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <FiX size={22} aria-hidden="true" />
              </button>
            </div>

            <figure>
              <div className="relative aspect-[4/3] max-h-[75vh] w-full bg-navy-950">
                <PortfolioImage image={current} fill sizes="(min-width: 1024px) 1024px, 100vw" className="object-contain" />
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-200">{current.caption}</figcaption>
            </figure>

            {items.length > 1 && (
              <div className="mt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <FiChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <FiChevronRight size={22} aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}
