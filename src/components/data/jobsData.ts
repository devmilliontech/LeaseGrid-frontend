import type {CardProps} from "../appShell/Cards";
import { 
    Clock,
    CircleCheck,
    CircleX,
    CircleDollarSign,
    FolderOpen,
    MessageSquareWarning,
} from "lucide-react";



export const jobsData: CardProps[] = [
    {
        title: "Total Jobs",
        value: 342,
        subtitle: "Awaiting assignment",
        icon: FolderOpen,
        badgeText: "+24",
    },
    {
        title: "In Progress",
        value: 568,
        subtitle: "Currently working",
        icon: Clock,
        badgeText: "Active",
    },
    {
        title: "Completed",
        value: 568,
        subtitle: "This month",
        icon: CircleCheck,
        badgeText: "+89",
    },
    {
        title: "Disputed",
        value: 568,
        subtitle: "Requires attention",
        icon: MessageSquareWarning,
        badgeText: "Review",
    },
    {
        title: "Cancelled",
        value: 568,
        subtitle: "Last 30 days",
        icon: CircleX,
        badgeText: "Review",
    },
    {
        title: "Total Value",
        value: 568,
        subtitle: "Active jobs value",
        icon: CircleDollarSign,
        badgeText: "$12,000",
    }
]