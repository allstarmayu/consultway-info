import { motion, useInView } from "framer-motion";
import { Landmark, Sun, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useRef } from "react";

const services = [
  {
    icon: Landmark,
    title: "Government Project Access",
    description: "We identify and connect you with government-backed infrastructure projects tailored to your business capabilities — projects most companies never discover on their own.",
  },
  {
    icon: Sun,
    title: "Solar & Renewable Projects",
    description: "Access CSR-eligible solar energy and renewable projects across India, with full compliance guidance and project management from enrollment to completion.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description: "We broker partnerships between private enterprises and government bodies, managing every step of the engagement so you can focus on delivering results.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-4">WHAT WE DO</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground text-center leading-[1.15] mb-4 max-w-2xl mx-auto">
            Everything You Need to Access Government Projects
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
            We handle the entire process, from identifying the right project to delivering a successful partnership.
          </p>
        </ScrollReveal>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px hsl(var(--foreground) / 0.08)",
                transition: { duration: 0.3 },
              }}
              className="group bg-card rounded-2xl p-8 h-full border border-border cursor-default transition-colors duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-accent/15"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              >
                <service.icon size={22} className="text-accent" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
