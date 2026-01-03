import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { courseCategories, courses } from "@/data/courses";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseDevops from "@/assets/course-devops.jpg";

const categoryImages: Record<string, string> = {
  "programming": courseFullstack,
  "web-dev": courseFullstack,
  "data-science": courseDatascience,
  "devops": courseDevops,
  "cybersecurity": courseDevops,
  "mobile": courseFullstack,
  "ui-ux": courseUiux,
  "software-eng": courseFullstack,
  "projects": courseFullstack,
  "career": courseUiux,
  "cms": courseFullstack,
};

// Get a few featured courses from each main category
const featuredCourses = [
  courses.find(c => c.id === "react-ready"),
  courses.find(c => c.id === "genai-build"),
  courses.find(c => c.id === "mern-fusion"),
  courses.find(c => c.id === "figma-flow"),
  courses.find(c => c.id === "dockit-containers"),
  courses.find(c => c.id === "flutterverse"),
].filter(Boolean);

export const CourseCategories = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Course Categories</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {courses.length}+ Courses Across{" "}
            <span className="text-primary">{courseCategories.length} Domains</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From Python basics to advanced AI, from frontend to DevOps — master in-demand skills with our comprehensive curriculum.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {courseCategories.slice(0, 8).map((category) => (
            <Link
              key={category.id}
              to={`/courses`}
              className="group rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="h-28 overflow-hidden">
                <img 
                  src={categoryImages[category.id] || courseFullstack} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{category.courses} courses</span>
                </div>
                <h3 className="text-sm font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-xs line-clamp-2">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Courses */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-foreground flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Featured Courses
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCourses.map((course) => course && (
              <div 
                key={course.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-foreground mb-1 line-clamp-1">{course.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{course.subcategory}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />{course.duration}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full ${
                      course.level === "Beginner" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                      course.level === "Intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" :
                      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    }`}>
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/courses">
              Browse All {courses.length}+ Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
