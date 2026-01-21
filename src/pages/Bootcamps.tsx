import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight, Phone, Download } from "lucide-react";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import { useBootcamps } from "@/hooks/useBootcamps";
import { useTrainingPrograms } from "@/hooks/useTrainingPrograms";
import { Skeleton } from "@/components/ui/skeleton";
import bootcampGeneral from "@/assets/bootcamp-general.jpg";
import courseWebDev from "@/assets/course-web-dev.jpg";

const Bootcamps = () => {
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();
  const { bootcamps, isLoading: bootcampsLoading } = useBootcamps();
  const { programs, isLoading: programsLoading } = useTrainingPrograms();

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />
      
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
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
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Intensive Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Career-Focused <span className="text-primary">Bootcamps</span>
            </h2>
          </div>

          {bootcampsLoading ? (
            <div className="space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden">
                  <div className="grid lg:grid-cols-4">
                    <Skeleton className="h-48 lg:h-auto" />
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <Skeleton className="h-8 w-2/3 mb-4" />
                      <Skeleton className="h-4 w-full mb-4" />
                      <Skeleton className="h-4 w-1/2" />
                    </div>
                    <div className="p-6">
                      <Skeleton className="h-8 w-1/2 mb-4" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : bootcamps.length > 0 ? (
            <div className="space-y-8">
              {bootcamps.map((bootcamp) => (
                <Link 
                  to={`/bootcamps/${bootcamp.slug}`}
                  key={bootcamp.id} 
                  className="block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/40 hover:shadow-card transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-4">
                    <div className="lg:col-span-1 h-48 lg:h-auto overflow-hidden">
                      <img 
                        src={bootcamp.image_url || bootcampGeneral} 
                        alt={bootcamp.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    
                    <div className="lg:col-span-2 p-6 lg:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">{bootcamp.title}</h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{bootcamp.description}</p>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                        {bootcamp.duration && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{bootcamp.duration}</span>
                          </div>
                        )}
                        {bootcamp.format && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Video className="h-4 w-4 text-primary" />
                            <span>{bootcamp.format}</span>
                          </div>
                        )}
                        {bootcamp.batch_size && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{bootcamp.batch_size} students</span>
                          </div>
                        )}
                        {bootcamp.next_batch_date && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{new Date(bootcamp.next_batch_date).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {bootcamp.highlights?.slice(0, 3).map((h) => (
                          <span key={h} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                            <CheckCircle className="h-3 w-3" /> {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-1 lg:border-l border-t lg:border-t-0 border-border p-6 flex flex-col justify-center items-center text-center bg-muted/20">
                      {bootcamp.price ? (
                        <>
                          <span className="text-2xl font-bold text-primary mb-1">
                            ₹{bootcamp.discount_price || bootcamp.price}
                          </span>
                          {bootcamp.discount_price && (
                            <span className="text-sm text-muted-foreground line-through mb-1">₹{bootcamp.price}</span>
                          )}
                        </>
                      ) : (
                        <span className="text-muted-foreground mb-2">Contact for pricing</span>
                      )}
                      <p className="text-xs text-muted-foreground mb-4">EMI options available</p>
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full mb-2" 
                        onClick={(e) => { e.preventDefault(); openForm("enrollment", `Enroll in ${bootcamp.title}`); }}
                      >
                        Enroll Now
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" onClick={(e) => e.preventDefault()}>
                        <Download className="mr-2 h-4 w-4" />
                        Download Syllabus
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">No bootcamps available at the moment.</p>
              <Button onClick={() => openForm("callback")}>Get Notified</Button>
            </div>
          )}
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">40-Day Internship Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Intensive <span className="text-primary">Training Programs</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Project-based internship programs designed to make you job-ready with real-world experience.
            </p>
          </div>

          {programsLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="rounded-2xl bg-card border border-border p-6">
                  <Skeleton className="h-32 rounded-lg mb-4" />
                  <Skeleton className="h-6 w-2/3 mb-3" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ))}
            </div>
          ) : programs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {programs.map((program) => (
                <Link 
                  to={`/programs/${program.slug}`}
                  key={program.id} 
                  className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="h-32 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={program.image_url || courseWebDev} 
                      alt={program.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{program.duration}</span>
                    {program.domain && (
                      <span className="text-xs text-muted-foreground ml-auto">{program.domain}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground line-clamp-2">{program.title}</h3>
                  <div className="space-y-2 mb-4">
                    {program.focus_areas?.slice(0, 3).map(area => (
                      <div key={area} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span className="line-clamp-1">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {program.tech_stack?.slice(0, 4).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={(e) => { e.preventDefault(); openForm("enrollment", `Apply for ${program.title}`); }}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No training programs available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Not Sure Which Program Is Right for You?
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
