import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header, ArrowIcon } from "@/components/landor/Header";
import { Reveal } from "@/components/landor/Reveal";
import { SiteFooter } from "@/components/landor/SiteFooter";
import { ContactButtons } from "@/components/landor/ContactButtons";
import { PROPERTIES, getProperty, type Property } from "@/data/properties";
import { ShieldCheck, MapPin, Maximize, Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/property/$id")({
  loader: ({ params }) => {
    const property = getProperty(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Property not found — Home Craft" }, { name: "robots", content: "noindex" }] };
    }
    const { property } = loaderData;
    const title = `${property.title} — Home Craft Pune`;
    return {
      meta: [
        { title },
        { name: "description", content: property.description },
        { property: "og:title", content: title },
        { property: "og:description", content: property.description },
        { property: "og:image", content: property.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: property.description },
      ],
    };
  },
  component: PropertyPage,
});

function PropertyPage() {
  const { property } = Route.useLoaderData() as { property: Property };
  const others = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <section className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            ← Back to listings
          </Link>

          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
            {/* Left Column: Image & Details */}
            <div className="flex-1">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[600px]"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium tracking-widest text-accent-foreground uppercase">
                      {property.type}
                    </span>
                    {property.status && (
                      <span className="rounded-full bg-background/90 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-widest text-foreground uppercase">
                        {property.status}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>

              <div className="mt-10">
                <Reveal>
                  <h1 className="font-display text-4xl leading-[1.1] tracking-tight lg:text-6xl">
                    {property.title}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    {property.area && (
                      <div className="flex items-center gap-2">
                        <Maximize className="h-4 w-4 text-accent" />
                        <span className="text-sm">{property.area}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">{property.price}</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={100} className="mt-12 border-t border-border pt-10">
                  <h2 className="font-display text-2xl lg:text-3xl">Description</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-3xl">
                    {property.description}
                  </p>
                </Reveal>

                <Reveal delay={150} className="mt-12">
                  <h2 className="font-display text-2xl lg:text-3xl">Amenities</h2>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-accent/30">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <ShieldCheck className="h-4 w-4" />
                        </span>
                        <span className="text-sm font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right Column: CTA Sidebar */}
            <aside className="lg:w-[400px]">
              <div className="sticky top-32 rounded-3xl bg-secondary/40 border border-border p-8 lg:p-10 backdrop-blur-sm">
                <span className="eyebrow block">Interested?</span>
                <h3 className="mt-4 font-display text-2xl lg:text-3xl">
                  Connect with our Pune desk
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Get full documentation, title checks, and schedule a site visit for this property. We handle the paperwork end-to-end.
                </p>
                
                <div className="mt-10 space-y-4">
                  <ContactButtons size="lg" className="w-full" propertyName={property.title} />
                </div>

                <div className="mt-10 space-y-4 border-t border-border pt-8">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Response within 2 hours</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Similar Properties */}
        <section className="border-t border-border mt-24 py-24 lg:py-32">
          <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
            <h2 className="display-lg">Other listings in Pune</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {others.map((p, i) => (
                <Reveal key={p.id} delay={i * 110}>
                  <Link
                    to="/property/$id"
                    params={{ id: p.id }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lg"
                  >
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-widest text-accent">{p.type}</span>
                      <h3 className="mt-3 text-lg leading-snug transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
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
