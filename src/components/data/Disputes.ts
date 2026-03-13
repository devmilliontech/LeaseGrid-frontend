import type { CardProps } from "../appShell/Cards";
import type { QueueViewDataProps } from "../appShell/disputes/QueueView";
import { Home, Clock, AlertTriangle, Flag, Ticket, MessageSquarePlus, CircleCheck, MessageSquareHeart, MessageSquareDiff } from "lucide-react";

export const disputeData: CardProps[] = [
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





export const disputeQueueData: QueueViewDataProps[] = [
  {
    status: "High Risk",
    disputeId: 4725,
    issue: "Plumbing Issue Dispute",
    complainant: {
      name: "Mike Davis",
      avatar: "https://i.pravatar.cc/40",
      role: { name: "Landlord", type: "Property Owner" },
      mail: "johndoe@example.com",
      phone: 1234567890,
      joinDate: "2022-01-01",
      rating: 4.5,
      reviews: 10,
      jobCompleted: 5,
      message: [
        {
          subject: "I hired Robert to fix a major plumbing leak in my property. While he did respond quickly, the work was not completed to the standard we agreed upon. There's still a minor leak, and he's demanding full payment before fixing it. I've already paid 50% upfront as agreed.",
          issue: ["Plumbing", "Payment"],
          time: "10:30:00",
          date: "2022-01-01",
        },
        {
          subject: "I have photos showing the leak is in the exact same area you worked on. This is clearly related to the original job. I'm attaching before and after photos, plus a video of the current leak.",
          file: ["file2.jpg","file.mp4"],
          time: "11:00:00",
          date: "2022-01-01",
        },
        {
          subject: "I have photos showing the leak is in the exact same area you worked on. This is clearly related to the original job. I'm attaching before and after photos, plus a video of the current leak.",
          file: ["file2.jpg", "file2.pdf"],

          time: "12:00:00",
          date: "2022-01-01",
        },
      ],
    },
    respondent: {
      name: "Robert Anderson",
      avatar: "https://i.pravatar.cc/40",
      role: { name: "Tradie", type: "Plumber" },
      mail: "janedoe@example.com",
      phone: 9876543210,
      joinDate: "2022-01-01",
      rating: 4.8,
      reviews: 20,
      jobCompleted: 10,
      message: [
        {
          subject: "I completed the main work as per the contract. The 'minor leak' Mike mentions is actually a separate issue that wasn't part of the original scope. I'm willing to fix it, but it requires additional materials and labor. The contract clearly states payment upon completion of the agreed work, which I have done.",
          time: "10:30:01",
          date: "2022-01-01",
        },
        {
          subject: "I've reviewed the photos. The leak appears to be from a different pipe connection. However, I'm willing to come back and inspect it properly if Mike releases the remaining payment. I stand by my work and have documentation of everything I did.",
          file: ["https://example.com/file4.jpg"],
          time: "11:30:00",
          date: "2022-01-01",
        },
        {
          subject: "I've reviewed the photos. The leak appears to be from a different pipe connection. However, I'm willing to come back and inspect it properly if Mike releases the remaining payment. I stand by my work and have documentation of everything I did.",
          file: ["https://example.com/file4.jpg", "https://example.com/file4.jpg"],
          time: "12:30:00",
          date: "2022-01-01",
        },
      ],
    },
    date: "2026-03-11",
    time: "10:30:00",
  },
  {
    status: "Medium Risk",
    disputeId: 4725,
    issue: "Plumbing Issue Dispute",
    complainant: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/40",
      role: { name: "Landlord", type: "Home Owner" },
      mail: "johndoe@example.com",
      phone: 1234567890,
      joinDate: "2022-01-01",
      rating: 4.5,
      reviews: 10,
      jobCompleted: 5,
      message: [
        {
          subject: "I hired Robert to fix a major plumbing leak in my property. While he did respond quickly, the work was not completed to the standard we agreed upon. There's still a minor leak, and he's demanding full payment before fixing it. I've already paid 50% upfront as agreed",
          issue: ["Electrical", "payment"],
          time: "10:30:00",
          date: "2022-01-01",
        },
        {
          subject: "I have photos showing the leak is in the exact same area you worked on. This is clearly related to the original job. I'm attaching before and after photos, plus a video of the current leak.",
          file: ["https://example.com/file2.jpg","issue.pdf"],
          time: "11:00:00",
          date: "2022-01-01",
        },
      ],
    },
    respondent: {
      name: "Jane Doe",
      avatar: "",
      role: { name: "Landlord", type: "Landlord" },
      mail: "janedoe@example.com",
      phone: 9876543210,
      joinDate: "2022-01-01",
      rating: 4.8,
      reviews: 20,
      jobCompleted: 10,
      message: [
        {
          subject: "I completed the main work as per the contract. The 'minor leak' Mike mentions is actually a separate issue that wasn't part of the original scope. I'm willing to fix it, but it requires additional materials and labor. The contract clearly states payment upon completion of the agreed work, which I have done.",
          time: "12:00:00",
          date: "2022-01-01",
        },
        {
          subject: "I've reviewed the photos. The leak appears to be from a different pipe connection. However, I'm willing to come back and inspect it properly if Mike releases the remaining payment. I stand by my work and have documentation of everything I did.",
          file: ["https://example.com/file4.jpg"],
          time: "12:30:00",
          date: "2022-01-01",
        },
      ],
    },
    date: "2026-03-11",
    time: "10:30:00",
  },
]
