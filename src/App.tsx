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

// Shared panel shell
import PanelLayout from "./layouts/PanelLayout";

// Student
import StudentAuth from "./pages/StudentAuth";
import StudentDashboard from "./pages/student/StudentDashboard";
import StudentCourses from "./pages/student/StudentCourses";
import StudentCertificates from "./pages/student/StudentCertificates";
import StudentProfile from "./pages/student/StudentProfile";
import StudentSupport from "./pages/student/StudentSupport";

// College
import CollegeAuth from "./pages/CollegeAuth";
import CollegeDashboard from "./pages/college/CollegeDashboard";
import CollegePrograms from "./pages/college/CollegePrograms";
import CollegeStudents from "./pages/college/CollegeStudents";
import CollegeSchedule from "./pages/college/CollegeSchedule";
import CollegeReports from "./pages/college/CollegeReports";
import CollegeProfile from "./pages/college/CollegeProfile";
import CollegeSupport from "./pages/college/CollegeSupport";

// Mentor
import MentorAuth from "./pages/MentorAuth";
import MentorDashboard from "./pages/mentor/MentorDashboard";
import MentorStudents from "./pages/mentor/MentorStudents";
import MentorCourses from "./pages/mentor/MentorCourses";
import MentorSchedule from "./pages/mentor/MentorSchedule";
import MentorResources from "./pages/mentor/MentorResources";
import MentorProfile from "./pages/mentor/MentorProfile";
import MentorSupport from "./pages/mentor/MentorSupport";

// Employer
import EmployerAuth from "./pages/EmployerAuth";
import EmployerDashboard from "./pages/employer/EmployerDashboard";
import EmployerTalent from "./pages/employer/EmployerTalent";
import EmployerJobs from "./pages/employer/EmployerJobs";
import EmployerApplications from "./pages/employer/EmployerApplications";
import EmployerProfile from "./pages/employer/EmployerProfile";
import EmployerSupport from "./pages/employer/EmployerSupport";

// Ambassador
import AmbassadorDashboard from "./pages/ambassador/AmbassadorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Marketing */}
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

            {/* Auth pages */}
            <Route path="/student/login" element={<StudentAuth />} />
            <Route path="/student/register" element={<StudentAuth />} />
            <Route path="/college/login" element={<CollegeAuth />} />
            <Route path="/college/register" element={<CollegeAuth />} />
            <Route path="/mentor/login" element={<MentorAuth />} />
            <Route path="/mentor/register" element={<MentorAuth />} />
            <Route path="/employer/login" element={<EmployerAuth />} />
            <Route path="/employer/register" element={<EmployerAuth />} />

            {/* Panel routes — shared PanelLayout shell */}
            <Route element={<PanelLayout />}>
              {/* Student */}
              <Route path="/student/dashboard" element={<StudentDashboard />} />
              <Route path="/student/courses" element={<StudentCourses />} />
              <Route path="/student/certificates" element={<StudentCertificates />} />
              <Route path="/student/profile" element={<StudentProfile />} />
              <Route path="/student/support" element={<StudentSupport />} />

              {/* College */}
              <Route path="/college/dashboard" element={<CollegeDashboard />} />
              <Route path="/college/programs" element={<CollegePrograms />} />
              <Route path="/college/students" element={<CollegeStudents />} />
              <Route path="/college/schedule" element={<CollegeSchedule />} />
              <Route path="/college/reports" element={<CollegeReports />} />
              <Route path="/college/profile" element={<CollegeProfile />} />
              <Route path="/college/support" element={<CollegeSupport />} />

              {/* Ambassador */}
              <Route path="/ambassador/dashboard" element={<AmbassadorDashboard />} />

              {/* Mentor */}
              <Route path="/mentor/dashboard" element={<MentorDashboard />} />
              <Route path="/mentor/students" element={<MentorStudents />} />
              <Route path="/mentor/courses" element={<MentorCourses />} />
              <Route path="/mentor/schedule" element={<MentorSchedule />} />
              <Route path="/mentor/resources" element={<MentorResources />} />
              <Route path="/mentor/profile" element={<MentorProfile />} />
              <Route path="/mentor/support" element={<MentorSupport />} />

              {/* Employer / Hiring Partner */}
              <Route path="/employer/dashboard" element={<EmployerDashboard />} />
              <Route path="/employer/talent" element={<EmployerTalent />} />
              <Route path="/employer/jobs" element={<EmployerJobs />} />
              <Route path="/employer/applications" element={<EmployerApplications />} />
              <Route path="/employer/profile" element={<EmployerProfile />} />
              <Route path="/employer/support" element={<EmployerSupport />} />
            </Route>

            {/* Admin */}
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
