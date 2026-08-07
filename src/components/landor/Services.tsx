import { useState } from "react";
import { ArrowIcon } from "./Header";

import img1 from "@/assets/project-1.jpg";
import img2 from "@/assets/project-2.jpg";
import img3 from "@/assets/project-3.jpg";
import img4 from "@/assets/project-4.jpg";
import img5 from "@/assets/about.jpg";

const SERVICES = [
  { no: "01", title: "Real estate development", img: img1 },
  { no: "02", title: "Sales and marketing", img: img2 },
  { no: "03", title: "Construction management", img: img3 },
  { no: "04", title: "Investment and capital", img: img4 },
  { no: "05", title: "Architecture and designing", img: img5 },
];

const TAGS = ["Hospitality", "Real estate", "Marketing"];

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-surface-dark py-24 text-surface-dark-foreground lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow-light">Our Services</span>
            <h2 className="display-lg mt-5 max-w-2xl">
              Take a brief look at some of the services we offer
            </h2>
          </div>
          <a
            href="#projects"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm transition-colors hover:bg-white/10"
          >
            Explore Services
            <ArrowIcon />
          </a>
        </div>

        <div className="divide-y divide-white/10">
          {SERVICES.map((s, i) => {
            const isOpen = active === i;
            return (
              <div key={s.no}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center justify-between gap-6 py-8 text-left"
                >
                  <span className="flex items-baseline gap-6 lg:gap-14">
                    <span className="text-xs text-white/40">{s.no}</span>
                    <span
                      className={`font-display text-2xl transition-colors lg:text-4xl ${
                        isOpen ? "text-accent" : "text-surface-dark-foreground"
                      }`}
                    >
                      {s.title}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25">
                    <ArrowIcon />
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-500 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    <div className="grid gap-8 pb-12 md:grid-cols-2">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="h-64 w-full rounded-sm object-cover lg:h-80"
                      />
                      <div className="flex flex-col justify-center gap-6">
                        <p className="max-w-md text-white/65">
                          We create innovative, modern architectural designs that blend luxury,
                          functionality and timeless aesthetics. Every structure is meticulously
                          planned and delivered.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {TAGS.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
