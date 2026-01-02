import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

const bootcamps = [
  {
    title: "Full Stack Developer Bootcamp",
    description: "Become a complete developer with React, Node.js, and modern databases",
    duration: "12 weeks",
    batchSize: "30 students",
    nextBatch: "Jan 15, 2026",
    gradient: "from-primary to-accent",
  },
  {
    title: "Data Science & AI Bootcamp",
    description: "Master Python, ML, and deploy AI models to production",
    duration: "10 weeks",
    batchSize: "25 students",
    nextBatch: "Feb 1, 2026",
    gradient: "from-accent to-primary",
  },
  {
    title: "UI/UX Design Crash Program",
    description: "From Figma basics to complete product design portfolio",
    duration: "8 weeks",
    batchSize: "20 students",
    nextBatch: "Jan 20, 2026",
    gradient: "from-primary via-accent to-primary",
  },
];

export const BootcampsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block">Bootcamps & Programs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            High-Impact Bootcamps for{" "}
            <span className="gradient-text">Real-World Readiness</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our bootcamps go beyond just theory. Join structured, intensive programs built 
            to replicate real job experiences with mentorship, collaboration, and outcome-based learning.
          </p>
        </div>

        {/* Bootcamps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {bootcamps.map((bootcamp, index) => (
            <div
              key={bootcamp.title}
              className="relative group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-2 gradient-bg`} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {bootcamp.title}
                </h3>
                <p className="text-muted-foreground mb-6">{bootcamp.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{bootcamp.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{bootcamp.batchSize} max</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Next batch: {bootcamp.nextBatch}</span>
                  </div>
                </div>

                <Button asChild className="w-full" variant="outline">
                  <Link to="/bootcamps">Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/bootcamps">
              View Bootcamp Calendar
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
