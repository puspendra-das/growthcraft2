import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code2, Palette, Cloud, Brain, Rocket, Globe, Clock, Users, BookOpen, ArrowRight, Star, CheckCircle } from "lucide-react";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseDevops from "@/assets/course-devops.jpg";

const categories = [
  { icon: Code2, name: "Full Stack Development", courses: 12 },
  { icon: Palette, name: "UI/UX & Product Design", courses: 8 },
  { icon: Cloud, name: "DevOps & Cloud", courses: 6 },
  { icon: Brain, name: "Data Science & AI", courses: 10 },
  { icon: Rocket, name: "Career Launchpad", courses: 5 },
  { icon: Globe, name: "Freelance & Remote Work", courses: 4 },
];

const courses = [
  { title: "Complete React Developer", category: "Full Stack Development", duration: "40 hours", students: 1250, rating: 4.9, level: "Intermediate", price: "₹4,999", image: courseFullstack },
  { title: "Node.js & Express Mastery", category: "Full Stack Development", duration: "35 hours", students: 890, rating: 4.8, level: "Intermediate", price: "₹3,999", image: courseFullstack },
  { title: "UI/UX Design Fundamentals", category: "UI/UX & Product Design", duration: "25 hours", students: 2100, rating: 4.9, level: "Beginner", price: "₹2,999", image: courseUiux },
  { title: "AWS Cloud Practitioner", category: "DevOps & Cloud", duration: "30 hours", students: 680, rating: 4.7, level: "Beginner", price: "₹4,499", image: courseDevops },
  { title: "Python for Data Science", category: "Data Science & AI", duration: "45 hours", students: 1580, rating: 4.8, level: "Beginner", price: "₹4,999", image: courseDatascience },
  { title: "Machine Learning with Python", category: "Data Science & AI", duration: "50 hours", students: 920, rating: 4.9, level: "Advanced", price: "₹5,999", image: courseDatascience },
];

const Courses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Master the Skills That Power{" "}
              <span className="text-primary">Modern Tech</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Explore a growing library of self-paced and mentor-led courses across trending tech domains.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /><span>45+ Courses</span></div>
              <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /><span>10,000+ Students</span></div>
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-primary" /><span>4.8 Avg Rating</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button key={category.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all text-sm">
                <category.icon className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{category.name}</span>
                <span className="text-muted-foreground">({category.courses})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.title} className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-card transition-all duration-300">
                <div className="h-44 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-primary font-medium">{course.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-3 text-foreground group-hover:text-primary transition-colors">{course.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" />{course.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" />{course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">{course.level}</span>
                    <span className="text-lg font-bold text-foreground">{course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Courses<ArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Get With Every Course</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {["Lifetime access to course content", "Real-world projects & assignments", "Certificate of completion", "Mentor support & Q&A", "Downloadable resources", "Community access"].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{feature}</span>
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