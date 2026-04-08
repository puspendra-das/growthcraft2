import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Eye, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface Course {
  id: number;
  title: string;
  students: number;
  modules: number;
  status: string;
  description: string;
  curriculum: string[];
  completionRate: number;
  avgScore: number;
  format: string;
}

const courses: Course[] = [
  {
    id: 1, title: "Full Stack Web Development", students: 12, modules: 42, status: "Active",
    description: "Comprehensive course covering React, Node.js, databases and deployment.",
    curriculum: ["HTML/CSS Fundamentals", "JavaScript Deep Dive", "React Basics", "React Advanced Patterns", "Node.js & Express", "MongoDB & PostgreSQL", "Authentication & Security", "Deployment & DevOps", "Capstone Project"],
    completionRate: 65, avgScore: 78, format: "Online + Weekend Labs"
  },
  {
    id: 2, title: "React & Next.js Masterclass", students: 6, modules: 30, status: "Active",
    description: "Advanced React patterns, Next.js, SSR, and deployment.",
    curriculum: ["React Hooks Deep Dive", "State Management", "Next.js Pages & Routing", "SSR vs SSG", "API Routes", "Authentication", "Performance Optimization", "Deployment"],
    completionRate: 72, avgScore: 82, format: "Online"
  },
  {
    id: 3, title: "Python for Data Science", students: 0, modules: 36, status: "Upcoming",
    description: "Python, Pandas, NumPy, data visualization and ML basics.",
    curriculum: ["Python Basics", "NumPy & Pandas", "Data Visualization", "Statistical Analysis", "Machine Learning Intro", "Scikit-Learn", "Project Work"],
    completionRate: 0, avgScore: 0, format: "Online + Live Sessions"
  },
];

const MentorCourses = () => {
  const [viewCourse, setViewCourse] = useState<Course | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Courses</h1>
        <p className="text-muted-foreground mt-1 text-sm">Courses you are mentoring</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="border-border/50 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <Badge variant={course.status === "Active" ? "default" : "secondary"} className="text-xs">{course.status}</Badge>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{course.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {course.students} students</span>
                <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {course.modules} modules</span>
              </div>
              <Button variant="outline" size="sm" className="w-full" onClick={() => setViewCourse(course)}>
                <Eye className="h-3.5 w-3.5 mr-1" /> View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Course Detail Dialog */}
      <Dialog open={!!viewCourse} onOpenChange={() => setViewCourse(null)}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{viewCourse?.title}</DialogTitle></DialogHeader>
          {viewCourse && (
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge variant={viewCourse.status === "Active" ? "default" : "secondary"}>{viewCourse.status}</Badge>
                <Badge variant="outline">{viewCourse.format}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{viewCourse.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Students:</span> <span className="font-medium text-foreground">{viewCourse.students}</span></div>
                <div><span className="text-muted-foreground">Modules:</span> <span className="font-medium text-foreground">{viewCourse.modules}</span></div>
              </div>

              {viewCourse.status === "Active" && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Completion Rate</span>
                    <span className="font-medium text-foreground">{viewCourse.completionRate}%</span>
                  </div>
                  <Progress value={viewCourse.completionRate} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Avg. Quiz Score</span>
                    <span className="font-medium text-foreground">{viewCourse.avgScore}%</span>
                  </div>
                  <Progress value={viewCourse.avgScore} className="h-2" />
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-foreground mb-2">Curriculum</p>
                <div className="space-y-1.5">
                  {viewCourse.curriculum.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MentorCourses;
