import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/homecraft-logo.png";
import { ContactButtons } from "@/components/landor/ContactButtons";
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
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
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
              className={`link-sweep text-sm transition-colors ${
                scrolled ? "text-black hover:text-black/70" : "text-white hover:text-white/80"
              }`}
            >
              {item}
            </a>
          ))}
          <Link
            to="/blog"
            className={`link-sweep text-sm transition-colors ${
              scrolled ? "text-black hover:text-black/70" : "text-white hover:text-white/80"
            }`}
            activeProps={{ className: "text-accent" }}
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ContactButtons size="sm" className="hidden sm:flex" />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`relative z-[60] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border transition-all duration-300 xl:hidden ${
              open 
                ? "border-black/10 bg-black/5" 
                : scrolled 
                  ? "border-black/20" 
                  : "border-white/30"
            }`}
          >
            <span className={`h-px w-5 transition-all duration-300 ${open ? "bg-black translate-y-[7px] rotate-45" : scrolled ? "bg-black" : "bg-white"}`} />
            <span className={`h-px w-5 transition-all duration-300 ${open ? "opacity-0" : scrolled ? "bg-black" : "bg-white"}`} />
            <span className={`h-px w-5 transition-all duration-300 ${open ? "bg-black -translate-y-[7px] -rotate-45" : scrolled ? "bg-black" : "bg-white"}`} />
          </button>
        </div>
      </div>
      <div 
        className={`fixed inset-0 z-50 bg-[#FDFCFB] transition-all duration-500 ease-in-out xl:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-10">
          <nav className="flex flex-col gap-6">
            {NAV.map((item, i) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`text-4xl font-light tracking-tight text-black transition-all duration-500 delay-[${i * 50}ms] ${
                  open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {item}
              </a>
            ))}
            <Link 
              to="/blog" 
              onClick={() => setOpen(false)} 
              className={`text-4xl font-light tracking-tight text-black transition-all duration-500 delay-[${NAV.length * 50}ms] ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              Blog
            </Link>
          </nav>

          <div className={`mt-auto transition-all duration-700 delay-300 ${open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <p className="mb-6 text-sm font-medium tracking-widest text-black/40 uppercase">Get in touch</p>
            <ContactButtons tone="accent" size="lg" className="flex-row flex-wrap" onNavigate={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </header>
  );
}
