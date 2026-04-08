import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Student {
  name: string;
  email: string;
  course: string;
  progress: number;
  status: string;
  phone: string;
  year: string;
  department: string;
  mentor: string;
  enrollDate: string;
}

const students: Student[] = [
  { name: "Rahul Sharma", email: "rahul@college.edu", course: "Full Stack Dev", progress: 78, status: "Active", phone: "+91 98765 43210", year: "3rd Year", department: "CSE", mentor: "Vikram M.", enrollDate: "Jan 15, 2026" },
  { name: "Priya Devi", email: "priya@college.edu", course: "Data Science", progress: 92, status: "Active", phone: "+91 98765 43211", year: "4th Year", department: "IT", mentor: "Dr. Priya K.", enrollDate: "Jan 15, 2026" },
  { name: "Amit Kumar", email: "amit@college.edu", course: "React Bootcamp", progress: 100, status: "Completed", phone: "+91 98765 43212", year: "3rd Year", department: "CSE", mentor: "Vikram M.", enrollDate: "Dec 10, 2025" },
  { name: "Sneha Gupta", email: "sneha@college.edu", course: "UI/UX Design", progress: 45, status: "Active", phone: "+91 98765 43213", year: "2nd Year", department: "CSE", mentor: "Anita S.", enrollDate: "Feb 1, 2026" },
  { name: "Ravi Patel", email: "ravi@college.edu", course: "Full Stack Dev", progress: 60, status: "Active", phone: "+91 98765 43214", year: "3rd Year", department: "ECE", mentor: "Vikram M.", enrollDate: "Jan 15, 2026" },
  { name: "Meera Singh", email: "meera@college.edu", course: "Career Readiness", progress: 100, status: "Placed", phone: "+91 98765 43215", year: "4th Year", department: "CSE", mentor: "Anita S.", enrollDate: "Nov 1, 2025" },
];

const CollegeStudents = () => {
  const [search, setSearch] = useState("");
  const [viewStudent, setViewStudent] = useState<Student | null>(null);

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.course.toLowerCase().includes(search.toLowerCase()) ||
    s.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Students</h1>
        <p className="text-muted-foreground mt-1 text-sm">Track your campus students enrolled in GrowthCraft programs</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search students..." className="pl-10" value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="grid gap-3">
        {filtered.map((student, i) => (
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
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setViewStudent(student)}>
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Student Detail Dialog */}
      <Dialog open={!!viewStudent} onOpenChange={() => setViewStudent(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader><DialogTitle>Student Details</DialogTitle></DialogHeader>
          {viewStudent && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {viewStudent.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{viewStudent.name}</p>
                  <p className="text-sm text-muted-foreground">{viewStudent.email}</p>
                </div>
                <Badge variant={viewStudent.status === "Placed" ? "default" : "outline"} className="ml-auto">{viewStudent.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><span className="text-muted-foreground">Phone:</span><br/><span className="font-medium text-foreground">{viewStudent.phone}</span></div>
                <div><span className="text-muted-foreground">Year:</span><br/><span className="font-medium text-foreground">{viewStudent.year}</span></div>
                <div><span className="text-muted-foreground">Department:</span><br/><span className="font-medium text-foreground">{viewStudent.department}</span></div>
                <div><span className="text-muted-foreground">Course:</span><br/><span className="font-medium text-foreground">{viewStudent.course}</span></div>
                <div><span className="text-muted-foreground">Mentor:</span><br/><span className="font-medium text-foreground">{viewStudent.mentor}</span></div>
                <div><span className="text-muted-foreground">Enrolled:</span><br/><span className="font-medium text-foreground">{viewStudent.enrollDate}</span></div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Progress</p>
                <Progress value={viewStudent.progress} className="h-3" />
                <p className="text-xs text-muted-foreground mt-1">{viewStudent.progress}% complete</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CollegeStudents;
