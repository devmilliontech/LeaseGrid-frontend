import {
    Clock,
    Home,
    AlertTriangle,
    Flag,
    Ticket,
    OctagonAlert,
    Lock,
    type LucideIcon,
    User,
    Users,
    UserPlus,
    HousePlus,
    Hammer,
    UserX,
    CirclePlus,
    Clock8,
    Timer,
    NotebookPen,
    Wallet,
    CircleCheck,
    CircleX,
    CircleDollarSign,
    Receipt,
    FolderOpen,
    MessageSquareWarning
} from "lucide-react";
import { useNavigate } from "react-router-dom";


export interface CardProps {
    value?: number;
    title?: string;
    subtitle?: string;
    badgeText?: string;
    icon: LucideIcon;
    path?: string;
    describstion?: string;
    buttonText?: string
}

export const StatusCard: React.FC<{ data: CardProps[] }> = ({ data }) => {

    const navigate = useNavigate(); 
    const getDivColor = (icon: LucideIcon) => {
        switch (icon) {
            case User:
                return "bg-sky-100";
            case UserPlus:
            case NotebookPen:
                return "bg-green-100";
            case CirclePlus:
                return "bg-orange-100";
            case OctagonAlert:
                return "bg-amber-100";
            case Clock8:
                return "bg-yellow-100";
            case Timer:
                return "bg-red-100";
            default:
                return "bg-white";
        }
    }

    const getValueColor = (icon: LucideIcon) => {
        switch (icon) {
            case User:
            case Users:
            case Home:
            case FolderOpen:
                return "text-sky-600 bg-sky-200";
            case Clock:
            case Clock8:
                return "text-yellow-600 bg-yellow-200";
            case AlertTriangle:
            case UserX:
            case Timer:
            case CircleX:
                return "text-red-600 bg-red-200";
            case Flag:
                return "text-teal-600 bg-teal-200";
            case Ticket:
            case Lock:
                return "text-purple-600 bg-purple-200";
            case OctagonAlert:
            case Hammer:
            case CirclePlus:
            case MessageSquareWarning:
                return "text-orange-600 bg-orange-200";
            case UserPlus:
            case HousePlus:
            case NotebookPen:
            case CircleCheck:
            case Receipt:
                return "text-green-600 bg-green-200";
            case Wallet:
                return "text-cyan-600 bg-cyan-200";
            case CircleDollarSign:
                return "text-violet-600 bg-violet-200";
            default:
                return "text-black bg-white";
        }
    }

    const getDesColor = (badgeText?: string) => {
        switch (badgeText) {
            case "Urgent":
                return "text-red-600";
            case "Warning":
                return "text-orange-600";
            case "Pending":
                return "text-yellow-600";
            case "Compliant":
                return "text-green-600";
            default:
                return "text-white bg-white";
        }

    }
    return (
        <>
            {data.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className={`p-6 rounded-2xl
                                flex flex-col gap-4  shadow-md
                                ${getDivColor(item.icon)}`
                    }
                    >
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-full ${getValueColor(item.icon)} bg-opacity-30`}>
                                {Icon && <Icon className="w-6 h-6" />}
                            </div>
                            {item.badgeText && <span className={`text-xs font-bold px-2 py-1 rounded-lg mt-1 
                                            ${getValueColor(item.icon)}
                                        `}
                            >
                                {item.badgeText}
                            </span>}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-600 mt-1">{item.title}</p>
                            <p className="text-3xl font-bold text-slate-800">{item.value}</p>
                            <p className="text-xs text-slate-400 font-sm">{item.subtitle}</p>
                            <p className={`text-xl font-medium ${getDesColor(item.badgeText)}`}>
                                {item.describstion}
                            </p>
                        </div>
                        <div>
                            {item.buttonText && <button className={`text-sm font-medium text-white 
                                        hover:text-teal-600 
                                        cursor-pointer bg-teal-400 bg-opacity-10 
                                        rounded-lg w-full py-2`}
                                    onClick={()=>item.path && navigate(item.path)}
                            >
                                {item.buttonText}
                            </button>}
                        </div>
                    </div>
                );
            })}
        </>
    );
}