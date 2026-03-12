import type { CardProps } from "../appShell/Cards";
import {
  CircleCheck,
  CircleDollarSign,
  CircleX,
  Clock,
  Wallet,
} from "lucide-react";
import type {
  failedPayoutsDataProps,
  PaymentWidgetsDataProps,
  TransactionDataProps,
  RefundDataProps,
  PaymentAdjustmentsDataProps
} from "../appShell/payments/PaymentWidgets";

export const paymentData: CardProps[] = [
  {
    title: "Total Volume",
    value: 120,
    icon: Wallet,
    badgeText: "+5.2%",
    subtitle: "This month",
  },
  {
    title: "Success",
    value: 120,
    icon: CircleCheck,
    badgeText: "+5.2%",
    subtitle: "Transactions processed",
  },
  {
    title: "Failed",
    value: 120,
    icon: CircleX,
    badgeText: "+5.2%",
    subtitle: "Transactions processed",
  },
  {
    title: "Platform Fees",
    value: 120,
    icon: CircleDollarSign,
    badgeText: "+5.2%",
    subtitle: "Transactions processed",
  },
  {
    title: "Pending",
    value: 120,
    icon: Clock,
    badgeText: "+5.2%",
    subtitle: "Transactions processed",
  },
];

let getDate = [];

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });

const today = new Date();
const startDate = new Date();
startDate.setDate(today.getDate() - 30);

for (let i = 0; i < 30; i++) {
  getDate.push(formatDate(startDate));
  startDate.setDate(startDate.getDate() + 1);
}

export const paymentTrendData = [
  { name: `${getDate[0]}`, value: 100 },
  { name: `${getDate[1]}`, value: 50 },
  { name: `${getDate[2]}`, value: 50 },
  { name: `${getDate[3]}`, value: 350 },
  { name: `${getDate[4]}`, value: 150 },
  { name: `${getDate[5]}`, value: 350 },
  { name: `${getDate[6]}`, value: 250 },
  { name: `${getDate[7]}`, value: 350 },
  { name: `${getDate[8]}`, value: 350 },
  { name: `${getDate[9]}`, value: 12 },
  { name: `${getDate[10]}`, value: 70 },
  { name: `${getDate[11]}`, value: 110 },
  { name: `${getDate[12]}`, value: 30 },
  { name: `${getDate[14]}`, value: 280 },
  { name: `${getDate[15]}`, value: 280 },
  { name: `${getDate[16]}`, value: 350 },
  { name: `${getDate[17]}`, value: 150 },
  { name: `${getDate[18]}`, value: 280 },
  { name: `${getDate[19]}`, value: 200 },
  { name: `${getDate[20]}`, value: 280 },
  { name: `${getDate[21]}`, value: 50 },
  { name: `${getDate[22]}`, value: 280 },
  { name: `${getDate[23]}`, value: 280 },
  { name: `${getDate[24]}`, value: 60 },
  { name: `${getDate[25]}`, value: 280 },
  { name: `${getDate[26]}`, value: 50 },
  { name: `${getDate[27]}`, value: 280 },
  { name: `${getDate[28]}`, value: 280 },
  { name: `${getDate[29]}`, value: 100 },
];

export const paymentWidgetsData: PaymentWidgetsDataProps[] = [
  {
    transactionId: "123456789",
    name: "John Doe",
    type: "Payment",
    amount: 10000,
    status: "Success",
    date: "2022-01-01",
    path: "/images/payment.png",
    avatar: "https://i.pravatar.cc/40",
  },
  {
    transactionId: "123456789",
    name: "John Doe",
    type: "Payment",
    amount: 100,
    status: "Pending",
    date: "2022-01-01",
    path: "/images/payment.png",
  },
];

export const failedPayoutsData: failedPayoutsDataProps[] = [
  {
    transactionId: "123456789",
    user: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    failReason: "Invalid Bank Accoun",
    amount: 100,
    attempts: 3,
    date: "2022-01-01",
  },
  {
    transactionId: "123456789",
    user: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Plumbing",
      },
    },
    failReason: "Invalid Bank Accoun",
    amount: 100,
    attempts: 3,
    date: "2022-01-01",
  },
  {
    transactionId: "123456789",
    user: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Painter",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    failReason: "Invalid Bank Accoun",
    amount: 100,
    attempts: 3,
    date: "2022-01-01",
  },
  {
    transactionId: "123456789",
    user: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "HVC",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    failReason: "Invalid Bank Accoun",
    amount: 100,
    attempts: 3,
    date: "2022-01-01",
  },
];

export const TransactionData: TransactionDataProps[] = [
  {
    transactionId: "123456789",
    type: "Rent Payment",
    amount: 10000,
    status: "Success",
    date: "2022-01-01",
    platFormFee: 100,
    fromUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    toUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
  },
  {
    transactionId: "123456789",
    type: "Job Payment",
    amount: 10000,
    status: "Success",
    date: "2022-01-01",
    platFormFee: 100,
    fromUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    toUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
  },
  {
    transactionId: "123456789",
    type: "Refund",
    amount: 10000,
    status: "Failed",
    date: "2022-01-01",
    platFormFee: 200,
    fromUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    toUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
  },
  {
    transactionId: "123456789",
    type: "Refund",
    amount: 10000,
    status: "Pending",
    date: "2022-01-01",
    platFormFee: -10,
    fromUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
    toUser: {
      name: "John Doe",
      role: {
        name: "Tradie",
        type: "Electrician",
      },
      avatar: "https://i.pravatar.cc/40",
    },
  },
];




export const RefundData:RefundDataProps[] = [
    {
      transactionId:406515,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      amount:{
        refundAmount:100,
        proccessingTime:"3-5",
      },
      reason:"Invalid Bank Accoun",
      time:"2026-03-09",
      status:"proccessing",
    },
    {
      transactionId:406515,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      amount:{
        refundAmount:100,
        completionTime:"2026-03-10",
      },
      reason:"Invalid Bank Accoun",
      time:"2026-03-10",
      status:"completed",
    },
    {
      transactionId:406515,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      amount:{
        refundAmount:100,
        originalAmount:100,
      },
      reason:"Invalid Bank Accoun",
      time:"2026-03-12",
      status:"pending review",
    }
]


export const PaymentAdjustmentData:PaymentAdjustmentsDataProps[] = [
    {
      transactionId:406515,
      orginalId:10398,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      type:"Debit",
      amount:200,
      reason:"Invalid Bank Accoun",
      date:"2026-03-09",
      admin:"John Doe",
    },
    {
      transactionId:406515,
      orginalId:10398,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      type:"Credit",
      amount:100,
      reason:"Invalid Bank Accoun",
      date:"2026-03-09",
      admin:"John Doe",
    },
    {
      transactionId:406515,
      orginalId:10398,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      type:"Credit",
      amount:100,
      reason:"Invalid Bank Accoun",
      date:"2026-03-09",
      admin:"John Doe",
    },
    {
      transactionId:406515,
      orginalId:10398,
      user:{
        avatar:"https://i.pravatar.cc/40",
        name:"John Doe",
        role:{
          name:"Tradie",
          type:"Electrician",
        },
      },
      type:"Debit",
      amount:100,
      reason:"Invalid Bank Accoun",
      date:"2026-03-09",
      admin:"John Doe",
    },
]