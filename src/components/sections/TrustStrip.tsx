import { Section, StatCounter } from "@/components/ui-extensions";

const logos = [
  "IIT Guwahati", "NIT Silchar", "Tezpur University",
  "Assam Engineering", "Cotton University", "Gauhati University"
];

const TrustStrip = () => {
  return (
    <Section variant="white" className="py-16 md:py-20">
      <div className="text-center mb-10 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground">
          Trusted by learners from
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
        {logos.map((name) => (
          <div
            key={name}
            className="h-10 px-6 flex items-center justify-center rounded-md bg-muted text-muted-foreground text-sm font-medium font-afacad grayscale opacity-60"
          >
            {name}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
        <StatCounter value={4200} suffix="+" label="Students Trained" />
        <StatCounter value={120} suffix="+" label="Hiring Partners" />
        <StatCounter value={94} suffix="%" label="Placement Rate" />
      </div>
    </Section>
  );
};

export default TrustStrip;
