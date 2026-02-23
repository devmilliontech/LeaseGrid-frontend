import type { AlertItem } from "../appShell/dashboard/DashboardWidgets";

// Mock Data for System Alerts
export const systemAlertsData: AlertItem[] = [
  {
    id: "1",
    title: "Critical: Payment Gateway Down",
    description:
      "Stripe integration experiencing issues. Payments may be delayed.",
    severity: "critical",
    time: "Now",
    actionText: "Investigate",
  },
  {
    id: "2",
    title: "Warning: High Server Load",
    description: "CPU usage at 87% for the past 30 minutes.",
    severity: "warning",
    time: "15m",
    actionText: "View Details",
  },
  {
    id: "3",
    title: "Info: Scheduled Maintenance",
    description: "System maintenance planned for tomorrow at 2 AM EST.",
    severity: "info",
    time: "1h",
    actionText: "Learn More",
  },
  {
    id: "4",
    title: "Success: Backup Completed",
    description: "Daily database backup finished successfully. Size: 14GB.",
    severity: "success",
    time: "3h",
    actionText: "View Logs",
  },
];
