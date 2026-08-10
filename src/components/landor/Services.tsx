import { useState } from "react";

import { ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";

import flatsImg from "@/assets/project-1.jpg";
import villasImg from "@/assets/about.jpg";
import plotsImg from "@/assets/project-3.jpg";
import warehouseImg from "@/assets/project-4.jpg";
import commercialImg from "@/assets/project-2.jpg";
import rentalsImg from "@/assets/hero-villa.jpg";

const SERVICES = [
  {
    no: "01",
    title: "Flats & apartments",
    text: "Buy or sell 1BHK to 4BHK homes across Pune's growth corridors — resale, fresh possession or under-construction, all listings verified before they reach you.",
    tags: ["Buy", "Sell", "Resale"],
    img: flatsImg,
  },
  {
    no: "02",
    title: "Villas & independent houses",
    text: "Bungalows and row houses vetted for title clarity, plot size and construction quality, so what you view is exactly what you get on paper.",
    tags: ["Bungalows", "Row houses", "Title check"],
    img: villasImg,
  },
  {
    no: "03",
    title: "Plots & land",
    text: "Clear-title residential and NA plots across Pune's expanding corridors, with survey, ownership and zoning due diligence done before you sign anything.",
    tags: ["Residential plots", "NA land", "Due diligence"],
    img: plotsImg,
  },
  {
    no: "04",
    title: "Warehouses & industrial",
    text: "Storage, logistics and light-industrial units matched to access roads, footfall and compliance needs — for owners, tenants and investors alike.",
    tags: ["Warehousing", "Logistics", "Industrial"],
    img: warehouseImg,
  },
  {
    no: "05",
    title: "Commercial property",
    text: "Shops, showrooms and office floors — bought, sold or consulted on with real footfall, frontage and rent-yield data behind every recommendation.",
    tags: ["Shops", "Offices", "Showrooms"],
    img: commercialImg,
  },
  {
    no: "06",
    title: "Rentals & tenant matching",
    text: "Flats, villas, warehouses and commercial units — reliable, screened tenants for owners and verified listings for renters, with paperwork handled end to end.",
    tags: ["Rent", "Tenants", "Owners"],
    img: rentalsImg,
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="services"
      className="relative bg-surface-dark py-24 text-surface-dark-foreground lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <span className="eyebrow-light block">Our services</span>
            <h2 className="display-lg mt-5 max-w-2xl">
              Buy · Sale · Rent · Plot ·{" "}
              <span className="text-accent">Commercial</span>
            </h2>
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

        <div className="mt-2">
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <Reveal key={s.title} delay={i * 60} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <div className="flex items-center gap-8 sm:gap-12">
                    <span className="text-xs text-white/35">{s.no}</span>
                    <span
                      className={`font-display text-2xl transition-colors duration-300 sm:text-3xl lg:text-4xl ${
                        isActive ? "text-accent" : "text-white group-hover:text-accent"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-white/25 text-white group-hover:border-accent group-hover:text-accent"
                    }`}
                  >
                    <ArrowIcon
                      className={`transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                    />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "grid-rows-[1fr] pb-10 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                      <div className="overflow-hidden rounded-sm">
                        <img
                          src={s.img}
                          alt={s.title}
                          loading="lazy"
                          className="h-56 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 sm:h-72 lg:h-80"
                        />
                      </div>
                      <div>
                        <p className="max-w-md text-white/70">{s.text}</p>
                        <div className="mt-6 flex flex-wrap gap-2.5">
                          {s.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-widest text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
