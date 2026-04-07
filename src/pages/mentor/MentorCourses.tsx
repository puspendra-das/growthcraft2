import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users } from "lucide-react";

const courses = [
  { title: "Full Stack Web Development", students: 12, modules: 42, status: "Active", description: "Comprehensive course covering React, Node.js, databases." },
  { title: "React & Next.js Masterclass", students: 6, modules: 30, status: "Active", description: "Advanced React patterns, Next.js, SSR, and deployment." },
  { title: "Python for Data Science", students: 0, modules: 36, status: "Upcoming", description: "Python, Pandas, NumPy, data visualization and ML basics." },
];

const MentorCourses = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Courses</h1>
      <p className="text-muted-foreground mt-1 text-sm">Courses you are mentoring</p>
    </div>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course, i) => (
        <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <Badge variant={course.status === "Active" ? "default" : "secondary"} className="text-xs">{course.status}</Badge>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {course.students} students</span>
              <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {course.modules} modules</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default MentorCourses;
