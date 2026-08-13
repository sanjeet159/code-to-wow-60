import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header, ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { ContactButtons } from "@/components/landor/ContactButtons";
import { getProject, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — Home Craft" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — Home Craft Projects`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:image", content: project.img },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetailPage,
});

function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-48 text-center">
        <h1 className="display-lg">Project not found</h1>
        <p className="mt-4 text-muted-foreground">The project you are looking for might have been moved or renamed.</p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-all duration-300 hover:gap-4"
        >
          Back to all projects
          <ArrowIcon />
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData() as { project: Project };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <article>
          {/* Hero Header */}
          <header className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <Link to="/projects" className="transition-colors hover:text-accent">Projects</Link>
                <span>/</span>
                <span className="text-accent">{project.category}</span>
              </div>
              <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
                {project.place}
              </p>
            </Reveal>

            {/* Quick Stats/Highlights */}
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {project.highlights.map((h, i) => (
                <Reveal key={h.label} delay={i * 80} className="bg-background p-6 lg:p-8">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{h.label}</p>
                  <p className="mt-2 text-lg font-medium">{h.value}</p>
                </Reveal>
              ))}
            </div>
          </header>

          {/* Main Image */}
          <div className="mx-auto mt-16 max-w-[1600px] px-6 lg:px-10">
            <Reveal variant="blur">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="aspect-[21/9] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Content Sections */}
          <div className="mx-auto mt-16 max-w-[1600px] px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[1fr_0.6fr]">
              <div className="space-y-16">
                <Reveal>
                  <h2 className="display-sm">Project Overview</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>

                {project.details.map((section, idx) => (
                  <Reveal key={section.title} delay={idx * 100}>
                    <h3 className="text-2xl font-display">{section.title}</h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {section.content}
                    </p>
                    {section.list && (
                      <ul className="mt-6 space-y-4 rounded-2xl border border-border bg-secondary/30 p-8">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex gap-4 text-sm leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Reveal>
                ))}
              </div>

              {/* Sidebar / CTA */}
              <aside className="lg:sticky lg:top-32 lg:h-fit">
                <Reveal variant="right" className="rounded-[2rem] bg-surface-dark p-8 text-surface-dark-foreground lg:p-10">
                  <p className="eyebrow-light">Interested in similar properties?</p>
                  <h3 className="mt-4 font-display text-2xl leading-snug lg:text-3xl">
                    Get an advisor-led consultation
                  </h3>
                  <p className="mt-4 text-white/60">
                    Whether you are looking for residential resale, commercial leasing, or investment plots in Pune, our team has the local desk expertise to guide you.
                  </p>
                  <div className="mt-8 flex flex-col gap-4">
                     <ContactButtons tone="dark" size="lg" className="flex-col !items-stretch" />
                  </div>
                </Reveal>
              </aside>
            </div>
          </div>
        </article>

        {/* Bottom Navigation */}
        <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="border-t border-border pt-12">
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-3 text-lg font-display transition-colors hover:text-accent"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground">
                 ←
              </span>
              View all projects
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
