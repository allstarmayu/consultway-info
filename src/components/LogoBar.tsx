import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const placeholderLogos = [
  "Partner Co.", "Infra Corp", "Solar Ltd", "BuildTech", "GovLink",
  "Partner Co.", "Infra Corp", "Solar Ltd", "BuildTech", "GovLink",
];

const LogoBar = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-3">TRUSTED BY</p>
          <p className="text-center text-driftwood mb-12 text-sm">Companies That Have Partnered with Consultway</p>
        </ScrollReveal>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10" />
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {placeholderLogos.map((name, i) => (
            <div
              key={i}
              className="text-xl font-semibold text-driftwood/40 whitespace-nowrap select-none flex-shrink-0"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoBar;
