import { UserAvatar } from "../../common/UserAvtar";
import { useEffect, useState } from "react";
import { Button } from "../../common/fromComponent/button";
import { header, subSubSubject } from "../../common/style";
import Rating from "@mui/material/Rating";
import type { LucideIcon } from "lucide-react";
import { GetDays } from "../../common/GetDays";

// Active Disputes

export interface ReviewPropsData {
    avatar?: string;
    name: string;
    rating: number;
    reviewMessage: string;
    flagged?: boolean;
}

interface ReviewProps {
    data: ReviewPropsData[];
}


export const ReviewWidgets: React.FC<ReviewProps> = ({ data }) => {
    const [totalFlagg, setTotalFlagg] = useState(0);
    useEffect(() => {
        const totalFlagg = data.filter((item) => item.flagged).length;
        setTotalFlagg(totalFlagg);
    }, [data]);

    const getAccounts = (
        avatar?: string,
        name?: string,
        rating?: number,
        reviewMessage?: string,
        flagged?: boolean,
    ) => {
        if (flagged == true) {
            return (
                <div className="border-2 flex flex-col p-4 justify-between shadow-md mb-2 bg-yellow-50 border-yellow-200 rounded-2xl">
                    <div className=" flex flex-row ">
                        <div className="">
                            <UserAvatar img={avatar} className={`w-10 h-10 border-1 border-yellow-200`} />
                        </div>
                        <div className="flex flex-col gap-2 ml-2">
                            <h3 className="text-sm font-bold text-slate-800">{name}</h3>
                            <Rating value={rating} readOnly size="small" />
                        </div>
                        <div className="ml-auto">
                            <span className="text-sm font-bold text-yellow-600 bg-yellow-200 px-5 py-1 rounded-full">Flagged</span>
                        </div>
                    </div>
                    <div className=" mt-2">
                        <p className="text-sm text-slate-600">{reviewMessage}</p>
                    </div>
                    <div className="flex flex-row justify-between gap-5 mt-2">
                        <Button
                            onClick={() => { }}
                            color="success"
                            className="w-full py-2 !rounded-2xl"
                            label="Approve"
                        />
                        <Button
                            onClick={() => { }}
                            color="danger"
                            className="w-full py-2 !rounded-2xl"
                            label="Reject"
                        />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="border-2 flex flex-col p-4 justify-between shadow-md mb-2 border-slate-200 rounded-2xl">
                    <div className=" flex flex-row">
                        <div className="">
                            <UserAvatar img={avatar} className={`w-10 h-10 border-1 border-yellow-200`} />
                        </div>
                        <div className="flex flex-col gap-2 ml-2">
                            <h3 className="text-sm font-bold text-slate-800">{name}</h3>
                            <Rating value={rating} readOnly size="small" />
                        </div>
                    </div>
                    <div className=" mt-2 py-2">
                        <p className="text-sm text-slate-600">{reviewMessage}</p>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="bg-white p-6 rounded-2xl border gap-2 border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex flex-row justify-between items-center mb-6 p-4 ">
                <div className="flex flex-row items-center">
                    <h2 className={header}>Active Disputes</h2>
                </div>
                <div className="flex flex-row items-center">
                    {totalFlagg &&
                        <span className="text-xs font-bold text-yellow-600 px-5 
                            py-2 bg-yellow-200 rounded-full"
                        >
                            {totalFlagg} Flagged
                        </span>
                    }
                </div>
            </div>
            {data.map((item, key) => (
                <div key={key}>
                    {getAccounts(item.avatar, item.name, item.rating, item.reviewMessage, item.flagged)}
                </div>
            ))}
        </div>
    )
}




// Recent Moderation Activity

export interface ModerationDataProps {
    Id: number;
    adminName: string;
    reviewEr?: {
        name?: string;
        review?: {
            star?: number;
            type?: string;
        };
        time: string;
        date: string;
    };
    icon: LucideIcon | string;
    status: string;
}

interface ModerationCardProps {
    data: ModerationDataProps[];
}

export const ModerationCard: React.FC<ModerationCardProps> = ({ data }) => {

    const getColor = (status: string) => {
        switch (status) {
            case "Approved":
                return "bg-green-100 text-green-600";
            case "Hidden":
                return "bg-red-100 text-red-600";
            case "Flagged":
                return "bg-orange-100 text-orange-600";
            case "Verified":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    }
    return (

        <div className="gap-3  h-full flex flex-col">
            {data.map((item, key) => {
                const Icon = item.icon;
                return (
                    <div key={key} className="flex flex-row py-4 px-2 rounded-2xl hover:bg-slate-50 gap-2">
                        <div className={`p-2 flex rounded-full items-center justify-center ${(getColor(item.status))}`}>
                            <Icon className={`w-4 h-4  ${(getColor(item.status))}`} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <p className={subSubSubject}>Review #{item.Id} </p>
                                <p className={subSubSubject}>{item.status}
                                    <span className={subSubSubject}>{item.status === "Flagged" ? "for" : " by"}</span>
                                </p>
                                <p className={subSubSubject}>{item.status === "Flagged" ? "verification" : item.adminName}</p>
                            </div>
                            <div className="flex flex-row">
                                {item.status === "Approved" ?
                                    <div className="flex flex-row">
                                        <p className={subSubSubject}>{item.reviewEr?.review?.star}star</p>
                                        <p className={subSubSubject}>{item.reviewEr?.review?.type} review </p>
                                        <p className={subSubSubject}>from {item.reviewEr?.name} •</p>
                                    </div>
                                    : item.status === "Verified" ?
                                        <p className={subSubSubject}>User identity confirmed, review approved •</p>
                                        : item.status === "Flagged" ?
                                            <p className={subSubSubject}>Suspicious activity detected by system • </p>
                                            : item.status === "Hidden" ?
                                                <p className={subSubSubject}>Violated content policy - Inappropriate language • </p>
                                                : null
                                }
                                <p className={subSubSubject}>{GetDays(item.reviewEr?.date || "", item.reviewEr?.time || "")}</p>
                            </div>

                        </div>
                        <div className="ml-auto px-3">
                            <p className={`${getColor(item.status)} px-3 py-2 rounded-full text-xs font-bold`}>{item.status}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}