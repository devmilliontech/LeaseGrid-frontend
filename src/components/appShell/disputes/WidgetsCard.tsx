import { useEffect, useState } from "react";
import {Calendar, Pin} from "lucide-react"
import { useNavigate } from "react-router-dom";

export interface DisputesPropsData {
    jobId: number;
    jobReason: string;
    formName: string;
    toName: string;
    status: string;
    day: number;
    attachments: number;
}

interface DisputesProps {
    data: DisputesPropsData[];
}

export const DisputesProps: React.FC<DisputesProps> = ({ data }) => {
    const [totalStatus, setTotalStatus] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const totalStatus = data.filter((item) => item.status ).length;
        setTotalStatus(totalStatus);
    }, [data]);


    const getDivColor=(status:string)=>{
        switch(status){
            case "High Risk":
                return "bg-rose-100 border-rose-200";
            case "Medium Risk":
                return "bg-orange-100 border-orange-200";
            default:
                return "bg-gray-100 border-gray-200";
        }
    }

    const getStatusColor=(status:string)=>{
        switch(status){
            case "High Risk":
                return "text-rose-600 bg-rose-300";
            case "Medium Risk":
                return "text-orange-600 bg-orange-300";
            default:
                return "text-gray-600 bg-gray-300";
        }
    }

    const getButtonColor=(status:string)=>{
        switch(status){
            case "High Risk":
                return "text-white bg-red-600 hover:bg-red-800 cursor-pointer ";
            case "Medium Risk":
                return "text-white bg-orange-600 hover:bg-orange-800 cursor-pointer";
            default:
                return "text-white bg-gray-600 hover:bg-gray-800 cursor-pointer";
        }
    }

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex flex-row justify-between items-center mb-6 p-4 ">
                <div className="flex flex-row items-center">
                    <h2 className="text-lg font-bold text-slate-800">Active Disputes</h2>
                </div>
                <div className="flex flex-row items-center">
                    {totalStatus && 
                        <span className="text-xs font-bold text-rose-600 px-5 
                            py-2 bg-rose-200 rounded-full"
                        >
                            {totalStatus} Urgent
                        </span>
                    }
                </div>
            </div>
            <div>
                {data.map((item) => (
                    <div key={item.jobId} className={`border-2 p-2 rounded-2xl shadow-sm mb-2 ${getDivColor(item.status)}`}>
                        <div className=" flex flex-row justify-between p-2">
                            <div className="flex flex-col gap-1" >
                                <div className="flex flex-row">
                                    <p className="font-bold text-md">Job #{item.jobId}</p>
                                    <p className="text-md font-semibold">-{item.jobReason}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-600">Between {item.formName} & {item.toName}</p>
                                </div>
                            </div>
                            <div>  
                                <span className={`text-xs font-bold px-6 
                                    py-2 rounded-full ${getStatusColor(item.status)}`}>
                                    {item.status}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2">
                            <div className="flex flex-row items-center gap-2">
                                <Calendar className="w-3 h-3 text-slate-600" />
                                <span className="text-xs font-semibold text-slate-600">Opened {item.day} days ago</span>
                            </div>
                            <div className="flex flex-row items-center gap-2 w-1/2">
                                <Pin className="w-3 h-3 text-slate-600" />
                                <span className="text-xs font-semibold text-slate-600">{item.attachments} attachments</span>
                            </div>
                        </div>
                        <div className="mt-2 p-2">
                            <button className={`text-sm font-medium  
                                        rounded-2xl w-full py-2 ${getButtonColor(item.status)}
                                        cursor-pointer 
                                    `}
                                onClick={() => navigate(`/disputes`)}
                            >
                                Review Dispute
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
