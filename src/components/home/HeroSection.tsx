import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Tech learning environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4" />
            Your Career Transformation Starts Here
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where{" "}
            <span className="gradient-text">Learning</span>
            {" "}Meets{" "}
            <span className="gradient-text">Opportunity</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            GrowthCraft is your all-in-one platform to learn tech, master industry skills, 
            join hands-on bootcamps, connect with mentors, and land your dream job. 
            Whether you're a student, college, mentor, or a company — there's something here for you.
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
                Join a Bootcamp
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/for-colleges">
                Become a Partner
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl font-bold gradient-text">5000+</p>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-muted-foreground">College Partners</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">100+</p>
              <p className="text-muted-foreground">Hiring Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
