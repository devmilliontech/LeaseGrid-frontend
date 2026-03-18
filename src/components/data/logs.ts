import { AlertTriangle, Download, Logs, Rows3, User, UserRoundCheck } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { LogTableCardDataProps } from "../appShell/logs/LogTbaleCard";


export const LogsStatusData:CardProps[]=[
    {
        icon:Logs,
        value:"2,847",
        subtitle:"Total Log Entries",
        badgeText:"24h",
    },
    {
        icon:AlertTriangle,
        value:"12",
        subtitle:"Critical Actions",
        badgeText:"Alert",
    },
    {
        icon:UserRoundCheck,
        value:"8",
        subtitle:"Admin Users",
        badgeText:"Active",
    },
    {
        icon:Download,
        value:"156",
        subtitle:"Export Requests",
        badgeText:"Ready",
    },
]


export const LogTableCardData:LogTableCardDataProps[]=[
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"User created",
        action:"Create",
        status:"Success",
    },
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"User created",
        action:"Create",
        status:"Success",
    },
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"Dispute resolved in favor of tenant fvcSC      anu8gaijbx cjia v7guya 87cuigu 78xcy v      fvsV fcc            cvsac ",
        action:"Create",
        status:"Success",
    },
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"User created",
        action:"Create",
        status:"Failed",
    },
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"5 failed login attempts detected",
        action:"Create",
        status:"Success",
    },
    {
        time:"2023-10-27 10:30:00",
        admin:{
            avatar:"https://i.pravatar.cc/40",
            id:"1",
            name:"John Doe",
            role:"Admin",
            email:"[EMAIL_ADDRESS]",
            ipAddress:"[IP_ADDRESS]",
        },
        details:"User created",
        action:"Create",
        status:"Success",
    },
]