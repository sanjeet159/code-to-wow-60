import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Services } from "@/components/landor/Services";
import { Reveal, CountUp } from "@/components/landor/Reveal";
import { Parallax, TiltCard, RatingBars, Stars, CursorGlow } from "@/components/landor/Motion";
import { HeroSearch } from "@/components/landor/HeroSearch";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { POSTS } from "@/data/posts";
import heroVilla from "@/assets/hero-villa.jpg";

import aboutImg from "@/assets/about.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const TITLE = "Home Craft — Real Estate Consultant in Pune";
const DESCRIPTION =
  "Home Craft is a Pune real estate consultant rated 4.3★ for buying agent services, commercial property sales & consulting, rentals and plots. Call 084849 47570.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Home Craft Real Estate",
          telephone: "+91 84849 47570",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C1C 504, Brooklyn Pride World City, Charholi Budruk",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            postalCode: "412105",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.3",
            reviewCount: "12",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const PROJECTS = [
  { title: "3BHK residence, Charholi", place: "Pride World City, Pune", year: "Resale", img: project1 },
  { title: "Retail showroom deal", place: "Porwal Road, Lohegaon", year: "Commercial", img: project2 },
  { title: "Investor apartment portfolio", place: "Pimpri-Chinchwad", year: "Resale", img: project3 },
  { title: "Office space, 2400 sq ft", place: "Dream Elements, Lohegaon", year: "Leasing", img: project4 },
];

const REVIEWS = [
  {
    quote: "He is very helpful and understands your need and connects with right tenant.",
    name: "Google review",
    role: "Verified customer",
    img: team2,
  },
  {
    quote: "Great service and understanding of the requirement.",
    name: "Google review",
    role: "Verified customer",
    img: team1,
  },
  {
    quote: "I'm a totally satisfied customer.",
    name: "Google review",
    role: "Verified customer",
    img: team3,
  },
];

const RATING_SPLIT = [
  { stars: 5, pct: 75 },
  { stars: 4, pct: 8 },
  { stars: 3, pct: 4 },
  { stars: 2, pct: 4 },
  { stars: 1, pct: 17 },
];

const MARQUEE = [
  "Buying agent services",
  "Commercial property sales",
  "Commercial consulting",
  "Rent & tenants",
  "Plots",
  "Resale & investment",
];

const CHOOSE = [
  { t: "Requirement first", d: "We listen before we list. Every search starts from your budget, locality and timeline." },
  { t: "Right tenant matching", d: "Owners get screened, reliable tenants — the thing our reviewers mention most." },
  { t: "Verified paperwork", d: "Title, agreement, registration and society NOC checked before you commit." },
  { t: "Local Pune expertise", d: "Charholi, Lohegaon, Wagholi, Moshi and Pimpri-Chinchwad covered street by street." },
  { t: "Commercial know-how", d: "Footfall, frontage and rent benchmarking for shops, offices and showrooms." },
  { t: "Investment view", d: "Rental yield, resale demand and handover timelines factored into every shortlist." },
  { t: "Transparent pricing", d: "Clear brokerage, clear scope, quotes in writing before any work begins." },
  { t: "After-handover support", d: "We stay reachable for renewals, resale and repeat requirements." },
];

const LOGO_ICONS = {
  towers: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28V10l6-4 6 4v18" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M16 28V6l6-3 6 3v22" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 28h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 14h2M8 18h2M8 22h2M20 10h2M20 14h2M20 18h2M20 22h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  house: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28V14l10-8 10 8v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 14L16 20l10-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M6 28h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  block: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="6" width="18" height="22" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 11h3M18 11h3M11 16h3M18 16h3M11 21h3M18 21h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M7 28h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  spire: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M10 28V16l6-12 6 12v12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 28h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 20h6M14 24h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
};

const LOGOS = [
  { name: "Charholi Budruk", icon: "towers" },
  { name: "Lohegaon", icon: "house" },
  { name: "Wagholi", icon: "block" },
  { name: "Pimpri-Chinchwad", icon: "spire" },
  { name: "Moshi", icon: "towers" },
] as const;

const FEATURE_ICONS = {
  agents: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 7h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 23c0-2.8 2.5-4.5 5.5-4.5S15 20.2 15 23" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="13.5" r="0.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  legality: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 3l2 2.4 3-1 1 3 3 1-1 3 2.4 2-2.4 2 1 3-3 1-1 3-3-1-2 2.4-2-2.4-3 1-1-3-3-1 1-3-2.4-2 2.4-2-1-3 3-1 1-3 3 1 2-2.4z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const TEAM = [
  { name: "Client advisory", role: "Buying & rental guidance", img: team1 },
  { name: "Commercial desk", role: "Shops, offices, showrooms", img: team3 },
  { name: "Rentals desk", role: "Owners & tenant matching", img: team2 },
];

const AUDIENCES = [
  {
    no: "01",
    title: "Buyers",
    text: "Find the right flat, plot or commercial space from verified listings.",
    img: project1,
  },
  {
    no: "02",
    title: "Sellers",
    text: "Market-priced listings promoted to serious, screened buyers.",
    img: project2,
  },
  {
    no: "03",
    title: "Investors",
    text: "Yield-focused shortlists with resale demand and handover timelines.",
    img: project3,
  },
  {
    no: "04",
    title: "Owners",
    text: "Reliable tenant matching and rental management you can count on.",
    img: project4,
  },
];

function AudiencePanels() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Mobile: simple static accordion-style cards */}
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:hidden">
        {AUDIENCES.map((p) => (
          <div key={p.title} className="bg-background p-7">
            <span className="text-xs tracking-[0.2em] text-accent">{p.no}</span>
            <h3 className="mt-5 text-lg">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Desktop: interactive expanding panels — hover/focus to expand */}
      <div className="hidden h-[420px] overflow-hidden rounded-sm border border-border sm:flex">
        {AUDIENCES.map((p, i) => {
          const isActive = active === i;
          return (
            <button
              key={p.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-pressed={isActive}
              className={`group relative flex h-full flex-col justify-end overflow-hidden border-r border-border/60 p-8 text-left outline-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] last:border-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset ${
                isActive ? "flex-[2.6]" : "flex-[1]"
              }`}
            >
              <img
                src={p.img}
                alt=""
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive
                    ? "bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent opacity-100"
                    : "bg-background opacity-100"
                }`}
              />
              <div className="relative z-10">
                <span className="text-xs tracking-[0.2em] text-accent">{p.no}</span>
                <h3
                  className={`mt-4 text-2xl transition-colors duration-500 ${
                    isActive ? "text-background" : "text-foreground"
                  }`}
                >
                  {p.title}
                </h3>
                <p
                  className={`mt-3 max-w-[220px] overflow-hidden text-sm leading-relaxed transition-all duration-500 ${
                    isActive
                      ? "max-h-24 text-background/85 opacity-100"
                      : "max-h-0 text-muted-foreground opacity-0"
                  }`}
                >
                  {p.text}
                </p>
                <span
                  className={`mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-background transition-all duration-500 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  Learn more
                  <ArrowIcon />
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

const TAB_ICONS = {
  buy: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 28V14l10-8 10 8v14" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 28v-9h8v9" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  sale: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 5h7a2 2 0 0 1 2 2v7l-13 13a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8L17 5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="22" cy="10" r="1.6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  rent: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16.2 16.2L28 28M28 28v-6M28 28h-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plots: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4c5 5.5 8 9.6 8 13.2A8 8 0 1 1 8 17.2C8 13.6 11 9.5 16 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="16" cy="17" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  commercial: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 14h20M12 8v20M12 20h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 8l6-4h8l6 4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

const ABOUT_TABS = [
  {
    key: "Buy",
    icon: "buy",
    title: "Buying a home in Pune",
    text: "Verified flats, villas and plots shortlisted around your budget, commute and family needs — we handle site visits, negotiation and paperwork.",
    img: project1,
  },
  {
    key: "Sale",
    icon: "sale",
    title: "Selling with Home Craft",
    text: "Market-priced listings promoted to serious, screened buyers — from first enquiry through to registration, with no runaround.",
    img: project2,
  },
  {
    key: "Rent",
    icon: "rent",
    title: "Renting, without the runaround",
    text: "Verified listings for tenants and reliable, screened tenants for owners — move-in ready in days, not months.",
    img: project3,
  },
  {
    key: "Plots",
    icon: "plots",
    title: "Plots & land advisory",
    text: "Clear-title residential and NA plots across Pune's growth corridors, with ownership and zoning checked before you commit.",
    img: project4,
  },
  {
    key: "Commercial",
    icon: "commercial",
    title: "Commercial consulting",
    text: "Shops, offices and warehouses — bought, sold or leased with real footfall, frontage and rent-yield data behind every call.",
    img: aboutImg,
  },
] as const;

function AboutTabs() {
  const [active, setActive] = useState<(typeof ABOUT_TABS)[number]["key"]>("Buy");
  const current = ABOUT_TABS.find((t) => t.key === active) ?? ABOUT_TABS[0];
  const Icon = TAB_ICONS[current.icon];

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {ABOUT_TABS.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                isActive
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-secondary text-foreground hover:bg-background"
              }`}
            >
              {tab.key}
            </button>
          );
        })}
      </div>

      <div
        key={current.key}
        className="rise-in mt-8 overflow-hidden rounded-sm border border-border bg-secondary/60"
      >
        <div className="grid gap-0 sm:grid-cols-[1fr_1.3fr]">
          <div className="h-48 overflow-hidden sm:h-full">
            <img
              src={current.img}
              alt={current.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-8">
            <Icon className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-xl">{current.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{current.text}</p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground transition-all duration-300 hover:gap-4"
            >
              Talk to us about {current.key.toLowerCase()}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const MISSION_SHOTS = [
  {
    img: team1,
    alt: "Home Craft advisor handing over keys to a client in Pune",
    caption: "Advisor-led site visits",
  },
  {
    img: aboutImg,
    alt: "Modern apartment building listed by Home Craft in Pune",
    caption: "Verified Pune inventory",
  },
];

function AboutShowcase() {
  const [active, setActive] = useState(1);

  return (
    <div className="relative mt-20 rounded-[2rem] border border-border bg-secondary/40 p-6 sm:p-10 lg:p-14">

      <div className="pointer-events-none absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Layered interactive imagery */}
        <Reveal variant="clip">
          <div className="relative">
            <div className="flex items-end gap-4 sm:gap-6">
              {MISSION_SHOTS.map((shot, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={shot.caption}
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={`group relative overflow-hidden rounded-2xl outline-none transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-accent ${
                      i === 0 ? "aspect-[4/5]" : "aspect-[3/4]"
                    } ${isActive ? "flex-[1.35] -translate-y-3 shadow-2xl" : "flex-[0.8] shadow-md"}`}
                  >
                    <img
                      src={shot.img}
                      alt={shot.alt}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "scale-105 saturate-100" : "scale-100 saturate-[0.4]"
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
                        isActive
                          ? "bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent"
                          : "bg-foreground/35"
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute inset-x-4 bottom-4 text-left text-[0.7rem] uppercase tracking-[0.18em] text-background transition-all duration-500 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                      }`}
                    >
                      {shot.caption}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-xl backdrop-blur sm:left-8">
              <div>
                <p className="font-display text-2xl leading-none">4.3</p>
                <div className="mt-1">
                  <Stars value={4.3} />
                </div>
              </div>
              <span className="h-9 w-px bg-border" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                12 Google reviews
                <br />
                from Pune families
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="flex flex-col lg:pl-4">
          <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
            Why families choose us
          </span>
          <h3 className="display-lg mt-4">
            Making your move simple with{" "}
            <span className="text-accent">our advisors</span>
          </h3>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Every client gets one advisor from first shortlist to handover — honest pricing advice,
            verified documents and site visits planned around your schedule.
          </p>


          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
              <FEATURE_ICONS.agents className="h-7 w-7 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
              <h4 className="mt-4 text-base font-medium">Experienced agents</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Discover the best properties to match your budget.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
              <FEATURE_ICONS.legality className="h-7 w-7 text-accent transition-transform duration-500 group-hover:-translate-y-1" />
              <h4 className="mt-4 text-base font-medium">Clear legality</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Verified paperwork and transparent terms on every deal.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-background px-6 py-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Open 10:00 am – 8:00 pm
              </p>
              <a
                href="tel:+918484947570"
                className="link-sweep mt-1 inline-block font-display text-2xl"
              >
                084849 47570
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm text-accent-foreground transition-all duration-300 hover:gap-4 hover:opacity-85"
              >
                Read more
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm transition-all duration-300 hover:gap-4 hover:bg-secondary"
              >
                Visit our office
                <ArrowIcon />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}


function Index() {
  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative">
          <div className="relative min-h-[92vh] w-full overflow-hidden">
            <img
              src={heroVilla}
              alt="Modern luxury home at sunset"
              width={1920}
              height={1088}
              className="image-unveil absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/10 to-foreground/25" />
            <CursorGlow />

            <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-36 lg:px-10 lg:pt-40">
              <div className="text-center">
                <span
                  className="rise-in inline-block rounded-full bg-background/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-background backdrop-blur-md"
                  style={{ animationDelay: "40ms" }}
                >
                  Real estate consultants · Pune
                </span>
                <h1
                  className="rise-in mt-6 font-display text-[clamp(3.5rem,13vw,12rem)] font-light leading-[0.9] tracking-tight text-background"
                  style={{ animationDelay: "140ms" }}
                >
                  Dream Home
                </h1>
                <p
                  className="rise-in mx-auto mt-6 max-w-xl text-base text-background/85"
                  style={{ animationDelay: "260ms" }}
                >
                  Buy, sell, rent or invest across Pune with a team that actually
                  listens — 4.3★ from 12 Google reviews.
                </p>
              </div>
            </div>
          </div>

          {/* Search widget — pinned to hero's bottom edge, dropped by half its
              height so it overlaps onto the section below (like the reference). */}
          <div
            className="rise-in absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-5xl translate-y-1/2 px-6 lg:px-10"
            style={{ animationDelay: "380ms" }}
          >
            <HeroSearch />
          </div>
        </section>

        {/* Trusted by — auto-scrolling logo marquee */}
        <section className="overflow-hidden bg-background pb-16 pt-28 lg:pb-20 lg:pt-40">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-10">
            <p className="max-w-[220px] shrink-0 text-lg leading-snug text-foreground">
              Active across Pune's fastest-growing corridors
            </p>
            <div className="relative flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
              <div className="marquee-track flex w-max items-center gap-16">
                {[...LOGOS, ...LOGOS].map((l, i) => {
                  const Icon = LOGO_ICONS[l.icon];
                  return (
                    <span
                      key={`${l.name}-${i}`}
                      className="flex items-center gap-3 text-muted-foreground/70 transition-colors hover:text-foreground"
                    >
                      <Icon className="h-7 w-7" />
                      <span className="text-sm font-semibold uppercase tracking-widest">
                        {l.name}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative mx-auto max-w-[1600px] px-6 pb-28 pt-8 lg:px-10 lg:pb-36 lg:pt-12"
        >
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
            <Reveal>
              <span className="eyebrow block">About Home Craft</span>
              <h2 className="display-lg mt-5 max-w-3xl">
                A Pune consultancy that handles the whole{" "}
                <span className="text-accent">property journey</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="max-w-xl text-muted-foreground">
                From first search to final registration, we guide buyers, sellers, tenants and
                investors through Pune's property market with clear advice, verified listings and
                paperwork that actually checks out.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Charholi Budruk", "Lohegaon", "Wagholi", "Pimpri-Chinchwad", "Moshi"].map(
                  (area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide transition-colors hover:border-accent hover:text-accent"
                    >
                      {area}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          {/* Stat rail */}
          <Reveal delay={140} className="mt-14 block">
            <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {[
                { label: "Google rating", value: <span className="text-accent">4.3</span> },
                { label: "Reviews", value: <CountUp to={12} /> },
                { label: "Services", value: <CountUp to={5} suffix="+" /> },
                { label: "Corridors covered", value: <CountUp to={5} suffix="+" /> },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="group bg-background px-6 py-8 text-center transition-colors duration-500 hover:bg-secondary"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <p className="eyebrow">{s.label}</p>
                  <p className="mt-3 font-display text-4xl lg:text-5xl">{s.value}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Interactive service tabs */}
          <Reveal delay={120} className="mt-16 block">
            <AboutTabs />
          </Reveal>

          <AboutShowcase />

          <Reveal delay={120} className="mt-20 block">
            <AudiencePanels />
          </Reveal>
        </section>


        <Services />

        {/* Portfolio */}
        <section id="projects" className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal as="span" className="eyebrow block">
            Selected work
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-5 max-w-2xl">Recent deals and fit-outs around Pune</h2>
          </Reveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 140} variant="up">
                <a href="#contact" className="group block">
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 lg:h-[420px]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute bottom-5 left-5 translate-y-3 rounded-full bg-accent px-4 py-2 text-xs uppercase tracking-widest text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {p.year}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl transition-colors duration-300 group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.place}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{p.year}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="relative border-y border-border bg-secondary py-24 lg:py-32">
          <CursorGlow />
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow block">
              Google review summary
            </Reveal>
            <div className="mt-5 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
              <Reveal>
                <h2 className="display-lg max-w-xl">
                  Rated <span className="text-accent">4.3</span> by the people we've worked with
                </h2>
              </Reveal>
              <Reveal delay={120} className="flex items-center gap-8">
                <div className="text-center">
                  <p className="font-display text-6xl">4.3</p>
                  <Stars value={4.3} className="mt-1" />
                  <p className="mt-1 text-xs text-muted-foreground">(12)</p>
                </div>
                <RatingBars data={RATING_SPLIT} className="w-full max-w-sm" />
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {REVIEWS.map((t, i) => (
                <Reveal key={t.quote} variant="scale" delay={i * 140}>
                  <TiltCard className="flex h-full flex-col justify-between rounded-sm bg-card p-8 lg:p-10">
                    <div>
                      <Stars value={5} />
                      <blockquote className="mt-5 text-lg leading-relaxed">"{t.quote}"</blockquote>
                    </div>
                    <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                      <img
                        src={t.img}
                        alt=""
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </figcaption>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service marquee */}
        <section className="overflow-hidden border-b border-border py-10">
          <div className="marquee-track flex w-max items-center gap-16 px-10">
            {[...MARQUEE, ...MARQUEE].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="flex items-center gap-16 font-display text-2xl tracking-tight text-muted-foreground/60 lg:text-3xl"
              >
                {b}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </section>

        {/* Why choose */}
        <section className="relative bg-surface-dark py-24 text-surface-dark-foreground lg:py-32">
          <CursorGlow />
          <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow-light block">
              Why choose Home Craft
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-2xl">
                Straight answers, verified paperwork, no pressure
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {CHOOSE.map((c, i) => (
                <Reveal
                  key={c.t}
                  delay={(i % 4) * 100}
                  className="card-rise group bg-surface-dark p-8 transition-colors hover:bg-white/5"
                >
                  <span className="text-xs text-white/35">0{i + 1}</span>
                  <h3 className="mt-6 text-xl transition-colors group-hover:text-accent">{c.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{c.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal variant="left">
              <span className="eyebrow">How we're organised</span>
              <h2 className="display-lg mt-5 max-w-3xl">
                One small team across advisory, commercial and rentals
              </h2>
            </Reveal>
            <Reveal variant="right" delay={120} className="w-fit">
              <a
                href="tel:+918484947570"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm transition-all duration-300 hover:gap-4 hover:bg-secondary"
              >
                Talk to us
                <ArrowIcon />
              </a>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 120} className="group">
                <div className="overflow-hidden rounded-sm bg-secondary">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-80 w-full object-cover grayscale transition-all duration-[1000ms] group-hover:scale-105 group-hover:grayscale-0 lg:h-96"
                  />
                </div>
                <h3 className="mt-5 text-xl transition-colors duration-300 group-hover:text-accent">
                  {m.name}
                </h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Insights */}
        <section id="blog" className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Reveal as="span" className="eyebrow block text-accent">
                  Insights
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display-lg mt-5">Practical notes on the Pune market</h2>
                </Reveal>
              </div>
              <Reveal delay={160}>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm text-accent transition-all duration-300 hover:gap-4 hover:bg-accent hover:text-accent-foreground"
                >
                  All insights
                  <ArrowIcon />
                </Link>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {POSTS.slice(0, 3).map((p, i) => (
                <Reveal key={p.title} delay={i * 140} className="group">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="h-60 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="text-accent">{p.cat}</span>
                      <span>·</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl leading-snug transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.avatar}
                          alt=""
                          loading="lazy"
                          className="h-9 w-9 rounded-full object-cover"
                        />
                        <p className="text-sm">{p.author}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:gap-4 group-hover:text-accent">
                        Read more
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
