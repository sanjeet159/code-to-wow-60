import { useState } from "react";

const TABS = ["Buy", "Rent", "Sell"] as const;

const CTA_LABEL: Record<(typeof TABS)[number], string> = {
  Buy: "Request",
  Rent: "Enquire to rent",
  Sell: "Get a valuation",
};

// 👇 Change these hex codes to set each tab's button color.
const TAB_COLORS: Record<(typeof TABS)[number], string> = {
  Buy: "#7c1f1f",
  Rent: "#1f6b45",
  Sell: "#1f3f7c",
};

export function HeroSearch() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Buy");

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-0">
      <div className="flex">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            style={tab === t ? { color: TAB_COLORS[t] } : undefined}
            className={`flex-1 rounded-t-xl px-4 py-4 text-xs font-medium transition-colors duration-300 sm:flex-none sm:px-10 sm:text-sm ${
              tab === t
                ? "bg-background"
                : "bg-background/70 text-muted-foreground hover:bg-background/85"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const name = formData.get("name");
          const phone = formData.get("phone");
          const type = formData.get("propertyType");
          const message = `Hi Home Craft, I'd like to ${tab.toLowerCase()} a property.\nName: ${name}\nPhone: ${phone}\nProperty Type: ${type}`;
          window.open(`https://wa.me/918484947570?text=${encodeURIComponent(message)}`, "_blank");
        }}
        className="relative z-10 grid gap-6 rounded-b-xl rounded-tr-xl bg-background p-6 shadow-2xl sm:p-8 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      >
        <label className="block">
          <span className="sr-only">Your name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </label>
        <label className="block">
          <span className="sr-only">Phone number</span>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            className="w-full border-b border-border bg-transparent pb-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
          />
        </label>
        <label className="block">
          <span className="sr-only">Property type</span>
          <select
            name="propertyType"
            required
            defaultValue=""
            className="w-full appearance-none border-b border-border bg-transparent pb-3 text-sm text-muted-foreground outline-none transition-colors focus:border-foreground"
          >
            <option value="" disabled>Property Type</option>
            <option>Flat / Apartment</option>
            <option>Shop / Commercial</option>
            <option>Plot / Land</option>
            <option>Bungalow / Row house</option>
          </select>
        </label>
        <button
          key={tab}
          type="submit"
          style={{ backgroundColor: TAB_COLORS[tab] }}
          className="rise-in group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm text-white transition-all duration-300 hover:gap-4 hover:opacity-85"
        >
          {CTA_LABEL[tab]}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </form>
    </div>
  );
}
