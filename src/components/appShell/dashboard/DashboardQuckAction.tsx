import React from "react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


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

