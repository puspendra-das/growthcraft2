import { Section } from "@/components/ui-extensions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <Section variant="graphite" className="py-28 md:py-36">
      <div className="text-center max-w-2xl mx-auto animate-fade-up">
        <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white mb-4">
          Your craft starts here.
        </h2>
        <p className="text-lg text-white/60 mb-8">
          Join 4,200+ learners building real careers in tech.
        </p>
        <Button size="xl" asChild>
          <Link to="/courses">Start Learning</Link>
        </Button>
      </div>
    </Section>
  );
};

export default FinalCTA;
