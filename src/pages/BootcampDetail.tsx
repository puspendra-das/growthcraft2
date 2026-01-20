import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBootcamp } from "@/hooks/useBootcamps";
import { PopupForm, usePopupForm } from "@/components/shared/PopupForm";
import { 
  Clock, Users, ArrowRight, CheckCircle, ArrowLeft, 
  GraduationCap, Target, Award, Calendar, Monitor, Download
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import bootcampGeneral from "@/assets/bootcamp-general.jpg";

const BootcampDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { bootcamp, isLoading, error } = useBootcamp(slug || "");
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

  if (error || !bootcamp) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Bootcamp Not Found</h1>
          <p className="text-muted-foreground mb-8">The bootcamp you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/bootcamps">Browse Bootcamps</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const imageUrl = bootcamp.image_url || bootcampGeneral;

  return (
    <Layout>
      <PopupForm isOpen={isOpen} onClose={closeForm} type={formType} title={formTitle} />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <Link to="/bootcamps" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Bootcamps
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {bootcamp.category && (
                <Badge variant="secondary" className="mb-4">{bootcamp.category}</Badge>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {bootcamp.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                {bootcamp.description || "Intensive, hands-on training to transform your career."}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
                {bootcamp.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{bootcamp.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span>{bootcamp.format || "Online"}</span>
                </div>
                {bootcamp.batch_size && (
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{bootcamp.batch_size} students/batch</span>
                  </div>
                )}
                {bootcamp.next_batch_date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Next: {new Date(bootcamp.next_batch_date).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {bootcamp.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      ₹{bootcamp.discount_price || bootcamp.price}
                    </span>
                    {bootcamp.discount_price && (
                      <span className="text-lg text-muted-foreground line-through">₹{bootcamp.price}</span>
                    )}
                  </div>
                ) : (
                  <span className="text-muted-foreground">Contact for pricing</span>
                )}
                
                <Button size="lg" onClick={() => openForm("enrollment", `Enroll in ${bootcamp.title}`)}>
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={imageUrl} 
                alt={bootcamp.title}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              {bootcamp.is_featured && (
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
              {bootcamp.learning_outcomes && bootcamp.learning_outcomes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    What You'll Learn
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {bootcamp.learning_outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              {bootcamp.tech_stack && bootcamp.tech_stack.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Technologies You'll Master</h2>
                  <div className="flex flex-wrap gap-2">
                    {bootcamp.tech_stack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Curriculum */}
              {Array.isArray(bootcamp.curriculum) && bootcamp.curriculum.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    Curriculum
                  </h2>
                  <div className="space-y-4">
                    {(bootcamp.curriculum as any[]).map((module: any, index: number) => (
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

              {/* Prerequisites */}
              {bootcamp.prerequisites && bootcamp.prerequisites.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Prerequisites</h2>
                  <ul className="space-y-2">
                    {bootcamp.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enrollment Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Enroll Now</h3>
                  
                  {bootcamp.price ? (
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">
                        ₹{bootcamp.discount_price || bootcamp.price}
                      </span>
                      {bootcamp.discount_price && (
                        <span className="text-lg text-muted-foreground line-through ml-2">₹{bootcamp.price}</span>
                      )}
                      {bootcamp.discount_label && (
                        <Badge variant="destructive" className="ml-2">{bootcamp.discount_label}</Badge>
                      )}
                    </div>
                  ) : (
                    <p className="text-muted-foreground mb-4">Contact us for pricing</p>
                  )}

                  <Button className="w-full mb-4" size="lg" onClick={() => openForm("enrollment", `Enroll in ${bootcamp.title}`)}>
                    Enroll Now
                  </Button>

                  <Button variant="outline" className="w-full mb-2">
                    <Download className="mr-2 h-4 w-4" />
                    Download Syllabus
                  </Button>

                  <Button variant="ghost" className="w-full" onClick={() => openForm("callback")}>
                    Request Callback
                  </Button>
                </div>

                {/* Bootcamp Highlights */}
                {bootcamp.highlights && bootcamp.highlights.length > 0 && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Program Highlights</h3>
                    <ul className="space-y-3">
                      {bootcamp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Instructor */}
                {bootcamp.instructor_name && (
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Your Instructor</h3>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{bootcamp.instructor_name}</p>
                        {bootcamp.instructor_bio && (
                          <p className="text-sm text-muted-foreground line-clamp-2">{bootcamp.instructor_bio}</p>
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
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Transform Your Career</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join our intensive bootcamp and become job-ready in weeks, not years.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" onClick={() => openForm("enrollment", `Enroll in ${bootcamp.title}`)}>
            Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BootcampDetail;
