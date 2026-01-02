import { GraduationCap, Map, Building, Handshake, Briefcase } from "lucide-react";

const offerings = [
  { icon: GraduationCap, title: "Tech Courses & Career Tracks", description: "Industry-relevant curriculum" },
  { icon: Map, title: "On-Campus & Online Bootcamps", description: "Intensive learning programs" },
  { icon: Building, title: "Internship-Like Project Programs", description: "Real-world experience" },
  { icon: Handshake, title: "Mentorship & Career Guidance", description: "Expert support" },
  { icon: Briefcase, title: "Placement Support & Hiring", description: "Job-ready outcomes" },
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              More Than Courses.{" "}
              <span className="gradient-text">A Complete Ecosystem.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At GrowthCraft, we believe tech education should lead to transformation. 
              That's why we don't just offer courses — we craft pathways. From immersive bootcamps 
              to college-integrated workshops, from internship-style training to real job placement, 
              GrowthCraft is designed to bridge the gap between learning and earning.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We work closely with students, colleges, mentors, and hiring companies to build 
              a holistic ecosystem that creates job-ready talent and future-proof careers.
            </p>
          </div>

          {/* Right Content - Offerings Grid */}
          <div className="grid gap-4">
            {offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg gradient-bg text-primary-foreground group-hover:scale-110 transition-transform">
                  <offering.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{offering.title}</h4>
                  <p className="text-muted-foreground">{offering.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
