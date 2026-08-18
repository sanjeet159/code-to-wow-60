import { useState, useEffect } from "react";
import { X, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PROPERTIES } from "@/data/properties";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "buy" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get two featured properties for the popup
  const featured = PROPERTIES.slice(0, 2);

  useEffect(() => {
    // Show popup after 3 seconds on every page load (including refresh)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `Hi Home Craft, I'm interested in ${form.interest}ing a property. 
Name: ${form.name}
Phone: ${form.phone}`;
    
    const url = `https://wa.me/918484947570?text=${encodeURIComponent(message)}`;
    
    // Small delay to feel like processing
    setTimeout(() => {
      window.open(url, "_blank");
      setIsSubmitting(false);
      closePopup();
    }, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          />

          {/* Content Card (Splitted Layout on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative flex w-full max-w-[860px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-background shadow-2xl md:flex-row cursor-auto"
          >
            <button
              onClick={closePopup}
              className="absolute right-6 top-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-foreground transition-colors hover:bg-black/20 focus:outline-none cursor-auto md:bg-white/10 md:text-white md:hover:bg-white/20"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Column: Form & Welcome */}
            <div className="flex-1 p-8 sm:p-12">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">
                Welcome to <br />
                <span className="text-accent italic">Home Craft</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Start your journey towards a dream home today. Let's connect you with our experts.
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-4">
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-border bg-secondary/30 px-5 py-3.5 text-sm transition-all focus:border-accent/40 focus:bg-background focus:outline-none cursor-auto"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full rounded-2xl border border-border bg-secondary/30 px-5 py-3.5 text-sm transition-all focus:border-accent/40 focus:bg-background focus:outline-none cursor-auto"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {["buy", "rent", "sell"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, interest: type })}
                      className={`rounded-xl border py-2 text-xs font-semibold uppercase tracking-wider transition-all cursor-auto ${
                        form.interest === type
                          ? "border-accent bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                          : "border-border bg-secondary/20 text-muted-foreground hover:bg-secondary/40"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 text-sm font-bold text-accent-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 cursor-auto"
                >
                  {isSubmitting ? "Connecting..." : "LOGIN TO PROCEED"}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </button>
                
                <div className="flex items-center justify-center gap-2 pt-4 text-[10px] uppercase tracking-widest text-muted-foreground/60">
                  <div className="h-1 w-1 rounded-full bg-accent/40" />
                  Direct response via WhatsApp
                </div>
              </form>
            </div>

            {/* Right Column: Featured (Desktop Only) */}
            <div className="hidden flex-1 flex-col bg-accent p-12 text-accent-foreground md:flex">
              <div className="mb-8">
                <h3 className="text-xl font-medium">Featured Exclusive</h3>
                <p className="mt-2 text-sm text-accent-foreground/70">
                  Hand-picked properties with premium amenities and exclusive launch offers.
                </p>
              </div>

              <div className="space-y-6">
                {featured.map((prop) => (
                  <div key={prop.id} className="group relative overflow-hidden rounded-[1.5rem] bg-white/10 p-5 transition-all hover:bg-white/20">
                    <div className="flex gap-4">
                      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                        <img src={prop.image} alt={prop.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-semibold leading-tight">{prop.title}</h4>
                        <p className="text-xs text-accent-foreground/60 mt-1">{prop.location}</p>
                        <div className="mt-2 text-sm font-bold">{prop.price.split(' - ')[0]}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                  <div>
                    <div className="text-sm font-semibold">Zero Brokerage</div>
                    <p className="text-xs text-accent-foreground/60">On direct bookings via Home Craft</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-white/60" />
                  <div>
                    <div className="text-sm font-semibold">Exclusive Offers</div>
                    <p className="text-xs text-accent-foreground/60">Special discounts on PWC Atlantic launch</p>
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
