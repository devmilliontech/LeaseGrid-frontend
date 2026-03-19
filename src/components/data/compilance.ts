import {BadgeAlert, Ban, Clock7,UserRoundX,File, Send, UserX, CircleCheck, FileInput, Clock4, CircleAlert  } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { ListViewDataProps } from "../appShell/compilance/ListView";
import type { AutoCardsDataProps, cardsDataProps } from "../appShell/compilance/Card";


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
        status: "In Review",
        Piority: "Medium",
        Submitted: "5 hour ago",
        Category:"Under Review"
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Sarah Johnson",
            id: "4502",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "3 days ago",
        status: "Auto-Suspend",
        Piority: "Urgent",
        Scheduled:"Tomorrow 10 AM"
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "James Brown",
            id: "45872",
            role: "Tenant",
        },
        documentsType: "ID Verification",
        status: "Pending Upload",
        Piority: "Medium",
        Category:"Unverified",
        Registered: "2 days ago",
    },
    {
        user: {
            avatar: "https://i.pravatar.cc/40",
            name: "Robert Anderson",
            id: "4572",
            role: "Landlord",
        },
        documentsType: "Property Insurance",
        expiryDate: "1 day ago",
        status: "Auto-Suspend",
        Piority: "Urgent",
        Scheduled:"Tomorrow 9 AM",
    },
]


export const CardData:cardsDataProps[]=[
    {
        title:"Expiring in 7 Days",
        subTitle:"Sarah Johnson's Safety Certificate verified and approved",
        icon:CircleCheck,
        action:"Admin User",
        timeStamp:"5 minutes ago",
    },
    {
        title:"Reminder Sent",
        subTitle:"Expiry reminder sent to Michael Garcia for Property Insurance",
        icon:Send,
        action:"System Automated",
        timeStamp:"15 minutes ago",
    },
    {
        title:"User Suspended",
        subTitle:"Robert Anderson suspended due to expired insurance policy",
        icon:UserX,
        action:"Admin User",
        timeStamp:"30 minutes ago",
    },
    {
        title:"Document Uploaded",
        subTitle:"Lisa Martinez submitted Background Check for review",
        icon:FileInput,
        action:"User Action",
        timeStamp:"1 hour ago",
    },
    {
        title:"Extension Granted",
        subTitle:"David Thompson granted 30-day extension for Insurance renewal",
        icon:Clock7,
        action:"Admin User",
        timeStamp:"2 hours ago",
    },
]



export const AutoCardsData:AutoCardsDataProps[]=[
    {
        status:"Critical",
        title:" Mass Expiry Warning",
        icon:CircleAlert,
        subTitle:"12 documents expiring within 7 days - immediate action required"
    },
    {
        status:"Warning",
        title:" Pending Verifications",
        icon:Clock4,
        subTitle:"45 unverified users pending document submission"
    },
    {
        title:"Auto-Suspension Scheduled",
        icon:Clock7,
        subTitle:"8 accounts scheduled for automatic suspension within 24 hours"
    },
    {
        status:"Success",
        title:"Daily Compliance Scan",
        icon:CircleCheck,
        subTitle:"Automated compliance scan completed - 2,762 accounts verified"
    },
]