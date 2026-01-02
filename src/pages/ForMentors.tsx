import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCheck, Heart, DollarSign, Clock, Globe, Award, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Make an Impact",
    description: "Guide the next generation of tech professionals and shape their careers.",
  },
  {
    icon: DollarSign,
    title: "Earn While You Teach",
    description: "Competitive compensation for your time and expertise.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Mentor on your own time, from anywhere in the world.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with students from across India and beyond.",
  },
  {
    icon: Award,
    title: "Build Your Brand",
    description: "Establish yourself as a thought leader in your domain.",
  },
  {
    icon: UserCheck,
    title: "Curated Matching",
    description: "We match you with students that align with your expertise.",
  },
];

const requirements = [
  "3+ years of industry experience in your domain",
  "Strong communication skills",
  "Passion for teaching and mentoring",
  "Availability for at least 5 hours per week",
  "Portfolio or track record of work",
];

const ForMentors = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <UserCheck className="h-4 w-4" />
              GrowthCraft Mentor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Inspire the Next Wave of{" "}
              <span className="gradient-text">Tech Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Share your expertise, guide aspiring professionals, and make a lasting 
              impact while earning on your own schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Apply to Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block">Why Become a Mentor</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Joining{" "}
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

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="gradient-bg rounded-2xl aspect-square flex items-center justify-center">
              <p className="text-6xl">👨‍🏫</p>
            </div>
            <div>
              <span className="text-primary font-semibold mb-4 block">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What We Look For
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're looking for passionate professionals who want to give back 
                and help the next generation succeed.
              </p>
              <div className="space-y-4">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Apply to become a GrowthCraft Mentor today and start inspiring 
            the next generation of tech professionals.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ForMentors;
