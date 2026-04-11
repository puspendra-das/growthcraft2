import { cn } from "@/lib/utils";

type Role = "Student" | "College" | "Ambassador" | "Mentor" | "HiringPartner";

const roleStyles: Record<Role, string> = {
  Student: "bg-lavender text-white",
  College: "bg-magenta text-white",
  Ambassador: "bg-warning text-white",
  Mentor: "bg-success text-white",
  HiringPartner: "bg-graphite text-white",
};

const roleLabels: Record<Role, string> = {
  Student: "Student",
  College: "College",
  Ambassador: "Ambassador",
  Mentor: "Mentor",
  HiringPartner: "Hiring Partner",
};

interface RoleBadgeProps {
  role: Role;
  className?: string;
}

const RoleBadge = ({ role, className }: RoleBadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
      roleStyles[role],
      className
    )}
  >
    {roleLabels[role]}
  </span>
);

export default RoleBadge;
