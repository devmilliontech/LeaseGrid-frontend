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
    MessageSquareWarning,
    Tickets,
    TicketPlus,
    TicketCheck,
    MessageSquare,
    TicketX,
    MessageSquarePlus,
    MessageSquareDiff,
    MessageSquareHeart,
    Star,
    StarHalf,
    Logs,
    UserRoundCheck,
    Download,
    BadgeAlert,
    Clock7,
    UserRoundX,
    Ban
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/fromComponent/button";


export interface CardProps {
    value?: number |string;
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
            case Tickets:
                return "bg-sky-50";
            case UserPlus:
            case NotebookPen:
            case MessageSquare:
                return "bg-green-50";
            case CirclePlus:
            case TicketPlus:
            case Clock7:
                return "bg-orange-50";
            case OctagonAlert:
                return "bg-amber-50";
            case Clock8:
            case UserRoundX:
                return "bg-yellow-50";
            case Timer:
            case TicketX:
            case BadgeAlert:
                return "bg-red-50";
            case TicketCheck:
                return "bg-teal-50";
            case Ban:
                return "bg-purple-50"
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
            case Tickets:
            case MessageSquareDiff:
            case Star:
            case Logs:
                return "text-sky-600 bg-sky-100";
            case Clock:
            case Clock8:
            case UserRoundX:
                return "text-yellow-600 bg-yellow-100";
            case AlertTriangle:
            case UserX:
            case Timer:
            case CircleX:
            case TicketX:
            case MessageSquarePlus:
            case BadgeAlert:
                return "text-red-600 bg-red-100";
            case Flag:
            case TicketCheck:
                return "text-teal-600 bg-teal-100";
            case Ticket:
            case Lock:
            case UserRoundCheck:
            case Ban:
                return "text-purple-600 bg-purple-100";
            case Hammer:
            case CirclePlus:
            case MessageSquareWarning:
            case TicketPlus:
            case Clock7:
                return "text-orange-600 bg-orange-100";
            case UserPlus:
            case HousePlus:
            case NotebookPen:
            case CircleCheck:
            case Receipt:
            case MessageSquare:
            case Download:
                return "text-green-600 bg-green-100";
            case Wallet:
                return "text-cyan-600 bg-cyan-100";
            case CircleDollarSign:
            case MessageSquareHeart:
            case StarHalf:
                return "text-violet-600 bg-violet-100";
            case OctagonAlert:
                return "text-amber-600 bg-amber-100";
            default:
                return "text-black bg-white";
        }
    }

    const getDesColor = (badgeText?: string) => {
        switch (badgeText) {
            case "Urgent":
                return "text-red-600";
            case "Warning":
                return "text-amber-600";
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
                            <div className={`p-2 rounded-full ${getValueColor(item.icon)} bg-opacity-30`}>
                                {Icon && <Icon className="w-5 h-5" />}
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
                            {/* <p className="text-3xl font-bold text-slate-800">{millify(item.value || 0)}</p> */}
                            <p className="text-3xl font-bold text-slate-800">{item.value}</p> 
                            <p className="text-xs text-slate-400 font-sm">{item.subtitle}</p>
                            <p className={`text-sm font-medium ${getDesColor(item.badgeText)}`}>
                                {item.describstion}
                            </p>
                        </div>
                        <div>
                            {item.buttonText &&
                                <Button className={`w-full py-2 rounded-xl`}
                                    onClick={() => item.path && navigate(item.path)}
                                    label={item.buttonText}
                                    color="primary"

                                />
                            }
                        </div>
                    </div>
                );
            })}
        </>
    );
}