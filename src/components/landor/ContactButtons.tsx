import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";

export const PHONE = "+918484947570";
export const PHONE_DISPLAY = "084849 47570";
export const WHATSAPP_URL =
  "https://wa.me/918484947570?text=Hi%20Home%20Craft%2C%20I%27d%20like%20help%20with%20a%20property%20in%20Pune.";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.87 9.87 0 004.77 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.06h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.16 8.16 0 01-1.25-4.35c0-4.54 3.7-8.23 8.24-8.23a8.18 8.18 0 015.82 2.41 8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.21-8.24 8.21zm4.52-6.15c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.65 4.2 3.72.59.25 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}

type Tone = "accent" | "dark" | "outline";

const toneClasses: Record<Tone, { call: string; wa: string }> = {
  accent: {
    call: "bg-accent text-accent-foreground hover:opacity-85",
    wa: "border border-accent/30 text-accent hover:bg-accent/10",
  },
  dark: {
    call: "bg-accent text-accent-foreground hover:opacity-85",
    wa: "border border-white/25 text-white hover:bg-white/10",
  },
  outline: {
    call: "border border-foreground/20 text-foreground hover:bg-secondary",
    wa: "border border-foreground/20 text-foreground hover:bg-secondary",
  },
  minimal: {
    call: "bg-accent text-accent-foreground hover:opacity-90",
    wa: "border border-accent/20 text-accent hover:bg-accent/5",
  },
};

export function ContactButtons({
  tone = "accent",
  size = "md",
  className,
  onNavigate,
  showOffice = false,
}: {
  tone?: Tone;
  size?: "sm" | "md" | "lg";
  className?: string;
  onNavigate?: () => void;
  showOffice?: boolean;
}) {
  const pad =
    size === "sm" ? "px-5 py-2.5 text-sm" : size === "lg" ? "px-7 py-4 text-sm" : "px-6 py-3 text-sm";
  const base =
    "inline-flex items-center gap-2 rounded-full transition-all duration-300 hover:gap-3";

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <a href={`tel:${PHONE}`} onClick={onNavigate} className={cn(base, pad, toneClasses[tone].call)}>
          <Phone className="h-4 w-4" />
          Call now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className={cn(base, pad, toneClasses[tone].wa)}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
      {showOffice && (
        <a
          href="https://maps.google.com/?q=Home+Craft+Real+Estate+Charholi+Budruk+Pune"
          target="_blank"
          rel="noreferrer"
          onClick={onNavigate}
          className={cn(
            base,
            pad,
            "justify-center border border-foreground/10 bg-secondary/50 text-foreground hover:bg-secondary",
            size === "sm" ? "w-fit" : "w-full sm:w-fit"
          )}
        >
          Visit our office
        </a>
      )}
    </div>
  );
}
