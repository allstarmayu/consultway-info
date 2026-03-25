import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Consultway made accessing government projects straightforward. What would have taken us over a year was completed in under 90 days.",
    name: "Rajesh Mehta",
    title: "Managing Director",
    company: "Infrastructure Partner Ltd.",
  },
  {
    quote: "Their understanding of the CSR landscape is unmatched. We were connected with projects that perfectly aligned with our compliance requirements.",
    name: "Priya Sharma",
    title: "CSR Head",
    company: "Solar Ventures India",
  },
  {
    quote: "The team handled every aspect of documentation and coordination. We could focus entirely on execution while they managed the process.",
    name: "Arjun Patel",
    title: "CEO",
    company: "GreenBuild Corp",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-4">CLIENT FEEDBACK</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center leading-[1.15] mb-16 max-w-xl mx-auto">
            What Our Partners Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <div className="bg-card rounded-2xl p-8 h-full flex flex-col border border-border hover:shadow-lg hover:shadow-foreground/[0.03] transition-shadow duration-300">
                <Quote size={24} className="text-accent/40 mb-4 flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-[15px]">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-driftwood text-xs">{t.title}, {t.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
