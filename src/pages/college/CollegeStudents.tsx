import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Users } from "lucide-react";

const students = [
  { name: "Rahul Sharma", email: "rahul@college.edu", course: "Full Stack Dev", progress: 78, status: "Active" },
  { name: "Priya Devi", email: "priya@college.edu", course: "Data Science", progress: 92, status: "Active" },
  { name: "Amit Kumar", email: "amit@college.edu", course: "React Bootcamp", progress: 100, status: "Completed" },
  { name: "Sneha Gupta", email: "sneha@college.edu", course: "UI/UX Design", progress: 45, status: "Active" },
  { name: "Ravi Patel", email: "ravi@college.edu", course: "Full Stack Dev", progress: 60, status: "Active" },
  { name: "Meera Singh", email: "meera@college.edu", course: "Career Readiness", progress: 100, status: "Placed" },
];

const CollegeStudents = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Students</h1>
        <p className="text-muted-foreground mt-1 text-sm">Track your campus students enrolled in GrowthCraft programs</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-10" />
      </div>

      <div className="grid gap-3">
        {students.map((student, i) => (
          <Card key={i} className="border-border/50">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    {student.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-13 sm:ml-0">
                  <Badge variant="outline" className="text-xs">{student.course}</Badge>
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: `${student.progress}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{student.progress}%</span>
                  <Badge variant={student.status === "Placed" ? "default" : student.status === "Completed" ? "secondary" : "outline"} className="text-xs">
                    {student.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollegeStudents;
