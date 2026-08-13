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
      <div className="relative mx-auto max-w-[1600px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Reveal>
            <h2 className="display-2xl max-w-2xl leading-[0.9] tracking-tight">
              Let's find <br />
              <span className="text-accent">your place</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:pt-4">
            <div className="flex flex-col gap-8">
              <p className="max-w-md text-lg leading-relaxed text-white/60">
                Buying, selling, renting or investing in Pune? Tell us the requirement and we'll
                come back with options that actually fit.
              </p>
              <ContactButtons tone="dark" size="lg" className="flex-row flex-wrap" showInstagram />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

        <div className="grid gap-16 py-20 md:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.8fr_1fr]">
          <div className="group">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Office</p>
            <p className="mt-6 text-base leading-relaxed text-white/60 transition-colors group-hover:text-white/90">
              C1C 504, Brooklyn, <br />
              Pride World City, Charholi Budruk, <br />
              Pune, Maharashtra 412105
            </p>
          </div>
          <div className="group">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Branch</p>
            <p className="mt-6 text-base leading-relaxed text-white/60 transition-colors group-hover:text-white/90">
              Shop No. A2, Dream Elements, <br />
              opp. Orchid Hospital, Porwal Road, <br />
              Lohegaon, Pune 411047
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</p>
            <div className="mt-6 space-y-4">
              <p className="text-base text-white/60">Open daily · 10am – 8pm</p>
              <a
                href="https://maps.google.com/?q=Home+Craft+Real+Estate+Charholi+Budruk+Pune"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-all hover:text-accent"
              >
                Get directions
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Services</p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
              {SERVICE_LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="/#services"
                    className="text-sm text-white/50 transition-colors hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-12 border-t border-white/10 py-12 text-sm text-white/40 md:flex-row">
          <p className="order-2 md:order-1">© {new Date().getFullYear()} Home Craft Real Estate.</p>
          <p className="order-1 font-display text-6xl tracking-[-0.05em] text-white/10 transition-all duration-700 hover:scale-105 hover:text-white/20 md:order-2 lg:text-[10rem]">
            home craft
          </p>
        </div>
      </div>
    </footer>
  );
}
