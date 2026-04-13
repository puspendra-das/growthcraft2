import { PageHeader } from "@/components/ui-extensions";
import DataCard from "@/components/ui-extensions/DataCard";
import PanelDataTable, { Column } from "@/components/panel/PanelDataTable";
import { StatusPill } from "@/components/panel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface Payout {
  id: string;
  date: string;
  amount: number;
  status: "Completed" | "Processing" | "Failed";
  transactionId: string;
}

const payouts: Payout[] = [
  { id: "1", date: "2026-04-01", amount: 5200, status: "Completed", transactionId: "TXN-9A3F7K2" },
  { id: "2", date: "2026-03-01", amount: 4100, status: "Completed", transactionId: "TXN-8B2E6J1" },
  { id: "3", date: "2026-02-01", amount: 3600, status: "Completed", transactionId: "TXN-7C1D5I0" },
  { id: "4", date: "2026-01-01", amount: 2800, status: "Completed", transactionId: "TXN-6D0C4H9" },
  { id: "5", date: "2025-12-01", amount: 3200, status: "Completed", transactionId: "TXN-5E9B3G8" },
];

const statusMap: Record<string, "completed" | "pending" | "cancelled"> = {
  Completed: "completed",
  Processing: "pending",
  Failed: "cancelled",
};

const columns: Column<Payout>[] = [
  { key: "date", label: "Date", sortable: true },
  {
    key: "amount",
    label: "Amount",
    sortable: true,
    render: (row) => <span className="font-mono font-semibold">₹{row.amount.toLocaleString()}</span>,
  },
  {
    key: "status",
    label: "Status",
    render: (row) => <StatusPill variant={statusMap[row.status]} label={row.status} />,
  },
  {
    key: "transactionId",
    label: "Transaction ID",
    render: (row) => <span className="font-mono text-xs text-muted-foreground">{row.transactionId}</span>,
  },
];

const AmbassadorPayouts = () => (
  <div>
    <PageHeader title="Payouts" description="Your payout history and payment settings." />

    <PanelDataTable columns={columns} data={payouts} className="mb-8" />

    <DataCard className="max-w-md">
      <h3 className="text-base font-semibold font-display mb-4">Payment Details</h3>
      <div className="space-y-4">
        <div>
          <Label className="mb-2 block">UPI ID</Label>
          <Input placeholder="yourname@upi" defaultValue="ambassador@okaxis" />
        </div>
        <Button className="bg-magenta hover:bg-magenta/90 text-white">Update Payment Details</Button>
      </div>
    </DataCard>
  </div>
);

export default AmbassadorPayouts;
