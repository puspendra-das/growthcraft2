import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserCheck, Heart, DollarSign, Clock, Globe, Award, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import mentorScene from "@/assets/mentor-scene.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const benefits = [
  { icon: Heart, title: "Make an Impact", description: "Guide the next generation of tech professionals and shape their careers." },
  { icon: DollarSign, title: "Earn While You Teach", description: "Competitive compensation for your time and expertise." },
  { icon: Clock, title: "Flexible Schedule", description: "Mentor on your own time, from anywhere in the world." },
  { icon: Globe, title: "Global Reach", description: "Connect with students from across India and beyond." },
  { icon: Award, title: "Build Your Brand", description: "Establish yourself as a thought leader in your domain." },
  { icon: UserCheck, title: "Curated Matching", description: "We match you with students that align with your expertise." },
];

const requirements = [
  "3+ years of industry experience in your domain",
  "Strong communication skills",
  "Passion for teaching and mentoring",
  "Availability for at least 5 hours per week",
  "Portfolio or track record of work",
];

const ForMentors = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={mentorScene} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-6">
              <UserCheck className="h-4 w-4" />
              GrowthCraft Mentor
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Inspire the Next Wave of{" "}
              <span className="text-primary">Tech Talent</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Share your expertise, guide aspiring professionals, and make a lasting 
              impact while earning on your own schedule.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/mentor/register">Apply to Mentor</Link>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl" onClick={() => openForm("enquiry", "Mentor Program Enquiry")}>
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
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Why Become a Mentor</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Benefits of Joining <span className="text-primary">GrowthCraft</span>
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

      {/* Requirements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img src={teamCollaboration} alt="Team collaboration" className="rounded-2xl shadow-lg" />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">100+</p>
                    <p className="text-xs text-muted-foreground">Active Mentors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Requirements</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                What We Look For
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We're looking for passionate professionals who want to give back 
                and help the next generation succeed.
              </p>
              <div className="space-y-4 mb-8">
                {requirements.map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{req}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" onClick={() => openForm("mentor")}>
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Apply to become a GrowthCraft Mentor today and start inspiring 
            the next generation of tech professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("mentor")}>
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="xl" variant="hero-outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => openForm("callback")}>
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link to="/for-students" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">For Students</h3>
              <p className="text-sm text-muted-foreground mt-1">See how students benefit from mentors</p>
            </Link>
            <Link to="/bootcamps" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Our Bootcamps</h3>
              <p className="text-sm text-muted-foreground mt-1">Programs you could mentor in</p>
            </Link>
            <Link to="/for-employers" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Hiring Partners</h3>
              <p className="text-sm text-muted-foreground mt-1">Connect your company as a partner</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForMentors;