import { Section, RoleBadge } from "@/components/ui-extensions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type RoleKey = "Student" | "College" | "Ambassador" | "Mentor" | "HiringPartner";

const personas: Record<RoleKey, {
  pain: string;
  value: string;
  benefits: string[];
  cta: string;
  link: string;
}> = {
  Student: {
    pain: "Stuck in tutorial loops with no clear path to a job.",
    value: "From zero to hired in 6 months.",
    benefits: [
      "Project-based learning with real-world codebases",
      "1-on-1 mentorship from senior engineers",
      "Direct placement pipeline to 120+ companies",
    ],
    cta: "Browse Courses",
    link: "/courses",
  },
  College: {
    pain: "Your students graduate with degrees but not job-ready skills.",
    value: "Industry-ready graduates, taught on your campus.",
    benefits: [
      "Plug-and-play curriculum designed with hiring managers",
      "Dedicated mentors for your institution",
      "Placement reports and analytics dashboard",
    ],
    cta: "Partner with Us",
    link: "/for-colleges",
  },
  Ambassador: {
    pain: "You know people who want to learn tech but don't know where to start.",
    value: "Earn while your friends learn.",
    benefits: [
      "Up to 20% commission on every referral",
      "Branded dashboard to track your earnings",
      "Exclusive early access to new programs",
    ],
    cta: "Become an Ambassador",
    link: "/contact",
  },
  Mentor: {
    pain: "You have industry expertise but no structured way to teach.",
    value: "Teach what you've mastered. Get paid.",
    benefits: [
      "Flexible scheduling — mentor on your terms",
      "Pre-built curriculum you can customize",
      "Per-session payments, no commitments",
    ],
    cta: "Apply as Mentor",
    link: "/for-mentors",
  },
  HiringPartner: {
    pain: "Tired of filtering 500 resumes to find 5 competent hires.",
    value: "Hire pre-vetted MERN talent. No noise.",
    benefits: [
      "Every candidate has shipped 5+ real projects",
      "Skill-matched recommendations for your JD",
      "Zero recruitment fees for the first 3 hires",
    ],
    cta: "Hire from Us",
    link: "/for-employers",
  },
};

const roles: RoleKey[] = ["Student", "College", "Ambassador", "Mentor", "HiringPartner"];

const FivePaths = () => {
  return (
    <Section variant="marble">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">For everyone</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">One platform. Five ways in.</h2>
      </motion.div>

      <Tabs defaultValue="Student" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-5 w-full h-auto bg-card border border-border rounded-xl p-1">
          {roles.map((role) => (
            <TabsTrigger
              key={role}
              value={role}
              className="text-xs sm:text-sm py-2.5 data-[state=active]:bg-magenta data-[state=active]:text-white rounded-lg transition-all"
            >
              {role === "HiringPartner" ? "Hiring" : role}
            </TabsTrigger>
          ))}
        </TabsList>

        {roles.map((role) => {
          const p = personas[role];
          return (
            <TabsContent key={role} value={role} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <RoleBadge role={role} />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{p.pain}</p>
                <h3 className="text-xl font-bold font-display mb-4">{p.value}</h3>
                <ul className="space-y-3 mb-6">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-lavender mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to={p.link}>
                    {p.cta} <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>
    </Section>
  );
};

export default FivePaths;
