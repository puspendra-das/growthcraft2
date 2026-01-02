import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Briefcase, Users, Target, Clock, Award, Search, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Pre-Vetted Talent",
    description: "Access candidates who have been trained and assessed on real-world projects.",
  },
  {
    icon: Target,
    title: "Skill-Matched Hiring",
    description: "Find candidates with the exact tech stack and skills you need.",
  },
  {
    icon: Clock,
    title: "Faster Hiring",
    description: "Reduce your time-to-hire with job-ready candidates.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "All candidates complete rigorous training and project work.",
  },
  {
    icon: Search,
    title: "Diverse Talent Pool",
    description: "Access talent from across India, from various backgrounds.",
  },
  {
    icon: Briefcase,
    title: "Dedicated Support",
    description: "Our team helps you find the right fit for your organization.",
  },
];

const skills = [
  "React & Next.js",
  "Node.js & Express",
  "Python & Django",
  "Data Science & ML",
  "UI/UX Design",
  "DevOps & Cloud",
  "Mobile Development",
  "Database Management",
];

const ForEmployers = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              GrowthCraft Employer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hire Job-Ready{" "}
              <span className="gradient-text">Tech Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Access our pool of trained, certified, and interview-ready candidates 
              who are equipped with the skills your organization needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Hire From Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                View Talent Pool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">5000+</p>
              <p className="text-muted-foreground">Trained Candidates</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">100+</p>
              <p className="text-muted-foreground">Hiring Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">95%</p>
              <p className="text-muted-foreground">Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">30+</p>
              <p className="text-muted-foreground">Tech Domains</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Why Hire From Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Partnering with{" "}
              <span className="gradient-text">GrowthCraft</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="p-4 rounded-xl gradient-bg text-primary-foreground w-fit mb-5 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              <span className="text-primary font-semibold mb-4 block">Available Skills</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Skills Our Candidates Bring
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our candidates are trained in the most in-demand technologies 
                and are ready to contribute from day one.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gradient-bg rounded-2xl aspect-square flex items-center justify-center">
              <p className="text-6xl">💼</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Connect with our team to discuss your hiring needs and get access 
            to our pool of job-ready candidates.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForEmployers;
