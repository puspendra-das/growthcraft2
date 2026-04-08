import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle2, BookOpen, Search, Clock, Star, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EnrolledCourse {
  id: number;
  title: string;
  progress: number;
  totalLessons: number;
  completed: number;
  category: string;
  status: string;
  image: string;
}

interface BrowseCourse {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  rating: number;
  students: number;
  description: string;
  image: string;
}

const initialEnrolled: EnrolledCourse[] = [
  { id: 1, title: "Full Stack Web Development", progress: 68, totalLessons: 42, completed: 28, category: "Web Dev", status: "in_progress", image: "🌐" },
  { id: 2, title: "Data Science with Python", progress: 35, totalLessons: 36, completed: 13, category: "Data Science", status: "in_progress", image: "📊" },
  { id: 3, title: "React & Next.js Masterclass", progress: 90, totalLessons: 30, completed: 27, category: "Frontend", status: "in_progress", image: "⚛️" },
  { id: 4, title: "UI/UX Design Fundamentals", progress: 100, totalLessons: 20, completed: 20, category: "Design", status: "completed", image: "🎨" },
];

const browseCourses: BrowseCourse[] = [
  { id: 10, title: "Cloud Computing with AWS", category: "DevOps", level: "Intermediate", duration: "8 weeks", price: "₹4,999", rating: 4.7, students: 320, description: "Master AWS services including EC2, S3, Lambda, and more. Deploy scalable applications to the cloud.", image: "☁️" },
  { id: 11, title: "Machine Learning Basics", category: "AI/ML", level: "Beginner", duration: "10 weeks", price: "₹5,999", rating: 4.8, students: 450, description: "Learn ML fundamentals with Python, scikit-learn, and TensorFlow. Build predictive models.", image: "🤖" },
  { id: 12, title: "Mobile App Development", category: "Mobile", level: "Beginner", duration: "12 weeks", price: "₹6,999", rating: 4.6, students: 280, description: "Build cross-platform mobile apps with React Native. Publish to App Store and Play Store.", image: "📱" },
  { id: 13, title: "Cybersecurity Fundamentals", category: "Security", level: "Beginner", duration: "6 weeks", price: "₹3,999", rating: 4.5, students: 190, description: "Learn ethical hacking, network security, and vulnerability assessment.", image: "🔒" },
  { id: 14, title: "DevOps & CI/CD", category: "DevOps", level: "Intermediate", duration: "8 weeks", price: "₹5,499", rating: 4.7, students: 210, description: "Master Docker, Kubernetes, Jenkins, and CI/CD pipelines for modern development.", image: "🔧" },
  { id: 15, title: "System Design", category: "Architecture", level: "Advanced", duration: "6 weeks", price: "₹7,999", rating: 4.9, students: 150, description: "Design scalable distributed systems. Prepare for system design interviews.", image: "🏗️" },
];

const StudentCourses = () => {
  const [enrolled, setEnrolled] = useState(initialEnrolled);
  const [search, setSearch] = useState("");
  const [viewCourse, setViewCourse] = useState<BrowseCourse | null>(null);
  const { toast } = useToast();

  const inProgress = enrolled.filter(c => c.status === "in_progress");
  const completed = enrolled.filter(c => c.status === "completed");

  const filteredBrowse = browseCourses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleEnroll = (course: BrowseCourse) => {
    if (enrolled.find(e => e.title === course.title)) {
      toast({ title: "Already enrolled", description: "You're already enrolled in this course.", variant: "destructive" });
      return;
    }
    const newEnrolled: EnrolledCourse = {
      id: course.id,
      title: course.title,
      progress: 0,
      totalLessons: 30,
      completed: 0,
      category: course.category,
      status: "in_progress",
      image: course.image,
    };
    setEnrolled(prev => [...prev, newEnrolled]);
    toast({ title: "Enrolled successfully! 🎉", description: `You've been enrolled in ${course.title}.` });
    setViewCourse(null);
  };

  const CourseCard = ({ course }: { course: EnrolledCourse }) => (
    <Card className="border-border/50 hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl">{course.image}</span>
          <Badge variant={course.status === "completed" ? "default" : "secondary"} className="text-xs">
            {course.status === "completed" ? "Completed" : "In Progress"}
          </Badge>
        </div>
        <h3 className="font-semibold text-foreground mb-1 text-sm">{course.title}</h3>
        <p className="text-xs text-muted-foreground mb-3">{course.category} • {course.totalLessons} lessons</p>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{course.completed}/{course.totalLessons}</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2" />
        </div>
        <Button size="sm" className="w-full" variant={course.status === "completed" ? "outline" : "default"}>
          {course.status === "completed" ? (
            <><CheckCircle2 className="h-3.5 w-3.5 mr-1.5" /> View Certificate</>
          ) : (
            <><Play className="h-3.5 w-3.5 mr-1.5" /> Continue Learning</>
          )}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Courses</h1>
        <p className="text-muted-foreground text-sm mt-1">Track your learning journey</p>
      </div>

      <Tabs defaultValue="in_progress">
        <TabsList>
          <TabsTrigger value="in_progress">In Progress ({inProgress.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completed.length})</TabsTrigger>
          <TabsTrigger value="browse">Browse Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="in_progress" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {inProgress.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </TabsContent>
        <TabsContent value="completed" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {completed.map(c => <CourseCard key={c.id} course={c} />)}
          </div>
        </TabsContent>
        <TabsContent value="browse" className="mt-4">
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredBrowse.map(course => (
              <Card key={course.id} className="border-border/50 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setViewCourse(course)}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{course.image}</span>
                    <Badge variant="outline" className="text-xs">{course.level}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm">{course.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {course.duration}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-yellow-500" /> {course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-foreground">{course.price}</span>
                    <Button size="sm" variant="outline">
                      View <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Course Detail & Enroll Dialog */}
      <Dialog open={!!viewCourse} onOpenChange={() => setViewCourse(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>{viewCourse?.title}</DialogTitle></DialogHeader>
          {viewCourse && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl">{viewCourse.image}</span>
                <div>
                  <Badge variant="outline">{viewCourse.category}</Badge>
                  <Badge variant="secondary" className="ml-1">{viewCourse.level}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{viewCourse.description}</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Duration:</span> <span className="font-medium text-foreground">{viewCourse.duration}</span></div>
                <div><span className="text-muted-foreground">Rating:</span> <span className="font-medium text-foreground">⭐ {viewCourse.rating}/5</span></div>
                <div><span className="text-muted-foreground">Students:</span> <span className="font-medium text-foreground">{viewCourse.students} enrolled</span></div>
                <div><span className="text-muted-foreground">Price:</span> <span className="font-bold text-foreground">{viewCourse.price}</span></div>
              </div>
              <Button className="w-full" onClick={() => handleEnroll(viewCourse)}>
                <BookOpen className="h-4 w-4 mr-2" /> Enroll Now
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StudentCourses;
