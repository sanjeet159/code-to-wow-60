import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Signature pointer: a small dot that tracks the cursor exactly plus a
 * lagging ring that swells over interactive elements.
 * Desktop / fine-pointer only.
 */
export function SignatureCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const d = dot.current;
    const r = ring.current;
    if (!d || !r) return;

    document.documentElement.classList.add("has-sig-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      d.style.opacity = "1";
      r.style.opacity = "1";
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest("a,button,[role='button'],input,textarea,select,[data-cursor]");
      r.dataset["active"] = interactive ? "true" : "false";
      const label = (interactive as HTMLElement | null)?.dataset?.["cursor"];
      r.dataset["label"] = label ?? "";
      r.textContent = label ?? "";
    };

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      d.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onLeave = () => {
      d.style.opacity = "0";
      r.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-sig-cursor");
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100] hidden md:block">
      <div ref={dot} className="sig-dot" />
      <div ref={ring} className="sig-ring" data-active="false" />
    </div>
  );
}

/** Fine film grain over the whole page — adds analogue texture. */
export function GrainOverlay() {
  return <div aria-hidden className="grain-overlay" />;
}

/** Element that gently pulls toward the cursor while hovered. */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate3d(${mx * strength}px, ${my * strength}px, 0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn("inline-block will-change-transform transition-transform duration-500 ease-out", className)}
    >
      {children}
    </span>
  );
}

/**
 * Headline that reveals word by word from behind a mask when scrolled into view.
 */
export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 70,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.dataset["shown"] = "true";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.dataset["shown"] = "true";
            io.disconnect();
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} data-shown="false" className={cn("split-words", className)}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="split-word">
          <span className="split-word-inner" style={{ transitionDelay: `${delay + i * stagger}ms` }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}

/** Infinite marquee band of short phrases, pausing on hover. */
export function Ticker({ items, className }: { items: string[]; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={cn("ticker group relative overflow-hidden", className)}>
      <div className="ticker-track flex w-max items-center gap-10 py-5">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg tracking-tight sm:text-2xl">{t}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
