import { Section, DataCard } from "@/components/ui-extensions";
import { mentorsMock } from "@/data/mentors.mock";
import { Star } from "lucide-react";

const MentorShowcase = () => {
  return (
    <Section variant="white">
      <div className="text-center mb-14 animate-fade-up">
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">Mentors</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">
          Learn from engineers who ship in production.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentorsMock.map((mentor) => (
          <DataCard key={mentor._id} className="text-center h-full">
            <img
              src={mentor.photo}
              alt={mentor.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 bg-muted"
            />
            <h3 className="font-bold font-display text-base">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground mb-3">{mentor.company}</p>

            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4">
              {mentor.expertiseTags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-lavender/10 text-xs font-medium text-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <span>{mentor.sessionsDelivered} sessions</span>
              <span className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-current" style={{ color: "#fbbf24" }} />
                {mentor.rating}
              </span>
            </div>
          </DataCard>
        ))}
      </div>
    </Section>
  );
};

export default MentorShowcase;
