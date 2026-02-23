import React from "react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StatCardProps {
     title: string;
     value: string;
     subtext: string;
     icon: LucideIcon;
     badgeText: string;
     path?: string;
}
interface QuickActionCardProps {
     title: string;
     description: string;
     buttonText: string;
     buttonVariant?: "primary" | "outline";
     icon: LucideIcon;
     iconColor: string;
     bgColor: string;
     path?: string;
}


//------DashBoard First Row Card------
export const StatCard: React.FC<StatCardProps> = ({
     title,
     value,
     subtext,
     icon: Icon,
     badgeText,
     path,
}) => {
     const navigate = useNavigate();
     const getColor=(title:string)=>{
          switch(title){
               case "Active Listings":
                    return "text-emerald-600 bg-emerald-50 border-emerald-200"
               case "Pending Jobs":
                    return "text-blue-600 bg-blue-50 border-blue-200"
               case "Overdue Rent":
                    return "text-rose-600 bg-rose-50 border-rose-200"
               case "Flagged Accounts":
                    return "text-orange-600 bg-orange-50 border-orange-200";
               case"Support Tickets":
                    return"text-purple-600 bg-purple-50 border-purple-200" 
          }
     }
     return (
          <div
               className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex 
                    flex-col justify-between h-44 relative overflow-hidden group 
                    hover:shadow-md transition-shadow cursor-pointer"
               onClick={() => path && navigate(path)}
          >
               <div className="flex justify-between items-start mb-2">
                    <div
                         className={`w-10 h-10 rounded-full flex items-center justify-center ${getColor(title)}`}
                    >
                         <Icon className={`w-5 h-5 ${getColor(title)}`} />
                    </div>
                    <span
                         className={`text-xs font-bold px-2 py-1 rounded-full ${getColor(title)}`}
                    >
                         {badgeText}
                    </span>
               </div>

               <div>
                    <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-slate-800 tracking-tight">
                         {value}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2">{subtext}</p>
               </div>

               {/* Decorative background circle */}
               <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-10 ${getColor(title)}`}></div>
          </div>
     );
};



//------Quick Action Card------
export const QuickActionCard: React.FC<QuickActionCardProps> = ({
     title,
     description,
     buttonText,
     buttonVariant = "primary",
     icon: Icon,
     iconColor,
     bgColor,
     path,
}) => {
     const navigate = useNavigate();
     return (
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm 
                flex flex-col items-start justify-between h-full transition-all hover:shadow-md"
          >
               <div className={`p-3 rounded-full ${bgColor} mb-4`}>
                    <Icon className={`w-6 h-6 ${iconColor}`} />
               </div>

               <div className="mb-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{title}</h3>
                    <p className="text-sm text-slate-500">{description}</p>
               </div>

               <button
                    className={`w-full py-2.5 px-4 rounded-xl font-medium transition-colors 
                         cursor-pointer ${buttonVariant === "primary"
                              ? "bg-teal-400 text-white hover:bg-teal-500 shadow-sm shadow-teal-200"
                              : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                         }`}
                    onClick={() => path && navigate(path)}
               >
                    {buttonText}
               </button>
          </div>
     );
};

export default QuickActionCard;

interface ComplianceOverviewCardProps {
     value: number;
     title: string;
     description: string;
     icon: LucideIcon;
}

//------Compliance Overview Card------
export const ComplianceOverviewCard: React.FC<ComplianceOverviewCardProps> = ({
     value,
     title,
     description,
     icon: Icon,
}) => {
     const getColor=(title:string)=>{
          switch(title){
               case "Urgent":
                    return "text-rose-500 bg-rose-50 border-rose-200"
               case "Warning":
                    return "text-orange-500 bg-orange-50 border-orange-200"
               case "Pending":
                    return "text-yellow-500 bg-yellow-50 border-yellow-200"
               case "Compliant":
                    return "text-green-500 bg-green-50 border-green-200"  
          }
     }     
     const getBadgeBgColor=(title:string)=>{
          switch(title){
               case "Urgent":
                    return " bg-rose-200 "
               case "Warning":
                    return " bg-orange-200 "
               case "Pending":
                    return " bg-yellow-200 "
               case "Compliant":
                    return " bg-green-200 "  
          }
     }   
     return (
          <div className={`p-6 rounded-2xl border-2 ${getColor(title)}
                flex flex-col items-start justify-between h-44 transition-all hover:shadow-md
                m-2 `}
          >
               <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-full ${getColor(title)} mb-4`}>
                         <Icon className={`w-6 h-6`} />
                    </div>
                    <div className={`text-xs font-semibold p-2  ml-7 mt-0 rounded-full ${getBadgeBgColor(title)}`}>
                         {title}
                    </div>
               </div>

               <div className="mb-6">
                    <h3 className={`text-4xl font-bold  mb-2 `}>{value}</h3>
                    <p className={`text-lg font-semibold`}>{description}</p>
               </div>
          </div>
     );
};


