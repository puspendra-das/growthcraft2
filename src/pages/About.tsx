import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui-extensions/Section";
import DataCard from "@/components/ui-extensions/DataCard";
import { StatCounter } from "@/components/ui-extensions";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import { ArrowRight, Target, Users, Heart, Lightbulb, Linkedin, Twitter } from "lucide-react";

const milestones = [
  { year: "2021", title: "Founded", desc: "GrowthCraft started as a weekend bootcamp in Guwahati." },
  { year: "2022", title: "First 100 students", desc: "Launched the MERN Full-Stack program. 100 students enrolled in month one." },
  { year: "2023", title: "College partnerships", desc: "Signed 20+ colleges across Northeast India for campus programs." },
  { year: "2024", title: "1000+ placements", desc: "Crossed 1000 successful placements at top tech companies." },
  { year: "2025", title: "100 hiring partners", desc: "Expanded to 100+ hiring partners nationwide." },
  { year: "2026", title: "5000+ alumni", desc: "Growing community of 5000+ trained professionals." },
];

const beliefs = [
  { icon: Target, title: "Outcomes over theory", desc: "Every program is designed with a clear career outcome. No fluff." },
  { icon: Users, title: "Community over isolation", desc: "Learning is better together. Our community is your unfair advantage." },
  { icon: Heart, title: "Access over exclusivity", desc: "Great tech education shouldn't require an IIT admission letter." },
  { icon: Lightbulb, title: "Craft over credentials", desc: "What you can build matters more than where you studied." },
];

const team = [
  { name: "Founder", role: "CEO & Lead Instructor", photo: "founder", social: "#" },
  { name: "Co-Founder", role: "Head of Partnerships", photo: "cofounder", social: "#" },
  { name: "Head of Curriculum", role: "Curriculum Design", photo: "curriculum", social: "#" },
  { name: "Head of Placements", role: "Placement Operations", photo: "placements", social: "#" },
];

const About = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />

      {/* Hero */}
      <Section variant="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-afacad text-muted-foreground uppercase tracking-wide mb-4">About GrowthCraft</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              We bridge the gap between education and{" "}
              <span className="text-magenta">employment</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              GrowthCraft creates industry-ready tech professionals by combining live mentorship, real projects, and a direct hiring pipeline.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCounter value={5000} suffix="+" label="Students Trained" />
            <StatCounter value={50} suffix="+" label="College Partners" />
            <StatCounter value={100} suffix="+" label="Hiring Partners" />
            <StatCounter value={95} suffix="%" label="Placement Rate" />
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section variant="marble">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Our story</h2>
        <div className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-magenta" />
          <div className="space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-magenta border-2 border-background" />
                <p className="text-sm font-afacad text-muted-foreground mb-1">{m.year}</p>
                <h3 className="font-bold text-lg">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Beliefs */}
      <Section variant="white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">What we believe</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {beliefs.map((b) => (
            <DataCard key={b.title}>
              <b.icon className="h-8 w-8 text-lavender mb-4" />
              <h3 className="font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </DataCard>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section variant="marble">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8">Meet the team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t) => (
            <DataCard key={t.name} className="text-center">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.photo}`} alt={t.name} className="h-20 w-20 rounded-full mx-auto mb-4" />
              <h3 className="font-bold">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{t.role}</p>
              <div className="flex items-center justify-center gap-2">
                <a href={t.social} className="p-1.5 rounded hover:bg-muted transition-colors"><Linkedin className="h-4 w-4 text-lavender" /></a>
                <a href={t.social} className="p-1.5 rounded hover:bg-muted transition-colors"><Twitter className="h-4 w-4 text-lavender" /></a>
              </div>
            </DataCard>
          ))}
        </div>
      </Section>

      {/* Backers */}
      <Section variant="white">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Built by SYNTHWEB</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          GrowthCraft is built and maintained by SYNTHWEB, a team passionate about creating impactful tech education solutions. Based in Guwahati, Assam.
        </p>
      </Section>

      {/* Final CTA */}
      <Section variant="graphite">
        <div className="text-center py-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Join the GrowthCraft community</h2>
          <p className="text-white/60 mb-6">Whether you're a student, mentor, college, or employer — there's a place for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-magenta text-white hover:bg-magenta/90" size="lg" onClick={() => openForm("enquiry")}>
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
