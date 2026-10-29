import { FiDownload, FiExternalLink, FiClock } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PortfolioImage from "@/components/PortfolioImage";
import { documents } from "@/data/portfolio";

export default function Documents() {
  return (
    <section id="documents" aria-labelledby="documents-heading" className="bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="documents-heading"
          eyebrow={documents.eyebrow}
          heading={documents.heading}
          intro={documents.intro}
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.items.map((doc, index) => (
            <Reveal as="li" key={doc.title} delay={index * 0.08} className="flex flex-col border border-line bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-navy-900">
                <PortfolioImage
                  image={doc.preview}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-950">{doc.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{doc.issuer}</p>
                <p className="text-sm text-slate-500">{doc.year}</p>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {doc.file ? (
                    <>
                      <a
                        href={doc.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm bg-navy-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
                      >
                        <FiExternalLink aria-hidden="true" />
                        View<span className="sr-only"> {doc.title} (opens in new tab)</span>
                      </a>
                      <a
                        href={doc.file}
                        download
                        className="inline-flex items-center gap-2 rounded-sm border border-navy-900 px-4 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
                      >
                        <FiDownload aria-hidden="true" />
                        Download<span className="sr-only"> {doc.title}</span>
                      </a>
                    </>
                  ) : (
                    <p className="inline-flex items-center gap-2 rounded-sm border border-dashed border-slate-400 px-4 py-2.5 text-sm text-slate-600">
                      <FiClock aria-hidden="true" />
                      Document pending upload
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
