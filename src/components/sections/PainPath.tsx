import { Section } from "@/components/ui-extensions";
import { motion } from "framer-motion";
import { BookX, FolderX, UserX, BriefcaseOff, Users, BookOpen, Hammer, Handshake } from "lucide-react";

const pains = [
  { icon: BookX, text: "Tutorial hell — watching hours, building nothing" },
  { icon: FolderX, text: "No real projects to show in interviews" },
  { icon: UserX, text: "No access to industry mentors" },
  { icon: BriefcaseOff, text: "No hiring pipeline after completion" },
];

const pillars = [
  { icon: Users, title: "Live Mentorship", desc: "Weekly 1-on-1s with engineers from top companies. Not recorded lectures — real conversations." },
  { icon: BookOpen, title: "Industry Curriculum", desc: "Built with hiring managers. Covers what companies actually test, not textbook theory." },
  { icon: Hammer, title: "Real Projects", desc: "Ship 5+ production-grade projects. Each one designed to solve a real-world problem." },
  { icon: Handshake, title: "Direct Hiring", desc: "Our hiring partners interview you directly. No job boards, no spray-and-pray." },
];

const PainPath = () => {
  return (
    <Section variant="marble">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-8 leading-tight">
            Most coding courses leave you with tutorials, not a job.
          </h2>
          <div className="space-y-5">
            {pains.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 rounded-lg bg-lavender/10 p-2">
                  <Icon className="h-5 w-5 text-lavender" />
                </div>
                <p className="text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-8 leading-tight">
            GrowthCraft fixes this.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-5">
                <div className="rounded-lg bg-lavender/10 p-2 w-fit mb-3">
                  <Icon className="h-5 w-5 text-lavender" />
                </div>
                <h3 className="font-bold font-display text-base mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default PainPath;
