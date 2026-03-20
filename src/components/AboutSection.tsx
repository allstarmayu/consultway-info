import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <p className="section-label mb-4">ABOUT US</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-[1.15] mb-6">
                Bridging Private Enterprise and Government Opportunity
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-5 text-muted-foreground leading-[1.75] text-[17px]">
                <p>
                  Consultway Infotech is a project management consultancy focused on infrastructure and solar projects. The company was founded to solve a specific problem: private sector companies in India want to engage with government projects, but the process is complex, opaque, and time-consuming.
                </p>
                <p>
                  We have built direct relationships with government bodies and project administrators, connecting businesses with projects specifically designed for private sector participation — projects that are rarely accessed due to bureaucratic barriers.
                </p>
                <p>
                  The result: our clients gain access to opportunities they could not find independently, while government programs benefit from private sector investment and expertise.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25} direction="right">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent text-2xl font-bold">C</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Team photo coming soon</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
