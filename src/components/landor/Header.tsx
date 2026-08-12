import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/homecraft-logo.png";
const NAV = ["Home", "About", "Services", "Projects", "Reviews", "Team"];
export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0.75 10.75L10.75 0.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0.75 0.75H10.75V10.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <a href="/" className="group flex items-center">
          <img
            src={wordmark}
            alt="Home Craft Real Estate"
            className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 lg:h-12"
          />
        </a>
        <nav className="hidden items-center gap-9 xl:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="link-sweep text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
          <Link
            to="/blog"
            className="link-sweep text-sm text-muted-foreground transition-colors hover:text-accent"
            activeProps={{ className: "text-accent" }}
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+918484947570"
            className="group hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm text-accent-foreground transition-all duration-300 hover:gap-4 hover:opacity-85 sm:inline-flex"
          >
            084849 47570
            <ArrowIcon />
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-border xl:hidden"
          >
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 py-6 xl:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.concat("Contact").map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-lg text-foreground"
              >
                {item}
              </a>
            ))}
            <Link to="/blog" onClick={() => setOpen(false)} className="text-lg text-foreground">
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
