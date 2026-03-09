import { StarIcon } from "lucide-react";
import { UserAvatar } from "../../common/UserAvtar";
import Rating from "@mui/material/Rating";

export interface JobTableProps{
    avatar:string;
    id:number;
    name:string;
    type:string;
    activeJobs:number;
    completedJobs:number;
    rating?:number;
    status:string;
}

export const JobTable:React.FC<{data:JobTableProps[]}>=({data})=>{

    const getTypeColor=(type:string)=>{
        switch (type) {
            case "Plumber":
                return "bg-teal-50 text-teal-400";
            case "Electrician":
                return "bg-blue-50 text-blue-600";
            case "Painter":
                return "bg-green-50 text-green-600";
            case "Carpenter":
                return "bg-purple-50 text-purple-600";
            case "HVAC":
                return "bg-orange-50 text-orange-600";
            default:
                return "bg-gray-50 text-gray-600";
        }
    }

    const getStatusColor=(status:string)=>{
        switch (status) {
            case "Available":
                return "bg-green-50 text-green-600";
            case "Unavailable":
                return "bg-yellow-50 text-yellow-600";
            default:
                return "bg-gray-50 text-gray-600";
        }
    }

    return(
        <>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between  w-full border-b border-slate-100 pb-4">
                        <p className="flex w-full justify-center text-md font-semibold">Tradie</p>
                        <p className="flex w-full justify-center text-md font-semibold">Specialty</p>
                        <p className="flex w-full justify-center text-md font-semibold">Active Jobs</p>
                        <p className="flex w-full justify-center text-md font-semibold">Completed </p>
                        <p className="flex w-full justify-center text-md font-semibold">Rating</p>
                        <p className="flex w-full justify-center text-md font-semibold">Availability</p>
                </div>
                {data.map((item,key)=>{
                    return(
                        <div key={key} className="flex flex-row  w-full border-slate-100 border-b h-27 justify-between items-center shadow-sm mb-2 rounded-xl hover:bg-slate-50">
                            <div className="flex flex-row justify-between w-full p-2 items-center ">
                                <UserAvatar img={item.avatar} className="w-10 h-10 rounded-full" />
                                <div className="flex flex-col pl-3 justify-center">
                                    <p className="w-full font-semibold text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-slate-500">ID: #TRD-{item.id}</p>
                                </div>
                            </div>
                            <div className="flex p-2 justify-center w-full">
                                <p className={` px-4 rounded-full text-md font-semibold ${getTypeColor(item.type)}`}>{item.type}</p>
                            </div>
                            <div className="flex  p-2 justify-center w-full">
                                <p className="text-md font-semibold text-slate-500">{item.activeJobs}</p>
                            </div>
                            <div className="flex  p-2 justify-center w-full">
                                <p className="text-md font-semibold text-slate-800">{item.completedJobs}</p>
                            </div>
                            <div className="flex p-2 justify-center w-full">
                                {item.rating?(
                                    <div className="flex flex-row items-center gap-2">
                                        <div>
                                            <Rating value={item.rating} readOnly size="small" precision={0.5}/>
                                        </div>
                                        <p className="text-md font-semibold text-slate-800">{item.rating}</p>
                                    </div>
                                ):(
                                    <Rating value={0} disabled size="small" />
                                )} 
                            </div>
                            <div className="flex p-2 justify-center w-full">
                                <p className={` px-4 rounded-full ${getStatusColor(item.status)}`}>{item.status}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}