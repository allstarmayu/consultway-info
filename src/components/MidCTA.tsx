import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MidCTA = () => {
  return (
    <section className="py-24 lg:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center max-w-3xl">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Ready to Access Your First Government Project?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-primary-foreground/50 text-lg mb-10 max-w-xl mx-auto">
            Join over 150 businesses that have opened doors to government partnerships through Consultway.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            Book a Free Discovery Call
            <ArrowRight size={18} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MidCTA;
