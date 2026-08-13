import { createFileRoute, Link } from "@tanstack/react-router";
import { Header, ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { ContactButtons } from "@/components/landor/ContactButtons";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const TITLE = "Selected Works — Home Craft Real Estate Pune";
const DESCRIPTION = "Explore our recent successful real estate deals, commercial leasing, and property consultations across Pune.";

const PROJECTS = [
  { title: "3BHK residence, Charholi", place: "Pride World City, Pune", year: "Resale", img: project1, category: "Residential" },
  { title: "Retail showroom deal", place: "Porwal Road, Lohegaon", year: "Commercial", img: project2, category: "Commercial" },
  { title: "Investor apartment portfolio", place: "Pimpri-Chinchwad", year: "Resale", img: project3, category: "Investment" },
  { title: "Office space, 2400 sq ft", place: "Dream Elements, Lohegaon", year: "Leasing", img: project4, category: "Leasing" },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32">
        <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pb-20">
          <Reveal>
            <span className="eyebrow block">Portfolio</span>
            <h1 className="display-lg mt-5 max-w-3xl">
              Selected <span className="text-accent">works</span> and success stories
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              A showcase of the properties we've helped families find and the commercial spaces we've successfully leased across Pune's growth corridors.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} variant="blur">
                <div className="group block">
                  <div className="relative overflow-hidden rounded-sm">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-72 w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 lg:h-[480px]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <span className="pointer-events-none absolute top-5 left-5 rounded-full bg-accent/90 backdrop-blur-sm px-4 py-1.5 text-[10px] uppercase tracking-widest text-accent-foreground">
                      {p.category}
                    </span>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-2xl transition-colors duration-300 group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.place}</p>
                    </div>
                    <span className="text-sm font-medium text-accent">{p.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 rounded-[2rem] bg-surface-dark p-8 lg:p-16 text-surface-dark-foreground text-center">
            <Reveal>
              <h2 className="display-md">Have a property requirement?</h2>
              <p className="mt-6 mx-auto max-w-xl text-white/60">
                Whether you're looking to buy, sell, or lease, our team of experts is ready to help you achieve your goals in the Pune market.
              </p>
              <ContactButtons tone="dark" size="lg" className="mt-10 justify-center" />
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
