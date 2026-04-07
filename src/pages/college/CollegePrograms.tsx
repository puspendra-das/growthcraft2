import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react";

const programs = [
  { id: 1, title: "Full Stack Development Bootcamp", duration: "12 weeks", students: 45, status: "In Progress", category: "Web Dev", description: "Comprehensive bootcamp covering React, Node.js, databases and deployment." },
  { id: 2, title: "Data Science Workshop", duration: "4 weeks", students: 30, status: "Upcoming", category: "Data Science", description: "Hands-on workshop on Python, Pandas, ML basics and data visualization." },
  { id: 3, title: "Career Readiness Program", duration: "8 weeks", students: 120, status: "Completed", category: "Career", description: "Interview prep, resume building, aptitude training and soft skills." },
  { id: 4, title: "UI/UX Design Sprint", duration: "3 weeks", students: 25, status: "Upcoming", category: "Design", description: "Learn Figma, design thinking, prototyping and user research methods." },
  { id: 5, title: "Cloud Computing Fundamentals", duration: "6 weeks", students: 0, status: "Planning", category: "DevOps", description: "AWS/GCP basics, containerization, CI/CD pipelines." },
];

const CollegePrograms = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Programs</h1>
          <p className="text-muted-foreground mt-1 text-sm">Training programs running at your campus</p>
        </div>
        <Button><BookOpen className="h-4 w-4 mr-2" /> Request New Program</Button>
      </div>

      <div className="grid gap-4">
        {programs.map((program) => (
          <Card key={program.id} className="border-border/50 hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={
                      program.status === "In Progress" ? "default" :
                      program.status === "Upcoming" ? "secondary" :
                      program.status === "Completed" ? "outline" : "secondary"
                    } className="text-xs">{program.status}</Badge>
                    <Badge variant="outline" className="text-xs">{program.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{program.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{program.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {program.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {program.students} students</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Details <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollegePrograms;
