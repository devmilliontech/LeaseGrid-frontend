import type { ActivityItem } from "../appShell/dashboard/DashboardWidgets";

// Mock Data for Recent Activity
export const recentActivityData: ActivityItem[] = [
  {
    id: "1",
    user: { name: "Sarah Johnson", initials: "SJ" },
    action: "registered",
    target: "Landlord account",
    time: "5 minutes ago",
    type: "register",
    status: "New",
  },
  {
    id: "2",
    user: { name: "Mike Davis", initials: "MD" },
    action: "posted a job",
    target: "Plumbing repair",
    time: "12 minutes ago",
    type: "job",
    status: "Job",
  },
  {
    id: "3",
    user: { name: "Emma Wilson", initials: "EW" },
    action: "completed payment",
    target: "$1,250 rent payment",
    time: "25 minutes ago",
    type: "payment",
    status: "Paid",
  },
  {
    id: "4",
    user: { name: "James Brown", initials: "JB" },
    action: "opened dispute",
    target: "Property maintenance issue",
    time: "1 hour ago",
    type: "dispute",
    status: "Dispute",
  },
  {
    id: "5",
    user: { name: "Lisa Martinez", initials: "LM" },
    action: "left review",
    target: "5-star rating for trader",
    time: "2 hours ago",
    type: "review",
    status: "Review",
  },
];
