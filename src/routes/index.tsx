import { useState } from "react";
import { ShieldCheck, UserRoundCheck } from "lucide-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Services } from "@/components/landor/Services";
import { Reveal, CountUp } from "@/components/landor/Reveal";
import { Parallax, TiltCard, RatingBars, Stars, CursorGlow } from "@/components/landor/Motion";
import { HeroSearch } from "@/components/landor/HeroSearch";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { ContactButtons } from "@/components/landor/ContactButtons";
import { ScrollProgress, BackToTop } from "@/components/landor/ScrollFx";
import { POSTS } from "@/data/posts";
import heroVilla from "@/assets/hero-villa.jpg";

import aboutCouple from "@/assets/about-couple.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaHome from "@/assets/cta-home.jpg";
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

const CHOOSE = [
  { t: "Requirement first", d: "We listen before we list. Every search starts from your budget, locality and timeline." },
  { t: "Right tenant matching", d: "Owners get screened, reliable tenants — the thing our reviewers mention most." },
  { t: "Verified paperwork", d: "Title, agreement, registration and society NOC checked before you commit." },
  { t: "Local Pune expertise", d: "Charholi, Lohegaon, Dhanori, Tingre Nagar and Viman Nagar covered street by street." },
  { t: "Commercial know-how", d: "Footfall, frontage and rent benchmarking for shops, offices and showrooms." },
  { t: "Investment view", d: "Rental yield, resale demand and handover timelines factored into every shortlist." },
  { t: "Transparent pricing", d: "Clear brokerage, clear scope, quotes in writing before any work begins." },
  { t: "After-handover support", d: "We stay reachable for renewals, resale and repeat requirements." },
];

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

const MISSION_SHOTS = [
  {
    img: aboutCouple,
    alt: "Home Craft advisor helping a Pune family choose their dream home",
    caption: "Advisor-led home search",
  },
  {
    img: aboutImg,
    alt: "Modern apartment building listed by Home Craft in Pune",
    caption: "Verified Pune inventory",
  },
];

function AboutShowcase() {
  return (
    <div className="relative mt-20 rounded-[2rem] border border-border bg-secondary/40 p-6 sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Two vertically stacked rounded images */}
        <div className="relative flex flex-col gap-5">
          {MISSION_SHOTS.map((shot, i) => (
            <div
              key={shot.caption}
              className="group relative overflow-hidden rounded-2xl bg-background shadow-sm"
            >
              <div className={`relative w-full overflow-hidden ${i === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
                <img
                  src={shot.img}
                  alt={shot.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                <span className="pointer-events-none absolute inset-x-5 bottom-5 text-left text-[0.7rem] uppercase tracking-[0.18em] text-background">
                  {shot.caption}
                </span>
              </div>
            </div>
          ))}

          {/* Floating stat card */}
          <div className="absolute -bottom-4 left-4 flex items-center gap-4 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8">
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
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                <UserRoundCheck className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <h4 className="mt-4 text-base font-medium">Experienced agents</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Discover the best properties to match your budget.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                <ShieldCheck className="h-6 w-6" strokeWidth={1.6} />
              </span>
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
              <ContactButtons size="sm" className="mt-3" />
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
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Home Craft, I'm reaching out from the website.\nName: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\nRequirement: ${form.message}`;
    window.open(`https://web.whatsapp.com/send?phone=918484947570&text=${encodeURIComponent(message)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <ScrollProgress />
      <BackToTop />
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
        {/* Proof strip */}
        <section className="bg-background pb-20 pt-28 lg:pb-24 lg:pt-40">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal>
              <p className="mx-auto max-w-3xl text-center font-display text-2xl leading-snug tracking-tight text-foreground lg:text-4xl">
                Pune families come to us with one question — <span className="text-accent">where should we live next?</span> Everything below is how we answer it.
              </p>
            </Reveal>
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
                    style={{ animationDelay: `${i * 110}ms` }}
                    className="rise-in group bg-background px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:bg-secondary"
                  >
                    <p className="eyebrow">{s.label}</p>
                    <p className="mt-3 font-display text-4xl lg:text-5xl">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
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
                {["Charholi Budruk", "Lohegaon", "Dhanori", "Tingre Nagar", "Viman Nagar"].map(
                  (area, idx) => (
                    <span
                      key={area}
                      style={{ animationDelay: `${300 + idx * 70}ms` }}
                      className="rise-in rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                    >
                      {area}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          <AboutShowcase />
        </section>

        <Services />

        {/* Who we help */}
        <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-28">
          <Reveal as="span" className="eyebrow block">
            Who we help
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-5 max-w-2xl">Different goals, one process built around you</h2>
          </Reveal>
          <Reveal delay={120} className="mt-12 block">
            <AudiencePanels />
          </Reveal>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow block">
              How it works
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-2xl">Four steps from first call to keys in hand</h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Tell us the brief", d: "Budget, locality, timeline and what the home has to do for your family." },
                { t: "Curated shortlist", d: "Only verified options that match — no time wasted on listings that don't fit." },
                { t: "Visits & negotiation", d: "We walk the site with you and negotiate price, terms and possession dates." },
                { t: "Paperwork & handover", d: "Title, agreement, registration and society NOC checked before you sign." },
              ].map((s, i) => (
                <Reveal
                  key={s.t}
                  delay={i * 100}
                  variant="flip"
                  className="card-rise group bg-background p-8 transition-colors hover:bg-card"
                >
                  <span className="font-display text-4xl text-accent/25 transition-colors group-hover:text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-6 text-xl">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

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
              <Reveal key={p.title} delay={(i % 2) * 140} variant="blur">
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
                  variant="blur"
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
              <ContactButtons size="md" />
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
        {/* Final CTA */}
        <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
          <img
            src={ctaHome}
            alt="Modern luxury villa with pool and blue sky"
            width={1920}
            height={1080}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/55" />
          <CursorGlow />

          <div className="relative mx-auto max-w-[1600px] px-6 text-center lg:px-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-medium uppercase tracking-widest text-accent-foreground">
                Get in Touch
              </span>
              <h2 className="display-lg mx-auto mt-6 max-w-3xl uppercase leading-[1.05] text-background">
                Let's make your property journey effortless
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-background/85">
                Have questions or ready to take the next step? Whether you're looking to buy, rent, or
                invest, our team is here to guide you every step of the way. Let's turn your property
                goals into reality.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto mt-12 block max-w-4xl">
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] bg-background p-6 text-left shadow-2xl sm:p-10 lg:p-12"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="group">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="group sm:col-span-2">
                    <label htmlFor="message" className="sr-only">
                      What can we help you with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What Can We Help You ?"
                      className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-4 hover:bg-foreground/90"
                  >
                    {sent ? "Request received — we'll call you back" : "Book a Call"}
                    <ArrowIcon />
                  </button>
                </div>

                <div className="mt-6 flex flex-col items-center gap-3">
                  <p className="text-xs text-muted-foreground">Prefer talking to someone?</p>
                  <ContactButtons size="sm" />
                </div>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
