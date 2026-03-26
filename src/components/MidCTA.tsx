import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const MidCTA = () => {
  return (
    <section className="py-24 lg:py-28 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Floating accent orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

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
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold text-base transition-all duration-200"
            whileHover={{ scale: 1.05, boxShadow: "0 8px 30px hsl(var(--accent) / 0.4)" }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Free Discovery Call
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default MidCTA;
