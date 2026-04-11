import { Section } from "@/components/ui-extensions";
import { CodeWindow } from "@/components/ui-extensions";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const expressCode = `const app = express();

app.post('/api/enroll', auth, async (req, res) => {
  const { courseId, userId } = req.body;
  
  const enrollment = await Enrollment.create({
    course: courseId,
    student: userId,
    status: 'active',
    startedAt: new Date()
  });

  await sendWelcomeEmail(userId, courseId);
  res.json({ success: true, enrollment });
});`;

const reactCode = `function CourseCard({ course }) {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <span>{course.duration}h · {course.lessons} lessons</span>
      <button onClick={() => setEnrolled(true)}>
        {enrolled ? '✓ Enrolled' : 'Enroll Now'}
      </button>
    </div>
  );
}`;

const HeroSection = () => {
  return (
    <Section variant="white" className="pt-12 md:pt-20 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-afacad text-sm uppercase tracking-widest text-muted-foreground mb-4">
            India's outcome-driven MERN academy
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-6">
            <span className="font-script text-magenta">Craft</span> the career.{" "}
            <br className="hidden sm:block" />
            We'll teach the code.
          </h1>

          <p className="text-base lg:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Escape tutorial hell. Learn from engineers who ship in production, build real projects, 
            and get hired — not just certified.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link to="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-lavender text-lavender hover:bg-lavender hover:text-white" asChild>
              <Link to="/contact">Talk to a Mentor</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-4"
        >
          <CodeWindow code={expressCode} language="server.js" />
          <CodeWindow code={reactCode} language="CourseCard.jsx" />
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
