import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const points = [
  { title: "Exclusive project pipeline", desc: "A curated database of government projects that are not publicly advertised, updated regularly." },
  { title: "Full process management", desc: "From the first conversation to project completion, we manage every step." },
  { title: "CSR expertise", desc: "In-depth knowledge of India's CSR regulatory requirements and how government projects can satisfy them." },
  { title: "Verified track record", desc: "More than 150 projects completed across infrastructure and solar sectors." },
];

const WhySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
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

          <div className="space-y-6">
            {points.map((point, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.08}>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={16} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
