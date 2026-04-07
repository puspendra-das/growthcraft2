import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const schedule = [
  { date: "Apr 10, 2026", time: "10:00 AM - 1:00 PM", title: "Full Stack Dev - Module 5", type: "Workshop", instructor: "Vikram M." },
  { date: "Apr 12, 2026", time: "2:00 PM - 5:00 PM", title: "Data Science Lab Session", type: "Lab", instructor: "Dr. Priya K." },
  { date: "Apr 15, 2026", time: "All Day", title: "Campus Hackathon", type: "Event", instructor: "GrowthCraft Team" },
  { date: "Apr 18, 2026", time: "10:00 AM - 12:00 PM", title: "Resume Building Workshop", type: "Workshop", instructor: "Anita S." },
  { date: "Apr 22, 2026", time: "3:00 PM - 4:30 PM", title: "Industry Connect Webinar", type: "Webinar", instructor: "Guest Speaker" },
];

const CollegeSchedule = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-foreground">Schedule</h1>
      <p className="text-muted-foreground mt-1 text-sm">Upcoming sessions and events at your campus</p>
    </div>
    <div className="grid gap-3">
      {schedule.map((item, i) => (
        <Card key={i} className="border-border/50">
          <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.date} · {item.time}</p>
                <p className="text-xs text-muted-foreground">Instructor: {item.instructor}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs w-fit">{item.type}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export default CollegeSchedule;
