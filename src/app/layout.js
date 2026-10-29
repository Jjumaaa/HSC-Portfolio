import { Inter, Source_Serif_4 } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { person, site, recognition, contact } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: person.fullName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: person.fullName,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0b1f3a",
};

// Structured data so search engines understand who this profile is about.
const isFilled = (value) => value && !value.startsWith("[");
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.fullName,
  description: site.description,
  url: site.url,
  nationality: "Kenyan",
  award: isFilled(recognition.awardYear)
    ? `Head of State's Commendation (${recognition.awardYear})`
    : "Head of State's Commendation",
  ...(contact.email && { email: `mailto:${contact.email}` }),
  sameAs: contact.socials.map((s) => s.href).filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} antialiased`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        {/* Without JavaScript, reveal animations never run: show everything. */}
        <noscript>
          <style>{`main [style*="opacity"] { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
