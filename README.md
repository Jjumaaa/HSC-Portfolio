# Obadiah Gitau, HSC: Portfolio Website

A professional profile website for **Obadiah Gitau**, recipient of the **Head of State's Commendation (HSC)** in Kenya. It presents his biography, leadership journey, national recognition, achievements, public appearances and official documents to government officials, corporate leaders, event organisers, media and collaborators.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4** and **Framer Motion**, in plain JavaScript (no TypeScript).

> **Before launch:** every value written in `[square brackets]` on the site is a placeholder. Replace each one with verified information in `src/data/portfolio.js`. The award year, citation wording, roles and figures must come from official records.

---

## Table of contents

1. [What's on the page](#1-whats-on-the-page)
2. [Project structure](#2-project-structure)
3. [How the App Router architecture works](#3-how-the-app-router-architecture-works)
4. [Running the site locally](#4-running-the-site-locally)
5. [Updating the content (`portfolio.js`)](#5-updating-the-content-portfoliojs)
6. [Replacing images and documents](#6-replacing-images-and-documents)
7. [Connecting the contact form](#7-connecting-the-contact-form)
8. [Testing and quality checks](#8-testing-and-quality-checks)
9. [Deploying (GitHub + Vercel)](#9-deploying-github--vercel)
10. [Troubleshooting](#10-troubleshooting)
11. [Beginner learning roadmap](#11-beginner-learning-roadmap)

---

## 1. What's on the page

The site is a single, long page with eight sections. The top navigation links jump to each one.

| # | Section | Anchor | What it shows |
|---|---------|--------|---------------|
| 1 | Hero | top | Portrait, name, title, intro, two call-to-action buttons, three quick facts |
| 2 | HSC Recognition | `#recognition` | Medal, certificate, award year, category, conferring authority, occasion, official citation |
| 3 | Biography | `#biography` | Story paragraphs, pull quote, key facts, guiding values |
| 4 | Achievements & Impact | `#achievements` | Impact statistics and achievement cards |
| 5 | Career Timeline | `#timeline` | Chronological milestones (stacked on phones, alternating on desktop) |
| 6 | Media Gallery | `#gallery` | Photo grid; click or press Enter on a photo to open a keyboard-accessible lightbox |
| 7 | Documents | `#documents` | Document previews with View/Download buttons, or "pending upload" when no file exists yet |
| 8 | Contact | `#contact` | Email/phone/office, social links, and a validated enquiry form |

**Built-in quality features**

- **Responsive** from 320px phones to 1440px+ desktops, with no horizontal scrolling.
- **Accessible:** semantic landmarks, a skip link, visible gold focus outlines, labelled controls, form errors linked to their fields, and a lightbox built on the native `<dialog>` element (focus trap, Escape to close, arrow keys to navigate, focus returned afterwards).
- **Reduced motion:** animations are toned down automatically for visitors who turn on "reduce motion" in their operating system.
- **SEO:** page title and description, Open Graph/Twitter cards, a generated social-share image, `robots.txt`, `sitemap.xml` and schema.org `Person` structured data.
- **Print and no-JavaScript safe:** animated content is always visible when printed or when JavaScript is disabled.

---

## 2. Project structure

```
hsc-portfolio/
├── public/                         ← static files served as-is
│   ├── images/
│   │   ├── profile/                ← portrait (800×1000)
│   │   ├── hsc/                    ← medal (600×600) + certificate (1200×900)
│   │   ├── documents/              ← document preview images (1200×900)
│   │   └── gallery/                ← gallery photos (1200×900)
│   └── documents/                  ← downloadable PDFs go here
├── scripts/
│   └── generate-placeholders.mjs   ← regenerates labelled SVG placeholders
├── src/
│   ├── app/                        ← Next.js App Router
│   │   ├── layout.js               ← <html>, fonts, SEO metadata, structured data
│   │   ├── page.js                 ← the home page; puts the 8 sections in order
│   │   ├── globals.css             ← Tailwind import + brand colour tokens
│   │   ├── opengraph-image.js      ← generates the social-share image (PNG)
│   │   ├── robots.js / sitemap.js  ← search-engine files
│   │   └── favicon.ico
│   ├── components/                 ← one file per section, plus shared helpers
│   │   ├── Navbar.jsx  Hero.jsx  HSCRecognition.jsx  Biography.jsx
│   │   ├── Achievements.jsx  Timeline.jsx  Gallery.jsx  Documents.jsx
│   │   ├── Contact.jsx  Footer.jsx
│   │   ├── SectionHeading.jsx      ← shared eyebrow/heading/intro block
│   │   ├── Reveal.jsx              ← fade-in-on-scroll wrapper
│   │   ├── PortfolioImage.jsx      ← next/image wrapper (handles SVG placeholders)
│   │   ├── KenyaStripe.jsx         ← the small black/red/green accent
│   │   └── MotionProvider.jsx      ← applies the reduced-motion preference
│   ├── data/
│   │   └── portfolio.js            ← ★ ALL text, dates, links and image paths
│   └── utils/
│       └── validateForm.js         ← contact-form validation rules
├── next.config.mjs                 ← pins the project root, image settings
├── eslint.config.mjs
└── package.json
```

The import alias `@/` means `src/`. For example, `@/data/portfolio` is `src/data/portfolio.js`.

---

## 3. How the App Router architecture works

Next.js's **App Router** turns folders inside `src/app/` into URLs:

- `src/app/page.js` → `/` (the home page).
- `src/app/layout.js` wraps every page. It sets the `<html lang="en">`, loads fonts (Inter for body text, Source Serif 4 for headings) and exports `metadata`, which Next.js turns into `<title>`, `<meta>` and Open Graph tags.
- Special files such as `opengraph-image.js`, `robots.js` and `sitemap.js` automatically become `/opengraph-image`, `/robots.txt` and `/sitemap.xml`.

**Server vs client components.** By default, components render on the server into plain HTML, which is fast and good for SEO. A file that starts with `"use client"` also runs in the browser and can use state, effects and event handlers. Here:

| Server components (HTML only) | Client components (interactive) |
|---|---|
| HSCRecognition, Biography, Achievements, Timeline, Documents, Footer, SectionHeading, KenyaStripe, PortfolioImage | Navbar (mobile menu, active link), Hero (entrance animation), Gallery (lightbox), Contact (form), Reveal, MotionProvider |

**Data flow.** Components never hard-code wording. Each one imports the part of `src/data/portfolio.js` it needs:

```js
import { recognition } from "@/data/portfolio";
// ...
<dd>{recognition.awardYear}</dd>
```

When you change `portfolio.js`, every section updates automatically.

**Static output.** `npm run build` pre-renders the whole site to static HTML (all routes show `○ (Static)`), so it is fast and cheap to host.

---

## 4. Running the site locally

**Requirements:** [Node.js](https://nodejs.org) 20.9 or newer (`node -v` to check) and npm.

```bash
cd /home/juma/hsc-portfolio
npm install          # first time only: downloads dependencies
npm run dev          # starts the development server
```

Open **http://localhost:3000**. The page reloads automatically whenever you save a file.

| Command | What it does |
|---|---|
| `npm run dev` | Development server with live reload |
| `npm run lint` | Checks code for mistakes (ESLint) |
| `npm run build` | Creates the optimised production build |
| `npm start` | Serves the production build (run `npm run build` first) |
| `npm run placeholders` | Recreates any missing placeholder images (never overwrites real ones) |

Press `Ctrl + C` in the terminal to stop the server.

---

## 5. Updating the content (`portfolio.js`)

Open **`src/data/portfolio.js`**. It is split into named sections that match the website:

| Export | Controls |
|---|---|
| `person` | Name, honorific, title, intro sentence, portrait |
| `site` | SEO title, description, keywords, live website URL |
| `navigation` | Menu labels and anchors |
| `hero` | Eyebrow text, button labels, three quick facts |
| `recognition` | HSC summary, award year, category, conferred by, occasion, **citation**, medal and certificate images |
| `biography` | Paragraphs, pull quote, values, key facts |
| `achievements` | Impact stats and achievement cards |
| `timeline` | Career milestones (oldest first) |
| `gallery` | Gallery photos and captions |
| `documents` | Document titles, issuers, years, preview images and PDF files |
| `contact` | Email, phone, office, social links, enquiry types |

### Rules of thumb

- **Placeholders:** replace anything in `[square brackets]`, brackets included.
- **Empty string `""` = hidden / pending.** An empty `email`, `phone`, social `href` or document `file` makes the site hide that item, or show a tidy "pending" state, so it never shows a broken link.
- **Keep the punctuation.** Each value sits inside quotes and ends with a comma. If a sentence contains an apostrophe, keep the double quotes around it: `"Head of State's Commendation"`.
- **Verify facts.** Publish only award details, figures and roles that official records can confirm.

### Common edits

**Award year and citation**

```js
export const recognition = {
  // ...
  awardYear: "2024",
  category: "Civilian",
  occasion: "Jamhuri Day Honours List, 12 December 2024",
  citation: "For distinguished service ... (copy the certificate wording exactly)",
```

Also update `hero.highlights` ("Awarded") and the HSC entries in `achievements.items` and `timeline.events` so the year matches everywhere.

**Biography paragraphs.** Each string in `paragraphs` is one paragraph. Add or remove strings freely:

```js
paragraphs: [
  "First paragraph...",
  "Second paragraph...",
],
```

**Add a timeline milestone.** Copy an existing `{ ... },` block and edit it. `highlight: true` gives an entry the gold treatment:

```js
{
  year: "2019",
  title: "Chairperson",
  organisation: "Example County Development Board",
  description: "Led a ...",
},
```

**Contact details**

```js
email: "office@obadiahgitau.co.ke",
phone: "+254 700 000 000",
socials: [
  { platform: "LinkedIn", href: "https://www.linkedin.com/in/..." },
  { platform: "X", href: "https://x.com/..." },
],
```

Supported social icons: `LinkedIn`, `X`, `Twitter` and `Facebook`. Any other name falls back to a globe icon.

**Live website address (for SEO and share cards).** After deploying, either change `site.url` or set the environment variable `NEXT_PUBLIC_SITE_URL=https://your-domain.com` in Vercel.

Save the file. The dev server reloads instantly.

---

## 6. Replacing images and documents

Every image currently points to a labelled SVG placeholder, so there are no broken images. To use a real photo:

1. Put the photo in the matching folder under `public/images/`.
2. Update its `src` path in `src/data/portfolio.js`. Paths start with `/` and leave out the word `public`.
3. Update `width` and `height` to the photo's real pixel size, and write a meaningful `alt` description.

```js
portrait: {
  src: "/images/profile/obadiah-gitau-portrait.jpg",   // was .svg
  alt: "Obadiah Gitau in a navy suit, smiling, at his office in Nairobi",
  width: 800,
  height: 1000,
},
```

### Recommended sizes and formats

| Image | Folder | Recommended size | Shape | Format |
|---|---|---|---|---|
| Profile portrait | `public/images/profile/` | 800 × 1000 px or larger | 4:5 portrait | JPG or WebP |
| HSC medal | `public/images/hsc/` | 600 × 600 px | Square (shown in a circle) | PNG (transparent) or JPG |
| HSC certificate | `public/images/hsc/` | 1200 × 900 px | 4:3 landscape | JPG |
| Document previews | `public/images/documents/` | 1200 × 900 px | 4:3 landscape | JPG |
| Gallery photos | `public/images/gallery/` | 1200 × 900 px | 4:3 landscape | JPG or WebP |

Tips:
- Keep each photo **under ~500 KB**. Next.js resizes and serves modern formats automatically, but smaller originals upload and build faster. [Squoosh](https://squoosh.app) is a free compressor.
- Use lowercase file names with dashes and no spaces, for example `jamhuri-day-2024.jpg`.
- Images are cropped to fill their frame (`object-cover`). Centre the subject in the photo.
- **Redact** ID numbers, signatures or personal details before publishing scans of official documents.
- Once the real files are in place, you can delete the old `.svg` placeholders. `npm run placeholders` only recreates files that are missing.

### Adding downloadable PDFs

1. Save the PDF in `public/documents/`, for example `public/documents/hsc-certificate.pdf`.
2. In `portfolio.js`, set that document's `file`:

```js
file: "/documents/hsc-certificate.pdf",
```

The card then shows **View** (opens in a new tab) and **Download** buttons. While `file` is `""`, the card shows "Document pending upload".

### Adding more gallery photos

Copy one line in `gallery.items` and change `src`, `alt`, `caption`, `width` and `height`. The grid and lightbox adjust automatically.

---

## 7. Connecting the contact form

The form validates input in the browser: required fields, email format, message length, errors read out to screen readers, and focus moved to the first problem. It has no backend server:

- If `contact.email` is set, **Send enquiry** opens the visitor's own email app with the message pre-filled and addressed to that email.
- If `contact.email` is empty, the visitor sees a polite "not yet connected" notice.

To receive messages without relying on the visitor's email app, connect a form service such as [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com), or build a Next.js Route Handler (`src/app/api/contact/route.js`) that sends email. Then replace the `window.location.href = mailto…` line in `src/components/Contact.jsx` with a `fetch()` call to that endpoint. Validation rules live in `src/utils/validateForm.js`.

---

## 8. Testing and quality checks

Run these before every deployment:

```bash
npm run lint    # should print no errors
npm run build   # should end with the route list and "○ (Static)"
npm start       # then open http://localhost:3000 and check by hand
```

**Manual checklist**

- [ ] No `[square bracket]` placeholders remain (search `portfolio.js` for `[`).
- [ ] Browser DevTools device toolbar: check 320px, 375px, 768px, 1024px and 1440px. There should be no sideways scrolling.
- [ ] Keyboard only: press `Tab` through the page. Focus is always visible, the skip link appears first, the gallery lightbox opens with Enter, arrow keys switch photos, and Escape closes it.
- [ ] Submit the empty contact form: errors appear and focus jumps to the first field.
- [ ] Chrome DevTools → **Lighthouse**: run Accessibility, SEO and Performance audits.
- [ ] Share-card preview: after deploying, paste the URL into [opengraph.xyz](https://www.opengraph.xyz).

---

## 9. Deploying (GitHub + Vercel)

### Step 1: Push to GitHub

Create an empty repository on [github.com/new](https://github.com/new) (don't add a README there), then:

```bash
git add .
git commit -m "Build Obadiah Gitau HSC portfolio"
git remote add origin https://github.com/<your-username>/hsc-portfolio.git
git branch -M main
git push -u origin main
```

(If `origin` already exists, skip the `git remote add` line.)

### Step 2: Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New → Project** and import the `hsc-portfolio` repository.
3. Vercel detects Next.js automatically. Keep the default settings.
4. Under **Environment Variables**, add `NEXT_PUBLIC_SITE_URL` = your final address, for example `https://obadiahgitau.co.ke`.
5. Click **Deploy**. You will get a `*.vercel.app` link in about a minute.

Every `git push` to `main` now redeploys automatically.

### Step 3: Custom domain (optional)

In the Vercel project, go to **Settings → Domains**, add your domain (for example a `.co.ke` address from a Kenyan registrar), and copy the DNS records Vercel shows into your registrar's DNS panel. Then update `NEXT_PUBLIC_SITE_URL` and redeploy.

---

## 10. Troubleshooting

| Problem | Fix |
|---|---|
| **Warning: "Next.js inferred your workspace root… multiple lockfiles"** | There is a stray `package-lock.json` in a parent folder (for example `/home/juma/package-lock.json`). `next.config.mjs` already pins `turbopack.root` and `outputFileTracingRoot` to this project, so the warning is resolved. If you don't need that parent `package.json`/lockfile, you may delete them. |
| `npm run dev` says port 3000 is in use | Another server is running. Stop it with `Ctrl + C`, or run `npm run dev -- -p 3001`. |
| Image doesn't appear | Check that the path in `portfolio.js` starts with `/images/...` (not `public/`), that the file name matches exactly (case-sensitive), and that `width`/`height` are numbers. |
| Page crashes after editing `portfolio.js` | Usually a missing comma or quote. The terminal/browser error shows the line number. Undo your last change with `Ctrl + Z` and retry. |
| Build fails fetching fonts | `next/font/google` downloads fonts at build time, so check your internet connection and retry. |
| Changes don't show in production | Rebuild (`npm run build && npm start`) or push again so Vercel redeploys. |
| `Module not found: @/...` | The file was moved or renamed. Imports are relative to `src/`. |
| Weird errors after updating packages | Delete `node_modules` and `.next`, then `npm install` again. |

---

## 11. Beginner learning roadmap

Work through these in order; each step builds on the last. Practise each one by changing something real in this project.

**Stage 1: Web foundations (1–2 weeks)**
- HTML semantics: headings, `<section>`, `<nav>`, `<figure>`, forms. [MDN: HTML basics](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- CSS layout: Flexbox and Grid. [CSS-Tricks Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), [Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Accessibility basics. [web.dev: Learn Accessibility](https://web.dev/learn/accessibility)
- *Practice:* read `Timeline.jsx` and identify each HTML element's purpose.

**Stage 2: Modern JavaScript (2–3 weeks)**
- Variables, arrays, objects, `map()`/`filter()`, arrow functions, modules (`import`/`export`), template literals. [javascript.info](https://javascript.info)
- *Practice:* in `portfolio.js`, add a fifth stat and a new timeline event.

**Stage 3: React (2–3 weeks)**
- Components, props, JSX, rendering lists with `key`, conditional rendering. [react.dev/learn](https://react.dev/learn)
- State and events (`useState`), effects (`useEffect`), refs (`useRef`).
- *Practice:* study `Contact.jsx` (state, validation) and `Gallery.jsx` (refs, `<dialog>`, keyboard events).

**Stage 4: Tailwind CSS (1 week)**
- Utility classes, responsive prefixes (`sm:`, `md:`, `lg:`), states (`hover:`, `focus-visible:`), theme tokens. [tailwindcss.com/docs](https://tailwindcss.com/docs)
- *Practice:* the brand colours live in `src/app/globals.css` under `@theme`. Change `--color-gold` and watch the whole site update.

**Stage 5: Next.js App Router (2 weeks)**
- File-based routing, layouts, server vs client components, `next/image`, `next/font`, metadata. [nextjs.org/learn](https://nextjs.org/learn)
- *Practice:* add a new page at `src/app/speaking/page.js` and link to it from the navbar.

**Stage 6: Shipping (ongoing)**
- Git basics: commit, branch, push. [GitHub Skills](https://skills.github.com)
- Deploying on Vercel, Lighthouse audits, connecting a form service.
- *Practice:* connect the contact form to Formspree (see section 7).

---

*This website is a personal professional profile. It is not an official Government of Kenya website.*
