export interface Referral {
  id: string;
  ambassadorId: string;
  referredName: string;
  referredEmail: string;
  status: "pending" | "converted" | "expired";
  commission: number;
  createdAt: string;
}

export const referrals: Referral[] = [];
