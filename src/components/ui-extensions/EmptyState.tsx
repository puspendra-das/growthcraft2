import { cn } from "@/lib/utils";
import React from "react";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const EmptyState = ({ icon, title, description, action, className }: EmptyStateProps) => (
  <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
    {icon && <div className="mb-4 text-muted-foreground">{icon}</div>}
    <h3 className="text-lg font-semibold font-display">{title}</h3>
    {description && (
      <p className="mt-2 text-sm text-muted-foreground max-w-sm">{description}</p>
    )}
    {action && <div className="mt-6">{action}</div>}
  </div>
);

export default EmptyState;
