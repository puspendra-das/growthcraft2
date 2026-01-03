import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, BookOpen, ArrowRight, Star, CheckCircle, Filter, Search, Calendar, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { courses, courseCategories, trainingPrograms, events } from "@/data/courses";
import { PopupForm } from "@/components/shared/PopupForm";
import { TechLogos } from "@/components/shared/TechLogos";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseUiux from "@/assets/course-uiux.jpg";
import courseDevops from "@/assets/course-devops.jpg";

const categoryImages: Record<string, string> = {
  "Programming & CS": courseFullstack,
  "Web Development": courseFullstack,
  "Data Science & Analytics": courseDatascience,
  "DevOps & Cloud": courseDevops,
  "Cybersecurity": courseDevops,
  "Mobile App Development": courseFullstack,
  "Mobile Development": courseFullstack,
  "UI/UX & Design": courseUiux,
  "Software Engineering": courseFullstack,
  "Project-Based Learning": courseFullstack,
  "Career Prep": courseUiux,
  "Career Prep & Soft Skills": courseUiux,
  "CMS & eCommerce": courseFullstack,
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    case "Intermediate": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "Advanced": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    default: return "bg-secondary text-secondary-foreground";
  }
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = !selectedCategory || course.category.includes(selectedCategory);
    const matchesLevel = !selectedLevel || course.level === selectedLevel;
    const matchesSearch = !searchQuery || 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleEnroll = (courseName: string) => {
    setSelectedCourse(courseName);
    setShowEnrollForm(true);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Course Catalog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {courses.length}+ Courses to Power Your{" "}
              <span className="text-primary">Tech Career</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From Python basics to advanced AI, from frontend to DevOps — master in-demand skills with our comprehensive course library.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2"><BookOpen className="h-5 w-5 text-primary" /><span>{courses.length}+ Courses</span></div>
              <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /><span>10,000+ Students</span></div>
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-primary" /><span>4.8 Avg Rating</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Logos */}
      <TechLogos />

      {/* Search & Filters */}
      <section className="py-8 border-b border-border sticky top-16 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search courses, topics, tools..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {["Beginner", "Intermediate", "Advanced"].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(selectedLevel === level ? null : level)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedLevel === level 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {level}
                </button>
              ))}
              {(selectedCategory || selectedLevel || searchQuery) && (
                <button
                  onClick={() => { setSelectedCategory(null); setSelectedLevel(null); setSearchQuery(""); }}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {courseCategories.map((category) => (
              <button 
                key={category.id} 
                onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                  selectedCategory === category.name
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary/40"
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span className="font-medium">{category.name}</span>
                <span className={selectedCategory === category.name ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  ({category.courses})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory || "All Courses"} 
              <span className="text-muted-foreground font-normal ml-2">({filteredCourses.length} courses)</span>
            </h2>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-32 overflow-hidden relative">
                    <img 
                      src={categoryImages[course.category] || courseFullstack} 
                      alt={course.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <span className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{course.subcategory}</span>
                    <h3 className="text-sm font-bold mt-1 mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {course.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{course.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {course.topics.slice(0, 3).map(topic => (
                        <span key={topic} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px]">
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px]">
                          +{course.topics.length - 3}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => handleEnroll(course.name)}
                    >
                      Enroll Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No courses found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSelectedCategory(null); setSelectedLevel(null); setSearchQuery(""); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Internship Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              40-Day <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intensive, project-based internship programs designed to make you job-ready with real-world experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program) => (
              <div key={program.id} className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{program.duration}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{program.domain}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{program.name}</h3>
                <div className="space-y-2 mb-4">
                  {program.focusAreas.slice(0, 3).map(area => (
                    <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-primary" />
                      {area}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {program.techStack.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <Button className="w-full" onClick={() => handleEnroll(program.name)}>
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/bootcamps">View All Bootcamps <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events & Workshops */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Events & Workshops</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Quick-Fire <span className="text-primary">Learning Events</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              1-3 day workshops, bootcamps, and hackathons to jumpstart your learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.slice(0, 8).map((event) => (
              <div key={event.id} className="rounded-xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    event.type === "Workshop" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                    event.type === "Bootcamp" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-xs text-muted-foreground ml-auto flex items-center gap-1">
                    <Zap className="h-3 w-3" />{event.duration}
                  </span>
                </div>
                <h3 className="text-sm font-bold mb-2 text-foreground line-clamp-2">{event.name}</h3>
                <p className="text-xs text-muted-foreground mb-3">{event.domain}</p>
                <div className="flex flex-wrap gap-1">
                  {event.topics.slice(0, 2).map(topic => (
                    <span key={topic} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-[10px]">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button onClick={() => setShowEnrollForm(true)} size="lg">
              Register for Events <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">What You Get With Every Course</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Lifetime access to course content",
                "Real-world projects & assignments",
                "Certificate of completion",
                "Mentor support & Q&A",
                "Downloadable resources",
                "Community access",
                "Job placement assistance",
                "Industry-recognized curriculum"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Not sure where to start?</h2>
            <p className="text-muted-foreground mb-8">
              Talk to our career counselors and get personalized course recommendations based on your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => setShowEnrollForm(true)}>
                Get Career Guidance <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/for-students">Explore Student Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <PopupForm 
        isOpen={showEnrollForm} 
        onClose={() => setShowEnrollForm(false)} 
        type="enrollment"
        title={selectedCourse ? `Enroll in ${selectedCourse}` : "Course Enrollment"}
      />
    </Layout>
  );
};

export default Courses;
