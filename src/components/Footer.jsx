import KenyaStripe from "@/components/KenyaStripe";
import { navigation, person } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink px-4 py-12 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <KenyaStripe className="mb-4" />
          <p className="font-serif text-xl text-white">
            {person.fullName}, <span className="text-gold-light">{person.honorific}</span>
          </p>
          <p className="mt-1 text-sm">{person.title}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {person.fullName}. All rights reserved.
        </p>
        <p>This is a personal professional profile and not an official Government of Kenya website.</p>
      </div>
    </footer>
  );
}
