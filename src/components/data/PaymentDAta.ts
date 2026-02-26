import type {CardProps} from "../appShell/Cards";
import { CircleCheck, CircleDollarSign, CircleX, Clock, Wallet } from "lucide-react";
import type{ PaymentWidgetsDataProps } from "../appShell/payments/PaymentWidgets";


export const paymentData:CardProps[]=[
     {
          title:"Total Volume",
          value:120,
          icon:Wallet,
          badgeText:"+5.2%",
          subtitle:"This month",
     },
     {
          title:"Success",
          value:120,
          icon:CircleCheck,
          badgeText:"+5.2%",
          subtitle:"Transactions processed",
     },
     {
          title:"Failed",
          value:120,
          icon:CircleX,
          badgeText:"+5.2%",
          subtitle:"Transactions processed",
     },
     {
          title:"Platform Fees",
          value:120,
          icon:CircleDollarSign,
          badgeText:"+5.2%",
          subtitle:"Transactions processed",
     },
     {
          title:"Pending",
          value:120,
          icon:Clock,
          badgeText:"+5.2%",
          subtitle:"Transactions processed",
     },


]





let getDate=[]

const formatDate = (date:Date) =>
  date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "2-digit",
  });

const today = new Date();
const startDate = new Date();
startDate.setDate(today.getDate() - 30);


for(let i=0;i<30;i++){
     getDate.push(formatDate(startDate));
     startDate.setDate(startDate.getDate() + 1);
}



export const paymentTrendData = [
     { name: `${getDate[0]}`, value: 100},
     { name:`${getDate[1]}`, value:50 },
     { name: `${getDate[2]}`, value: 50}, 
     { name: `${getDate[3]}`, value: 350},
     { name: `${getDate[4]}`, value: 150},
     { name: `${getDate[5]}`, value: 350},
     { name: `${getDate[6]}`, value: 250},
     { name: `${getDate[7]}`, value: 350},
     { name: `${getDate[8]}`, value: 350},
     { name: `${getDate[9]}`, value: 12},
     { name: `${getDate[10]}`, value: 70},
     { name: `${getDate[11]}`, value: 110},
     { name: `${getDate[12]}`, value: 30},
     { name: `${getDate[14]}`, value: 280},
     { name: `${getDate[15]}`, value: 280},
     { name: `${getDate[16]}`, value: 350},
     { name: `${getDate[17]}`, value: 150},
     { name: `${getDate[18]}`, value: 280},
     { name: `${getDate[19]}`, value: 200},
     { name: `${getDate[20]}`, value: 280},
     { name: `${getDate[21]}`, value: 50},
     { name: `${getDate[22]}`, value: 280},
     { name: `${getDate[23]}`, value: 280},
     { name: `${getDate[24]}`, value: 60},
     { name: `${getDate[25]}`, value: 280},
     { name: `${getDate[26]}`, value: 50},
     { name: `${getDate[27]}`, value: 280},
     { name: `${getDate[28]}`, value: 280},
     { name: `${getDate[29]}`, value: 100},  

  ];




export const paymentWidgetsData:PaymentWidgetsDataProps[]=[
     {
          transactionId:"123456789",
          name:"John Doe",
          type:"Payment",
          amount:10000,
          status:"Success",
          date:"2022-01-01",
          path:"/images/payment.png",
          avatar:"https://i.pravatar.cc/40",
     },
     {
          transactionId:"123456789",
          name:"John Doe",
          type:"Payment",
          amount:100,
          status:"Pending",
          date:"2022-01-01",
          path:"/images/payment.png",
     },
]