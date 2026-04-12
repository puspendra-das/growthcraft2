export interface JobPosting {
  id: string;
  employerId: string;
  title: string;
  description: string;
  skills: string[];
  location: string;
  salary: string;
  status: "draft" | "active" | "closed";
  applicants: number;
  createdAt: string;
}

export const jobPostings: JobPosting[] = [];
