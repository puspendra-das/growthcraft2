import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Eye, Download } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const candidates = [
  { name: "Rahul Sharma", skills: ["React", "Node.js", "MongoDB"], score: 92, course: "Full Stack Dev", location: "Guwahati", status: "Available" },
  { name: "Priya Devi", skills: ["Python", "Pandas", "ML"], score: 88, course: "Data Science", location: "Delhi", status: "Available" },
  { name: "Amit Kumar", skills: ["React", "TypeScript", "Next.js"], score: 85, course: "React Masterclass", location: "Bangalore", status: "Interviewing" },
  { name: "Sneha Gupta", skills: ["Figma", "UI/UX", "CSS"], score: 90, course: "Design Sprint", location: "Mumbai", status: "Available" },
  { name: "Ravi Patel", skills: ["Java", "Spring Boot", "AWS"], score: 87, course: "Backend Dev", location: "Hyderabad", status: "Available" },
  { name: "Meera Singh", skills: ["React", "Node.js", "PostgreSQL"], score: 94, course: "Full Stack Dev", location: "Pune", status: "Hired" },
];

const EmployerTalent = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Talent Pool</h1>
      <p className="text-muted-foreground mt-1 text-sm">Browse job-ready candidates from GrowthCraft programs</p>
    </div>

    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search by name or skill..." className="pl-10" />
      </div>
      <Select><SelectTrigger className="w-40"><SelectValue placeholder="All Skills" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Skills</SelectItem>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="nodejs">Node.js</SelectItem>
          <SelectItem value="design">UI/UX</SelectItem>
        </SelectContent>
      </Select>
    </div>

    <div className="grid gap-3">
      {candidates.map((c, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  {c.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.course} · {c.location}</p>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {c.skills.map(s => <Badge key={s} variant="outline" className="text-[10px] px-1.5 py-0">{s}</Badge>)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-bold text-green-600">{c.score}%</p>
                  <Badge variant={c.status === "Hired" ? "default" : c.status === "Interviewing" ? "secondary" : "outline"} className="text-xs">{c.status}</Badge>
                </div>
                <div className="flex gap-1">
                  <Button variant="outline" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
                  <Button variant="outline" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default EmployerTalent;
