import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { School, Users, GraduationCap, Award, Briefcase, Calendar, CheckCircle, ArrowRight, Building, Phone, Download } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import campusBuilding from "@/assets/campus-building.jpg";
import collegeStudents from "@/assets/college-students.jpg";

const benefits = [
  { icon: GraduationCap, title: "Custom Workshops", description: "Tailored bootcamps and workshops designed for your students' needs and industry demands." },
  { icon: Users, title: "Expert Trainers", description: "Our mentors are industry professionals with years of hands-on experience." },
  { icon: Award, title: "Certifications", description: "Students receive industry-recognized certificates upon completion." },
  { icon: Briefcase, title: "Placement Support", description: "Direct access to our network of hiring partners for your students." },
  { icon: Calendar, title: "Flexible Scheduling", description: "We work around your academic calendar for seamless integration." },
  { icon: Building, title: "On-Campus Delivery", description: "We bring the training to your campus, online or in-person." },
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
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={campusBuilding} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-6">
              <School className="h-4 w-4" />
              GrowthCraft Campus
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Partner With{" "}
              <span className="text-primary">GrowthCraft</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Empower your students with industry-ready skills through our customized 
              bootcamps, workshops, and training programs delivered on your campus.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" onClick={() => openForm("partner", "College Partnership Request")}>
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
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
              <p className="text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-muted-foreground text-sm">College Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground text-sm">Workshops Conducted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-muted-foreground text-sm">Students Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">95%</p>
              <p className="text-muted-foreground text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Benefits for Your <span className="text-primary">Institution</span>
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

      {/* Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Programs We Offer for Campuses
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Choose from our range of programs or work with us to create a 
                customized curriculum that fits your institution's needs.
              </p>
              <div className="space-y-3 mb-8">
                {programs.map((program) => (
                  <div key={program} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{program}</span>
                  </div>
                ))}
              </div>
              <Button variant="default" size="lg" onClick={() => openForm("enquiry", "Program Enquiry")}>
                Request Custom Program
              </Button>
            </div>
            <div className="relative">
              <img src={collegeStudents} alt="College students learning" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Campus?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a call with our partnerships team to discuss how we can 
            bring industry-ready training to your institution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("partner")}>
              Schedule a Call
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/bootcamps">View Bootcamps</Link>
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
              <p className="text-sm text-muted-foreground mt-1">Share with your students</p>
            </Link>
            <Link to="/for-mentors" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Become a Mentor</h3>
              <p className="text-sm text-muted-foreground mt-1">Faculty can join as mentors</p>
            </Link>
            <Link to="/for-employers" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Hiring Partners</h3>
              <p className="text-sm text-muted-foreground mt-1">Connect students with employers</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ForColleges;