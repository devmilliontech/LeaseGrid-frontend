import { MessageSquare, Clock8, TicketCheck, TicketPlus, Tickets, Wallet, User, Cog, NotebookPen, Lightbulb } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { TicketProps } from "../appShell/support/ListView";
import type { agentData } from "../appShell/support/AgentCard";
import type { categoryData } from "../appShell/CategoryCard";


export const AgentData: agentData[] = [
     {
          name: "John Doe",
          avatar: "https://i.pravatar.cc/40",
          role: "Senior Support",
          totalResolved: 12
     },
     {
          name: "John Doe",
          avatar: "https://i.pravatar.cc/40",
          role: "Support",
          totalResolved: 12
     },
     {
          name: "John Doe",
          avatar: "https://i.pravatar.cc/40",
          role: "Support",
          totalResolved: 12
     },

]


export const SupportData: CardProps[] = [
     {
          value: 456,
          icon: Tickets,
          badgeText: "Total ",
          subtitle: "All tickets"
     },
     {
          value: 100,
          icon: TicketPlus,
          badgeText: "New",
          subtitle: "Unassigned"
     },
     {
          value: 20,
          icon: TicketCheck,
          badgeText: "Active",
          subtitle: "In progress"
     },
     {
          value: 66,
          icon: Clock8,
          badgeText: "Waiting",
          subtitle: "On user"
     },
     {
          value: 89,
          icon: MessageSquare,
          badgeText: "Resolved",
          subtitle: "This week"
     },
];



export const TicketData: TicketProps[] = [
     {
          ticket: {
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject: "Users unable to complete rent payments.",
               status: "New",
               priority: "Critical",
               CreatedOn: "5h ",
               sla: 16
          },
          ticketRequestor: { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/40" },
     },
     {
          ticket: {
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject: "Users unable to complete rent payments.",
               status: "New",
               priority: "High",
               CreatedOn: "5h ",
               sla: 10
          },
          ticketRequestor: { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/40" },
     },
     {
          ticket: {
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject: "Users unable to complete rent payments.",
               status: "Resolved",
               priority: "Resolved",
               CreatedOn: "5h ",
               sla: 4
          },
          ticketAssignee: { name: "John Doe", avatar: "https://i.pravatar.cc/40" },
          ticketRequestor: { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/40" },
     },
     {
          ticket: {
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject: "Users unable to complete rent payments.",
               status: "In Progress",
               priority: "Medium",
               CreatedOn: "5h ",
               sla: 4
          },
          ticketAssignee: { name: "John Doe", avatar: "https://i.pravatar.cc/40" },
          ticketRequestor: { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/40" },
     },
     {
          ticket: {
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject: "Users unable to complete rent payments.",
               status: "Waiting",
               priority: "High",
               CreatedOn: "5h ",
               sla: 4
          },
          ticketAssignee: { name: "John Doe", avatar: "https://i.pravatar.cc/40" },
          ticketRequestor: { name: "Sarah Johnson", avatar: "https://i.pravatar.cc/40" },
     },
];


export const CategoryData: categoryData[] = [
     {
          title: "Payment Issues",
          icon: Wallet,
          total: 12
     },
     {
          title: "Account Related",
          icon: User,
          total: 12
     },
     {
          title: "Technical",
          icon: Cog,
          total: 12
     },
     {
          title: "General Inquiry",
          icon: NotebookPen,
          total: 12
     },
     {
          title: "Feature Request",
          icon: Lightbulb,
          total: 12
     },
]
