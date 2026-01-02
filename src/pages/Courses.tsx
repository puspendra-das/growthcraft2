import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Palette, Cloud, Brain, Rocket, Globe, Clock, Users, BookOpen, ArrowRight, Star, CheckCircle } from "lucide-react";

const categories = [
  { icon: Code2, name: "Full Stack Development", courses: 12 },
  { icon: Palette, name: "UI/UX & Product Design", courses: 8 },
  { icon: Cloud, name: "DevOps & Cloud", courses: 6 },
  { icon: Brain, name: "Data Science & AI", courses: 10 },
  { icon: Rocket, name: "Career Launchpad", courses: 5 },
  { icon: Globe, name: "Freelance & Remote Work", courses: 4 },
];

const courses = [
  {
    title: "Complete React Developer",
    category: "Full Stack Development",
    duration: "40 hours",
    students: 1250,
    rating: 4.9,
    level: "Intermediate",
    price: "₹4,999",
  },
  {
    title: "Node.js & Express Mastery",
    category: "Full Stack Development",
    duration: "35 hours",
    students: 890,
    rating: 4.8,
    level: "Intermediate",
    price: "₹3,999",
  },
  {
    title: "UI/UX Design Fundamentals",
    category: "UI/UX & Product Design",
    duration: "25 hours",
    students: 2100,
    rating: 4.9,
    level: "Beginner",
    price: "₹2,999",
  },
  {
    title: "AWS Cloud Practitioner",
    category: "DevOps & Cloud",
    duration: "30 hours",
    students: 680,
    rating: 4.7,
    level: "Beginner",
    price: "₹4,499",
  },
  {
    title: "Python for Data Science",
    category: "Data Science & AI",
    duration: "45 hours",
    students: 1580,
    rating: 4.8,
    level: "Beginner",
    price: "₹4,999",
  },
  {
    title: "Machine Learning with Python",
    category: "Data Science & AI",
    duration: "50 hours",
    students: 920,
    rating: 4.9,
    level: "Advanced",
    price: "₹5,999",
  },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 gradient-hero-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master the Skills That Power{" "}
              <span className="gradient-text">Modern Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore a growing library of self-paced and mentor-led courses 
              across trending tech domains.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span>45+ Courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span>4.8 Avg Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all"
              >
                <category.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-muted-foreground">({category.courses})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.title}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                {/* Course Image Placeholder */}
                <div className="h-48 gradient-bg opacity-80 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-6">
                  <span className="text-sm text-primary font-medium">{course.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {course.rating}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                      {course.level}
                    </span>
                    <span className="text-xl font-bold">{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Get With Every Course
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Lifetime access to course content",
                "Real-world projects & assignments",
                "Certificate of completion",
                "Mentor support & Q&A",
                "Downloadable resources",
                "Community access",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
