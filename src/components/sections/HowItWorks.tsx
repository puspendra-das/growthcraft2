import { Section } from "@/components/ui-extensions";

const steps = [
  { num: "01", title: "Learn", desc: "Industry-designed curriculum taught by engineers who ship daily." },
  { num: "02", title: "Build", desc: "5+ production projects that solve real problems, not toy apps." },
  { num: "03", title: "Get Mentored", desc: "Weekly 1-on-1 sessions with senior engineers from top companies." },
  { num: "04", title: "Get Hired", desc: "Direct interviews with 120+ hiring partners. No job boards." },
];

const HowItWorks = () => {
  return (
    <Section variant="white">
      <div className="text-center mb-16 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">The journey</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">How it works</h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-magenta to-lavender rounded-full" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="text-center relative animate-fade-up">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border mb-4 relative z-10">
                <span className="text-2xl font-extrabold font-display text-lavender/40">{num}</span>
              </div>
              <h3 className="text-lg font-bold font-display mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowItWorks;
