import { useState } from "react";

const TABS = ["Buy", "Rent", "Sell"] as const;

export function HeroSearch() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Buy");

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-t-xl px-10 py-4 text-sm font-medium transition-colors duration-300 ${
              tab === t
                ? "bg-background text-foreground"
                : "bg-background/70 text-muted-foreground hover:bg-background/85"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-6 rounded-b-xl rounded-tr-xl bg-background p-6 shadow-2xl sm:p-8 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            placeholder="you@email.com"
            className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </label>
        <label className="block">
          <span className="sr-only">Property type</span>
          <select
            defaultValue=""
            className="w-full appearance-none border-b border-border bg-transparent pb-3 text-sm text-muted-foreground outline-none transition-colors focus:border-foreground"
          >
            <option value="">Property Type</option>
            <option>Flat / Apartment</option>
            <option>Shop / Commercial</option>
            <option>Plot / Land</option>
            <option>Bungalow / Row house</option>
          </select>
        </label>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm text-accent-foreground transition-all duration-300 hover:gap-4 hover:opacity-85"
        >
          Request
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
}
