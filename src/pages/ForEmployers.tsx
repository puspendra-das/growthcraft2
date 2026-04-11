import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Target, Clock, Award, Search, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import employerScene from "@/assets/employer-scene.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import { TechLogos } from "@/components/shared/TechLogos";

const benefits = [
  { icon: Users, title: "Pre-Vetted Talent", description: "Access candidates who have been trained and assessed on real-world projects." },
  { icon: Target, title: "Skill-Matched Hiring", description: "Find candidates with the exact tech stack and skills you need." },
  { icon: Clock, title: "Faster Hiring", description: "Reduce your time-to-hire with job-ready candidates." },
  { icon: Award, title: "Quality Assurance", description: "All candidates complete rigorous training and project work." },
  { icon: Search, title: "Diverse Talent Pool", description: "Access talent from across India, from various backgrounds." },
  { icon: Briefcase, title: "Dedicated Support", description: "Our team helps you find the right fit for your organization." },
];

const skills = ["React & Next.js", "Node.js & Express", "Python & Django", "Data Science & ML", "UI/UX Design", "DevOps & Cloud", "Mobile Development", "Database Management"];

const ForEmployers = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={employerScene} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              GrowthCraft Employer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Hire Job-Ready{" "}
              <span className="text-primary">Tech Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Access our pool of trained, certified, and interview-ready candidates 
              who are equipped with the skills your organization needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/employer/register">Hire From Us <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="hero-outline" size="xl" onClick={() => openForm("callback")}>
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-muted-foreground text-sm">Trained Candidates</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground text-sm">Hiring Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground text-sm">Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">30+</p>
              <p className="text-muted-foreground text-sm">Tech Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Why Hire From Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Benefits of Partnering with <span className="text-primary">GrowthCraft</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 group">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Available Skills</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Skills Our Candidates Bring
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our candidates are trained in the most in-demand technologies 
                and are ready to contribute from day one.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground text-sm">{skill}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" onClick={() => openForm("partner", "View Talent Pool")}>
                View Talent Pool
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <img src={teamCollaboration} alt="Team collaboration" className="rounded-2xl shadow-lg" />
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Technologies our candidates know:</p>
                <TechLogos count={10} size="sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss your hiring needs and get access 
            to our pool of job-ready candidates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("partner")}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/bootcamps">View Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link to="/for-colleges" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">For Colleges</h3>
              <p className="text-sm text-muted-foreground mt-1">Partner for campus recruitment</p>
            </Link>
            <Link to="/bootcamps" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Our Bootcamps</h3>
              <p className="text-sm text-muted-foreground mt-1">See how we train candidates</p>
            </Link>
            <Link to="/for-mentors" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Become a Mentor</h3>
              <p className="text-sm text-muted-foreground mt-1">Your experts can mentor too</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForEmployers;