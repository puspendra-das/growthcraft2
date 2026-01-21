import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, ArrowRight, Code2, Brain, Palette, CheckCircle } from "lucide-react";
import { useBootcamps } from "@/hooks/useBootcamps";
import { useTrainingPrograms } from "@/hooks/useTrainingPrograms";
import bootcampScene from "@/assets/bootcamp-scene.jpg";
import { Skeleton } from "@/components/ui/skeleton";

const iconMap: Record<string, any> = {
  Code2,
  Brain,
  Palette,
};

export const BootcampsSection = () => {
  const { bootcamps, isLoading: bootcampsLoading } = useBootcamps();
  const { programs } = useTrainingPrograms();

  const displayBootcamps = bootcamps.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={bootcampScene} 
              alt="Bootcamp learning environment" 
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Bootcamp Alumni</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold mb-4 block text-sm uppercase tracking-wide">Bootcamps & Programs</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              High-Impact Bootcamps for{" "}
              <span className="text-primary">Real-World Readiness</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Intensive programs built to replicate real job experiences with mentorship, 
              collaboration, and outcome-based learning.
            </p>

            {/* Bootcamp Cards */}
            <div className="space-y-4 mb-8">
              {bootcampsLoading ? (
                [...Array(3)].map((_, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border">
                    <div className="flex items-start gap-4">
                      <Skeleton className="h-11 w-11 rounded-lg" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-2/3 mb-2" />
                        <Skeleton className="h-4 w-full mb-3" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                  </div>
                ))
              ) : displayBootcamps.length > 0 ? (
                displayBootcamps.map((bootcamp) => {
                  const IconComponent = iconMap[bootcamp.icon_name || "Code2"] || Code2;
                  return (
                    <Link
                      to={`/bootcamps/${bootcamp.slug}`}
                      key={bootcamp.id}
                      className="group block p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-card transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {bootcamp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{bootcamp.description}</p>
                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            {bootcamp.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {bootcamp.duration}
                              </span>
                            )}
                            {bootcamp.batch_size && (
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3" />
                                {bootcamp.batch_size} students
                              </span>
                            )}
                            {bootcamp.next_batch_date && (
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(bootcamp.next_batch_date).toLocaleDateString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-muted-foreground text-center py-4">No bootcamps available</p>
              )}
            </div>

            {/* 40-Day Programs Preview */}
            {programs.length > 0 && (
              <div className="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm font-medium text-foreground mb-2">Plus {programs.length} Internship Programs:</p>
                <div className="flex flex-wrap gap-2">
                  {programs.slice(0, 3).map(p => (
                    <span key={p.id} className="text-xs px-2 py-1 bg-card border border-border rounded-full text-muted-foreground">
                      {p.domain || p.category}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button asChild size="lg">
              <Link to="/bootcamps">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
