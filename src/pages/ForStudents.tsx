import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Rocket, Users, Briefcase, Award, BookOpen, Code2, Trophy, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Industry-Ready Courses",
    description: "Learn skills that employers actually want, with curriculum designed by tech professionals.",
  },
  {
    icon: Code2,
    title: "Hands-On Projects",
    description: "Build real-world projects that you can showcase in your portfolio and interviews.",
  },
  {
    icon: Users,
    title: "Mentor Support",
    description: "Get guidance from experienced developers, designers, and data scientists.",
  },
  {
    icon: Briefcase,
    title: "Placement Assistance",
    description: "We connect you with our network of 100+ hiring partners for job opportunities.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Earn industry-recognized certificates that add value to your resume.",
  },
  {
    icon: Trophy,
    title: "Community & Networking",
    description: "Join a community of learners and professionals for collaboration and growth.",
  },
];

const steps = [
  { step: 1, title: "Sign Up", description: "Create your GrowthCraft Seeker account for free" },
  { step: 2, title: "Explore", description: "Browse courses and bootcamps that match your goals" },
  { step: 3, title: "Enroll", description: "Join a program and start your learning journey" },
  { step: 4, title: "Learn & Build", description: "Complete projects and build your portfolio" },
  { step: 5, title: "Get Placed", description: "Apply for jobs with our placement support" },
];

const ForStudents = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              GrowthCraft Seeker
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Launch Your Tech Career with{" "}
              <span className="gradient-text">GrowthCraft</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Learn in-demand tech skills, build real projects, and land your dream job 
              with our comprehensive learning platform and placement support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/courses">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/bootcamps">
                  View Bootcamps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="gradient-text">Succeed</span>
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

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Your Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 gradient-bg" />
              
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className={`relative flex items-center gap-8 mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full gradient-bg text-primary-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with GrowthCraft.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/courses">
              <Rocket className="mr-2 h-5 w-5" />
              Get Started Free
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForStudents;
