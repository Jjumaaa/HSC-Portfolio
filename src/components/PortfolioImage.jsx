import Image from "next/image";

// next/image wrapper. SVG placeholders skip the optimiser (which rejects SVG
// by default); real JPG/PNG/WebP photos are optimised automatically.
export default function PortfolioImage({ image, className, sizes, preload, fill = false }) {
  const isSvg = image.src.toLowerCase().endsWith(".svg");
  const sizing = fill ? { fill: true } : { width: image.width, height: image.height };

  return (
    <Image
      src={image.src}
      alt={image.alt}
      {...sizing}
      sizes={sizes}
      preload={preload}
      unoptimized={isSvg}
      className={className}
    />
  );
}
