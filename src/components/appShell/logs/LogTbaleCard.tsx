import { Eye } from "lucide-react";
import { subject, subSubject, subSubSubject } from "../../common/style";
import { UserAvatar } from "../../common/UserAvtar";



export interface LogTableCardDataProps {
    time: string;
    admin: {
        avatar: string;
        id: string;
        name: string;
        role: string;
        email: string;
        ipAddress: string;
    };
    details: string;
    action: string;
    status: string;

}

interface LogsTableCardProps {
    data: LogTableCardDataProps[];
}
export const LogsTableCard: React.FC<LogsTableCardProps> = ({ data }) => {

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Success":
                return "text-green-500 bg-green-100";
            case "Failed":
                return "text-red-500 bg-red-100";
            default:
                return "text-gray-500 bg-gray-100";
        }
    }
    const tableHeader = [
        "Timestamp",
        "Admin User",
        "Action",
        "Entity",
        "Details",
        "IP Address",
        "Status",
        "Actions"
    ]


    const rowlist = "flex flex-row items-center w-full justify-center "
    return (
        <div className="">
            <div className="flex flex-row items-center justify-between py-4 mt-5 border-b border-slate-300 mb-2 w-full">
                {tableHeader.map((item, index) => {
                    return (
                        <p key={index} className={`${rowlist} ${subject} `}>{item}</p>
                    );
                })}
            </div>
            <div className="flex flex-col gap-2 ">
                {data.map((item, index) => {
                    return (
                        <div key={index} className=" py-4 px-2 rounded-2xl flex flex-row  justify-between border border-slate-100 hover:bg-slate-50">

                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.time}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <div>
                                    <UserAvatar img={item.admin.avatar} className={`border-1 border-red-100 w-10 h-10 `} />
                                </div>                               
                                <div className={`flex flex-col`}>
                                    <p className={`${subject} text-sm font-semibold`}>{item.admin.name}</p>
                                    <p className={`${subSubSubject}`}>{item.admin.role}</p>
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.action}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <div className="flex flex-col items-center justify-center">
                                    <p className={` ${subSubSubject}`}>{item.admin.id}</p>
                                    <p className={` ${subSubSubject}`}>{item.admin.email}</p>
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject} whitespace-nowrap`}>{item.details}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.admin.ipAddress}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>{item.status}</p>
                            </div>
                            <div className={`${rowlist} gap-2`}>
                                <Eye className="text-teal-500 cursor-pointer hover:text-teal-700" /><span className="text-teal-500">View</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}