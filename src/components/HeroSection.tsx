import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const textReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          y: backgroundY,
        }}
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Subtle grid with parallax */}
      <motion.div
        className="absolute inset-0 grid-pattern opacity-20"
        style={{ y: backgroundY }}
      />

      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-3 h-3 rounded-full bg-accent/20"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-2 h-2 rounded-full bg-accent/15"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-[40%] left-[20%] w-16 h-[1px] bg-accent/10 rotate-45"
        animate={{ opacity: [0.1, 0.3, 0.1], scaleX: [0.5, 1, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 container mx-auto px-6 lg:px-8 text-center max-w-4xl"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="section-label mb-6"
          custom={0}
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          PROJECT MANAGEMENT CONSULTANCY
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-6"
          custom={1}
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          Unlock Unique Government Project Opportunities
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          custom={2}
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          We connect private sector companies with government-backed
          infrastructure and solar projects across India — turning complex
          bureaucratic processes into clear, actionable partnerships.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          custom={3}
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base transition-all duration-200"
            whileHover={{ scale: 1.04, boxShadow: "0 8px 30px hsl(var(--accent) / 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Discovery Call
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.a>
          <motion.a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg border border-border text-foreground font-medium text-base transition-all duration-200"
            whileHover={{ scale: 1.03, backgroundColor: "hsl(var(--secondary))" }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Services
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
