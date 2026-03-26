import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We learn about your business, your goals, and the type of government projects you want to access. This call is free and takes 30 minutes.",
  },
  {
    number: "02",
    title: "Opportunity Matching",
    description: "We review our curated pipeline of active government projects and identify the opportunities that align with your business capabilities and sector.",
  },
  {
    number: "03",
    title: "Partnership & Execution",
    description: "We manage the documentation, compliance, and coordination needed to enroll you in the project. You focus on delivering — we handle the process.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="process" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-4">THE PROCESS</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground text-center leading-[1.15] mb-16 max-w-2xl mx-auto">
            From First Conversation to Active Partnership
          </h2>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Subtle dotted connecting line (desktop only) */}
          <motion.div
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t border-dashed border-accent/30"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3 + i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Animated step number */}
              <motion.div
                className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 relative z-10"
                initial={{ scale: 0, rotate: -20 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <span className="text-accent font-bold text-lg">{step.number}</span>
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
