import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <p className="section-label mb-4">GET IN TOUCH</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] mb-6">
                Let Us Find the Right Project for Your Business
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed text-[17px] mb-10">
                Tell us about your company and your goals. We will identify the best-fit government project opportunities at no obligation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Email</p>
                  <p className="text-driftwood text-sm">contact@consultway.info</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                  <p className="text-driftwood text-sm">Available after inquiry</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Location</p>
                  <p className="text-driftwood text-sm">India</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15} direction="right">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 border border-border space-y-5"
              whileHover={{ boxShadow: "0 20px 50px hsl(var(--foreground) / 0.06)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Business Email *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Industry / Sector</label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200">
                  <option value="">Select your sector</option>
                  <option>Infrastructure</option>
                  <option>Solar and Renewable Energy</option>
                  <option>Real Estate</option>
                  <option>Manufacturing</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your business and what you are looking for"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70 transition-colors duration-200"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 25px hsl(var(--accent) / 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? "Inquiry Sent ✓" : (
                  <>
                    Send My Inquiry
                    <Send size={16} />
                  </>
                )}
              </motion.button>
              <p className="text-center text-driftwood text-xs">We respond within 24 hours</p>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
