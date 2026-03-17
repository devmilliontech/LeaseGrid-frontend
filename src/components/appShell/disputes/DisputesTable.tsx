import { subject, subSubject } from "../../common/style";
import { Eye } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { UserAvatar } from "../../common/UserAvtar.tsx";
import { GetDays } from "../../common/GetDays.tsx";

export interface DisputesTableDataProps {
    disputesId: number;
    userComplainant: {
        avatar?: string;
        name: string;
        role?: {
            name: string;
            type: string;
        }
    };
    userRespondent: {
        avatar?: string;
        name: string;
        role?: {
            name: string;
            type: string;
        }
    };
    Category: string;
    Outcome: string;
    time: string;
    date: string;
    admin: string;
}

interface DisputesTableProps {
    data: DisputesTableDataProps[];
}

export const DisputesTableWidgets: React.FC<DisputesTableProps> = ({ data }) => {

    const outComeColor = (Outcome: string) => {
        switch (Outcome) {
            case "Complainant":
                return "text-green-600 bg-green-100";
            case "Split":
                return "text-blue-600 bg-blue-100"
            case "Respondent":
                return "text-purple-600 bg-purple-100"
            case "Mediation":
                return "text-orange-600 bg-orange-100"
            default:
                return "text-slate-600 bg-slate-100"
        }
    }

    const headerLiost = [
        "Disputes ID",
        "Parties",
        "Category",
        "Outcome",
        "Resolution Time",
        "Admin",
        "Actions",
    ]

    const rowlist = "flex flex-row items-center w-full justify-center"
    return (
        <>
            <div className="flex flex-row items-center justify-between py-4 mt-5 w-full border-b border-slate-300 mb-2">
                {headerLiost.map((item, index) => {
                    return (
                        <p key={index} className={`${rowlist} ${subject}`}>{item}</p>
                    );
                })}
            </div>
            <div className="flex flex-col gap-2 h-100 overflow-y-auto scrollbar-hide ">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" py-4 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                            <div className={`${rowlist}`}>
                                <p className="text-sm font-semibold text-teal-400">#{item.disputesId}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <UserAvatar img={item.userComplainant.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                <p className={subSubject}>vs</p>
                                <UserAvatar img={item.userRespondent.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject}`}>{item.Category}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${outComeColor(item.Outcome)} text-sm font-semibold px-3 py-2 text-center rounded-full`}>{item.Outcome}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject} w-full text-center whitespace-nowrap`}>
                                    {GetDays(item.date, item.time)}
                                </p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject}`}>{item.admin}</p>
                            </div>
                            <div className={`${rowlist} gap-4`}>
                                <Tooltip title="View Details">
                                    <Eye className="w-4.5 h-4.5 text-teal-500 cursor-pointer" />
                                </Tooltip>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}