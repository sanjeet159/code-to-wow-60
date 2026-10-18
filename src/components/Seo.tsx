import { useEffect } from "react";

export type SeoMeta = { name?: string; property?: string; content: string };

type SeoProps = {
  title: string;
  meta?: SeoMeta[];
  canonical?: string;
  jsonLd?: object;
};

/**
 * Client-side head manager. This app is a pure SPA, so TanStack Router's
 * route `head()` never reaches the DOM — this component applies the same
 * tags imperatively on every route.
 */
export function Seo({ title, meta = [], canonical, jsonLd }: SeoProps) {
  const metaKey = JSON.stringify(meta);
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;

    const parsed = JSON.parse(metaKey) as SeoMeta[];
    for (const m of parsed) {
      const attr = m.name ? "name" : "property";
      const key = (m.name ?? m.property) as string;
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", m.content);
    }

    if (canonical) {
      let link = document.head.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLdKey) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = jsonLdKey;
      document.head.appendChild(script);
    }

    return () => {
      script?.remove();
    };
  }, [title, metaKey, canonical, jsonLdKey]);

  return null;
}
