import { useState } from "react";
import { PageHeader } from "@/components/ui-extensions";
import PanelDataTable, { Column } from "@/components/panel/PanelDataTable";
import { StatusPill } from "@/components/panel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Referral {
  id: string;
  referredUser: string;
  courseOrBootcamp: string;
  commission: number;
  status: "Pending" | "Paid" | "Cancelled";
  date: string;
}

const referrals: Referral[] = [
  { id: "1", referredUser: "Priya Sharma", courseOrBootcamp: "MERN Bootcamp", commission: 1500, status: "Paid", date: "2026-04-10" },
  { id: "2", referredUser: "Rahul Verma", courseOrBootcamp: "React Fundamentals", commission: 800, status: "Pending", date: "2026-04-08" },
  { id: "3", referredUser: "Anjali Gupta", courseOrBootcamp: "DSA Mastery", commission: 1200, status: "Paid", date: "2026-04-05" },
  { id: "4", referredUser: "Karthik Nair", courseOrBootcamp: "Python Full-Stack", commission: 1000, status: "Pending", date: "2026-04-03" },
  { id: "5", referredUser: "Sneha Reddy", courseOrBootcamp: "MERN Bootcamp", commission: 1500, status: "Cancelled", date: "2026-04-01" },
  { id: "6", referredUser: "Arun Kumar", courseOrBootcamp: "UI/UX Design", commission: 900, status: "Paid", date: "2026-03-28" },
  { id: "7", referredUser: "Divya Joshi", courseOrBootcamp: "Data Science", commission: 1100, status: "Pending", date: "2026-03-25" },
  { id: "8", referredUser: "Vikram Singh", courseOrBootcamp: "DevOps Pro", commission: 1300, status: "Paid", date: "2026-03-22" },
  { id: "9", referredUser: "Meera Patel", courseOrBootcamp: "React Fundamentals", commission: 800, status: "Cancelled", date: "2026-03-18" },
  { id: "10", referredUser: "Suresh Rao", courseOrBootcamp: "Cloud Computing", commission: 1400, status: "Paid", date: "2026-03-15" },
  { id: "11", referredUser: "Aarav Mehta", courseOrBootcamp: "MERN Bootcamp", commission: 1500, status: "Paid", date: "2026-03-10" },
  { id: "12", referredUser: "Pooja Iyer", courseOrBootcamp: "React Fundamentals", commission: 800, status: "Pending", date: "2026-03-05" },
];

const statusMap: Record<string, "active" | "pending" | "cancelled"> = {
  Paid: "active",
  Pending: "pending",
  Cancelled: "cancelled",
};

const filters = ["All", "Pending", "Paid", "Cancelled"] as const;

const columns: Column<Referral>[] = [
  { key: "referredUser", label: "Referred User", sortable: true },
  { key: "courseOrBootcamp", label: "Course / Bootcamp", sortable: true },
  {
    key: "commission",
    label: "Commission",
    sortable: true,
    render: (row) => <span className="font-mono text-magenta">₹{row.commission}</span>,
  },
  {
    key: "status",
    label: "Status",
    render: (row) => <StatusPill variant={statusMap[row.status]} label={row.status} />,
  },
  { key: "date", label: "Date", sortable: true },
];

const AmbassadorReferrals = () => {
  const [filter, setFilter] = useState<string>("All");
  const filtered = filter === "All" ? referrals : referrals.filter((r) => r.status === filter);

  return (
    <div>
      <PageHeader title="Referrals" description="All your referral history in one place." />

      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map((f) => (
          <Button
            key={f}
            size="sm"
            variant={filter === f ? "default" : "outline"}
            className={cn(filter === f && "bg-magenta hover:bg-magenta/90 text-white")}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      <PanelDataTable columns={columns} data={filtered} searchKey="referredUser" />
    </div>
  );
};

export default AmbassadorReferrals;
