
## Phase 1: Auth Pages (4 separate login/register pages)
- `/student/login` & `/student/register` — already exists, update branding
- `/college/login` & `/college/register` — new, college-specific fields (institution name, designation, etc.)
- `/mentor/login` & `/mentor/register` — new, mentor-specific fields (expertise, experience, etc.)
- `/employer/login` & `/employer/register` — new, employer-specific fields (company, industry, etc.)
- All use dummy auth (bypass login, no real backend)

## Phase 2: Dashboards for each user type
- **Student Dashboard** — update to remove real-time tracking, make progress manual
- **College Dashboard** (`/college/*`) — overview stats, manage partnerships, view available programs, student placements, profile settings
- **Mentor Dashboard** (`/mentor/*`) — overview stats, assigned students/batches, content/curriculum, schedule, profile settings
- **Employer Dashboard** (`/employer/*`) — overview stats, talent pool, hiring requests, job postings, profile settings
- Each dashboard has a sidebar layout with profile management

## Phase 3: Layouts
- Create `CollegeLayout`, `MentorLayout`, `EmployerLayout` with role-specific sidebars
- Update `StudentLayout` if needed

## Phase 4: Admin Panel Updates
- Ensure admin can view/manage all user types from existing Users page (already has role filter)
- Add dedicated admin views for Mentors if not present
- Ensure individual profile view/edit for each user type

## Phase 5: Navigation & Interconnectivity
- Update Navbar with login dropdown or links for each role
- Update Footer with dashboard links for each role
- Update ForStudents, ForColleges, ForMentors, ForEmployers pages to link to respective auth pages
- Cross-link between dashboards where relevant (e.g., mentor sees courses, employer sees candidates)

## Files to create (~20+ new files):
- Auth: `CollegeAuth.tsx`, `MentorAuth.tsx`, `EmployerAuth.tsx`
- Layouts: `CollegeLayout.tsx`, `MentorLayout.tsx`, `EmployerLayout.tsx`
- College pages: `CollegeDashboard.tsx`, `CollegePrograms.tsx`, `CollegeStudents.tsx`, `CollegeProfile.tsx`
- Mentor pages: `MentorDashboard.tsx`, `MentorStudents.tsx`, `MentorSchedule.tsx`, `MentorProfile.tsx`
- Employer pages: `EmployerDashboard.tsx`, `EmployerTalent.tsx`, `EmployerJobs.tsx`, `EmployerProfile.tsx`
- Update: `App.tsx`, `Navbar.tsx`, `Footer.tsx`, `StudentDashboard.tsx`, ForX pages
