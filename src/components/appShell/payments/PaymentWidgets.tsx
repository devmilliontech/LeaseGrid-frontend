import React from "react";
import { UserAvatar } from "../../common/UserAvtar.tsx";
import { header, subject, subSubject } from "../../common/style";
import { CircleCheck, CircleDollarSign, CircleX, Eye, RefreshCw, SquarePen, Timer } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "../../common/fromComponent/button.tsx";
import moment from "moment";
import { GetDays } from "../../common/GetDays.tsx";

export interface PaymentWidgetsDataProps {
    transactionId: string;
    avatar?: string;
    name: string;
    type: string;
    amount: number;
    status: string;
    date: string;
    path: string;

}

interface PaymentWidgetsProps {
    data: PaymentWidgetsDataProps[];
}

export const PaymentWidgets: React.FC<PaymentWidgetsProps> = ({ data }) => {

    const getSttatusColor = (status: string) => {
        switch (status) {
            case "Pending":
                return "text-yellow-600 bg-yellow-100";
            case "Success":
                return "text-green-600 bg-green-100";
            case "Failed":
                return "text-red-600 bg-red-100";
            default:
                return "text-white";
        }
    }
    const getBorderColor = (status: string) => {
        switch (status) {
            case "Pending":
                return "border-yellow-600";
            case "Success":
                return "border-green-600";
            case "Failed":
                return "border-red-600";
            default:
                return "border-white";
        }
    }

    const headerLiost = [
        "Transaction ID",
        "User",
        "Type",
        "Amount",
        "Status",
        "Date",
        "Action"
    ]

    const rowlist = "flex flex-row items-center w-full justify-center"
    return (
        <>
            <div className="flex flex-row items-center justify-between px-6 py-4 mt-5 w-full border-b border-slate-300">
                {headerLiost.map((item, index) => {
                    return (
                        <p key={index} className={`${rowlist} ${subject}`}>{item}</p>
                    );
                })}
            </div>
            {data.map((item, index) => {
                return (
                    <div key={index} className="px-6 py-4 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                        <div className={`${rowlist}`}>
                            <p className="text-sm font-semibold text-teal-400">#{item.transactionId}</p>
                        </div>
                        <div className={`${rowlist} gap-2`}>
                            <UserAvatar img={item.avatar} className={`border-1 w-10 h-10 ${getBorderColor(item.status)}`} />
                            <p className={`${subject} text-sm font-semibold`}>{item.name}</p>
                        </div>
                        <div className={`${rowlist}`}>
                            <p className={`${subSubject} w-full text-center`}>{item.type}</p>
                        </div>
                        <div className={`${rowlist}`}>
                            <p className={`${subject} w-full text-center`}>{item.amount}</p>
                        </div>
                        <div className={`${rowlist}`}>
                            <span className={`text-sm font-semibold px-3 py-1 rounded-full
                                   ${getSttatusColor(item.status)}`}
                            >
                                {item.status}
                            </span>
                        </div>
                        <div className={`${rowlist}`}>
                            <p className={`${subSubject} text-xs text-gray-500 w-full text-center`}>{item.date}</p>
                        </div>
                        <div className={`${rowlist}`}>
                            <p className="text-md text-teal-500 font-semibold w-full text-center cursor-pointer
                                   hover:text-teal-800"
                            >
                                View
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}









export interface failedPayoutsDataProps {
    transactionId: string;
    user: {
        avatar?: string;
        name: string;
        role: {
            name: string;
            type: string;
        }
    }
    failReason: string;
    amount: number;
    attempts: number;
    date: string;

}

interface failedPayoutsProps {
    data: failedPayoutsDataProps[];
}

export const FailedPayouts: React.FC<failedPayoutsProps> = ({ data }) => {

    const headerLiost = [
        "Transaction ID",
        "User",
        "Amount",
        "Failure Reason",
        "Date",
        "Attempts",
        "Action"
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
            <div className="flex flex-col gap-2 h-80">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" py-4 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                            <div className={`${rowlist}`}>
                                <p className="text-sm font-semibold text-teal-400">#{item.transactionId}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <UserAvatar img={item.user.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                <div className={`flex flex-col`}>
                                    <p className={`${subject} text-sm font-semibold`}>{item.user.name}</p>
                                    <div className="flex flex-row gap-2">
                                        <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.name}</p>
                                        <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.type}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subject} w-full text-center`}>${item.amount}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-xs font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full`}>
                                    {item.failReason}
                                </p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject} text-xs text-gray-500 w-full text-center`}>{item.date}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-xs text-red-600 bg-red-100 px-4 py-2 rounded-full`}>{item.attempts} attempts</p>
                            </div>
                            <div className={`${rowlist} gap-4`}>
                                < Tooltip title="Retry Payout">
                                    <RefreshCw className="w-4.5 h-4.5 text-red-500 cursor-pointer" />
                                </Tooltip>
                                < Tooltip title="Edit Details">
                                    <SquarePen className="w-4.5 h-4.5 text-teal-500 cursor-pointer" />
                                </Tooltip>
                                < Tooltip title="View Details">
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





// Transaction Ledger table
export interface TransactionDataProps {
    transactionId: string;
    fromUser: {
        avatar?: string;
        name: string;
        role?: {
            name: string;
            type: string;
        }
    };
    toUser: {
        avatar?: string;
        name: string;
        role?: {
            name: string;
            type: string;
        }
    }
    type: string;
    platFormFee: number;
    amount: number;
    status: string;
    date: string;
}

interface TransactionProps {
    data: TransactionDataProps[];
}

export const TransactionWidgets: React.FC<TransactionProps> = ({ data }) => {

    const typeColor = (type: string) => {
        switch (type) {
            case "Rent Payment":
                return "text-blue-600 bg-blue-100";
            case "Job Payment":
                return "text-purple-600 bg-purple-100"
            case "Refund":
                return "text-orange-600 bg-orange-100"
            default:
                return "text-slate-600 bg-slate-100"
        }
    }


    const statusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "text-green-600 bg-green-100";
            case "Failed":
                return "text-red-600 bg-red-100"
            case "Pending":
                return "text-yellow-600 bg-yellow-100"
            default:
                return "text-slate-600 bg-slate-100"
        }
    }

    const feeColor = (platFormFee: number) => {
        if (platFormFee > 0) {
            return "text-green-600"
        } else {
            return "text-red-600"
        }
    }
    const headerLiost = [
        "Transaction ID",
        "From",
        "To",
        "type",
        "Amount",
        "Platform Fee",
        "status",
        "Date",
        "Action"
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
            <div className="flex flex-col gap-2 h-80 ">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" py-4 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                            <div className={`${rowlist}`}>
                                <p className="text-sm font-semibold text-teal-400">#{item.transactionId}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <UserAvatar img={item.fromUser.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                <div className={`flex flex-col`}>
                                    <p className={`${subject} text-sm font-semibold`}>{item.fromUser.name}</p>
                                    {/* <div className="flex flex-row gap-2">
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.name}</p>
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.type}</p>
                                             </div> */}
                                </div>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <UserAvatar img={item.toUser.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                <div className={`flex flex-col`}>
                                    <p className={`${subject} text-sm font-semibold`}>{item.toUser.name}</p>
                                    {/* <div className="flex flex-row gap-2">
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.name}</p>
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.type}</p>
                                             </div> */}
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-center text-xs font-semibold px-3 py-1 ${typeColor(item.type)} rounded-full`}>{item.type}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subject} w-full text-center`}>${item.amount}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-md font-medium ${feeColor(item.platFormFee)} `}>
                                    ${item.platFormFee}
                                </p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-xs font-semibold px-3 py-2 ${statusColor(item.status)} rounded-full`}>{item.status}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject}`}>{item.date}</p>
                            </div>
                            <div className={`${rowlist} gap-4`}>
                                <Tooltip title="View Details">
                                    <Eye className="w-4.5 h-4.5 text-teal-500 cursor-pointer" />
                                </Tooltip>
                                {item.status === "Failed" ?
                                    <Tooltip title="Retry Payout">
                                        <RefreshCw className="w-4.5 h-4.5 text-teal-500 cursor-pointer" />
                                    </Tooltip>
                                    :
                                    item.status === "Pending" ?
                                        <Tooltip title="Expedite">
                                            <Timer className="w-4.5 h-4.5 text-teal-500 cursor-pointer" />
                                        </Tooltip>
                                        :
                                        <Tooltip title="Issue Refund">
                                            <CircleDollarSign className="w-4.5 h-4.5 text-red-500 cursor-pointer" />
                                        </Tooltip>

                                }
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}







export interface RefundDataProps {
    transactionId: number;
    user: {
        avatar?: string;
        name: string;
        role: {
            name: string;
            type: string;
        }
    }
    status: string;
    amount: {
        refundAmount: number;
        originalAmount?: number;
        proccessingTime?: string;
        completionTime?: string;
    }
    reason: string;
    time: string;
    date: string;

}

interface RefundTableProps {
    data: RefundDataProps[];
}


export const RefundCard: React.FC<RefundTableProps> = ({ data }) => {

    
    const getStatusColor = (status: String) => {

        switch (status) {
            case "completed":
                return "bg-green-100 text-green-600";
            case "pending review":
                return "bg-yellow-100 text-yellow-600";
            case "proccessing":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    }
    const getDivColor = (status: String) => {

        switch (status) {
            case "completed":
                return "bg-green-50 border-green-200 ";
            case "pending review":
                return "bg-yellow-50 border-yellow-200 ";
            case "proccessing":
                return "bg-blue-50 border-blue-200";
            default:
                return "bg-gray-50 border-gray-200";
        }
    }
    return (
        <div className="flex flex-col gap-2 my-4">
            {data.map((item, index) => {
                return (
                    <div key={index}
                        className={`flex flex-col justify-between px-2 py-2 border-2  rounded-2xl hover:shadow-sm ${getDivColor(item.status)}`}
                    >
                        <div className="flex flex-row justify-between px-4 py-4">
                            <div className="flex flex-row ">
                                <UserAvatar img={item.user.avatar} className={`w-12 h-12 `} />
                                <div className="flex flex-col px-2">
                                    <p className={`${subject}`}>{item.user.name}</p>
                                    <div className="flex flex-row gap-2">
                                        <p className={`${subSubject}`}>Transaction #TXN-{item.transactionId}</p>
                                        <p className={`${subSubject}`}>Approved {GetDays(item.date, item.time)} </p>
                                    </div>
                                    <p className={`${subSubject}`}>Reason: {item.reason}</p>
                                </div>
                            </div>
                            <div>
                                <p className={`px-3 py-1 ${getStatusColor(item.status)} text-sm font-semibold rounded-full`}>{item.status}</p>
                            </div>
                        </div>
                        <div className={`flex flex-row justify-between pr-4 border-t ${getDivColor(item.status)} py-4`}>
                            <div className="flex flex-col gap-2 w-full pl-5">
                                <div className="flex flex-row">
                                    <p className={`${subSubject} w-full `}> Refund Amount</p>
                                    <p className={`${subSubject} w-full `}>Original Amount</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className={`${header} w-full `}>${item.amount.refundAmount}</p>
                                    {item.status === "completed" ?
                                        <p className={`${subject} w-full `}>{item.amount.completionTime}</p>
                                        : item.status === "pending review" ?
                                            <p className={`${subject} w-full `}>${item.amount.originalAmount}</p>
                                            :
                                            <p className={`${subSubject} w-full `}>{item.amount.proccessingTime} business days</p>
                                    }
                                </div>
                            </div>
                            <div className="w-full justify-end flex">
                                {item.status === "proccessing" ?
                                    <Button
                                        onClick={() => { }}
                                        variant="contained"
                                        label="Track status"
                                        color="primary"
                                        className="rounded-full px-3 py-1 mt-4"
                                        icon={Eye}
                                    />
                                    : item.status === "completed" ?
                                        <Button
                                            onClick={() => { }}
                                            variant="outlined"
                                            label="view receipt"
                                            color="primary"
                                            className="rounded-full px-3 py-1 mt-4 bg-white"
                                            icon={Eye}
                                        />
                                        :
                                        <div className="flex flex-row mt-4 gap-4">
                                            <Button
                                                onClick={() => { }}
                                                variant="contained"
                                                label="Reject"
                                                color="danger"
                                                className="rounded-full px-5 py-1 "
                                                icon={CircleX}
                                            />
                                            <Button
                                                onClick={() => { }}
                                                variant="contained"
                                                label="Approve"
                                                color="success"
                                                className="rounded-full px-3 py-1 "
                                                icon={CircleCheck}
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






// Payment Adjustments Table

export interface PaymentAdjustmentsDataProps {
    transactionId: number;
    orginalId: number;
    user: {
        avatar?: string;
        name: string;
        role?: {
            name: string;
            type: string;
        }
    };
    type: string;
    amount: number;
    reason: string;
    admin: string;
    date: string;
}

interface PaymentAdjustmentsProps {
    data: PaymentAdjustmentsDataProps[];
}

export const PaymentAdjustmentsCard: React.FC<PaymentAdjustmentsProps> = ({ data }) => {

    const typeColor = (type: string) => {
        switch (type) {
            case "Debit":
                return "text-red-600 bg-red-100";
            case "Credit":
                return "text-green-600 bg-green-100"
            default:
                return "text-slate-600 bg-slate-100"
        }
    }

    const amountColor = (type: string) => {
        if (type === "Credit") {
            return "text-green-600"
        } else {
            return "text-red-600"
        }
    }

    const headerLiost = [
        "Adjustment ID",
        "Original ID",
        "User",
        "type",
        "Amount",
        "Reason",
        "Admin",
        "Date",
        "Action"
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
            <div className="flex flex-col gap-2 h-80 ">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" py-4 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                            <div className={`${rowlist}`}>
                                <p className="text-sm font-semibold text-teal-400">#{item.transactionId}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className="text-sm font-semibold text-teal-400">#{item.orginalId}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <UserAvatar img={item.user.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                <div className={`flex flex-col`}>
                                    <p className={`${subject} text-sm font-semibold`}>{item.user.name}</p>
                                    {/* <div className="flex flex-row gap-2">
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.name}</p>
                                                  <p className={`${subSubject} text-xs text-gray-500 w-full`}>{item.user.role.type}</p>
                                             </div> */}
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-center text-xs font-semibold px-3 py-1 ${typeColor(item.type)} rounded-full`}>{item.type}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${amountColor(item.type)} text-sm font-semibold w-full text-center`}>{item.type === "Debit" ? "-" : "+"}${item.amount}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject} w-full text-center whitespace-nowrap`}>
                                    {item.reason}
                                </p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`text-xs font-semibold px-3 py-2 rounded-full`}>{item.admin}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubject}`}>{item.date}</p>
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





