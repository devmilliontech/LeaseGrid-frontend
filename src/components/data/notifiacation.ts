export interface Notification {
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
    url: string;
}


export const notificationData: Notification[] = [
    {
        id: 1,
        title: "New Job Request",
        description: "You have a new job request from a client.",
        time: "6 hours ago",
        read: false,
        url: "jobs"
    },
    {
        id: 2,
        title: "New User Added",
        description: "You have a new application user added.",
        time: "2 hours ago",
        read: false,
        url: "users"
    },
    {
        id: 3,
        title: "Resolved Disputes",
        description: "Disputes between Tenant and Landlord resolved .",
        time: "10 hours ago",
        read: false,
        url: "disputes"
    },
    {
        id: 4,
        title: "Payment Failed",
        description: "User Jhon doe try to make payment but failed.",
        time: "5 hours ago",
        read: true,
        url: "payments"
    }
];