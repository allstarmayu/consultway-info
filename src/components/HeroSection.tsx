import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'hsl(210, 54%, 11%)' }}>
      {/* Animated grid */}
      <div className="absolute inset-0 grid-pattern animate-grid-drift opacity-20" />
      
      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(210_54%_11%)_75%)]" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center max-w-4xl">
        <motion.p
          className="section-label mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          PROJECT MANAGEMENT CONSULTANCY
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Unlock Unique Government Project Opportunities
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          We connect private sector companies with government-backed infrastructure and solar projects across India — turning complex bureaucratic processes into clear, actionable partnerships.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:brightness-110 active:scale-[0.97] transition-all duration-200"
          >
            Book a Discovery Call
            <ArrowRight size={18} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-white/20 text-white/80 font-medium text-base hover:bg-white/5 active:scale-[0.97] transition-all duration-200"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
