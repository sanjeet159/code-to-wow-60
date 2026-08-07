import { createFileRoute } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Services } from "@/components/landor/Services";
import { Reveal, CountUp } from "@/components/landor/Reveal";

import heroImg from "@/assets/hero.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Landor — Real Estate Development & Property Solutions" },
      {
        name: "description",
        content:
          "Landor creates landmark real estate projects: development, investment, construction management and architecture with enduring value.",
      },
      { property: "og:title", content: "Landor — Real Estate Development" },
      {
        property: "og:description",
        content:
          "Defining the standards of real estate development. Landmark projects with enduring value for investors and communities.",
      },
    ],
  }),
  component: Index,
});

const HERO_CARDS = [
  {
    no: "01",
    title: "High quality products",
    text: "The customer service center is ready to serve 24/7, support the residents to provide information.",
  },
  {
    no: "02",
    title: "Professional service",
    text: "Our service center operates around the clock, helping residents with guidance and support whenever needed.",
  },
  {
    no: "03",
    title: "Real partnership",
    text: "Residents can rely on our 24/7 support desk for information and assistance at any time.",
  },
];

const PROJECTS = [
  { title: "Apartment building", place: "Main Street, Suite 200", year: "2019", img: project1 },
  { title: "Office networks", place: "Main Street, Suite 200", year: "2020", img: project2 },
  { title: "Hotel paradaise", place: "Main Street, Suite 200", year: "2019", img: project3 },
  { title: "Hotel of hearts", place: "Main Street, Suite 200", year: "2020", img: project4 },
];

const TESTIMONIALS = [
  {
    quote:
      "We were blown away by the clarity of their design process. We needed a commercial space that reflected our brand values—calm, clean, and conscious. Landor brought that vision to life without compromise.",
    name: "Anna de la Vega",
    role: "Owner of Tiga Cafe",
    img: team2,
  },
  {
    quote:
      "I am extremely satisfied with the quality of service I received; the agency's professionalism, reliability and seamless process made purchasing my property not only easy but genuinely enjoyable.",
    name: "Marcus Feld",
    role: "Private Investor",
    img: team1,
  },
  {
    quote:
      "This real estate agency exceeded my expectations by providing attentive guidance, honest advice, and timely communication at every stage, ensuring that I always felt informed and confident.",
    name: "Peter Grant",
    role: "Managing Director",
    img: team3,
  },
];

const BRANDS = ["Vertex", "Northline", "Aurea", "Merik", "Solstice", "Kavan"];

const CHOOSE = [
  "Client approach",
  "Client strategy",
  "Professional client",
  "Architecture design",
  "Community living",
  "Personalized client",
  "Sustainable build",
  "Dedicated client",
];

const TEAM = [
  { name: "Cristopher Miller", role: "Engineer of head", img: team1 },
  { name: "Jonathan Parker", role: "Engineer of head", img: team3 },
  { name: "Daniel Anderson", role: "Engineer of head", img: team2 },
  { name: "Michael Thompson", role: "Engineer of head", img: team3 },
  { name: "Alexander Scott", role: "Engineer of head", img: team1 },
  { name: "Benjamin Carter", role: "Engineer of head", img: team2 },
];

const POSTS = [
  {
    img: blog1,
    cat: "Real estate",
    date: "15 March, 2025",
    title: "Transforming urban spaces with sustainable design",
    author: "Cristopher Miller",
    avatar: team1,
  },
  {
    img: blog2,
    cat: "Real estate",
    date: "15 March, 2025",
    title: "Naming your real estate company just got a whole lot easier",
    author: "David Hussy",
    avatar: team3,
  },
  {
    img: blog3,
    cat: "Real estate",
    date: "15 March, 2025",
    title: "We design with intention creating spaces that reflect your style",
    author: "Justin Case",
    avatar: team2,
  },
];

function Index() {
  return (
    <div id="top" className="overflow-x-hidden bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section id="home" className="relative pt-32 pb-16 lg:pt-44">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_320px]">
              <div>
                <h1 className="display-xl max-w-4xl">
                  <span className="rise-in block" style={{ animationDelay: "80ms" }}>
                    Defining the standards
                  </span>
                  <span className="rise-in block" style={{ animationDelay: "200ms" }}>
                    of real estate <span className="text-accent">development</span>
                  </span>
                </h1>
                <a
                  href="#services"
                  className="rise-in group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground transition-all duration-300 hover:opacity-85 hover:gap-4"
                  style={{ animationDelay: "460ms" }}
                >
                  Discover More
                  <ArrowIcon />
                </a>
              </div>
              <p
                className="rise-in text-muted-foreground lg:pb-4"
                style={{ animationDelay: "360ms" }}
              >
                A privately owned real estate company delivering innovative property solutions
                across the globe — from concept to community.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-sm">
              <img
                src={heroImg}
                alt="Modern luxury residential tower at golden hour"
                width={1920}
                height={1080}
                className="image-unveil h-[46vh] w-full object-cover lg:h-[72vh]"
                style={{ animationDelay: "260ms" }}
              />
            </div>
          </div>
        </section>

        {/* Hero cards */}
        <section className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {HERO_CARDS.map((c, i) => (
              <Reveal
                key={c.no}
                delay={i * 120}
                className="card-rise bg-background p-8 hover:bg-secondary lg:p-10"
              >
                <span className="text-xs tracking-[0.2em] text-accent">{c.no}</span>
                <h3 className="mt-6 text-xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-[1600px] px-6 pb-24 lg:px-10 lg:pb-32">
          <Reveal as="span" className="eyebrow block">
            About us
          </Reveal>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal delay={80}>
              <h2 className="display-lg max-w-3xl">
                We create landmark real estate projects that bring enduring value to both investors
              </h2>
            </Reveal>
            <Reveal delay={200} className="flex gap-12">
              <div>
                <p className="eyebrow">Since</p>
                <p className="font-display text-4xl lg:text-5xl">
                  <CountUp to={1998} />
                </p>
              </div>
              <div>
                <p className="eyebrow">Projects</p>
                <p className="font-display text-4xl lg:text-5xl">
                  <CountUp to={2860} suffix="+" />
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            <Reveal variant="clip" className="overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Minimalist modern villa exterior"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[420px] w-full object-cover transition-transform duration-[1200ms] hover:scale-105 lg:h-[560px]"
              />
            </Reveal>
            <Reveal variant="right" delay={120} className="flex flex-col justify-center">
              <h3 className="display-lg">
                We create <span className="text-accent">modernity</span>
              </h3>
              <p className="mt-6 max-w-lg text-muted-foreground">
                We are a privately owned real estate company dedicated to delivering innovative
                property solutions across the globe. Our team specializes in real estate
                investment, property management, and development, with a clear focus on quality and
                sustainability. By combining market expertise with a client-first approach, we shape
                something remarkable.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-border pt-8">
                <div>
                  <p className="text-sm text-muted-foreground">
                    If you have any question? Feel free
                    <br /> to contact with our team.
                  </p>
                  <a href="tel:+99926542563" className="mt-2 block font-display text-2xl">
                    +999 2654 2563
                  </a>
                </div>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  Learn More
                  <ArrowIcon />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Mission */}
        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal>
              <h2 className="display-lg max-w-3xl">
                We strive to create opportunities that elevate the way people live
              </h2>
            </Reveal>
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
              {[project1, project2, project3, project4, aboutImg].map((src, i) => (
                <Reveal
                  key={i}
                  variant="clip"
                  delay={i * 110}
                  className="overflow-hidden rounded-sm"
                >
                  <img
                    src={src}
                    alt="Landor project"
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-700 hover:scale-110 lg:h-56"
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
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 140} variant="up">
                <a href="#projects" className="group block">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 lg:h-[420px]"
                    />
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

        {/* Testimonials */}
        <section className="border-y border-border bg-secondary py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow block">
              Testimonials
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-3xl">
                Hear the voices from the spaces we've built that inspire connection
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal
                  key={t.name}
                  variant="scale"
                  delay={i * 140}
                  className="card-rise flex flex-col justify-between rounded-sm bg-card p-8 lg:p-10"
                >
                  <blockquote className="text-lg leading-relaxed">"{t.quote}"</blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="overflow-hidden py-16">
          <div className="marquee-track flex w-max items-center gap-20 px-10">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="font-display text-3xl tracking-tight text-muted-foreground/50"
              >
                {b}
              </span>
            ))}
          </div>
        </section>

        {/* Why choose */}
        <section className="bg-surface-dark py-24 text-surface-dark-foreground lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow-light block">
              Why choose Landor
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5 max-w-2xl">
                An exceptional quality that can't be beaten
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {CHOOSE.map((c, i) => (
                <Reveal
                  key={c}
                  delay={(i % 4) * 100}
                  className="card-rise bg-surface-dark p-8 hover:bg-white/5"
                >
                  <span className="text-xs text-white/35">0{i + 1}</span>
                  <h3 className="mt-6 text-xl">{c}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    Our goal is zero incidents and our lost time frequency rate is industry leading.
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal variant="left">
              <span className="eyebrow">Our team members</span>
              <h2 className="display-lg mt-5 max-w-3xl">
                We blend creativity & innovation to future-proof your spaces and communities
              </h2>
            </Reveal>
            <Reveal variant="right" delay={120} className="w-fit">
              <a
                href="#team"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm transition-all duration-300 hover:gap-4 hover:bg-secondary"
              >
                See all Member
                <ArrowIcon />
              </a>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={`${m.name}-${i}`} delay={(i % 3) * 120} className="group">
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

        {/* Blog */}
        <section id="blog" className="border-t border-border py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal as="span" className="eyebrow block">
              Our blog post
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-5">Discover inspiration and trends</h2>
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
                  <h3 className="mt-3 text-xl leading-snug">{p.title}</h3>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.avatar}
                        alt={p.author}
                        loading="lazy"
                        className="h-9 w-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm">{p.author}</p>
                        <p className="text-xs text-muted-foreground">Engineer</p>
                      </div>
                    </div>
                    <a
                      href="#blog"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Read More
                      <ArrowIcon />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="display-xl">Let's work together</h2>
            <div>
              <p className="max-w-md text-white/60">
                We are a privately owned real estate company dedicated to delivering innovative
                property solutions across the globe.
              </p>
              <a
                href="mailto:hello@landor.com"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-opacity hover:opacity-85"
              >
                Get a Free Quote
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="eyebrow-light">Information</p>
              <a href="tel:+0993266523" className="mt-4 block font-display text-2xl">
                +(099) 326-6523
              </a>
              <a href="mailto:hello@landor.com" className="mt-2 block text-white/60">
                hello@landor.com
              </a>
            </div>
            <div>
              <p className="eyebrow-light">Company</p>
              <ul className="mt-4 space-y-2 text-white/60">
                {["About us", "Our team", "Solutions", "Why choose us", "Partners", "Core values"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#about" className="transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <p className="eyebrow-light">Explore</p>
              <ul className="mt-4 space-y-2 text-white/60">
                {["Our projects", "Terms & conditions", "Support center", "News & updates", "Contact"].map(
                  (l) => (
                    <li key={l}>
                      <a href="#projects" className="transition-colors hover:text-white">
                        {l}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <p className="eyebrow-light">Newsletter</p>
              <p className="mt-4 text-white/60">
                Sign up for our newsletter to get latest insights and updates
              </p>
              <form
                className="mt-5 flex items-center gap-2 border-b border-white/20 pb-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  aria-label="Email address"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-white/40"
                />
                <button type="submit" className="text-sm text-accent">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
            <p>© {new Date().getFullYear()} Landor. All rights reserved.</p>
            <p className="font-display text-4xl tracking-[-0.05em] text-white/10 lg:text-6xl">
              landor
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
