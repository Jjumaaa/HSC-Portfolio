/**
 * ============================================================================
 *  PORTFOLIO CONTENT — edit this file to change what the website says.
 * ============================================================================
 *
 *  Every piece of text, every date, link and image path on the site lives
 *  here. You should never need to open a component to change wording.
 *
 *  Conventions:
 *  - Text inside [square brackets] is a placeholder waiting for verified
 *    information. Replace the whole thing, brackets included.
 *  - An empty string "" means "not available yet". The site hides that item
 *    (or shows a tidy "coming soon" state) instead of a broken link.
 *  - Image paths start with "/" and point inside the public/ folder, e.g.
 *    "/images/profile/obadiah-gitau-portrait.jpg" → public/images/profile/...
 *
 *  Only publish facts that can be verified (award year, citation wording,
 *  roles, figures). See README.md → "Updating the content".
 */

export const person = {
  fullName: "Obadiah Gitau",
  shortName: "Obadiah Gitau",
  honorific: "HSC",
  title: "Head of State's Commendation Recipient",
  // One or two sentences shown under the name in the hero.
  intro:
    "A record of leadership, public service and community impact, recognised by the Republic of Kenya through the Head of State's Commendation.",
  location: "Kenya",
  portrait: {
    src: "/images/profile/obadiah-gitau-portrait.svg",
    alt: "Portrait of Obadiah Gitau, Head of State's Commendation recipient",
    width: 800,
    height: 1000,
  },
};

export const site = {
  // Change to your real domain after deploying (used for SEO / social cards).
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  title: "Obadiah Gitau, HSC | Head of State's Commendation Recipient",
  description:
    "Official professional profile of Obadiah Gitau, recipient of the Head of State's Commendation (HSC) in Kenya: biography, leadership journey, recognition, achievements, media and official documents.",
  keywords: [
    "Obadiah Gitau",
    "Head of State's Commendation",
    "HSC Kenya",
    "Kenya leadership",
    "public service",
  ],
  locale: "en_KE",
};

export const navigation = [
  { label: "Recognition", href: "#recognition" },
  { label: "Biography", href: "#biography" },
  { label: "Impact", href: "#achievements" },
  { label: "Journey", href: "#timeline" },
  { label: "Media", href: "#gallery" },
  { label: "Documents", href: "#documents" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Republic of Kenya · National Honour",
  primaryCta: { label: "View the Commendation", href: "#recognition" },
  secondaryCta: { label: "Contact & Engagements", href: "#contact" },
  // Short facts shown beneath the buttons. Keep to 3 items.
  highlights: [
    { label: "Honour", value: "Head of State's Commendation" },
    { label: "Awarded", value: "[Year]" },
    { label: "Based in", value: "Kenya" },
  ],
};

export const recognition = {
  eyebrow: "National Honour",
  heading: "Head of State's Commendation",
  summary:
    "The Head of State's Commendation (HSC) is conferred by the President of the Republic of Kenya on citizens who have rendered distinguished service to the nation.",
  awardYear: "[Year]",
  category: "[Civilian / Military — confirm category]",
  conferredBy: "H.E. the President of the Republic of Kenya",
  occasion: "[e.g. Jamhuri Day Honours List]",
  // Paste the official citation wording exactly as it appears on the certificate.
  citation:
    "[Insert the official citation text exactly as it appears on the commendation certificate.]",
  medal: {
    src: "/images/hsc/medal.svg",
    alt: "Head of State's Commendation medal awarded to Obadiah Gitau",
    width: 600,
    height: 600,
  },
  certificate: {
    src: "/images/hsc/certificate.svg",
    alt: "Head of State's Commendation certificate awarded to Obadiah Gitau",
    width: 1200,
    height: 900,
  },
};

export const biography = {
  eyebrow: "Biography",
  heading: "A Life Committed to Service",
  // Each string becomes its own paragraph.
  paragraphs: [
    "Obadiah Gitau is a Kenyan leader whose work in public life and community service has been recognised at the national level through the Head of State's Commendation.",
    "[Professional background: where he grew up, education, and the early roles that shaped his approach to leadership.]",
    "[Leadership journey: the institutions he has served, the responsibilities he has carried, and the outcomes he is known for.]",
  ],
  pullQuote: {
    text: "[A short personal quote or guiding principle in his own words.]",
    attribution: "Obadiah Gitau",
  },
  values: [
    { title: "Integrity", text: "Decisions made openly, with accountability to the people served." },
    { title: "Service", text: "Leadership measured by its benefit to communities and the nation." },
    { title: "Stewardship", text: "Careful, responsible management of public trust and resources." },
    { title: "Mentorship", text: "Investing in the next generation of leaders." },
  ],
  facts: [
    { label: "Home county", value: "[County]" },
    { label: "Education", value: "[Institution, qualification]" },
    { label: "Current role", value: "[Position, organisation]" },
  ],
};

export const achievements = {
  eyebrow: "Achievements & Impact",
  heading: "Measured Contribution",
  intro:
    "Selected accomplishments across public service, community leadership and institutional development.",
  // Use only figures that can be verified. "[##]" values are placeholders.
  stats: [
    { value: "[##]", label: "Years of service" },
    { value: "[##]", label: "Programmes led" },
    { value: "[##]", label: "Communities reached" },
    { value: "[##]", label: "People mentored" },
  ],
  items: [
    {
      title: "Head of State's Commendation",
      year: "[Year]",
      description: "Recognised by the President of the Republic of Kenya for distinguished service to the nation.",
      tag: "National honour",
    },
    {
      title: "[Achievement title]",
      year: "[Year]",
      description: "[One or two sentences describing the accomplishment and its measurable result.]",
      tag: "Community",
    },
    {
      title: "[Achievement title]",
      year: "[Year]",
      description: "[One or two sentences describing the accomplishment and its measurable result.]",
      tag: "Leadership",
    },
    {
      title: "[Achievement title]",
      year: "[Year]",
      description: "[One or two sentences describing the accomplishment and its measurable result.]",
      tag: "Institutional",
    },
  ],
};

export const timeline = {
  eyebrow: "Career Timeline",
  heading: "The Leadership Journey",
  // Oldest first. Add or remove entries freely.
  events: [
    {
      year: "[Year]",
      title: "[Early career role]",
      organisation: "[Organisation]",
      description: "[What this role involved and what it taught him.]",
    },
    {
      year: "[Year]",
      title: "[Leadership appointment]",
      organisation: "[Organisation]",
      description: "[Key responsibilities and outcomes.]",
    },
    {
      year: "[Year]",
      title: "[Senior role or major initiative]",
      organisation: "[Organisation]",
      description: "[Key responsibilities and outcomes.]",
    },
    {
      year: "[Year]",
      title: "Head of State's Commendation",
      organisation: "Republic of Kenya",
      description: "Conferred the Head of State's Commendation in recognition of distinguished service to the nation.",
      highlight: true,
    },
  ],
};

export const gallery = {
  eyebrow: "Media Gallery",
  heading: "Public Appearances & Milestones",
  // width/height = the real pixel size of each image (keeps layout stable).
  items: [
    { src: "/images/gallery/gallery-01.svg", alt: "[Describe photo: HSC investiture ceremony]", caption: "[Investiture ceremony, venue, year]", width: 1200, height: 900 },
    { src: "/images/gallery/gallery-02.svg", alt: "[Describe photo: community engagement]", caption: "[Community engagement, location, year]", width: 1200, height: 900 },
    { src: "/images/gallery/gallery-03.svg", alt: "[Describe photo: speaking engagement]", caption: "[Keynote or panel, event, year]", width: 1200, height: 900 },
    { src: "/images/gallery/gallery-04.svg", alt: "[Describe photo: mentorship session]", caption: "[Mentorship programme, year]", width: 1200, height: 900 },
    { src: "/images/gallery/gallery-05.svg", alt: "[Describe photo: official meeting]", caption: "[Official meeting, institution, year]", width: 1200, height: 900 },
    { src: "/images/gallery/gallery-06.svg", alt: "[Describe photo: media appearance]", caption: "[Media interview, outlet, year]", width: 1200, height: 900 },
  ],
};

export const documents = {
  eyebrow: "Official Records",
  heading: "Documents & Certificates",
  intro:
    "Copies of official correspondence and certificates. Originals are available for verification on request.",
  // file: path to a PDF in public/documents/. Leave "" until the file is added.
  items: [
    {
      title: "Head of State's Commendation Certificate",
      issuer: "Office of the President, Republic of Kenya",
      year: "[Year]",
      preview: { src: "/images/documents/hsc-certificate.svg", alt: "Preview of the Head of State's Commendation certificate", width: 1200, height: 900 },
      file: "",
    },
    {
      title: "Letter of Recognition",
      issuer: "[Issuing office]",
      year: "[Year]",
      preview: { src: "/images/documents/letter-of-recognition.svg", alt: "Preview of the letter of recognition", width: 1200, height: 900 },
      file: "",
    },
    {
      title: "Official Citation",
      issuer: "[Issuing office]",
      year: "[Year]",
      preview: { src: "/images/documents/citation.svg", alt: "Preview of the official citation", width: 1200, height: 900 },
      file: "",
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  heading: "Engagements & Enquiries",
  intro:
    "For speaking invitations, media requests, institutional partnerships and official correspondence.",
  // Leave "" to hide. The contact form opens the visitor's email app addressed here.
  email: "",
  phone: "",
  office: "Nairobi, Kenya",
  // Remove a link by deleting its line or leaving href "".
  socials: [
    { platform: "LinkedIn", href: "" },
    { platform: "X", href: "" },
    { platform: "Facebook", href: "" },
  ],
  enquiryTypes: ["Speaking invitation", "Media request", "Partnership", "Official correspondence", "Other"],
};
