import { Section } from "@/components/ui-extensions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { bootcampsMock } from "@/data/bootcamps.mock";
import { Calendar, MapPin, Users } from "lucide-react";

const BootcampHighlight = () => {
  const openBootcamp = bootcampsMock.find((b) => b.status === "Open");
  if (!openBootcamp) return null;

  const seatsLeft = openBootcamp.maxSeats - openBootcamp.enrolledCount;

  return (
    <Section variant="white">
      <div className="text-center mb-14 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">Next bootcamp</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">Intensive. Immersive. Industry-ready.</h2>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card animate-fade-up">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-magenta/5 to-lavender/5 p-8 lg:p-12 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 text-magenta text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
                Enrolling Now
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-display mb-2">{openBootcamp.title}</h3>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
                {openBootcamp.skillsCovered.slice(0, 5).map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-lavender/10 text-sm font-medium text-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-lavender" />
                <span>{openBootcamp.startDate} — {openBootcamp.endDate}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-lavender" />
                <span>{openBootcamp.mode} · 12 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-lavender" />
                <span className="text-magenta font-bold">{seatsLeft} seats left</span>
                <span className="text-muted-foreground">out of {openBootcamp.maxSeats}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {openBootcamp.mentorNames.map((name) => (
                  <img
                    key={name}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name.split(" ")[0].toLowerCase()}`}
                    alt={name}
                    className="w-8 h-8 rounded-full border-2 border-card"
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Mentored by {openBootcamp.mentorNames.join(", ")}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Button size="lg" asChild>
                <Link to={`/bootcamps/${openBootcamp.slug}`}>Reserve your seat</Link>
              </Button>
              <span className="text-2xl font-bold font-display">₹{openBootcamp.price.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BootcampHighlight;
