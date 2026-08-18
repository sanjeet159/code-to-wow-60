import { useRef, useState } from "react";

import { ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { ContactButtons } from "@/components/landor/ContactButtons";

import flatsImgAsset from "@/assets/flat-society-view.jpg";
import villasImgAsset from "@/assets/services-villas.jpg";
import plotsImgAsset from "@/assets/services-plots.jpg";
import warehouseImgAsset from "@/assets/services-warehouse.jpg";
import commercialImgAsset from "@/assets/services-commercial.jpg";
import rentalsImg from "@/assets/hero-villa.jpg";

const flatsImg = flatsImgAsset;
const villasImg = villasImgAsset;
const plotsImg = plotsImgAsset;
const warehouseImg = warehouseImgAsset;
const commercialImg = commercialImgAsset;

const SERVICES = [
  {
    no: "01",
    title: "Flats & apartments",
    teaser: "1BHK – 4BHK, resale & fresh possession",
    text: "Buy or sell 1BHK to 4BHK homes across Pune's growth corridors — resale, fresh possession or under-construction, all listings verified before they reach you.",
    tags: ["Buy", "Sell", "Resale"],
    stats: [
      { k: "Corridors", v: "Charholi · Lohegaon · Dhanori" },
      { k: "Typical range", v: "₹35L – ₹1.4Cr" },
    ],
    img: flatsImg,
  },
  {
    no: "02",
    title: "Villas & independent houses",
    teaser: "Bungalows & row houses, title-checked",
    text: "Bungalows and row houses vetted for title clarity, plot size and construction quality, so what you view is exactly what you get on paper.",
    tags: ["Bungalows", "Row houses", "Title check"],
    stats: [
      { k: "Checks", v: "Title · Plot area · Build quality" },
      { k: "Typical range", v: "₹90L – ₹4Cr" },
    ],
    img: villasImg,
  },
  {
    no: "03",
    title: "Plots & land",
    teaser: "Clear-title residential & NA land",
    text: "Clear-title residential and NA plots across Pune's expanding corridors, with survey, ownership and zoning due diligence done before you sign anything.",
    tags: ["Residential plots", "NA land", "Due diligence"],
    stats: [
      { k: "Diligence", v: "7/12 · Zoning · Survey" },
      { k: "Sizes", v: "1,000 – 20,000 sq ft" },
    ],
    img: plotsImg,
  },
  {
    no: "04",
    title: "Warehouses & industrial",
    teaser: "Logistics & light-industrial units",
    text: "Storage, logistics and light-industrial units matched to access roads, footfall and compliance needs — for owners, tenants and investors alike.",
    tags: ["Warehousing", "Logistics", "Industrial"],
    stats: [
      { k: "Matched on", v: "Access · Height · Compliance" },
      { k: "Sizes", v: "2,000 – 50,000 sq ft" },
    ],
    img: warehouseImg,
  },
  {
    no: "05",
    title: "Commercial property",
    teaser: "Shops, showrooms & office floors",
    text: "Shops, showrooms and office floors — bought, sold or consulted on with real footfall, frontage and rent-yield data behind every recommendation.",
    tags: ["Shops", "Offices", "Showrooms"],
    stats: [
      { k: "Data behind it", v: "Footfall · Frontage · Yield" },
      { k: "Deal types", v: "Sale · Lease · Consulting" },
    ],
    img: commercialImg,
  },
  {
    no: "06",
    title: "Rentals & tenant matching",
    teaser: "Screened tenants, paperwork handled",
    text: "Flats, villas, warehouses and commercial units — reliable, screened tenants for owners and verified listings for renters, with paperwork handled end to end.",
    tags: ["Rent", "Tenants", "Owners"],
    stats: [
      { k: "For owners", v: "Screening · Agreement · Renewal" },
      { k: "Turnaround", v: "Most units let in 2–3 weeks" },
    ],
    img: rentalsImg,
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(0);
  const [hover, setHover] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const onListMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = listRef.current;
    const el = previewRef.current;
    if (!wrap || !el) return;
    const r = wrap.getBoundingClientRect();
    el.style.transform = `translate3d(${e.clientX - r.left - 130}px, ${e.clientY - r.top - 90}px, 0)`;
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-surface-dark py-16 text-surface-dark-foreground sm:py-24 lg:py-32"
    >
      {/* soft accent wash */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <span className="eyebrow-light block">Our services</span>
            <h2 className="display-lg mt-5 max-w-2xl">
              Buy · Sale · Rent · Plot · <span className="text-accent">Commercial</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/55">
              Six desks, one team. Open any line to see how we work on it — or just call and tell us
              what you need.
            </p>
          </Reveal>
          <Reveal delay={100} className="w-fit">
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition-all duration-300 hover:gap-4 hover:bg-white/5"
            >
              Talk to a consultant
              <ArrowIcon />
            </a>
          </Reveal>
        </div>

        <div
          ref={listRef}
          onMouseMove={onListMove}
          onMouseLeave={() => setHover(null)}
          className="relative mt-2"
        >
          {/* cursor-following preview (desktop only) */}
          <div
            ref={previewRef}
            aria-hidden
            className={`pointer-events-none absolute left-0 top-0 z-20 hidden h-[180px] w-[260px] overflow-hidden rounded-xl border border-white/15 shadow-2xl transition-opacity duration-300 lg:block ${
              hover !== null && hover !== active ? "opacity-100" : "opacity-0"
            }`}
          >
            {hover !== null && SERVICES[hover] && (
              <img
                src={SERVICES[hover]!.img}
                alt=""
                className="h-full w-full scale-105 object-cover"
              />
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
          </div>

          {SERVICES.map((s, i) => {
            const isActive = active === i;
            const isHover = hover === i;
            return (
              <Reveal key={s.title} delay={i * 60} className="group/row relative border-b border-white/10">
                {/* accent fill sweep on hover */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-y-0 left-0 -z-0 bg-accent/10 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isHover || isActive ? "w-full" : "w-0"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  aria-expanded={isActive}
                  className="group relative z-10 flex w-full items-center justify-between gap-6 px-2 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent sm:px-4 sm:py-8"
                >
                  <div className="flex min-w-0 items-center gap-6 sm:gap-12">
                    <span className="text-xs tabular-nums text-white/35">{s.no}</span>
                    <span className="min-w-0">
                      <span
                        className={`block truncate font-display text-2xl transition-all duration-300 sm:text-3xl lg:text-4xl ${
                          isActive || isHover
                            ? "translate-x-1 text-accent sm:translate-x-2"
                            : "text-white"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span
                        className={`mt-1 hidden text-sm text-white/45 transition-all duration-300 lg:block ${
                          isActive || isHover ? "translate-x-1 opacity-100 sm:translate-x-2" : "opacity-60"
                        }`}
                      >
                        {s.teaser}
                      </span>
                    </span>
                  </div>
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isActive
                        ? "rotate-45 border-accent bg-accent text-accent-foreground"
                        : "border-white/25 text-white group-hover:scale-110 group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <ArrowIcon />
                  </span>
                </button>

                <div
                  className={`relative z-10 grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "grid-rows-[1fr] pb-10 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-8 px-2 sm:px-4 lg:grid-cols-[1.05fr_1fr] lg:items-center">
                      <div className="group/img relative overflow-hidden rounded-2xl">
                        <img
                          src={s.img}
                          alt={s.title}
                          loading="lazy"
                          className="h-56 w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-105 sm:h-72 lg:h-[22rem]"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                        <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-foreground">
                          {s.no} · {s.title}
                        </span>
                      </div>
                      <div>
                        <p className="max-w-md text-white/70">{s.text}</p>

                        <dl className="mt-7 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
                          {s.stats.map((st) => (
                            <div key={st.k} className="bg-surface-dark p-4">
                              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-white/40">
                                {st.k}
                              </dt>
                              <dd className="mt-1.5 text-sm text-white/80">{st.v}</dd>
                            </div>
                          ))}
                        </dl>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-widest text-white/60 transition-colors duration-300 hover:border-accent hover:text-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <ContactButtons tone="dark" size="sm" className="mt-7" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
