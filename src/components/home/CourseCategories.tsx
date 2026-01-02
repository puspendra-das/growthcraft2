import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Cloud, Brain, Rocket, Globe, ArrowRight } from "lucide-react";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseDevops from "@/assets/course-devops.jpg";

const categories = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Master frontend, backend, and databases with modern frameworks",
    courses: 12,
    image: courseFullstack,
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Create beautiful, user-centered digital experiences",
    courses: 8,
    image: courseUiux,
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "Learn CI/CD, AWS, Docker, Kubernetes and more",
    courses: 6,
    image: courseDevops,
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    description: "Explore machine learning, analytics, and AI applications",
    courses: 10,
    image: courseDatascience,
  },
  {
    icon: Rocket,
    title: "Career Launchpad",
    description: "Aptitude, interview prep, and professional skills",
    courses: 5,
    image: null,
  },
  {
    icon: Globe,
    title: "Freelance & Remote Work",
    description: "Build skills for the modern remote workforce",
    courses: 4,
    image: null,
  },
];

export const CourseCategories = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Course Categories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Master the Skills That Power{" "}
            <span className="text-primary">Modern Tech</span>
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
              className="group rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                {category.image ? (
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center">
                    <category.icon className="h-16 w-16 text-primary/30" />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{category.courses} courses</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
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