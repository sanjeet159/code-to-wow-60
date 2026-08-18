import { useState, useEffect } from "react";
import { X, MessageSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "buy" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds, only once per session
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem("hc-popup-seen");
      if (!hasSeen) {
        setIsOpen(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("hc-popup-seen", "true");
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

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-[440px] overflow-hidden rounded-[2rem] border border-white/10 bg-background shadow-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors hover:bg-secondary focus:outline-none"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-8 sm:p-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
                <MessageSquare className="h-6 w-6" />
              </div>
              
              <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                Find your dream <br />
                home in <span className="text-accent italic">Pune</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Leave your details and our expert advisors will reach back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-border bg-secondary/30 px-5 py-3.5 text-sm transition-all focus:border-accent/40 focus:bg-background focus:outline-none cursor-auto"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    className="w-full rounded-2xl border border-border bg-secondary/30 px-5 py-3.5 text-sm transition-all focus:border-accent/40 focus:bg-background focus:outline-none cursor-auto"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["buy", "rent", "sell"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, interest: type })}
                      className={`rounded-xl border py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                        form.interest === type
                          ? "border-accent bg-accent text-accent-foreground"
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
                  className="mt-4 w-full rounded-2xl bg-accent px-6 py-4 text-sm font-medium text-accent-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? "Connecting..." : "Connect with Advisor"}
                </button>
                
                <div className="flex items-center justify-center gap-2 pt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-accent" />
                  Direct response via WhatsApp
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
