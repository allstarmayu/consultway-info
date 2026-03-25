import ScrollReveal from "./ScrollReveal";

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
  return (
    <section id="process" className="py-24 lg:py-32 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-4">THE PROCESS</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground text-center leading-[1.15] mb-16 max-w-2xl mx-auto">
            From First Conversation to Active Partnership
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={0.2 + i * 0.1}>
              <div className="relative">
                <span className="text-6xl font-bold text-accent/15 absolute -top-4 -left-2">{step.number}</span>
                <div className="pt-10">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
