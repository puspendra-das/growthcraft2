import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight, Code2, Brain, Palette, School, Download, Phone } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import bootcampScene from "@/assets/bootcamp-scene.jpg";
import courseFullstack from "@/assets/course-fullstack.jpg";
import courseDatascience from "@/assets/course-datascience.jpg";
import courseUiux from "@/assets/course-uiux.jpg";

const bootcamps = [
  {
    icon: Code2,
    title: "Full Stack Developer Bootcamp",
    description: "Become a complete developer with React, Node.js, MongoDB, and modern deployment practices. Build 5+ real-world projects.",
    duration: "12 weeks",
    format: "Online + Weekend Sessions",
    batchSize: "30 students",
    nextBatch: "January 15, 2026",
    price: "₹29,999",
    image: courseFullstack,
    highlights: ["React, Node.js, Express, MongoDB", "5+ portfolio-ready projects", "1:1 mentorship sessions", "Placement assistance", "Certificate of completion"],
  },
  {
    icon: Brain,
    title: "Data Science & AI Bootcamp",
    description: "Master Python, machine learning, deep learning, and deploy AI models to production with real datasets.",
    duration: "10 weeks",
    format: "Online Live",
    batchSize: "25 students",
    nextBatch: "February 1, 2026",
    price: "₹34,999",
    image: courseDatascience,
    highlights: ["Python, Pandas, NumPy, Scikit-learn", "Deep Learning with TensorFlow", "Real industry datasets", "Kaggle competition prep", "AI project portfolio"],
  },
  {
    icon: Palette,
    title: "UI/UX Design Crash Program",
    description: "From Figma basics to complete product design. Learn user research, prototyping, and design systems.",
    duration: "8 weeks",
    format: "Online + Projects",
    batchSize: "20 students",
    nextBatch: "January 20, 2026",
    price: "₹24,999",
    image: courseUiux,
    highlights: ["Figma mastery", "User research methods", "Wireframing & prototyping", "Design systems", "Portfolio with 3+ case studies"],
  },
  {
    icon: School,
    title: "College Workshop Sprint",
    description: "Intensive on-campus or virtual workshops designed for college students. Perfect for placement preparation.",
    duration: "2-4 weeks",
    format: "On-Campus / Hybrid",
    batchSize: "50+ students",
    nextBatch: "Flexible scheduling",
    price: "Contact for pricing",
    image: bootcampScene,
    highlights: ["Customized curriculum", "Hands-on coding sessions", "Interview preparation", "Industry expert talks", "Certification for all participants"],
  },
];

const Bootcamps = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={bootcampScene} alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              High-Impact Bootcamps for{" "}
              <span className="text-primary">Real-World Readiness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Intensive, structured programs built to replicate real job experiences 
              with mentorship, collaboration, and outcome-based learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" onClick={() => openForm("enrollment", "Enroll in Bootcamp")}>
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg" onClick={() => openForm("callback")}>
                <Phone className="mr-2 h-5 w-5" />
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bootcamps List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {bootcamps.map((bootcamp) => (
              <div key={bootcamp.title} className="rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-card transition-all duration-300">
                <div className="grid lg:grid-cols-4">
                  {/* Image */}
                  <div className="lg:col-span-1 h-48 lg:h-auto overflow-hidden">
                    <img src={bootcamp.image} alt={bootcamp.title} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Info */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <bootcamp.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">{bootcamp.title}</h2>
                        <p className="text-muted-foreground mt-1">{bootcamp.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{bootcamp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Video className="h-4 w-4 text-primary" />
                        <span>{bootcamp.format}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{bootcamp.batchSize}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{bootcamp.nextBatch}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {bootcamp.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                          <CheckCircle className="h-3 w-3" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="lg:col-span-1 lg:border-l border-t lg:border-t-0 border-border p-6 flex flex-col justify-center items-center text-center bg-muted/20">
                    <span className="text-2xl font-bold text-primary mb-1">{bootcamp.price}</span>
                    <p className="text-xs text-muted-foreground mb-4">EMI options available</p>
                    <Button variant="default" size="lg" className="w-full mb-2" onClick={() => openForm("enrollment", `Enroll in ${bootcamp.title}`)}>
                      Enroll Now
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Syllabus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Not Sure Which Bootcamp Is Right for You?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free counseling session with our team to understand your goals 
            and find the perfect program for your career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("callback")}>
              Book Free Counseling
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <Link to="/for-students" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">For Students</h3>
              <p className="text-sm text-muted-foreground mt-1">Learn about student benefits & career support</p>
            </Link>
            <Link to="/for-colleges" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">For Colleges</h3>
              <p className="text-sm text-muted-foreground mt-1">Partner with us for campus programs</p>
            </Link>
            <Link to="/for-employers" className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all group">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">For Employers</h3>
              <p className="text-sm text-muted-foreground mt-1">Hire our trained bootcamp graduates</p>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Bootcamps;