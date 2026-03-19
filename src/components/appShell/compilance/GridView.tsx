import Checkbox from "@mui/material/Checkbox";
import type { ListViewDataProps } from "./ListView";
import { UserAvatar } from "../../common/UserAvtar";
import { subSubject, subSubSubject } from "../../common/style";
import { useAuthStore } from "../../store/useAuthStore";
import { Button } from "../../common/fromComponent/button";
import { Ban, CircleCheck, Clock, Send } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";

interface GridViewProps {
    data: ListViewDataProps[];
}

export const GridView: React.FC<GridViewProps> = ({ data }) => {
    const { selectIteam, setSelectIteam } = useAuthStore();

    const getStatusColor = (priority: string) => {
        switch (priority) {
            case "Critical":
                return "bg-red-100 text-red-500";
            case "High":
                return "bg-orange-100 text-orange-500";
            case "Medium":
                return "bg-yellow-100 text-yellow-500";
            case "Urgent":
                return "bg-purple-100 text-purple-500";
            case "Low":
                return "bg-slate-100 text-slate-500";
            default:
                return "bg-white-100 text-white-500";
        }
    }

    const getDivBorderColor = (priority: string) => {
        switch (priority) {
            case "Critical":
                return "border-red-100";
            case "High":
                return "border-orange-100";
            case "Medium":
                return "border-yellow-100";
            case "Urgent":
                return "border-purple-100";
            case "Low":
                return "border-slate-100";
            default:
                return "border-white-100";
        }
    }


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.map((item, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-sm hover:shadow-md p-4 border-2 ${getDivBorderColor(item.Piority)}`}>
                    <div className="flex flex-col justify-between gap-3">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div>
                                <Checkbox
                                    size="small"
                                    color="secondary"
                                    checked={selectIteam.item.some(selected => selected.user.id === item.user.id)}
                                    onChange={(e) => {
                                        let newItems;
                                        if (e.target.checked) {
                                            newItems = [...selectIteam.item, item];
                                        } else {
                                            newItems = selectIteam.item.filter(selected => selected.user.id !== item.user.id);
                                        }
                                        setSelectIteam({
                                            count: newItems.length,
                                            total: data.length,
                                            item: newItems,
                                            selectAll: newItems.length === data.length
                                        });
                                    }}
                                />
                            </div>
                            <div>
                                <p className={`${getStatusColor(item.Piority)} text-xs font-semibold px-3 py-1 rounded-full`}>{item.Piority}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 px-2">
                            <UserAvatar img={item.user.avatar} className="w-10 h-10 " />
                            <div>
                                <div className={`flex flex-col`}>
                                    <p className={`${subSubject} whitespace-nowrap`}>{item.user.name}</p>
                                    <div className="flex flex-row gap-1">
                                        <p className={`${subSubSubject}`}>{item.user.role}</p>
                                        <p className={`${subSubSubject}`}>ID:</p>
                                        <p className={`${subSubSubject} !text-teal-500`}>#{item.user.id}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 px-2">
                            <div className="flex flex-row justify-between">
                                <p className={`${subSubSubject} !text-slate-500`}>Document:</p>
                                <p className={`${subSubject}`}>{item.documentsType}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className={`${subSubSubject} !text-slate-500`}>Status:</p>
                                <p className={`${getStatusColor(item.Piority)} text-xs font-semibold px-3 py-1 rounded-full`}>{item.status}</p>
                            </div>
                            {item.status === "Expiring Soon" || item.status === "Warning" ?
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between">
                                        <p className={`${subSubSubject} !text-slate-500`}>Expiry:</p>
                                        <p className={`${getStatusColor(item.Piority)} text-xs !bg-white font-bold  rounded-full`}>{item.expiryDate}</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className={`${subSubSubject} !text-slate-500`}>Last Action:</p>
                                        <p className={`${subSubSubject}`}>{item.lastAction}</p>
                                    </div>
                                </div>
                                :
                                item.status === "Auto-Suspend" ?
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-row justify-between">
                                            <p className={`${subSubSubject} !text-slate-500`}>Expired:</p>
                                            <p className={`${getStatusColor(item.Piority)} text-xs !bg-white font-bold  rounded-full`}>{item.expiryDate}</p>
                                        </div>
                                        <div className="flex flex-row justify-between">
                                            <p className={`${subSubSubject} !text-slate-500`}>Scheduled:</p>
                                            <p className={`${subSubSubject}`}>{item.Scheduled}</p>
                                        </div>
                                    </div>
                                    :
                                    item.status === "Pending Upload" ?
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-row justify-between">
                                                <p className={`${subSubSubject} !text-slate-500`}>Category:</p>
                                                <p className={`${getStatusColor(item.Piority)} text-xs px-3 py-1 font-bold  rounded-full`}>{item.Category}</p>
                                            </div>
                                            <div className="flex flex-row justify-between">
                                                <p className={`${subSubSubject} !text-slate-500`}>Registered:</p>
                                                <p className={`${subSubSubject}`}>{item.Registered}</p>
                                            </div>
                                        </div>
                                        :
                                        item.status === "In Review" ?
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-row justify-between">
                                                    <p className={`${subSubSubject} !text-slate-500`}>Category:</p>
                                                    <p className={`${getStatusColor(item.Piority)} text-xs px-3 py-1 font-bold  rounded-full`}>{item.Category}</p>
                                                </div>
                                                <div className="flex flex-row justify-between">
                                                    <p className={`${subSubSubject} !text-slate-500`}>Submitted:</p>
                                                    <p className={`${subSubSubject}`}>{item.Submitted}</p>
                                                </div>
                                            </div>
                                            : null
                            }
                        </div>
                        <div >
                            {item.status === "In Review" ?
                                <div className="flex flex-row gap-2 justify-between pt-2 ">
                                    <div className="w-3/4">
                                        <Button
                                            label="Review Now"
                                            variant="contained"
                                            className="px-5 py-1 rounded-xl w-full"
                                            onClick={() => { }}
                                        />
                                    </div>
                                    <div className="flex items-center px-1 py-1  hover:bg-green-100 rounded-lg cursor-pointer">
                                        <Tooltip title="Approve">
                                            <CircleCheck className="w-5 h-5 text-green-500 cursor-pointer" />
                                        </Tooltip>
                                    </div>
                                    <div className="flex items-center px-1 py-1  hover:bg-red-100 rounded-lg cursor-pointer">
                                        <Tooltip title="Ban">
                                            <Ban className="w-5 h-5 text-red-500 cursor-pointer" />
                                        </Tooltip>
                                    </div>
                                </div>
                                :item.status === "Auto-Suspend"?
                                    <div className="flex flex-row gap-2 justify-between pt-2 ">
                                    <div className="w-full">
                                        <Button
                                            label="Suspend Now"
                                            variant="contained"
                                            color="purple"
                                            className="px-5 py-1 rounded-xl w-full"
                                            onClick={() => { }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-center px-1 py-1  mr-2 hover:bg-green-100 rounded-lg cursor-pointer">
                                        <Tooltip title="Grant Extension">
                                            <Clock className="w-5 h-5 text-green-500" />
                                        </Tooltip>
                                    </div>
                                </div>
                                :
                                <div className="flex flex-row gap-2 justify-between pt-2 ">
                                    <div className="w-3/4">
                                        <Button
                                            label="View Details"
                                            variant="contained"
                                            className="px-5 py-1 rounded-xl w-full"
                                            onClick={() => { }}
                                        />
                                    </div>
                                    <div className="flex items-center px-1 py-1  hover:bg-orange-100 rounded-lg cursor-pointer">
                                        <Tooltip title="Send Reminder">
                                            <Send className="w-5 h-5 text-orange-500 cursor-pointer" />
                                        </Tooltip>
                                    </div>
                                    <div className="flex items-center px-1 py-1  hover:bg-red-100 rounded-lg cursor-pointer">
                                        <Tooltip title="Ban">
                                            <Ban className="w-5 h-5 text-red-500 cursor-pointer" />
                                        </Tooltip>
                                    </div>
                                </div>
                            }   
                        </div>
                    </div>
                </div>
            ))
            }
        </div >
    );
}