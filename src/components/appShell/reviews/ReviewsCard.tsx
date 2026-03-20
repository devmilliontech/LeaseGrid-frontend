import Checkbox from "@mui/material/Checkbox";
import { UserAvatar } from "../../common/UserAvtar";
import { GetDays } from "../../common/GetDays";
import { header, subject, subSubject, subSubSubject } from "../../common/style";
import Rating from "@mui/material/Rating";
import { AlertOctagon, AlertTriangle, BriefcaseBusiness, Building, CircleCheck, Clock1, Clock5, EyeOff, Flag, ThumbsUp, UserIcon } from "lucide-react";
import { Button } from "../../common/fromComponent/button";

export interface ReviewCardDataProps {
    reviewCreate: {
        name: string;
        avatar: string;
    }
    rateUser: {
        name: string;
        type: string;
        property?: string;
        jobCompleted?: string;
    }
    rating: number;
    review: string;
    date: string;
    time: string;
    status: string;
    flagedReason?: string;
}

interface ReviewsCardProps {
    data: ReviewCardDataProps[];
}


export const ReviewsCard: React.FC<ReviewsCardProps> = ({ data }) => {

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Approved":
                return "bg-green-100 text-green-800"
            case "Pending":
                return "bg-yellow-100 text-yellow-800"
            case "Flagged":
                return "bg-red-100 text-red-800"
            case "Hidden":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }
    const getBorderColor = (status: string) => {
        switch (status) {
            case "Approved":
                return "border-green-200"
            case "Pending":
                return "border-yellow-200"
            case "Flagged":
                return "border-red-200"
            case "Hidden":
                return "border-gray-200"
            default:
                return "border-gray-200"
        }
    }



    const rowlist = "flex flex-row items-center"
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div key={index} className={`p-6 rounded-2xl border bg-white shadow-sm h-110 flex flex-col hover:shadow-xl transition-all ${getBorderColor(item.status)}`}>
                        <div className={`${rowlist}`}>
                            <Checkbox
                                onChange={(value) => console.log(value)}
                                sx={{
                                    color: "purple",
                                    '&.Mui-checked': {
                                        color: "purple",
                                    },
                                    '& .MuiSvgIcon-root': {
                                        width: 20,
                                        height: 20,
                                        borderRadius: "50%",
                                    },
                                }}
                            />
                            <UserAvatar img={item.reviewCreate.avatar} className={`w-10 h-10 border ${getBorderColor(item.status)}`} />
                            <div className="flex flex-col ml-4">
                                <p className={header}>{item.reviewCreate.name}</p>
                                <p className={subSubSubject}>Reviewed {GetDays(item.date, item.time)}</p>
                            </div>
                            <div className={`${rowlist} ml-auto`}>
                                <div className={`text-xs font-semibold px-3 py-2 ${getStatusColor(item.status)} rounded-full`}>
                                    {item.status === "Pending" ? 
                                    <div className="flex flex-row gap-1 items-center"><Clock5 className="w-3 h-3" /><span>Pending</span></div> 
                                    : item.status === "Flagged" ?
                                    <div className="flex flex-row gap-1 items-center"><Flag className="w-3 h-3" /><span>Flagged</span></div>
                                    : item.status === "Approved" ?
                                    <div className="flex flex-row gap-1 items-center"><CircleCheck className="w-3 h-3" /><span>Approved</span></div>
                                    : item.status === "Hidden" ?
                                    <div className="flex flex-row gap-1 items-center"><EyeOff className="w-3 h-3" /><span>Hidden</span></div>
                                    : item.status}
                                </div>
                            </div>
                        </div>
                        <div className={`${rowlist} py-4 gap-4`}>
                            <div className={`${rowlist} gap-1`}>
                                <Rating value={item.rating} readOnly size="small" />
                                <p className={subject}>{item.rating}</p>
                            </div>
                            <p className={subSubject}>{item.rateUser.type} Review</p>
                        </div>
                        <div className="pb-4">
                            <p className={subSubject}>{item.review}</p>
                        </div>
                        {item.status === "Flagged" ?
                            <div className={`bg-red-50 p-2.5 rounded-2xl border border-red-200 items-center justify-center`}>
                                <div className={`${rowlist} gap-4`} >
                                    <AlertTriangle className="text-red-600 w-4 h-4" />
                                    <div className="items-center">
                                        <p className={`${subject} !text-red-800`}>Flagged Reason</p>
                                        <p className={`text-xs font-semibold !text-red-600`}>{item.flagedReason}</p>
                                    </div>
                                </div>
                            </div>
                            : item.status === "Pending" ?
                                <div className={`bg-yellow-50 p-4 rounded-2xl border flex flex-row border-yellow-200 items-center gap-5`}>
                                    <Clock1 className="text-yellow-600 w-4 h-4"/>
                                    <div className={`${rowlist} gap-4`}>
                                        <p className={`${subSubject} !text-blue-800 !bg-blue-100 px-3 py-1 rounded-full`}>Verifed Tanet</p>
                                        <p className={`${subSubject} !text-blue-800 !bg-blue-100 px-3 py-1 rounded-full`}>First Review</p>
                                    </div>
                                </div>
                                : item.status === "Approved" ?
                                    <div className={`bg-green-50 p-4 rounded-2xl border flex flex-row border-green-200 items-center gap-5`}>
                                        <CircleCheck className="text-green-600 w-4 h-4"/>
                                        <div className={`${rowlist} gap-4`}>
                                            <p className={`${subSubject} !text-green-800 !bg-green-100 px-3 py-1 rounded-full`}>Verified Job</p>
                                            <p className={`${subSubject} !text-purple-800 !bg-purple-100 px-3 py-1 rounded-full`}>Repeat Customer</p>
                                        </div>
                                    </div> : null
                        }

                        <div className={`${rowlist} border-t border-slate-200 py-6 mt-6`}>
                            <div className={`${rowlist} gap-4 w-full `}>
                                <div className={`${rowlist} gap-1 justify-start`}>
                                    <UserIcon className="text-slate-400 w-4 h-4" />
                                    <p className={`text-xs text-slate-400 whitespace-nowrap`}>{item.rateUser.name}</p>
                                </div>
                                {item.rateUser.type === "Landlord" ?
                                    <div className={`${rowlist} gap-1 justify-start`}>
                                        <Building className="text-slate-400 w-4 h-4" />
                                        <p className={`text-xs text-slate-400 whitespace-nowrap`}>Property #{item.rateUser.property}</p>
                                    </div>
                                    : item.rateUser.type === "Tradie" ?
                                        <div className={`${rowlist} gap-4`}>
                                            <div className={`${rowlist} gap-1`}>
                                                <BriefcaseBusiness className="text-slate-400 w-4 h-4" />
                                                <p className={`text-xs text-slate-400 whitespace-nowrap`}>Job #{item.rateUser.jobCompleted}</p>
                                            </div>
                                            <div className={`${rowlist} gap-1`}>
                                                <ThumbsUp className="text-slate-400 w-4 h-4" />
                                                <p className={`text-xs text-slate-400 whitespace-nowrap`}>28 helpful</p>
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-end gap-2">
                            {item.status === "Flagged" ?
                                <div className={`${rowlist} w-full justify-end gap-2`}>
                                    <Button
                                        label="Approve"
                                        onClick={() => console.log("Approve")}
                                        variant="contained"
                                        color="success"
                                        className="pr-4 pl-2 py-2 rounded-2xl"
                                        icon={CircleCheck}
                                    />
                                    <Button
                                        label="Hide"
                                        onClick={() => console.log("Hide")}
                                        variant="contained"
                                        color="danger"
                                        className="pr-7 pl-4 py-2 rounded-2xl"
                                        icon={EyeOff}
                                    />
                                </div>
                                : item.status === "Pending" ?
                                    < div className={`${rowlist} w-full justify-end gap-2 pl-2`}>
                                        <Button
                                            label="Approve"
                                            onClick={() => console.log("Approve")}
                                            variant="contained"
                                            color="success"
                                            className="pr-4 pl-2 py-2 rounded-2xl"
                                            icon={CircleCheck}
                                        />
                                        <Button
                                            label="Hide"
                                            onClick={() => console.log("Hide")}
                                            variant="contained"
                                            color="danger"
                                            className="pr-7 pl-4 py-2 rounded-2xl"
                                            icon={EyeOff}
                                        />
                                    </div>
                                    : item.status === "Approved" ?
                                        <Button
                                            label="Approved"
                                            onClick={() => console.log("Approved")}
                                            variant="contained"
                                            color="disabled"
                                            className="pr-7 pl-4 py-2 rounded-2xl !border-dotted !bg-slate-200 !text-slate-600 !cursor-default"
                                            icon={CircleCheck}
                                            disabled
                                        />
                                        : null
                            }
                        </div>
                    </div >
                )
            })}
        </>
    );
}   