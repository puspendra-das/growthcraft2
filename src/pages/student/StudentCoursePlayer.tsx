import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Check, Lock, Play, ChevronRight, MessageSquare, FileText, HelpCircle, PanelRightClose, PanelRight } from "lucide-react";
import { cn } from "@/lib/utils";

const curriculum = [
  {
    title: "Getting Started",
    lessons: [
      { id: "1-1", title: "Course Introduction", duration: "5 min", completed: true, free: true },
      { id: "1-2", title: "Setting Up Environment", duration: "12 min", completed: true, free: true },
      { id: "1-3", title: "Your First Project", duration: "18 min", completed: true, free: false },
    ],
  },
  {
    title: "Core Concepts",
    lessons: [
      { id: "2-1", title: "Components & Props", duration: "22 min", completed: true, free: false },
      { id: "2-2", title: "State Management", duration: "28 min", completed: false, free: false, current: true },
      { id: "2-3", title: "Lifecycle Methods", duration: "20 min", completed: false, free: false },
      { id: "2-4", title: "Event Handling", duration: "15 min", completed: false, free: false },
    ],
  },
  {
    title: "Advanced Patterns",
    lessons: [
      { id: "3-1", title: "Custom Hooks", duration: "25 min", completed: false, free: false },
      { id: "3-2", title: "Context API", duration: "20 min", completed: false, free: false },
      { id: "3-3", title: "Performance Optimization", duration: "30 min", completed: false, free: false },
    ],
  },
];

const StudentCoursePlayer = () => {
  const { slug } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const currentLesson = curriculum.flatMap(s => s.lessons).find(l => (l as any).current);

  return (
    <div className="flex gap-0 -m-4 md:-m-8 min-h-[calc(100vh-4rem)]">
      {/* Main Content */}
      <div className={cn("flex-1 flex flex-col", sidebarOpen ? "lg:pr-0" : "")}>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 px-4 md:px-8 py-3 text-xs text-muted-foreground border-b border-border bg-white">
          <span>React & Next.js</span>
          <ChevronRight className="h-3 w-3" />
          <span>Core Concepts</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground font-medium">State Management</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <PanelRightClose className="h-4 w-4" /> : <PanelRight className="h-4 w-4" />}
          </Button>
        </div>

        {/* Video Player Placeholder */}
        <div className="px-4 md:px-8 pt-4">
          <div className="bg-graphite rounded-xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
              <p className="text-white/80 text-sm font-medium">State Management</p>
              <p className="text-white/50 text-xs mt-1">28 min</p>
            </div>
          </div>
        </div>

        {/* Tabs below video */}
        <div className="px-4 md:px-8 py-4 flex-1">
          <Tabs defaultValue="notes">
            <TabsList>
              <TabsTrigger value="notes"><FileText className="h-3.5 w-3.5 mr-1.5" /> Notes</TabsTrigger>
              <TabsTrigger value="discussion"><MessageSquare className="h-3.5 w-3.5 mr-1.5" /> Discussion</TabsTrigger>
              <TabsTrigger value="resources"><FileText className="h-3.5 w-3.5 mr-1.5" /> Resources</TabsTrigger>
              <TabsTrigger value="qa"><HelpCircle className="h-3.5 w-3.5 mr-1.5" /> Q&A</TabsTrigger>
            </TabsList>
            <TabsContent value="notes" className="mt-4">
              <Textarea placeholder="Take notes for this lesson..." rows={6} className="resize-none" />
              <Button size="sm" className="mt-3 bg-magenta text-white hover:bg-magenta/90">Save Notes</Button>
            </TabsContent>
            <TabsContent value="discussion" className="mt-4">
              <div className="text-center py-8 text-muted-foreground text-sm">
                <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
                No discussions yet. Start a conversation!
              </div>
            </TabsContent>
            <TabsContent value="resources" className="mt-4">
              <div className="space-y-2">
                {["Lecture Slides.pdf", "Code Samples.zip", "Reference Links.md"].map((r) => (
                  <div key={r} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-white">
                    <FileText className="h-4 w-4 text-lavender" />
                    <span className="text-sm font-medium text-foreground">{r}</span>
                    <Button variant="ghost" size="sm" className="ml-auto text-xs">Download</Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="qa" className="mt-4">
              <div className="text-center py-8 text-muted-foreground text-sm">
                <HelpCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                No questions yet. Ask your first question!
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Curriculum Sidebar */}
      {sidebarOpen && (
        <div className="hidden lg:block w-[340px] border-l border-border bg-white overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-bold text-sm text-foreground">Curriculum</h3>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSidebarOpen(false)}>
              <PanelRightClose className="h-4 w-4" />
            </Button>
          </div>
          <Accordion type="multiple" defaultValue={["Core Concepts"]} className="px-2 py-2">
            {curriculum.map((section) => (
              <AccordionItem key={section.title} value={section.title} className="border-none">
                <AccordionTrigger className="text-sm font-semibold px-2 py-3 hover:no-underline">
                  {section.title}
                  <span className="text-xs text-muted-foreground ml-auto mr-2">
                    {section.lessons.filter(l => l.completed).length}/{section.lessons.length}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-1">
                  {section.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors",
                        (lesson as any).current
                          ? "bg-magenta/5 border-l-[3px] border-magenta text-foreground font-medium"
                          : "hover:bg-muted/50 text-muted-foreground"
                      )}
                    >
                      {lesson.completed ? (
                        <Check className="h-4 w-4 text-success shrink-0" />
                      ) : lesson.free ? (
                        <Play className="h-4 w-4 shrink-0" />
                      ) : (
                        <Lock className="h-3.5 w-3.5 shrink-0 opacity-40" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{lesson.title}</p>
                        <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                      </div>
                      {lesson.free && <Badge variant="outline" className="text-[9px] shrink-0">Free</Badge>}
                    </button>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default StudentCoursePlayer;
