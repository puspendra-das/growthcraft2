import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { School, Users, GraduationCap, Award, Briefcase, Calendar, CheckCircle, ArrowRight, Building } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Custom Workshops",
    description: "Tailored bootcamps and workshops designed for your students' needs and industry demands.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Our mentors are industry professionals with years of hands-on experience.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Students receive industry-recognized certificates upon completion.",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description: "Direct access to our network of hiring partners for your students.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "We work around your academic calendar for seamless integration.",
  },
  {
    icon: Building,
    title: "On-Campus Delivery",
    description: "We bring the training to your campus, online or in-person.",
  },
];

const programs = [
  "Full Stack Development Bootcamp",
  "Data Science & AI Workshop",
  "UI/UX Design Sprint",
  "Career Readiness Program",
  "Aptitude & Interview Prep",
  "Hackathon Facilitation",
];

const ForColleges = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <School className="h-4 w-4" />
              GrowthCraft Campus
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Partner With{" "}
              <span className="gradient-text">GrowthCraft</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Empower your students with industry-ready skills through our customized 
              bootcamps, workshops, and training programs delivered on your campus.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Download Brochure
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
              <p className="text-4xl font-bold gradient-text mb-2">50+</p>
              <p className="text-muted-foreground">College Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">200+</p>
              <p className="text-muted-foreground">Workshops Conducted</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10,000+</p>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">95%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits for Your{" "}
              <span className="gradient-text">Institution</span>
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

      {/* Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold mb-4 block">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Programs We Offer for Campuses
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Choose from our range of programs or work with us to create a 
                customized curriculum that fits your institution's needs.
              </p>
              <div className="space-y-3">
                {programs.map((program) => (
                  <div key={program} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="font-medium">{program}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="gradient-bg rounded-2xl aspect-square flex items-center justify-center">
              <p className="text-6xl">🏫</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Campus?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Schedule a call with our partnerships team to discuss how we can 
            bring industry-ready training to your institution.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForColleges;
