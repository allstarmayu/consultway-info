import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What types of companies do you work with?",
    a: "We work with private sector companies of all sizes across infrastructure, solar, renewable energy, real estate, and manufacturing sectors. Most of our clients have never worked with government departments before.",
  },
  {
    q: "How long does it take to be matched with a project?",
    a: "After the discovery call, initial opportunity matching typically happens within two weeks. Full enrollment and partnership agreement generally happen within 60 to 90 days.",
  },
  {
    q: "Do we need prior experience working with government bodies?",
    a: "No. Most of our clients have never worked with government departments before. That is specifically why they come to Consultway.",
  },
  {
    q: "What is CSR and why does it apply here?",
    a: "India's Companies Act 2013 requires companies above a certain size to spend 2% of their average net profit on CSR activities. Government infrastructure and solar projects are CSR-eligible, allowing companies to meet legal requirements through meaningful work.",
  },
  {
    q: "What happens after I submit the contact form?",
    a: "We will respond within 24 hours to schedule a free 30-minute discovery call. There is no obligation and no sales pressure at that stage.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-off-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        <ScrollReveal>
          <p className="section-label text-center mb-4">FREQUENTLY ASKED QUESTIONS</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center leading-[1.15] mb-12">
            Common Questions
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-md transition-shadow duration-200">
                <AccordionTrigger className="text-left font-medium text-foreground text-[15px] hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
