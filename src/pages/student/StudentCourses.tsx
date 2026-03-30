import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, CheckCircle2, BookOpen } from "lucide-react";

const courses = [
  { id: 1, title: "Full Stack Web Development", progress: 68, totalLessons: 42, completed: 28, category: "Web Dev", status: "in_progress", image: "🌐" },
  { id: 2, title: "Data Science with Python", progress: 35, totalLessons: 36, completed: 13, category: "Data Science", status: "in_progress", image: "📊" },
  { id: 3, title: "React & Next.js Masterclass", progress: 90, totalLessons: 30, completed: 27, category: "Frontend", status: "in_progress", image: "⚛️" },
  { id: 4, title: "UI/UX Design Fundamentals", progress: 100, totalLessons: 20, completed: 20, category: "Design", status: "completed", image: "🎨" },
];

const CourseCard = ({ course }: { course: typeof courses[0] }) => (
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

const StudentCourses = () => {
  const inProgress = courses.filter(c => c.status === "in_progress");
  const completed = courses.filter(c => c.status === "completed");

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
      </Tabs>
    </div>
  );
};

export default StudentCourses;
