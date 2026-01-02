import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import heroLearning from "@/assets/hero-learning.jpg";
import { TechLogosStrip } from "@/components/shared/TechLogos";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroLearning}
          alt="Modern tech learning environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/98 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Your Career Transformation Starts Here
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up text-foreground" style={{ animationDelay: "0.1s" }}>
            Where{" "}
            <span className="text-primary">Learning</span>
            {" "}Meets{" "}
            <span className="text-primary">Opportunity</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            GrowthCraft is your all-in-one platform to learn tech, master industry skills, 
            join hands-on bootcamps, connect with mentors, and land your dream job.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="xl">
              <Link to="/courses">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/bootcamps">
                <Play className="mr-2 h-5 w-5" />
                Join a Bootcamp
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-bold text-primary">5000+</p>
              <p className="text-muted-foreground text-sm">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground text-sm">College Partners</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground text-sm">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Logos Strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4">
          <TechLogosStrip />
        </div>
      </div>
    </section>
  );
};