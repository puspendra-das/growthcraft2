import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users, MapPin, Video, CheckCircle, ArrowRight, Code2, Brain, Palette, School } from "lucide-react";

const bootcamps = [
  {
    icon: Code2,
    title: "Full Stack Developer Bootcamp",
    description: "Become a complete developer with React, Node.js, MongoDB, and modern deployment practices. Build 5+ real-world projects.",
    duration: "12 weeks",
    format: "Online + Weekend Sessions",
    batchSize: "30 students",
    nextBatch: "January 15, 2026",
    price: "₹29,999",
    highlights: [
      "React, Node.js, Express, MongoDB",
      "5+ portfolio-ready projects",
      "1:1 mentorship sessions",
      "Placement assistance",
      "Certificate of completion",
    ],
  },
  {
    icon: Brain,
    title: "Data Science & AI Bootcamp",
    description: "Master Python, machine learning, deep learning, and deploy AI models to production with real datasets.",
    duration: "10 weeks",
    format: "Online Live",
    batchSize: "25 students",
    nextBatch: "February 1, 2026",
    price: "₹34,999",
    highlights: [
      "Python, Pandas, NumPy, Scikit-learn",
      "Deep Learning with TensorFlow",
      "Real industry datasets",
      "Kaggle competition prep",
      "AI project portfolio",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design Crash Program",
    description: "From Figma basics to complete product design. Learn user research, prototyping, and design systems.",
    duration: "8 weeks",
    format: "Online + Projects",
    batchSize: "20 students",
    nextBatch: "January 20, 2026",
    price: "₹24,999",
    highlights: [
      "Figma mastery",
      "User research methods",
      "Wireframing & prototyping",
      "Design systems",
      "Portfolio with 3+ case studies",
    ],
  },
  {
    icon: School,
    title: "College Workshop Sprint",
    description: "Intensive on-campus or virtual workshops designed for college students. Perfect for placement preparation.",
    duration: "2-4 weeks",
    format: "On-Campus / Hybrid",
    batchSize: "50+ students",
    nextBatch: "Flexible scheduling",
    price: "Contact for pricing",
    highlights: [
      "Customized curriculum",
      "Hands-on coding sessions",
      "Interview preparation",
      "Industry expert talks",
      "Certification for all participants",
    ],
  },
];

const Bootcamps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              High-Impact Bootcamps for{" "}
              <span className="gradient-text">Real-World Readiness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Intensive, structured programs built to replicate real job experiences 
              with mentorship, collaboration, and outcome-based learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamps List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {bootcamps.map((bootcamp, index) => (
              <div
                key={bootcamp.title}
                className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Left Column - Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-xl gradient-bg text-primary-foreground">
                        <bootcamp.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{bootcamp.title}</h2>
                        <p className="text-muted-foreground text-lg">{bootcamp.description}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{bootcamp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Video className="h-4 w-4 text-primary" />
                        <span>{bootcamp.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{bootcamp.batchSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{bootcamp.nextBatch}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="font-semibold mb-3">What you'll learn:</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {bootcamp.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - CTA */}
                  <div className="lg:border-l border-border p-8 flex flex-col justify-center items-center text-center bg-muted/30">
                    <span className="text-3xl font-bold gradient-text mb-2">{bootcamp.price}</span>
                    <p className="text-sm text-muted-foreground mb-6">EMI options available</p>
                    <Button variant="hero" size="lg" className="w-full mb-3">
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      Download Syllabus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Bootcamp Is Right for You?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free counseling session with our team to understand your goals 
            and find the perfect program for your career.
          </p>
          <Button variant="hero" size="xl">
            Book Free Counseling
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Bootcamps;
