import { Landmark, Sun, Handshake } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-off-white">
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

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <div className="group bg-glass rounded-2xl p-8 h-full hover:shadow-[0_8px_32px_hsl(var(--navy)/0.3)] transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon size={22} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">{service.title}</h3>
                <p className="text-primary-foreground/50 leading-relaxed text-[15px]">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
