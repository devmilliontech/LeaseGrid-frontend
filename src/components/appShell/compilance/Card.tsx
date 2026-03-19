import { CircleAlert, CircleCheck, Clock4, Clock7, FileInput, Send, UserX, type LucideIcon } from "lucide-react";
import { subject, subSubSubject } from "../../common/style";
import { Button } from "../../common/fromComponent/button";

export interface cardsDataProps {
    title: string;
    subTitle?: string;
    icon: LucideIcon | string;
    action: string;
    timeStamp: string;
}

interface CardProps {
    data: cardsDataProps[]
}

export const Card = ({ data }: CardProps) => {
    const getIconColor = (icon: LucideIcon | string) => {
        switch (icon) {
            case UserX:
                return "bg-red-100 text-red-500";
            case CircleCheck:
                return "bg-green-100 text-green-500";
            case Send:
                return "bg-yellow-100 text-yellow-500";
            case FileInput:
                return "bg-blue-100 text-blue-500";
            case Clock7:
                return "bg-purple-100 text-purple-500";
            default:
                return "bg-white-100 text-white-500";
        }
    }
    const getDivColor = (icon: LucideIcon | string) => {
        switch (icon) {
            case UserX:
                return "bg-red-50 border-2 border-red-200";
            case CircleCheck:
                return "bg-green-50 border-2 border-green-200";
            case Send:
                return "bg-yellow-50 border-2 border-yellow-200";
            case FileInput:
                return "bg-blue-50 border-2 border-blue-200";
            case Clock7:
                return "bg-purple-50 border-2 border-purple-200";
            default:
                return "bg-white-50 border-2 border-white-200";
        }
    }
    return (
        <div className="flex flex-col gap-3">
            {data.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index}
                        className={`flex flex-row justify-between items-center py-3 px-4 rounded-xl ${getDivColor(Icon)}`}>
                        <div className={` w-12 h-10 items-center flex justify-center rounded-lg ${getIconColor(Icon)}`}>
                            <Icon className={`w-5 h-5 ${getIconColor(Icon)}`} />
                        </div>
                        <div className="w-full pl-4 flex flex-col gap-1">
                            <p className={`${subject} `}>{item.title}</p>
                            {item.subTitle && <p className={`${subSubSubject} `}>{item.subTitle}</p>}
                            <div className="flex flex-row items-center gap-2">
                                <p className={`${subSubSubject} `}>{item.timeStamp}</p>
                                <p className={`${subSubSubject} `}>{item.action}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}



export interface AutoCardsDataProps {
    status?: string;
    title: string;
    subTitle: string;
    icon: LucideIcon | string;
}

interface AutoCardsProps {
    data: AutoCardsDataProps[];
}

export const AutoCards = ({ data }: AutoCardsProps) => {

    const getIconColor = (icon: LucideIcon | string) => {
        switch (icon) {
            case Clock4:
                return "bg-orange-100 text-orange-500";
            case CircleCheck:
                return "bg-green-100 text-green-500";
            case CircleAlert:
                return "bg-red-100 text-red-500";
            case FileInput:
                return "bg-blue-100 text-blue-500";
            case Clock7:
                return "bg-purple-100 text-purple-500";
            default:
                return "bg-white-100 text-white-500";
        }
    }
    const getDivColor = (icon: LucideIcon | string) => {
        switch (icon) {
            case CircleAlert:
                return "bg-red-50 border-1 border-red-200";
            case CircleCheck:
                return "bg-green-50 border-1 border-green-200";
            case Clock4:
                return "bg-orange-50 border-1 border-orange-200";
            case Clock7:
                return "bg-purple-50 border-1 border-purple-200";
            default:
                return "bg-white-50 border-1 border-white-200";
        }
    }

    const getTextColor = (status?: string) => {
        switch (status) {
            case "Critical":
                return "text-red-500";
            case "Success":
                return "text-green-500";
            case "Warning":
                return "text-orange-500";
            default :
                return "text-purple-500";
        }
    }
    return (
        <div className="flex flex-col gap-3">
            {data.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index}
                        className={`flex flex-row justify-between items-center py-3 px-4 rounded-xl h-27 ${getDivColor(Icon)}`}>
                        <div className={` w-12 h-10 items-center flex justify-center rounded-lg ${getIconColor(Icon)}`}>
                            <Icon className={`w-5 h-5 ${getIconColor(Icon)}`} />
                        </div>
                        <div className="flex flex-col gap-1 w-full pl-4">
                            <div className="w-full flex flex-row gap-1">
                                <p className={`text-sm font-medium ${getTextColor(item.status)} `}>{item.status}</p>
                                <p className={`text-sm font-medium ${getTextColor(item.status)}`}>{item.title}</p>
                            </div>
                            <div>
                                <p className={`text-xs font-medium ${getTextColor(item.status)}`}>{item.subTitle}</p>
                            </div>
                            <div className="pt-2">
                                {item.status === "Critical" ?
                                    <div className="flex flex-row gap-2 items-center">
                                        <Button
                                            variant="contained"
                                            onClick={() => { }}
                                            color="danger"
                                            label="Review All"
                                            className="px-3 py-0 rounded-lg"
                                        />
                                        <Button
                                            variant="outlined"
                                            onClick={() => { }}
                                            color="danger"
                                            label="Sent Bulk Reminders"
                                            className="px-3 py-0 rounded-lg "
                                        />
                                    </div>
                                    :
                                    item.status === "Warning" ?
                                    <div className="flex flex-row gap-2 items-center">
                                        <Button
                                            variant="contained"
                                            onClick={() => { }}
                                            color="info"
                                            label="View Queue"
                                            className="px-3 py-0 rounded-lg"
                                        />
                                        <Button
                                            variant="outlined"
                                            onClick={() => { }}
                                            color="info"
                                            label="Sent Reminders"
                                            className="px-3 py-0 rounded-lg "
                                        />
                                    </div>
                                    :
                                    item.status === "Success" ?
                                        null
                                    :
                                    <div className="flex flex-row gap-2 items-center">
                                        <Button
                                            variant="contained"
                                            onClick={() => { }}
                                            color="purple"
                                            label="Review Queue"
                                            className="px-3 py-0 rounded-lg"
                                        />
                                        <Button
                                            variant="outlined"
                                            onClick={() => { }}
                                            color="purple"
                                            label="Cancel Auto-Suspend"
                                            className="px-3 py-0 rounded-lg "
                                        />
                                    </div>
                                }

                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    )
}