export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  details: string;
  createdAt: string;
}

export const auditLogs: AuditLog[] = [];
