import { BookOpen, Clock, Award, TrendingUp, CheckCircle2, Star, Edit3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const initialCourses = [
  { id: 1, title: "Full Stack Web Development", progress: 68, totalLessons: 42, completed: 28, category: "Web Dev", image: "🌐", status: "In Progress" },
  { id: 2, title: "Data Science with Python", progress: 35, totalLessons: 36, completed: 13, category: "Data Science", image: "📊", status: "In Progress" },
  { id: 3, title: "React & Next.js Masterclass", progress: 90, totalLessons: 30, completed: 27, category: "Frontend", image: "⚛️", status: "In Progress" },
];

const achievements = [
  { title: "Fast Learner", description: "Completed 5 lessons in one day", icon: "⚡" },
  { title: "Consistent", description: "7-day learning streak", icon: "🔥" },
  { title: "Quiz Master", description: "Scored 100% on 3 quizzes", icon: "🏆" },
];

const StudentDashboard = () => {
  const [courses, setCourses] = useState(initialCourses);

  const updateStatus = (id: number, newStatus: string) => {
    setCourses(prev => prev.map(c => 
      c.id === id 
        ? { ...c, status: newStatus, progress: newStatus === "Completed" ? 100 : newStatus === "Not Started" ? 0 : c.progress }
        : c
    ));
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Welcome back, Student! 👋</h1>
        <p className="text-muted-foreground mt-1 text-sm md:text-base">Track your learning progress manually</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {[
          { label: "Enrolled Courses", value: String(courses.length), icon: BookOpen, color: "text-primary" },
          { label: "Completed", value: String(courses.filter(c => c.status === "Completed").length), icon: CheckCircle2, color: "text-green-500" },
          { label: "Certificates", value: "1", icon: Award, color: "text-yellow-500" },
          { label: "Avg. Progress", value: `${Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length)}%`, icon: TrendingUp, color: "text-primary" },
        ].map((stat) => (
          <Card key={stat.label} className="border-border/50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-muted">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-foreground">My Courses</h2>
          <p className="text-xs text-muted-foreground">Update status manually below</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card key={course.id} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{course.image}</span>
                  <Badge variant="secondary" className="text-xs">{course.category}</Badge>
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-sm">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{course.completed}/{course.totalLessons} lessons</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="flex items-center gap-2">
                  <Edit3 className="h-3.5 w-3.5 text-muted-foreground" />
                  <Select value={course.status} onValueChange={(val) => updateStatus(course.id, val)}>
                    <SelectTrigger className="h-8 text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Not Started">Not Started</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" /> Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((a, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
              <span className="text-2xl">{a.icon}</span>
              <div>
                <p className="font-medium text-sm text-foreground">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.description}</p>
              </div>
              <CheckCircle2 className="h-4 w-4 text-green-500 ml-auto flex-shrink-0" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;
