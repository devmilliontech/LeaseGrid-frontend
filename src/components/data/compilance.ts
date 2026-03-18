import { AlertOctagon, BadgeAlert, Ban, Clock7, User2, UserPlus, UserRoundX, UserX } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { ListViewDataProps } from "../appShell/compilance/ListView";


export const ComplianceStatusData: CardProps[] = [
    {
        icon: BadgeAlert,
        title: "Expiring in 7 Days",
        value: "12",
        subtitle: "Requires immediate action",
        badgeText: "Critical",
    },
    {
        icon: Clock7,
        value: "28",
        title: "Expiring in 15 Days",
        subtitle: "Monitor closely",
        badgeText: "Warning",
    },
    {
        icon: UserRoundX,
        value: "12",
        title: "Unverified Users",
        subtitle: "Awaiting verification",
        badgeText: "Pending",
    },
    {
        icon: Ban,
        value: "156",
        title: "Auto-Suspension Queue",
        subtitle: "Scheduled for suspension",
        badgeText: "Auto",
    },
]



export const ListViewData: ListViewDataProps[] = [
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Michael Garcia",
            id: "4582",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "2026-03-20",
        status: "Expiring Soon",
        Piority: "Critical",
        lastAction: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Emma Wilson",
            id: "4815",
            role: "Landlord",
        },
        documentsType: "Safety Certificate",
        expiryDate: "2026-03-25",
        status: "Warning",
        Piority: "High",
        lastAction: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "David Wilson",
            id: "4820",
            role: "Tradie",
        },
        documentsType: "Background Check",
        expiryDate: "2026-03-20",
        status: "In Review",
        Piority: "Medium",
        lastAction: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Sarah Johnson",
            id: "4502",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "2026-03-19",
        status: "Auto-Suspend",
        Piority: "Critical",
        lastAction: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Michael Garcia",
            id: "45872",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "2026-03-20",
        status: "Expiring Soon",
        Piority: "Critical",
        lastAction: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Michael Garcia",
            id: "4572",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "2026-03-20",
        status: "Compliant",
        Piority: "Critical",
        lastAction: "1 week ago",
    },
]