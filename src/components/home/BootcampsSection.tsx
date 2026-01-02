import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, Code2, Brain, Palette } from "lucide-react";
import bootcampScene from "@/assets/bootcamp-scene.jpg";

const bootcamps = [
  {
    icon: Code2,
    title: "Full Stack Developer Bootcamp",
    description: "Become a complete developer with React, Node.js, and modern databases",
    duration: "12 weeks",
    batchSize: "30 students",
    nextBatch: "Jan 15, 2026",
  },
  {
    icon: Brain,
    title: "Data Science & AI Bootcamp",
    description: "Master Python, ML, and deploy AI models to production",
    duration: "10 weeks",
    batchSize: "25 students",
    nextBatch: "Feb 1, 2026",
  },
  {
    icon: Palette,
    title: "UI/UX Design Crash Program",
    description: "From Figma basics to complete product design portfolio",
    duration: "8 weeks",
    batchSize: "20 students",
    nextBatch: "Jan 20, 2026",
  },
];

export const BootcampsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={bootcampScene} 
              alt="Bootcamp learning environment" 
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Bootcamp Alumni</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Bootcamps & Programs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              High-Impact Bootcamps for{" "}
              <span className="text-primary">Real-World Readiness</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Intensive programs built to replicate real job experiences with mentorship, 
              collaboration, and outcome-based learning.
            </p>

            {/* Bootcamp Cards */}
            <div className="space-y-4 mb-8">
              {bootcamps.map((bootcamp) => (
                <div
                  key={bootcamp.title}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <bootcamp.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {bootcamp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{bootcamp.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {bootcamp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {bootcamp.batchSize}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {bootcamp.nextBatch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="hero" size="lg">
              <Link to="/bootcamps">
                View All Bootcamps
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};