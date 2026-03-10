import type{CardProps} from "../appShell/Cards";
import { Home, Clock, AlertTriangle, Flag, Ticket, MessageSquarePlus, CircleCheck, MessageSquareHeart, MessageSquareDiff } from "lucide-react";

export const disputeData:CardProps[] = [
      {
          title: "Open Disputes",
          value: 24,
          subtitle: "3 high risk cases",
          icon: MessageSquarePlus,
          badgeText: "critical",
     },
     {
          title: "Under Review",
          value: 18,
          subtitle: "Awaiting admin decision",
          icon: Clock,
          badgeText: "pending",
     },
     {
          title: "Resolved",
          value: 342,
          subtitle: "This month",
          icon: CircleCheck,
          badgeText: "+15%",
     },
     {
          title: "Avg Resolution Time",
          value: 3.2,
          subtitle: "Days",
          icon: MessageSquareDiff,
          badgeText: "2.4 days",
     },
     {
          title: "Success Rate",
          value: "87%",
          subtitle: "Positive outcomes",
          icon: MessageSquareHeart,
          badgeText: "+8.8%",
     },
]