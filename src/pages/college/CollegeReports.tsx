import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, TrendingUp, Users, Award, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { title: "Student Progress Report - Q1 2026", date: "Mar 31, 2026", type: "Progress" },
  { title: "Placement Summary Report", date: "Mar 15, 2026", type: "Placement" },
  { title: "Program Completion Analytics", date: "Feb 28, 2026", type: "Analytics" },
  { title: "Student Feedback Summary", date: "Feb 15, 2026", type: "Feedback" },
];

const CollegeReports = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Reports</h1>
      <p className="text-muted-foreground mt-1 text-sm">View and download reports for your campus programs</p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Total Students", value: "245", icon: Users },
        { label: "Avg Completion", value: "76%", icon: TrendingUp },
        { label: "Placed Students", value: "89", icon: Award },
        { label: "Programs Run", value: "8", icon: BarChart3 },
      ].map((stat) => (
        <Card key={stat.label} className="border-border/50">
          <CardContent className="p-4 text-center">
            <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <Card className="border-border/50">
      <CardHeader><CardTitle className="text-lg">Available Reports</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {reports.map((report, i) => (
          <div key={i} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm text-foreground">{report.title}</p>
                <p className="text-xs text-muted-foreground">{report.date}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default CollegeReports;
