import { createFileRoute } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Services } from "@/components/landor/Services";
import { Reveal, CountUp } from "@/components/landor/Reveal";
import { Parallax, TiltCard, RatingBars, Stars, CursorGlow } from "@/components/landor/Motion";
import { HeroSearch } from "@/components/landor/HeroSearch";
import heroVilla from "@/assets/hero-villa.jpg";

import aboutImg from "@/assets/about.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

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

const HERO_CARDS = [
  {
    no: "01",
    title: "Buy · Sale · Rent",
    text: "Flats, plots, shops and offices across Pune and Pimpri-Chinchwad — verified listings, honest pricing, no runaround.",
  },
  {
    no: "02",
    title: "Commercial consulting",
    text: "Buying, selling and leasing advice for commercial property, backed by real location and rent-yield data.",
  },
  {
    no: "03",
    title: "Plots & land",
    text: "Clear-title plots and NA land across Pune's growth corridors, with paperwork checked before you commit.",
  },
];

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

const TEAM = [
  { name: "Client advisory", role: "Buying & rental guidance", img: team1 },
  { name: "Commercial desk", role: "Shops, offices, showrooms", img: team3 },
  { name: "Rentals desk", role: "Owners & tenant matching", img: team2 },
];

const POSTS = [
  {
    img: blog1,
    cat: "Buying guide",
    date: "Pune market",
    title: "What to check before buying a flat in Charholi Budruk",
    author: "Home Craft desk",
    avatar: team1,
  },
  {
    img: blog2,
    cat: "Renting",
    date: "For owners",
    title: "How we screen tenants so your property stays trouble-free",
    author: "Home Craft desk",
    avatar: team3,
  },
  {
    img: blog3,
    cat: "Investment",
    date: "Market notes",
    title: "Plot or flat: which holds value better around Pune's PCMC belt",
    author: "Home Craft desk",
    avatar: team2,
  },
];

function Index() {
  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="relative min-h-[92vh] w-full">
            <img
              src={heroVilla}
              alt="Modern luxury home at sunset"
              width={1920}
              height={1088}
              className="image-unveil absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/45 via-foreground/10 to-foreground/25" />
            <CursorGlow />

            <div className="relative flex min-h-[92vh] flex-col items-center justify-between px-6 pb-10 pt-36 lg:px-10 lg:pt-40">
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

              <div className="rise-in mt-16 w-full" style={{ animationDelay: "380ms" }}>
                <HeroSearch />
              </div>
            </div>
          </div>
        </section>




        {/* Hero cards */}
        <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {HERO_CARDS.map((c, i) => (
              <Reveal key={c.no} delay={i * 120}>
                <TiltCard className="h-full bg-background p-8 transition-colors hover:bg-secondary lg:p-10">
                  <span className="text-xs tracking-[0.2em] text-accent">{c.no}</span>
                  <h3 className="mt-6 text-xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
          <Reveal as="span" className="eyebrow block">
            About Home Craft
          </Reveal>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
            <Reveal delay={80}>
              <h2 className="display-lg max-w-3xl">
                A Pune consultancy that handles the whole{" "}
                <span className="text-accent">property journey</span>
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground">
                From first search to final registration, we guide buyers, sellers and investors
                through Pune's property market with clear advice and verified listings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Buy", "Sale", "Rent", "Plots", "Commercial"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm transition-colors hover:bg-background"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={200} className="flex flex-col gap-8">
              <div className="flex gap-10">
                <div>
                  <p className="eyebrow">Rating</p>
                  <p className="font-display text-4xl lg:text-5xl">4.3</p>
                </div>
                <div>
                  <p className="eyebrow">Reviews</p>
                  <p className="font-display text-4xl lg:text-5xl">
                    <CountUp to={12} />
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Services</p>
                  <p className="font-display text-4xl lg:text-5xl">
                    <CountUp to={5} suffix="+" />
                  </p>
                </div>
              </div>
              <div className="rounded-sm border border-border bg-secondary p-6">
                <p className="text-sm text-muted-foreground">Areas we cover</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Charholi Budruk", "Lohegaon", "Wagholi", "Pimpri-Chinchwad", "Moshi"].map(
                    (area) => (
                      <span
                        key={area}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs"
                      >
                        {area}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal variant="clip" className="overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Modern apartment in Pune listed by Home Craft"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[420px] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 lg:h-[560px]"
              />
            </Reveal>
            <Reveal variant="right" delay={120} className="flex flex-col justify-center">
              <h3 className="display-lg">
                Buy. Sale. Rent. <span className="text-accent">Invest.</span>
              </h3>
              <p className="mt-6 max-w-lg text-muted-foreground">
                Home Craft Real Estate works with buyers, owners and investors across Charholi
                Budruk, Lohegaon, Wagholi and Pimpri-Chinchwad. We handle buying agent services,
                commercial property buying and sales, commercial property consulting, rentals and
                plots — start to registration, with the paperwork checked at every step.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-8">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Open 10:00 am – 8:00 pm
                    <br /> Speak to a consultant today.
                  </p>
                  <a
                    href="tel:+918484947570"
                    className="link-sweep mt-2 inline-block font-display text-2xl"
                  >
                    084849 47570
                  </a>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm transition-all duration-300 hover:gap-4 hover:bg-secondary"
                >
                  Visit our office
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission strip */}
        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
              <Reveal>
                <h2 className="display-lg max-w-3xl">
                  Property that fits the life you're actually planning
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="max-w-lg text-muted-foreground">
                  We don't just show listings — we match properties to your budget, commute, family
                  needs and investment goals, then handle the paperwork until you hold the keys.
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Buyers",
                  text: "Find the right flat, plot or commercial space from verified listings.",
                },
                {
                  title: "Sellers",
                  text: "Market-priced listings promoted to serious, screened buyers.",
                },
                {
                  title: "Investors",
                  text: "Yield-focused shortlists with resale demand and handover timelines.",
                },
                {
                  title: "Owners",
                  text: "Reliable tenant matching and rental management you can count on.",
                },
              ].map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 100}
                  className="card-rise bg-background p-7 transition-colors hover:bg-secondary lg:p-8"
                >
                  <span className="text-xs tracking-[0.2em] text-accent">0{i + 1}</span>
                  <h3 className="mt-5 text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
              {[project1, project2, project3, project4, aboutImg].map((src, i) => (
                <Reveal
                  key={i}
                  variant="clip"
                  delay={i * 110}
                  className="group overflow-hidden rounded-sm"
                >
                  <img
                    src={src}
                    alt="Home Craft project in Pune"
                    loading="lazy"
                    className="h-40 w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:h-56"
                  />
                </Reveal>
              ))}
            </div>
          </div>
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
            <Reveal as="span" className="eyebrow block">
              Insights
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5">Practical notes on the Pune market</h2>
            </Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {POSTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 140} className="group">
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
                    <span>{p.date}</span>
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
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:gap-4 group-hover:text-foreground">
                      Read more
                      <ArrowIcon />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer / contact */}
      <footer id="contact" className="relative bg-surface-dark text-surface-dark-foreground">
        <CursorGlow />
        <div className="relative mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <Reveal>
              <h2 className="display-xl">Let's find your place</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-white/60">
                Buying, selling, renting or investing in Pune? Tell us the requirement and we'll
                come back with options that actually fit.
              </p>
              <a
                href="tel:+918484947570"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-all duration-300 hover:gap-4 hover:opacity-85"
              >
                Call 084849 47570
                <ArrowIcon />
              </a>
            </Reveal>
          </div>

          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="eyebrow-light">Office</p>
              <p className="mt-4 text-white/60">
                C1C 504, Brooklyn, Pride World City, near Manhattan, Charholi Budruk, Pune,
                Pimpri-Chinchwad, Maharashtra 412105
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
              <a
                href="tel:+918484947570"
                className="link-sweep mt-4 inline-block font-display text-2xl"
              >
                084849 47570
              </a>
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
                {MARQUEE.map((l) => (
                  <li key={l}>
                    <a href="#services" className="link-sweep transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
            <p>© {new Date().getFullYear()} Home Craft Real Estate.</p>
            <p className="font-display text-4xl tracking-[-0.05em] text-white/10 lg:text-6xl">
              home craft
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
