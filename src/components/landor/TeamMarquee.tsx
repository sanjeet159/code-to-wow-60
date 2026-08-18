import { Phone } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/components/landor/ContactButtons";

export type TeamMember = {
  name: string;
  role: string;
  img: string;
  phone?: string;
};

function TeamCard({ 
  member, 
  isActive, 
  onClick 
}: { 
  member: TeamMember; 
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative flex w-[220px] flex-shrink-0 flex-col sm:w-[300px] md:w-[340px]",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isActive && "scale-[1.02] z-20"
      )}
    >
      <div className="relative overflow-hidden rounded-sm bg-secondary">
        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className={cn(
            "aspect-[3/4] w-full object-cover transition-all duration-[1000ms]",
            !isActive && "grayscale group-hover:grayscale-0",
            isActive && "grayscale-0"
          )}
        />

        {/* Hover/Active overlay */}
        <div 
          className={cn(
            "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent p-5 transition-opacity duration-500 sm:p-6",
            !isActive && "opacity-0 group-hover:opacity-100",
            isActive && "opacity-100"
          )}
        >
          <div className={cn(
            "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            !isActive && "translate-y-4 group-hover:translate-y-0",
            isActive && "translate-y-0"
          )}>
            <p className="text-xs uppercase tracking-widest text-white/70">Connect</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`tel:${member.phone || "+918484947570"}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-foreground transition-transform hover:scale-105"
              >
                <Phone className="h-3 w-3" />
                Call
              </a>
              <a
                href={member.phone ? `https://wa.me/${member.phone.replace(/[^0-9]/g, '')}` : WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-transform hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 sm:mt-5">
        <h3 className={cn(
          "text-lg font-medium transition-colors duration-300 sm:text-xl",
          isActive ? "text-accent" : "group-hover:text-accent"
        )}>
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
  const [isPaused, setIsPaused] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Triple the team for smooth infinite loop
  const loop = [...team, ...team, ...team];

  const handleCardClick = (index: number) => {
    if (activeId === index) {
      setActiveId(null);
      setIsPaused(false);
    } else {
      setActiveId(index);
      setIsPaused(true);
    }
  };

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => !activeId && setIsPaused(false)}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent sm:w-12 lg:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent sm:w-12 lg:w-16" />

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className={cn(
            "team-marquee-track flex w-max gap-5 lg:gap-6",
            isPaused && "paused"
          )}
          style={{ willChange: "transform" }}
        >
          {loop.map((m, i) => (
            <TeamCard 
              key={`${i}`} 
              member={m} 
              isActive={activeId === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .team-marquee-track {
          animation: marquee 40s linear infinite;
        }
        .team-marquee-track.paused {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
