export interface Enrollment {
  id: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseTitle: string;
  enrolledAt: string;
  progress: number;
  status: "active" | "completed" | "dropped";
}

export const enrollments: Enrollment[] = [];
