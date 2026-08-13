import { ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { CursorGlow } from "@/components/landor/Motion";
import { ContactButtons } from "@/components/landor/ContactButtons";

export const SERVICE_LINKS = [
  "Buying agent services",
  "Commercial property sales",
  "Commercial consulting",
  "Rent & tenants",
  "Plots",
  "Resale & investment",
];

export function SiteFooter() {
  return (
    <footer className="relative bg-surface-dark text-surface-dark-foreground">
      <CursorGlow />
      <div className="relative mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <h2 className="display-xl">Let's find your place</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-white/60">
              Buying, selling, renting or investing in Pune? Tell us the requirement and we'll come
              back with options that actually fit.
            </p>
            <ContactButtons tone="dark" size="lg" className="mt-8" showInstagram />
          </Reveal>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr]">
          <div>
            <p className="eyebrow-light">Office</p>
            <p className="mt-4 text-white/60">
              C1C 504, Brooklyn, Pride World City, near Manhattan, Charholi Budruk, Pune,
              Maharashtra 412105
            </p>
          </div>
          <div>
            <p className="eyebrow-light">Branch</p>
            <p className="mt-4 text-white/60">
              Shop No. A2, Dream Elements Building, opp. Orchid Hospital, Porwal Road, Lohegaon,
              Pune 411047
            </p>
          </div>
          <div>
            <p className="eyebrow-light">Contact</p>
            <ContactButtons tone="dark" size="sm" className="mt-4" showInstagram />
            <p className="mt-3 text-white/60">Open daily · 10:00 am – 8:00 pm</p>
            <a
              href="https://maps.google.com/?q=Home+Craft+Real+Estate+Charholi+Budruk+Pune"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-accent transition-all duration-300 hover:gap-4"
            >
              Get directions
              <ArrowIcon />
            </a>
          </div>
          <div>
            <p className="eyebrow-light">Services</p>
            <ul className="mt-4 space-y-2 text-white/60">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a href="/#services" className="link-sweep transition-colors hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Home Craft Real Estate.</p>
          <p className="font-display text-4xl tracking-[-0.05em] text-white/10 transition-colors hover:text-white/20 lg:text-8xl">
            home craft
          </p>
        </div>
      </div>
    </footer>
  );
}
