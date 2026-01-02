import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Cloud, Brain, Rocket, Globe, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Master frontend, backend, and databases with modern frameworks",
    courses: 12,
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Create beautiful, user-centered digital experiences",
    courses: 8,
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Learn CI/CD, AWS, Docker, Kubernetes and more",
    courses: 6,
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    description: "Explore machine learning, analytics, and AI applications",
    courses: 10,
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description: "Aptitude, interview prep, and professional skills",
    courses: 5,
  },
  {
    icon: Globe,
    title: "Freelance & Remote Work",
    description: "Build skills for the modern remote workforce",
    courses: 4,
  },
];

export const CourseCategories = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block">Course Categories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Master the Skills That Power{" "}
            <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore a growing library of self-paced and mentor-led courses across trending domains.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              to="/courses"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 rounded-xl gradient-bg text-primary-foreground w-fit mb-5 group-hover:scale-110 transition-transform">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{category.courses} courses</span>
                <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/courses">
              Browse All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
