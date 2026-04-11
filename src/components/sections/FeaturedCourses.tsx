import { Section, DataCard } from "@/components/ui-extensions";
import { coursesMock } from "@/data/courses.mock";
import { motion } from "framer-motion";
import { Clock, BookOpen, Star, User } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCourses = () => {
  const featured = coursesMock.slice(0, 6);

  return (
    <Section variant="graphite" className="relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-afacad text-sm uppercase tracking-widest text-white/50 mb-3">Courses</p>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
            Built for builders. Taught by builders.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <motion.div
              key={course._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <DataCard variant="dark" className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-magenta text-white text-xs font-semibold">
                    {course.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-white/70 text-xs">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-3">{course.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4 flex-grow">{course.description}</p>

                <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
                  <span className="flex items-center gap-1"><User className="h-3.5 w-3.5 text-lavender" />{course.instructorName}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-lavender" />{course.durationHours}h</span>
                  <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5 text-lavender" />{course.totalLessons} lessons</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-white">₹{course.discountedPrice.toLocaleString()}</span>
                    <span className="text-sm line-through text-white/40">₹{course.price.toLocaleString()}</span>
                  </div>
                  <Link to={`/courses/${course.slug}`} className="text-sm font-medium text-lavender hover:text-white transition-colors">
                    View Curriculum →
                  </Link>
                </div>

                <div className="flex items-center gap-1 mt-3">
                  <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-white/60">{course.avgRating} · {course.enrollmentCount.toLocaleString()} enrolled</span>
                </div>
              </DataCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedCourses;
