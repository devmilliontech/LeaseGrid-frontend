import { User, HousePlus, Hammer, Lock, UserX, CirclePlus, UserPlus, Clock, Users,Clock8 } from "lucide-react";
import type { UserTableList,ActivityAnalytics } from "../appShell/user/UserCard";
import type { RegistrationList,VerificationList } from "../appShell/user/UserWidgets";
import type { CardProps } from "../appShell/Cards";

export const usersOverviewData: CardProps[] = [
  {
    title: "Total Users",
    value: 1585,
    icon: Users,
    badgeText: "+5.2%",
  },
  {
    title: "Lanloards",
    value: 285,
    icon: HousePlus,
    badgeText: "+8.1%",
  },
  {
    title: "Tradies",
    value: 20,
    icon: Hammer,
    badgeText: "+8.1%",
  },
  {
    title: "Tenants",
    value: 1240,
    icon: Lock,
    badgeText: "+12.5%",
  },
  {
    title: "Suspend",
    value: 40,
    icon: UserX,
    badgeText: "+8.1%",
  },
];

export const usersTableData: UserTableList[] = [
  {
    name: "John Doe",
    email: "example@example.com",
    lastSeen: "2 hours ago",
    status: "Verified",
    avatar: "https://i.pravatar.cc/40",
    type: "Landlord",
    join: "2022-01-01",
    TotalProperties: 10,
    totalJobsCompleted: 5,
    documentsStatus: "Verified",
  },
  {
    name: "Jane Smith",
    email: "example@example.com",
    lastSeen: "10 min ago",
    status: "Verified",
    avatar: "https://i.pravatar.cc/40",
    type: "Tradie",
    join: "2022-01-01",
    totalJobsCompleted: 5,
  },
  {
    name: "Bob Johnson",
    email: "example@example.com",
    lastSeen: "3 days ago",
    status: "Pending",
    avatar: "https://i.pravatar.cc/40",
    type: "Tenant",
    join: "2022-01-01",
    documentsStatus: "pending",
  },
  {
    name: "Alice Johnson",
    email: "example@example.com",
    lastSeen: "5 days ago",
    status: "Suspend",
    avatar: "https://i.pravatar.cc/40",
    type: "Landlord",
    join: "2022-01-01",
    TotalProperties: 10,
  },
  {
    name: "Emily Davis",
    email: "example@example.com",
    lastSeen: "1 hour ago",
    status: "Pending",
    type: "Landlord",
    join: "2022-01-01",
    TotalProperties: 10,
  },
];


// registion table data

export const registrationTableData: RegistrationList[] = [
  {
    avatar: "https://i.pravatar.cc/40",
    name: "John Doe",
    status: "Verified",
    role: "Landlord",
    registrationTime: "2 hours ago",
    registrationDate: "today",
  },
  {
    avatar: "https://i.pravatar.cc/40",
    name: "Jane Smith",
    status: "Verified",
    role: "Tradie",
    registrationTime: "10 min ago",
    registrationDate: "yesterday",
  },
  {
    avatar: "https://i.pravatar.cc/40",
    name: "Bob Johnson",
    status: "Pending",
    role: "Tenant",
    registrationTime: "3 days ago",
    registrationDate: "today",
  },
  {
    name: "Alice Johnson",
    status: "Verified",
    role: "Landlord",
    registrationTime: "5 days ago",
    registrationDate: "tomorrow",
  },
  {
    name: "Emily Davis",
    status: "Pending",
    role: "Landlord",
    registrationTime: "1 hour ago",
    registrationDate: "yesterday",
  },
];


// verification queue table data

export const verificationQueueTableData: VerificationList[] = [
  {
    avatar: "https://i.pravatar.cc/40",
    name: "John Doe",
    status: "Verified",
    role: "Landlord",
    submitTime: "2 hours ago",
    documentsNumber: "2",
  },
  {
    avatar: "https://i.pravatar.cc/40",
    name: "Jane Smith",
    status: "Verified",
    role: "Tradie",
    submitTime: "10 min ago",
    documentsNumber: "2",
  },
  {
    avatar: "https://i.pravatar.cc/40",
    name: "Bob Johnson",
    status: "Pending",
    role: "Tenant",
    submitTime: "3 days ago",
    documentsNumber: "4",
  },
  {
    name: "Alice Johnson",
    status: "Verified",
    role: "Landlord",
    submitTime: "5 days ago",
    documentsNumber: "4",
  },
  {
    name: "Emily Davis",
    status: "Pending",
    role: "Landlord",
    submitTime: "1 hour ago",
    documentsNumber: "5",
  },
];


// activity analytics data

export const activityAnalyticsData: CardProps[] = [
  {
    title: "Active User",
    value: 1585,
    badgeText: "+5.2%",
    subtitle:"Daily active users",
    icon:User,
  },
  {
    title: "Avg. Session",
    value: 285,
    badgeText: "+8.1%",
    subtitle:"Per user session time",
    icon:Clock8,
  },
  {
    title: "New Logins",
    value: 20,
    badgeText: "+8.1%",
    subtitle:"This week",
    icon:UserPlus,
  },
  {
    title: "Engagement",
    value: 1240,
    badgeText: "+12.5%",
    subtitle:"Overall engagement rate",
    icon:CirclePlus,
  },
];
