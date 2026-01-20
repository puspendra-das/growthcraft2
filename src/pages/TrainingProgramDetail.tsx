import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTrainingProgram } from "@/hooks/useTrainingPrograms";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import { 
  Clock, Users, ArrowRight, CheckCircle, ArrowLeft, 
  GraduationCap, Target, Award, Calendar, Monitor
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import courseWebDev from "@/assets/course-web-dev.jpg";

const TrainingProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { program, isLoading, error } = useTrainingProgram(slug || "");
  const { isOpen, formType, formTitle, openForm, closeForm } = usePopupForm();

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <Skeleton className="h-96 w-full rounded-2xl mb-8" />
          <Skeleton className="h-8 w-2/3 mb-4" />
          <Skeleton className="h-4 w-1/2 mb-8" />
        </div>
      </Layout>
    );
  }

  if (error || !program) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Program Not Found</h1>
          <p className="text-muted-foreground mb-8">The training program you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/bootcamps">Browse Programs</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const imageUrl = program.image_url || courseWebDev;

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Link to="/bootcamps" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {program.domain && <Badge variant="secondary">{program.domain}</Badge>}
                {program.category && <Badge variant="outline">{program.category}</Badge>}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {program.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {program.description || "Intensive, project-based training to make you job-ready."}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                {program.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{program.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span>{program.format || "Online"}</span>
                </div>
                {program.batch_size && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{program.batch_size} students/batch</span>
                  </div>
                )}
                {program.start_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Starts: {new Date(program.start_date).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {program.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      ₹{program.discount_price || program.price}
                    </span>
                    {program.discount_price && (
                      <span className="text-lg text-muted-foreground line-through">₹{program.price}</span>
                    )}
                  </div>
                ) : (
                  <span className="text-muted-foreground">Contact for pricing</span>
                )}
                
                <Button size="lg" onClick={() => openForm("enrollment", `Apply for ${program.title}`)}>
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={imageUrl} 
                alt={program.title}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              {program.is_featured && (
                <Badge className="absolute top-4 right-4 bg-primary">Featured</Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What You'll Learn */}
              {program.learning_outcomes && program.learning_outcomes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    What You'll Learn
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {program.learning_outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Focus Areas */}
              {program.focus_areas && program.focus_areas.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Focus Areas</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {program.focus_areas.map((area, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {program.tech_stack && program.tech_stack.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Technologies</h2>
                  <div className="flex flex-wrap gap-2">
                    {program.tech_stack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum */}
              {Array.isArray(program.curriculum) && program.curriculum.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Curriculum
                  </h2>
                  <div className="space-y-4">
                    {(program.curriculum as any[]).map((module: any, index: number) => (
                      <div key={index} className="rounded-xl border border-border bg-card p-4">
                        <h3 className="font-semibold text-foreground mb-2">
                          Week {index + 1}: {module.title || module}
                        </h3>
                        {module.topics && (
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {module.topics.map((topic: string, i: number) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-primary" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enrollment Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Apply Now</h3>
                  
                  {program.price ? (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">
                        ₹{program.discount_price || program.price}
                      </span>
                      {program.discount_price && (
                        <span className="text-lg text-muted-foreground line-through ml-2">₹{program.price}</span>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground mb-4">Contact us for pricing</p>
                  )}

                  <Button className="w-full mb-4" size="lg" onClick={() => openForm("enrollment", `Apply for ${program.title}`)}>
                    Apply Now
                  </Button>

                  <Button variant="outline" className="w-full" onClick={() => openForm("callback")}>
                    Request Callback
                  </Button>
                </div>

                {/* Program Highlights */}
                {program.highlights && program.highlights.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Program Highlights</h3>
                    <ul className="space-y-3">
                      {program.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Instructor */}
                {program.instructor_name && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Your Instructor</h3>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{program.instructor_name}</p>
                        {program.instructor_bio && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{program.instructor_bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Start Your Journey</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our intensive training program and become job-ready with real-world experience.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("enrollment", `Apply for ${program.title}`)}>
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default TrainingProgramDetail;
