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
import { SignatureCursor, GrainOverlay, Magnetic, SplitWords, Ticker } from "@/components/landor/Fx";
import { TeamMarquee, type TeamMember } from "@/components/landor/TeamMarquee";
import { ReviewSlider } from "@/components/landor/ReviewSlider";
import { BlogSlider } from "@/components/landor/BlogSlider";
import { POSTS } from "@/data/posts";
import { PROPERTIES } from "@/data/properties";
import heroVilla from "@/assets/hero-villa.jpg";

import aboutCouple from "@/assets/about-couple.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaHome from "@/assets/cta-home.jpg";
import project1 from "@/assets/project-1-atlantis.jpg";
import project2 from "@/assets/BRROKLYN.png";
import project3 from "@/assets/notting.jpg";
import project4 from "@/assets/shubh.jpg";
import audBuyers from "@/assets/aud-buyers.jpg";
import audSellers from "@/assets/aud-sellers.jpg";
import audInvestors from "@/assets/aud-investors.jpg";
import audOwners from "@/assets/aud-owners.jpg";
import shree from "@/assets/shree.png";
import sheetal from "@/assets/sheetal.jpeg";
import Pratik from "@/assets/Pratik.jpeg";
import Prabhat from "@/assets/Prabhat.jpeg";
import Ashutosh from "@/assets/Ashutosh.jpeg";

const TITLE = "Home Craft — Real Estate Consultant in Pune";
const DESCRIPTION =
  "Home Craft is a leading real estate consultant in Pune. Expert services for buying, selling, renting flats, plots, and commercial properties. Call 084849 47570.";

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
    links: [
      { rel: "preload", as: "image", href: heroVilla, fetchPriority: "high" },
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

const PROJECTS = PROPERTIES.map((property) => ({
  id: property.id,
  title: property.title,
  place: property.location,
  year: property.type,
  img: property.image,
  category: property.category,
}));

const REVIEWS = [
  {
    quote:
      "A complete solution of your property related concern. Very prompt and professional people with great understanding of clients need and property related knowledge.",
    name: "Anand Singh",
    role: "Local Guide · 13 reviews · 6 months ago",
    initial: "A",
  },
  {
    quote:
      "They are very professional, looks after every minute details of the sale process. Also Prabhat Mishra is very keen on keeping all the things transparent. I would recommend anyone to go with Home Craft Property while dealing in sale, rent or buying any property. Best Property Consultant in Dhanori.",
    name: "Sandeep Bodke",
    role: "Local Guide · 3 reviews · a year ago",
    initial: "S",
  },
  {
    quote:
      "I am pleased to write this review for Home Craft team. I met with this agent named Prabhat, who assisted me in finding the perfect property. From the very beginning, he demonstrated exceptional professionalism.",
    name: "Priyanka Dubey",
    role: "Google review · 2 years ago",
    initial: "P",
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
  { 
    name: "Prabhat", 
    role: "Founder", 
    img: Prabhat,
    phone: "+918484947570" 
  },
  { 
    name: "Pratik", 
    role: "Business Development Manager", 
    img: Pratik,
    phone: "+918446387570"
  },
  { 
    name: "Ashutosh", 
    role: "Direct Sales Manager", 
    img: Ashutosh,
    phone: "+918793637570"
  },
  { 
    name: "Shree", 
    role: "Sales Head", 
    img: shree,
    phone: "+918530687586"
  },
  { 
    name: "Sheetal", 
    role: "Lead Generation Manager", 
    img: sheetal,
    phone: "+918446887075"
  },
];

const AUDIENCES = [
  {
    no: "01",
    title: "Buyers",
    text: "Find the right flat, plot or commercial space from verified listings.",
    img: audBuyers,
  },
  {
    no: "02",
    title: "Sellers",
    text: "Market-priced listings promoted to serious, screened buyers.",
    img: audSellers,
  },
  {
    no: "03",
    title: "Investors",
    text: "Yield-focused shortlists with resale demand and handover timelines.",
    img: audInvestors,
  },
  {
    no: "04",
    title: "Owners",
    text: "Reliable tenant matching and rental management you can count on.",
    img: audOwners,
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
                decoding="async"
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
                <Link
                  to="/property/$id"
                  params={{ id: p.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-") }}
                  className={`mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-background transition-all duration-500 hover:text-accent ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  Learn more
                  <ArrowIcon />
                </Link>
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative mt-12 rounded-3xl border border-border bg-secondary/40 p-5 sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        {/* Mobile: Interactive Image/Stat Switcher | Desktop: Vertical Stack */}
        <div className="relative flex flex-col gap-5">
          <div className="block sm:hidden">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background shadow-sm">
              <img
                src={MISSION_SHOTS[activeTab]?.img}
                alt={MISSION_SHOTS[activeTab]?.alt}
                className="h-full w-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 p-4">
                <p className="text-[10px] uppercase tracking-widest text-white">{MISSION_SHOTS[activeTab]?.caption}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {MISSION_SHOTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`h-1.5 rounded-full transition-all ${activeTab === i ? "w-6 bg-accent" : "w-2 bg-border"}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden sm:flex sm:flex-col sm:gap-5">
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
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
                  <span className="pointer-events-none absolute inset-x-5 bottom-5 text-left text-[0.7rem] uppercase tracking-[0.18em] text-background">
                    {shot.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 left-4 flex items-center gap-4 rounded-2xl border border-border bg-background/95 px-5 py-4 shadow-xl backdrop-blur sm:left-8">
            <div>
              <p className="font-display text-2xl leading-none">4.3</p>
              <div className="mt-1">
                <Stars value={4.3} />
              </div>
            </div>
            <span className="h-9 w-px bg-border" />
            <p className="text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                                            '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            its loading but on refresh its shoiwng 404 page
            </p>
          </div>
        </div>

        <Reveal variant="right" delay={120} className="flex flex-col lg:pl-4">
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:text-xs">
            Why families choose us
          </span>
          <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Making your move simple with{" "}
            <span className="text-accent">our advisors</span>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:max-w-lg sm:text-base md:line-clamp-none">
            Every client gets one advisor from first shortlist to handover — honest pricing advice,
            verified documents and site visits planned around your schedule.
          </p>

          <div className="mt-6 grid gap-3 xs:grid-cols-2 sm:mt-8 sm:gap-4">
            <div className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                <UserRoundCheck className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
              </span>
              <h4 className="mt-4 text-sm font-medium sm:text-base">Experienced agents</h4>
              <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground sm:text-sm">
                Discover the best properties to match your budget.
              </p>
            </div>
            <div className="group rounded-2xl border border-border bg-background p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg sm:p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground sm:h-12 sm:w-12">
                <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.6} />
              </span>
              <h4 className="mt-4 text-sm font-medium sm:text-base">Clear legality</h4>
              <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground sm:text-sm">
                Verified paperwork and transparent terms on every deal.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-background px-5 py-4 sm:mt-10 sm:px-6 sm:py-5">
            <div>
              <p className="mb-3 text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:mb-4 sm:text-xs">
                Open 10:00 am – 8:00 pm
              </p>
              <div className="scale-90 origin-left sm:scale-100">
                <ContactButtons size="sm" showOffice={true} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Index() {
  const [propertyFilter, setPropertyFilter] = useState<'buy' | 'rent'>('buy');
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", service: "buy", location: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Home Craft, I'm interested in ${form.service}ing property.\nName: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\nLocation: ${form.location}\nMessage: ${form.message}`;
    window.open(`https://wa.me/918484947570?text=${encodeURIComponent(message)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <ScrollProgress />
      <SignatureCursor />
      <GrainOverlay />
      <BackToTop />
      <Header />

      <main className="transition-all duration-500 ease-in-out">
        {/* Hero */}
        <section id="home" className="relative">
          <div className="relative min-h-[92vh] w-full overflow-hidden sm:min-h-[85vh]">
            <img
              src={heroVilla}
              alt="Modern luxury home at sunset"
              width={1600}
              height={907}
              fetchPriority="high"
              decoding="async"
              className="image-unveil absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/10 to-foreground/25" />
            <CursorGlow />

            <div className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 pt-36 sm:min-h-[85vh] lg:px-10 lg:pt-40">
              <div className="text-center">
                <span
                  className="rise-in inline-block rounded-full bg-background/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-background backdrop-blur-md"
                  style={{ animationDelay: "40ms" }}
                >
                  Real estate consultants · Pune
                </span>
                <SplitWords
                  as="h1"
                  text="Dream Home"
                  delay={220}
                  stagger={140}
                  className="mt-6 font-display text-[clamp(2.5rem,10vw,8rem)] font-light leading-[0.9] tracking-tight text-background sm:text-[clamp(3.5rem,13vw,12rem)]"
                />
                <p
                  className="rise-in mx-auto mt-6 max-w-xl px-4 text-sm text-background/85 sm:px-0 sm:text-base"
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
            className="rise-in absolute inset-x-0 bottom-0 z-10 mx-auto w-full max-w-5xl translate-y-1/2 px-0 lg:px-10"
            style={{ animationDelay: "380ms" }}
          >
            <HeroSearch />
          </div>
        </section>

        {/* Trusted by — auto-scrolling logo marquee */}
        {/* Proof strip */}
        <section className="bg-background pb-20 pt-48 lg:pb-24 lg:pt-64">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal>
              <p className="relative z-10 mx-auto max-w-3xl pt-16 text-center font-display text-2xl leading-snug tracking-tight text-foreground sm:pt-0 lg:text-4xl">
                Pune families come to us with one question — <span className="text-accent">where should we live next?</span> Everything below is how we answer it.
              </p>
            </Reveal>
            <Reveal delay={140} className="mt-14 block">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
                {[
                  { label: "Google rating", value: <span className="text-accent">4.3</span> },
                  { label: "Reviews", value: <CountUp to={12} /> },
                  { label: "Services", value: <CountUp to={5} suffix="+" /> },
                  { label: "Corridors", value: <CountUp to={5} suffix="+" /> },
                ].map((s, i) => (
                  <div
                    key={s.label}
                    style={{ animationDelay: `${i * 110}ms` }}
                    className="rise-in group bg-background px-3 py-6 text-center transition-all duration-500 active:bg-secondary sm:px-6 sm:py-8 sm:hover:-translate-y-1 sm:hover:bg-secondary"
                  >
                    <p className="eyebrow text-[9px] sm:text-xs">{s.label}</p>
                    <p className="mt-1.5 font-display text-xl sm:mt-3 sm:text-4xl lg:text-5xl">{s.value}</p>
                  </div>
                ))}
              </div>

            </Reveal>
          </div>
        </section>

        {/* Marquee band */}
        <div className="border-y border-border bg-surface-dark text-surface-dark-foreground">
          <Ticker
            items={[
              "Flats & apartments",
              "Plots & land",
              "Commercial spaces",
              "Warehousing",
              "Rentals & tenant matching",
              "Investment advisory",
            ]}
          />
        </div>



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
                {["Charholi Budruk", "Lohegaon", "Dhanori", "Tingre Nagar", "Viman Nagar", "Kharadi"].map(
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
        <section className="mx-auto max-w-[1600px] px-6 py-16 sm:py-24 lg:px-10 lg:py-28">
          <Reveal as="span" className="eyebrow block">
            Who we help
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-5 max-w-2xl">Different goals, one process built around you</h2>
          </Reveal>
          <Reveal delay={120} className="mt-8 sm:mt-12 block">
            <AudiencePanels />
          </Reveal>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-secondary py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow block">
              How it works
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-2xl">Four steps from first call to keys in hand</h2>
            </Reveal>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4 sm:mt-14">
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
        <section id="projects" className="mx-auto max-w-[1600px] px-6 py-16 sm:py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal as="span" className="eyebrow block">
                Selected work
              </Reveal>
              <Reveal delay={80}>
                <SplitWords
                  as="h2"
                  text="Recent deals and fit-outs around Pune"
                  className="display-lg mt-5 max-w-2xl block"
                />
              </Reveal>
            </div>
            
            <Reveal delay={160} className="flex overflow-hidden rounded-full border border-border bg-background p-1">
              {(['buy', 'rent'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setPropertyFilter(t)}
                  className={`px-8 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-300 ${
                    propertyFilter === t 
                      ? "rounded-full bg-accent text-accent-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t}
                </button>
              ))}
            </Reveal>
          </div>
          
          <div className="mt-8 sm:mt-12">
            {propertyFilter === 'buy' ? (
              <div className="grid gap-10 md:grid-cols-2">
                {PROJECTS.filter(p => p.category === 'buy').map((p, i) => (
                  <Reveal key={p.id} delay={(i % 2) * 140} variant="blur">
                    <Link
                      to="/property/$id"
                      params={{ id: p.id }}
                      data-cursor="View"
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-sm">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 lg:h-[420px]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="pointer-events-none absolute bottom-5 left-5 translate-y-3 rounded-full bg-accent px-4 py-2 text-xs uppercase tracking-widest text-accent-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          {p.year}
                        </div>
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
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PROJECTS.filter(p => p.category === 'rent').map((p, i) => (
                  <Reveal key={p.id} delay={i * 100} variant="scale">
                    <a
                      href="#contact"
                      className="group block rounded-xl border border-border bg-card p-4 transition-all duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute right-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-sm">
                          Rental
                        </div>
                      </div>
                      <div className="mt-4">
                        <h3 className="line-clamp-1 text-lg font-medium transition-colors group-hover:text-accent">
                          {p.title}
                        </h3>
                        <div className="mt-1 flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">{p.place}</p>
                          <p className="text-sm font-semibold text-accent">{PROPERTIES.find(orig => orig.id === p.id)?.price.split(' ')[0]}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                          <span className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                            {PROPERTIES.find(orig => orig.id === p.id)?.area}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[10px] font-medium text-accent">
                            Details <ArrowIcon className="h-2 w-2" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="relative border-y border-border bg-secondary py-16 sm:py-24 lg:py-32">
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

            <div className="mt-10 sm:mt-14">
              <Reveal variant="blur" delay={200}>
                <ReviewSlider reviews={REVIEWS} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="relative bg-surface-dark py-16 text-surface-dark-foreground sm:py-24 lg:py-32">
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
            <div className="mt-10 grid gap-px bg-white/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
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
        <section id="team" className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <Reveal variant="left">
                <span className="eyebrow">How we're organised</span>
                <h2 className="display-lg mt-5 max-w-3xl">
                  One small team across advisory, commercial and rentals
                </h2>
              </Reveal>
            </div>
          </div>
          <Reveal delay={160} className="mt-10 sm:mt-14 block">
            <TeamMarquee team={TEAM as TeamMember[]} />
          </Reveal>
        </section>

        {/* Insights */}
        <section id="blog" className="border-t border-border py-16 sm:py-24 lg:py-32">
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
                <Magnetic strength={0.28}>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm text-accent transition-all duration-300 hover:gap-4 hover:bg-accent hover:text-accent-foreground"
                  >
                    All insights
                    <ArrowIcon />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
            {/* Mobile: Swipe Slider */}
            <div className="mt-10 block sm:hidden">
              <BlogSlider posts={POSTS.slice(0, 5)} />
            </div>

            {/* Desktop: Grid */}
            <div className="mt-14 hidden grid-cols-3 gap-8 sm:grid">
              {POSTS.slice(0, 3).map((p, i) => (
                <Reveal key={p.title} delay={i * 140} className="group">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        decoding="async"
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
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/5 p-1.5 shadow-inner">
                          <img
                            src="/favicon.png"
                            alt="Home Craft"
                            className="h-full w-full object-contain grayscale opacity-70"
                          />
                        </div>
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
        <section id="contact" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
          <img
            src={ctaHome}
            alt="Modern luxury villa with pool and blue sky"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/55" />
          <CursorGlow />

          <div className="relative mx-auto max-w-[1600px] px-6 text-center lg:px-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-[10px] font-medium uppercase tracking-widest text-accent-foreground sm:px-5 sm:py-2 sm:text-xs">
                Get in Touch
              </span>
              <SplitWords
                as="h2"
                text="Let's make your property journey effortless"
                className="display-lg mx-auto mt-5 block max-w-3xl uppercase leading-[1.05] text-background sm:mt-6"
              />
              <p className="mx-auto mt-4 line-clamp-3 text-sm text-background/85 sm:mt-6 sm:max-w-2xl sm:line-clamp-none">
                Have questions or ready to take the next step? Whether you're looking to buy, rent, or
                invest, our team is here to guide you every step of the way.
              </p>
            </Reveal>

            <Reveal delay={120} className="mx-auto mt-8 block max-w-4xl sm:mt-12">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-background p-6 text-left shadow-2xl sm:rounded-[2rem] sm:p-10 lg:p-12"
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
                  <div className="group">
                    <label htmlFor="service" className="sr-only">
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={(e) => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground focus:border-accent focus:outline-none appearance-none"
                    >
                      <option value="buy" className="bg-background text-foreground">Buy</option>
                      <option value="sell" className="bg-background text-foreground">Sell</option>
                      <option value="rent" className="bg-background text-foreground">Rent</option>
                    </select>
                  </div>
                  <div className="group">
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={form.location}
                      onChange={handleChange}
                      placeholder="Preferred Location"
                      className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div className="group sm:col-span-2">
                    <label htmlFor="message" className="sr-only">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={1}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any additional details?"
                      className="w-full resize-none border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <Magnetic strength={0.18} className="w-full">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:gap-4 hover:bg-foreground/90"
                    >
                      {sent ? "Request received — we'll call you back" : "Book a Call"}
                      <ArrowIcon />
                    </button>
                  </Magnetic>
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
