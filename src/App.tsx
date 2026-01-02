import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Bootcamps from "./pages/Bootcamps";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForStudents from "./pages/ForStudents";
import ForColleges from "./pages/ForColleges";
import ForMentors from "./pages/ForMentors";
import ForEmployers from "./pages/ForEmployers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/bootcamps" element={<Bootcamps />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/for-students" element={<ForStudents />} />
          <Route path="/for-colleges" element={<ForColleges />} />
          <Route path="/for-mentors" element={<ForMentors />} />
          <Route path="/for-employers" element={<ForEmployers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
