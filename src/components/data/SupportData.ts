import { MessageSquare, Clock8, TicketCheck, TicketPlus, Tickets, TicketX } from "lucide-react";
import type {CardProps} from "../appShell/Cards";
import type { TicketProps } from "../appShell/support/ListView";

export const SupportData:CardProps[] = [
     {  
          value: 456,
          icon: Tickets,
          badgeText: "Total ",
          subtitle:"All tickets"
     },
     {
          value: 100,
          icon: TicketPlus,
          badgeText: "New",
          subtitle:"Unassigned"
     },
     {
          value: 20,
          icon: TicketCheck,
          badgeText: "Active",
          subtitle:"In progress"
     },
     {
          value: 66,
          icon: Clock8,
          badgeText: "Waiting",
          subtitle:"On user"
     },
     {
          value: 89,
          icon: MessageSquare,
          badgeText: "Resolved",
          subtitle:"This week"
     },
     {
          value: 89,
          icon: TicketX,
          badgeText: "Cancelled",
          subtitle:"This week"
     }
];



export const TicketData:TicketProps[] = [
     {
          ticket:{
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject:"Users unable to complete rent payments.",
               status: "New",
               priority: "Critical",
               CreatedOn:"5h ",
               sla: 16
          },
          ticketAssignee:{name:"John Doe",avatar:"https://i.pravatar.cc/40"},
          ticketRequestor:{name:"Sarah Johnson",avatar:"https://i.pravatar.cc/40"},
     },
     {
          ticket:{
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject:"Users unable to complete rent payments.",
               status: "New",
               priority: "Critical",
               CreatedOn:"5h ",
               sla: 10
          },
          ticketAssignee:{name:"John Doe",avatar:"https://i.pravatar.cc/40"},
          ticketRequestor:{name:"Sarah Johnson",avatar:"https://i.pravatar.cc/40"},
     },
     {
          ticket:{
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject:"Users unable to complete rent payments.",
               status: "Resolved",
               priority: "Critical",
               CreatedOn:"5h ",
               sla: 4
          },
          ticketAssignee:{name:"John Doe",avatar:"https://i.pravatar.cc/40"},
          ticketRequestor:{name:"Sarah Johnson",avatar:"https://i.pravatar.cc/40"},
     },
     {
          ticket:{
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject:"Users unable to complete rent payments.",
               status: "In Progress",
               priority: "Critical",
               CreatedOn:"5h ",
               sla: 4
          },
          ticketAssignee:{name:"John Doe",avatar:"https://i.pravatar.cc/40"},
          ticketRequestor:{name:"Sarah Johnson",avatar:"https://i.pravatar.cc/40"},
     },
     {
          ticket:{
               id: 8945,
               subject: "Payment gateway integration error",
               subSubject:"Users unable to complete rent payments.",
               status: "Waiting",
               priority: "Critical",
               CreatedOn:"5h ",
               sla: 4
          },
          ticketAssignee:{name:"John Doe",avatar:"https://i.pravatar.cc/40"},
          ticketRequestor:{name:"Sarah Johnson",avatar:"https://i.pravatar.cc/40"},
     },
];
