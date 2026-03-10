import  { type LucideIcon, Wallet, User, Cog, NotebookPen, Lightbulb } from "lucide-react";
import { header, subject, subSubject, subSubSubject } from "../../common/style";

export interface categoryData{
    title:string;
    icon:LucideIcon | string;
    total:number;
}
export interface CategoryCardProps {
    data: categoryData[]
}

export const CategoryCard = ({ data }: CategoryCardProps) => {
    const getDivColor = (Icon: string|LucideIcon) => {
        switch (Icon) {
            case Wallet:
                return "bg-red-100 text-red-600";
            case User:
                return "bg-blue-100 text-blue-600";
            case Cog:
                return "bg-purple-100 text-purple-600";
            case NotebookPen:
                return "bg-green-100 text-green-600";
            case Lightbulb:
                return "bg-orange-100 text-orange-600";
            default:
                return "bg-white";
        }
    }

     return (
          <div className="flex flex-col gap-2">
               {data.map((item, index) => {
                const Icon = item.icon;
                    return (
                         <div key={index} className="flex flex-row justify-between items-center py-3 bg-slate-50 px-4 rounded-xl">
                            <div className={` w-10 h-10 items-center flex justify-center rounded-lg ${getDivColor(Icon)}`}>
                                <Icon className={`w-6 h-6 ${getDivColor(Icon)}`} />
                            </div>
                            <div><p className={`${subSubSubject} `}>{item.title}</p></div>
                            <div><p className={`${subject}`}>{item.total}</p></div>
                         </div>
                    )
               })}
          </div>
     )
}