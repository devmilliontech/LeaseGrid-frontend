import type { WidgetsCardProps } from "../appShell/WidgetsCard";
import { AlertTriangle,Calendar,Clock, } from "lucide-react";

export const JobData:WidgetsCardProps[] =[
    {
        title:"Urgent Jobs",
        value:1.2,
        description:"15% faster than last month",
        icon:AlertTriangle,
    },
    {
        title:"Standard Jobs",
        value:4.5,
        description:"8% faster than last month",
        icon:Clock,
    },
    {
        title:"Scheduled Jobs",
        value:24,
        description:"Within target SLA",
        icon:Calendar,
    },
]