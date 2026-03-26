import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useRef } from "react";

const points = [
  { title: "Exclusive project pipeline", desc: "A curated database of government projects that are not publicly advertised, updated regularly." },
  { title: "Full process management", desc: "From the first conversation to project completion, we manage every step." },
  { title: "CSR expertise", desc: "In-depth knowledge of India's CSR regulatory requirements and how government projects can satisfy them." },
  { title: "Verified track record", desc: "More than 150 projects completed across infrastructure and solar sectors." },
];

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <ScrollReveal>
              <p className="section-label mb-4">WHY CHOOSE US</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] mb-6">
                Access Is the Difference
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed text-[17px]">
                Most consultancies offer strategic advice. Consultway offers something more direct: access to government projects that private companies cannot reach on their own. The relationships we've built with government departments have been developed over years and cannot be replicated quickly.
              </p>
            </ScrollReveal>
          </div>

          <div ref={ref} className="space-y-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.div
                  className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0 mt-0.5"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.1,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <Check size={16} className="text-accent" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
