import type { CardProps } from "../appShell/Cards";
import { Home, Clock, AlertTriangle, Flag, Ticket, OctagonAlert, Clock8, Timer, NotebookPen } from "lucide-react";





// Dashboard Cards Data
export const DashboardCardData: CardProps[] = [
     {
          title: "Active Listings",
          value: 1000,
          subtitle: "342 new this week",
          icon: Home,
          badgeText: "+12.5%",
     },
     {
          title: "Pending Jobs",
          value: 34,
          subtitle: "156 awaiting assignment",
          icon: Clock,
          badgeText: "+8.2%",
     },
     {
          title: "Overdue Rent",
          value: 10500,
          subtitle: "23 accounts affected",
          icon: AlertTriangle,
          badgeText: "-5.3%",
     },
     {
          title: "Flagged Accounts",
          value: 30,
          subtitle: "Requires review",
          icon: Flag,
          badgeText: "12 new",
     },
     {
          title: "Support Tickets",
          value: 200,
          subtitle: "89 open tickets",
          icon: Ticket,
          badgeText: "+3.8%",
     },
];



// Compliance Overview Data
export const ComplianceOverviewCard: CardProps[] = [
     {
          value: 12,
          icon: Timer,
          badgeText: "Urgent",
          describstion: "Expiring in 7 days",
     },
     {
          value: 20,
          icon: OctagonAlert,
          badgeText: "Warning",
          describstion: "Expiring in 7 days",
     },
     {
          value: 10500,
          icon: Clock8,
          badgeText: "Pending",
          describstion: "Expiring in 7 days",
     },
     {
          value: 30,
          icon: NotebookPen,
          badgeText: "Compliant",
          describstion:"Expiring in 7 days"
     },
];  