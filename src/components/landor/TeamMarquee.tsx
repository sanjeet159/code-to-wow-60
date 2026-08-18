import { Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/components/landor/ContactButtons";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  phone?: string;
};

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div
      className={cn(
        "group relative flex w-[220px] flex-shrink-0 snap-start flex-col sm:w-[300px] md:w-[340px]",
        "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
      )}
    >
      <div className="relative overflow-hidden rounded-sm bg-secondary">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="aspect-[3/4] w-full object-cover grayscale transition-all duration-[1000ms] group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6">
          <div className="translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
            <p className="text-xs uppercase tracking-widest text-white/70">Connect</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`tel:${member.phone || "+918484947570"}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground transition-transform hover:scale-105"
              >
                <Phone className="h-3 w-3" />
                Call
              </a>
              <a
                href={member.phone ? `https://wa.me/${member.phone.replace(/[^0-9]/g, '')}` : WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-transform hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-3 sm:mt-5">
        <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-accent sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamMarquee({
  team,
  className,
}: {
  team: TeamMember[];
  className?: string;
}) {
  const loop = [...team, ...team, ...team];

  return (
    <div className={cn("relative", className)}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-12 lg:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-12 lg:w-16" />

      {/* Mobile: snap scroll */}
      <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:hidden">
        {team.map((m, i) => (
          <TeamCard key={`mobile-${m.name}-${i}`} member={m} index={i} />
        ))}
      </div>

      {/* Desktop: infinite marquee */}
      <div className="hidden overflow-hidden md:block">
        <div
          className="team-marquee-track flex w-max gap-5 lg:gap-6"
          style={{ willChange: "transform" }}
        >
          {loop.map((m, i) => (
            <TeamCard key={`desktop-${m.name}-${i}`} member={m} index={i % team.length} />
          ))}
        </div>
      </div>
    </div>
  );
}
