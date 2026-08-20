import { createFileRoute, Link } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { POSTS } from "@/data/posts";

const TITLE = "Pune Area Guides & Property Insights | Home Craft";
const DESCRIPTION =
  "Local area guides for Lohegaon, Porwal Road, Charholi Budruk, Dhanori, Tingre Nagar and Viman Nagar — prices, connectivity, schools and rental demand in East Pune.";
const URL = "/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Pune area guides",
          itemListElement: POSTS.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.title,
            url: `/blog/${p.slug}`,
          })),
        }),
      },
    ],
  }),
  component: BlogIndex,
});


function BlogIndex() {
  const [lead, ...rest] = POSTS;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <section className="mx-auto max-w-[1600px] px-6 pb-16 lg:px-10">
          <Reveal as="span" className="eyebrow block text-accent">
            Home Craft insights
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-lg mt-5 max-w-4xl">
              Area guides for <span className="text-accent">East Pune homebuyers</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Porwal Road, Lohegaon, Charholi Budruk, Dhanori, Tingre Nagar and Viman Nagar —
              connectivity, schools, price bands and rental demand, exactly as we explain them to
              our own clients.
            </p>
          </Reveal>

          <div className="brand-rule mt-10 h-px w-full" />
        </section>

        {lead && (
          <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <div className="rise-in">
              <Link
                to="/blog/$slug"
                params={{ slug: lead.slug }}
                className="group grid overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl lg:grid-cols-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={lead.img}
                    alt={lead.title}
                    className="h-72 w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105 lg:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center gap-5 p-8 lg:p-14">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                      {lead.cat}
                    </span>
                    <span>{lead.readTime}</span>
                  </div>
                  <h2 className="text-3xl leading-tight lg:text-4xl">{lead.title}</h2>
                  <p className="text-muted-foreground">{lead.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-accent transition-all duration-300 group-hover:gap-4">
                    Read the guide
                    <ArrowIcon />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-56 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="text-accent">{p.cat}</span>
                      <span>·</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl leading-snug transition-colors group-hover:text-accent">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
                      <div className="flex items-center gap-3">
                        <img src={p.avatar} alt="" loading="lazy" className="h-9 w-9 rounded-full object-cover" />
                        <p className="text-sm">{p.author}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-all duration-300 group-hover:gap-4 group-hover:text-accent">
                        Read
                        <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
