import ScrollReveal from "./ScrollReveal";

const placeholderLogos = [
  "Partner Co.", "Infra Corp", "Solar Ltd", "BuildTech", "GovLink",
];

const LogoBar = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="section-label text-center mb-3">TRUSTED BY</p>
          <p className="text-center text-driftwood mb-12 text-sm">Companies That Have Partnered with Consultway</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {placeholderLogos.map((name, i) => (
              <div
                key={i}
                className="text-xl font-semibold text-driftwood/40 hover:text-driftwood/70 transition-colors duration-300 select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LogoBar;
