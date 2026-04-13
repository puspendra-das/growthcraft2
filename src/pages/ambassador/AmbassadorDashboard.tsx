import { PageHeader } from "@/components/ui-extensions";
import { KpiCard, ChartCard, StatusPill } from "@/components/panel";
import DataCard from "@/components/ui-extensions/DataCard";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Badge } from "@/components/ui/badge";

const earningsData = [
  { month: "Nov", amount: 2400 },
  { month: "Dec", amount: 3200 },
  { month: "Jan", amount: 2800 },
  { month: "Feb", amount: 4100 },
  { month: "Mar", amount: 3600 },
  { month: "Apr", amount: 5200 },
];

const recentReferrals = [
  { id: "1", name: "Priya Sharma", course: "MERN Bootcamp", commission: 1500, status: "Paid" as const, date: "2026-04-10" },
  { id: "2", name: "Rahul Verma", course: "React Fundamentals", commission: 800, status: "Pending" as const, date: "2026-04-08" },
  { id: "3", name: "Anjali Gupta", course: "DSA Mastery", commission: 1200, status: "Paid" as const, date: "2026-04-05" },
  { id: "4", name: "Karthik Nair", course: "Python Full-Stack", commission: 1000, status: "Pending" as const, date: "2026-04-03" },
  { id: "5", name: "Sneha Reddy", course: "MERN Bootcamp", commission: 1500, status: "Cancelled" as const, date: "2026-04-01" },
  { id: "6", name: "Arun Kumar", course: "UI/UX Design", commission: 900, status: "Paid" as const, date: "2026-03-28" },
  { id: "7", name: "Divya Joshi", course: "Data Science", commission: 1100, status: "Pending" as const, date: "2026-03-25" },
  { id: "8", name: "Vikram Singh", course: "DevOps Pro", commission: 1300, status: "Paid" as const, date: "2026-03-22" },
  { id: "9", name: "Meera Patel", course: "React Fundamentals", commission: 800, status: "Cancelled" as const, date: "2026-03-18" },
  { id: "10", name: "Suresh Rao", course: "Cloud Computing", commission: 1400, status: "Paid" as const, date: "2026-03-15" },
];

const statusMap: Record<string, "active" | "pending" | "cancelled"> = {
  Paid: "active",
  Pending: "pending",
  Cancelled: "cancelled",
};

const AmbassadorDashboard = () => (
  <div>
    <PageHeader title="Ambassador Dashboard" description="Track your referrals, commissions, and payouts." />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <KpiCard label="Total Earnings" value={18700} prefix="₹" delta={14} />
      <KpiCard label="Pending Payout" value={4200} prefix="₹" />
      <KpiCard label="Total Referrals" value={42} delta={8} />
      <div className="rounded-xl border border-border bg-white p-6">
        <p className="text-sm font-medium text-muted-foreground mb-2">Current Tier</p>
        <div className="flex items-center gap-3">
          <StatusPill variant="active" label="Silver" />
          <span className="text-xs text-muted-foreground">32 / 50 referrals to Gold</span>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <ChartCard title="Earnings Trend">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart data={earningsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip formatter={(v: number) => [`₹${v.toLocaleString()}`, "Earnings"]} />
            <Area type="monotone" dataKey="amount" stroke="hsl(var(--lavender))" fill="hsl(var(--lavender) / 0.2)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <DataCard>
        <h3 className="text-base font-semibold font-display mb-4">Recent Referrals</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-muted-foreground">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Course</th>
                <th className="pb-3 font-medium text-right">Commission</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReferrals.map((r) => (
                <tr key={r.id} className="border-b border-border/50 last:border-0">
                  <td className="py-2.5 font-medium">{r.name}</td>
                  <td className="py-2.5 text-muted-foreground">{r.course}</td>
                  <td className="py-2.5 text-right font-mono text-magenta">₹{r.commission}</td>
                  <td className="py-2.5">
                    <StatusPill variant={statusMap[r.status]} label={r.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataCard>
    </div>
  </div>
);

export default AmbassadorDashboard;
