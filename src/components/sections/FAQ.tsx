import { Section } from "@/components/ui-extensions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "I'm a complete beginner — is this for me?",
    a: "Absolutely. Our JavaScript Zero to Hero course starts from scratch. No prior coding experience needed. You'll write your first program in Day 1 and build a full-stack app by Week 8.",
  },
  {
    q: "What if I can't get a job after the program?",
    a: "We offer extended mentorship and placement support until you land a role. Our 94% placement rate speaks for itself — but if it doesn't work out, we'll keep working with you until it does.",
  },
  {
    q: "How is this different from free YouTube tutorials?",
    a: "YouTube teaches concepts. We build careers. You get a structured curriculum, 1-on-1 mentorship, real projects that go on your portfolio, and direct access to hiring partners.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes — a verified completion certificate for every course. But more importantly, you get a portfolio of 5+ production projects that actually matter in interviews.",
  },
  {
    q: "What are the EMI options?",
    a: "We offer 0% EMI through our banking partners for tenures of 3, 6, and 12 months. Need-based scholarships are also available — just reach out to us.",
  },
  {
    q: "How much time per week do I need?",
    a: "Plan for 15–20 hours per week. That includes live sessions (4–5 hours), project work, and self-study. All sessions are recorded if you miss one.",
  },
  {
    q: "Can I switch courses midway?",
    a: "Yes. If you realize a different track suits you better within the first 2 weeks, we'll help you switch at no extra cost.",
  },
  {
    q: "Is there a refund policy?",
    a: "We offer a full refund within the first 7 days if the course isn't right for you. No questions asked.",
  },
];

const FAQ = () => {
  return (
    <Section variant="white">
      <div className="text-center mb-14 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">
          Questions, answered honestly.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 data-[state=open]:shadow-card">
              <AccordionTrigger className="text-left font-display font-semibold text-sm md:text-base hover:no-underline py-4">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQ;
