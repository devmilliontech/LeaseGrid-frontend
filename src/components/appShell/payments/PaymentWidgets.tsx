import { UserIcon } from "lucide-react";

export interface PaymentWidgetsDataProps {
    transactionId: string;
    avatar?: string;
    name: string;
    type: string;
    amount: number;
    status: string;
    date: string;
    path: string;
}

interface PaymentWidgetsProps {
     data: PaymentWidgetsDataProps[];
}

export const PaymentWidgets: React.FC<PaymentWidgetsProps> = ({ data }) => {

     const getSttatusColor=(status:string)=>{
          switch (status) {
               case "Pending":
                    return "text-yellow-600 bg-yellow-100";
               case "Success":
                    return "text-green-600 bg-green-100";
               case "Failed":
                    return "text-red-600 bg-red-100";
               default:
                    return "text-white";
          }
     }
     const getBorderColor=(status:string)=>{
          switch (status) {
               case "Pending":
                    return "border-yellow-600";
               case "Success":
                    return "border-green-600";
               case "Failed":
                    return "border-red-600";
               default:
                    return "border-white";
          }
     }
    return (
        <>
        <div className="flex flex-row items-center justify-between shadow-md p-5 mt-5 rounded-2xl w-full">
                              <p className="text-lg font-semibold text-slate-600 w-full ">Transaction ID</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">User</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">Type</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">Amount</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">Status</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">Date</p>
                              <p className="text-lg font-semibold text-slate-600 w-full text-center">Action</p>
                         </div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="p-6 rounded-2xl flex flex-row  justify-between border border-slate-100">
                         <div className="flex flex-row gap-2 items-center w-full text-center">
                              <p className="text-sm font-semibold text-teal-400">#{item.transactionId}</p>
                         </div>
                         <div className="flex flex-row gap-2 items-center w-full text-center">
                              {item.avatar ? <img src={item.avatar} alt=""
                                             className={`border-1 w-10 h-10 rounded-full ${getBorderColor(item.status)}`} />
                                             : <UserIcon
                                             className={`p-2 w-10 h-10 rounded-full bg-gray-200 border-1 ${getBorderColor(item.status)}`} />
                              }
                              <p className="text-sm font-semibold">{item.name}</p>    
                         </div>
                         <div className="flex flex-row items-center w-full">
                              <p className="text-sm font-semibold w-full text-center">{item.type}</p>
                         </div>
                         <div className="flex flex-row items-center w-full text-center">
                              <p className="text-sm font-semibold w-full text-center">{item.amount}</p>
                         </div>
                         <div className={`flex flex-row items-center w-full justify-center`}>
                              <span className={`text-sm font-semibold px-3 py-1 rounded-full
                                   ${getSttatusColor(item.status)}`}
                              >
                                   {item.status}
                              </span>
                         </div>
                         <div className="flex flex-row items-center w-full text-center">
                              <p className="text-xs text-gray-500 w-full text-center">{item.date}</p>
                         </div>
                         <div className="flex flex-row items-center w-full text-center">
                              <p className="text-md text-teal-500 font-semibold w-full text-center cursor-pointer
                                   hover:text-teal-800"
                              >
                                   View
                              </p>
                         </div>    
                    </div>
                );
            })}
        </>
    );
}