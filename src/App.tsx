import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Bootcamps from "./pages/Bootcamps";
import BootcampDetail from "./pages/BootcampDetail";
import TrainingProgramDetail from "./pages/TrainingProgramDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ForStudents from "./pages/ForStudents";
import ForColleges from "./pages/ForColleges";
import ForMentors from "./pages/ForMentors";
import ForEmployers from "./pages/ForEmployers";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/AdminCourses";
import AdminBootcamps from "./pages/admin/AdminBootcamps";
import AdminTrainingPrograms from "./pages/admin/AdminTrainingPrograms";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminColleges from "./pages/admin/AdminColleges";
import AdminEmployers from "./pages/admin/AdminEmployers";
import AdminEnquiries from "./pages/admin/AdminEnquiries";
import AdminRegistrations from "./pages/admin/AdminRegistrations";
import AdminContent from "./pages/admin/AdminContent";
import AdminSettings from "./pages/admin/AdminSettings";
import StudentAuth from "./pages/StudentAuth";
import StudentLayout from "./layouts/StudentLayout";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentCourses from "./pages/student/StudentCourses";
import StudentCertificates from "./pages/student/StudentCertificates";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSupport from "./pages/student/StudentSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/bootcamps" element={<Bootcamps />} />
            <Route path="/bootcamps/:slug" element={<BootcampDetail />} />
            <Route path="/programs/:slug" element={<TrainingProgramDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/for-students" element={<ForStudents />} />
            <Route path="/for-colleges" element={<ForColleges />} />
            <Route path="/for-mentors" element={<ForMentors />} />
            <Route path="/for-employers" element={<ForEmployers />} />
            
            {/* Student Routes */}
            <Route path="/student/login" element={<StudentAuth />} />
            <Route path="/student/register" element={<StudentAuth />} />
            <Route path="/student" element={<StudentLayout />}>
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="courses" element={<StudentCourses />} />
              <Route path="certificates" element={<StudentCertificates />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="support" element={<StudentSupport />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="courses" element={<AdminCourses />} />
              <Route path="bootcamps" element={<AdminBootcamps />} />
              <Route path="training-programs" element={<AdminTrainingPrograms />} />
              <Route path="events" element={<AdminEvents />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="colleges" element={<AdminColleges />} />
              <Route path="employers" element={<AdminEmployers />} />
              <Route path="enquiries" element={<AdminEnquiries />} />
              <Route path="registrations" element={<AdminRegistrations />} />
              <Route path="content" element={<AdminContent />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
