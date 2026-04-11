import { Section } from "@/components/ui-extensions";
import { testimonialsMock } from "@/data/testimonials.mock";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const Outcomes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Section variant="marble">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-3">Placements</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display">
          Outcomes that talk for themselves.
        </h2>
      </motion.div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {testimonialsMock.map((t, i) => (
          <motion.div
            key={t._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="min-w-[300px] sm:min-w-[340px] snap-start flex-shrink-0"
          >
            <div className="rounded-xl border border-border bg-card p-6 h-full transition-all hover:-translate-y-1">
              <Quote className="h-5 w-5 text-lavender mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.photo} alt={t.name} className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <p className="text-sm font-bold font-display">{t.name}</p>
                  <p className="text-xs text-muted-foreground">Now at <span className="font-medium text-foreground">{t.hiredAt}</span></p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{t.courseTaken}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Outcomes;
