import { type LucideIcon, Wallet, User, Cog, NotebookPen, Lightbulb, CircleCheck, SquareSplitHorizontal, MessageSquareReply, Omega, BriefcaseBusiness, Building, CircleX, Network, MapPinCheckInside, MapPinXInside } from "lucide-react";
import { subject, subSubject, subSubSubject } from "../common/style";

export interface categoryData {
    title: string;
    icon?: LucideIcon | string;
    total?: number;
    subTitle?: string;
    percentage?: number;
    status?: string;
}
export interface CategoryCardProps {
    data: categoryData[]
}

export const CategoryCard = ({ data }: CategoryCardProps) => {

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "requests":
                return <MapPinCheckInside className="w-6 h-6 text-teal-600" />;
            case "blocked":
                return <MapPinXInside className="w-6 h-6 text-red-600" />;
        }
    }

    const getIconColor = (Icon: string | LucideIcon) => {
        switch (Icon) {
            case Wallet:
                return "bg-red-100 text-red-600";
            case User:
            case SquareSplitHorizontal:
                return "bg-blue-100 text-blue-600";
            case Cog:
            case MessageSquareReply:
            case Building:
                return "bg-purple-100 text-purple-600";
            case NotebookPen:
            case CircleCheck:
                return "bg-green-100 text-green-600";
            case Lightbulb:
                return "bg-orange-100 text-orange-600";
            case Omega:
                return "bg-red-100 text-red-600";
            case BriefcaseBusiness:
                return "bg-teal-100 text-teal-600"
            default:
                return "bg-white";
        }
    }
    const getTextColor = (Icon: string | LucideIcon) => {
        switch (Icon) {
            case CircleCheck:
                return "text-green-500";
            case SquareSplitHorizontal:
            case MapPinCheckInside:
                return "text-blue-500";
            case Cog:
                return "text-purple-500";
            case MessageSquareReply:
                return "text-purple-500";
            case Omega:
            case MapPinXInside:
                return "text-red-500";
            default:
                return "text-slate-500";
        }
    }

    const getDivColor = (Icon: string | LucideIcon) => {
        switch (Icon) {
            case Wallet:
            case MapPinXInside:
                return "bg-red-50 border-2 border-red-100";
            case User:
            case SquareSplitHorizontal:
            case MapPinCheckInside:
                return "bg-blue-50 border-2 border-blue-100";
            case Cog:
            case MessageSquareReply:
            case Building:
                return "bg-purple-50 border-2 border-purple-100";
            case NotebookPen:
            case CircleCheck:
                return "bg-green-50 border-2 border-green-100";
            case Lightbulb:
                return "bg-orange-50 border-2 border-orange-100";
            case Omega:
                return "bg-red-50 border-2 border-red-100";
            case BriefcaseBusiness:
                return "bg-teal-50 border-2 border-teal-100"
            default:
                return "bg-white";
        }
    }

    

    return (
        <div className="flex flex-col gap-2">
            {data.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index}
                        className={`flex flex-row justify-between items-center py-3 px-4 rounded-xl ${getDivColor(Icon!) }`}>
                        <div className={` w-15 h-10 items-center flex justify-center rounded-lg ${getIconColor(Icon!)}`}>
                            {item.status ? getStatusIcon(item.status) : Icon && <Icon className={`w-6 h-6 ${getIconColor(Icon!)}`} />}
                        </div>
                        <div className="w-full pl-4">
                            <p className={`${subSubject} `}>{item.title}</p>
                            {item.subTitle && <p className={`${subSubSubject} `}>{item.subTitle}</p>}
                        </div>
                        <div>
                            <p className={`${subject}`}>{item.total}</p>
                            {item.percentage && <p className={`${getTextColor(Icon!)} text-lg font-bold`} >{item.percentage}%</p>}
                            {item.status && <p className={` text-xs font-semibold text-slate-500`} >{item.status}</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}