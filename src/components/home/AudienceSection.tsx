import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, School, Hand, UserCheck, Briefcase, ArrowRight } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    role: "Students",
    title: "GrowthCraft Seeker",
    description: "Learn, build, and launch your tech career with industry-relevant courses and hands-on projects.",
    cta: "Register Now",
    link: "/for-students",
  },
  {
    icon: School,
    role: "Colleges",
    title: "GrowthCraft Campus",
    description: "Partner with us for integrated learning, workshops, and bootcamps on your campus.",
    cta: "Partner With Us",
    link: "/for-colleges",
  },
  {
    icon: Hand,
    role: "Ambassadors",
    title: "GrowthCraft Ambassador",
    description: "Represent GrowthCraft on campus and grow your influence while helping peers succeed.",
    cta: "Become Ambassador",
    link: "/for-students",
  },
  {
    icon: UserCheck,
    role: "Mentors",
    title: "GrowthCraft Mentor",
    description: "Inspire the next wave of talent by sharing your experience and guiding learners.",
    cta: "Become a Mentor",
    link: "/for-mentors",
  },
  {
    icon: Briefcase,
    role: "Hiring Partners",
    title: "GrowthCraft Employer",
    description: "Recruit skilled, job-ready talent from our certified alumni pool.",
    cta: "Hire From Us",
    link: "/for-employers",
  },
];

export const AudienceSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold mb-4 block">For Everyone</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Different Paths.{" "}
            <span className="gradient-text">One Platform.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            GrowthCraft empowers all stakeholders in the tech learning journey.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.role}
              className={`group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl gradient-bg text-primary-foreground group-hover:scale-110 transition-transform">
                  <audience.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{audience.role}</span>
                  <h3 className="text-lg font-bold">{audience.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{audience.description}</p>
              <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                <Link to={audience.link}>
                  {audience.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
