import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Header, ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { POSTS, getPost, type Post } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — Home Craft" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} — Home Craft Pune`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: post.excerpt },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-48 text-center">
        <h1 className="display-lg">Article not found</h1>
        <p className="mt-4 text-muted-foreground">This guide may have been moved or renamed.</p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-all duration-300 hover:gap-4"
        >
          Back to insights
          <ArrowIcon />
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <article>
          <header className="mx-auto max-w-3xl px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              ← All insights
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest">
              <span className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
                {post.cat}
              </span>
              <span className="text-muted-foreground">{post.date}</span>
              <span className="text-muted-foreground">· {post.readTime}</span>
            </div>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] tracking-tight lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
              <img src={post.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm">{post.author}</p>
                <p className="text-xs text-muted-foreground">Home Craft Real Estate, Pune</p>
              </div>
            </div>
          </header>

          <Reveal variant="clip" className="mx-auto mt-12 max-w-[1200px] px-6">
            <img
              src={post.img}
              alt={post.title}
              className="h-[280px] w-full rounded-3xl object-cover lg:h-[520px]"
            />
          </Reveal>

          <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
            {post.sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 60} className="mb-12">
                <h2 className="font-display text-2xl leading-snug lg:text-3xl">
                  <span className="mr-3 text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.body.map((para) => (
                  <p key={para} className="mt-5 leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-6">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <div className="mt-4 rounded-3xl bg-surface-dark p-8 text-surface-dark-foreground lg:p-12">
              <p className="eyebrow-light">Talk to Home Craft</p>
              <h3 className="mt-4 font-display text-2xl leading-snug lg:text-3xl">
                Want this checked for a specific property?
              </h3>
              <p className="mt-4 max-w-xl text-white/60">
                Share the details and our Pune desk will review the paperwork, pricing and locality
                with you — no obligation.
              </p>
              <a
                href="tel:+918484947570"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm text-accent-foreground transition-all duration-300 hover:gap-4 hover:opacity-85"
              >
                Call 084849 47570
                <ArrowIcon />
              </a>
            </div>
          </div>
        </article>

        <section className="border-t border-border py-20 lg:py-28">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <h2 className="display-lg">Keep reading</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {related.map((p, i) => (
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
                        className="h-48 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-widest text-accent">{p.cat}</span>
                      <h3 className="mt-3 text-lg leading-snug transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
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
