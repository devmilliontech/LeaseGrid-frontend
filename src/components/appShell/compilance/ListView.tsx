import { Eye } from "lucide-react";
import { subject, subSubject, subSubSubject } from "../../common/style";
import { UserAvatar } from "../../common/UserAvtar";
import Checkbox from "@mui/material/Checkbox";

import { useAuthStore } from "../../store/useAuthStore";


export interface ListViewDataProps {
    user: {
        avatar: string;
        name: string;
        id: string;
        role: string;
    }
    documentsType: string;
    expiryDate?: string;
    status: string;
    Piority: string;
    lastAction?: string;
    Category?: string;
    Registered?: string;
    Submitted?: string;
    Scheduled?: string;
}

interface ListViewProps {
    data: ListViewDataProps[];
}

export const ListView: React.FC<ListViewProps> = ({ data }) => {

    const { selectIteam, setSelectIteam } = useAuthStore();



    const tableHeader = [
        "Documents Type",
        "Expiry Date",
        "Status",
        "Priority",
        "Last Action",
        "Actions"
    ]
    const rowlist = "flex flex-row items-center w-full justify-center "

    return (
        <div className="">
            <div className="flex flex-row items-center justify-between py-4 mt-5 border-b border-slate-300 mb-2 w-full">
                <div className="pl-2">
                    <Checkbox size="small" 
                        color="secondary"
                        disabled
                        checked={selectIteam.selectAll || (data.length > 0 && selectIteam.item.length === data.length)}
                    />
                </div>
                <p className={`${subject} w-15/10 text-center`}>User</p>
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
                            <div className={`w-1/10 flex items-center`}>
                                <Checkbox
                                    size="small"
                                    color="secondary"
                                    checked={selectIteam.item.some(selected => selected.user.id ===item.user.id)}
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
                            <div className={`flex flex-row items-center gap-2 w-15/10`}>
                                <div className="">
                                    <UserAvatar img={item.user.avatar} className={`border border-red-100 w-10 h-10 `} />
                                </div>
                                <div className={`flex flex-col`}>
                                    <p className={`${subSubject} whitespace-nowrap`}>{item.user.name}</p>
                                    <div className="flex flex-row gap-1">
                                        <p className={`${subSubSubject}`}>{item.user.role}</p>
                                        <p className={`${subSubSubject}`}>ID:</p>
                                        <p className={`${subSubSubject} !text-teal-500`}>#{item.user.id}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.documentsType}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={` ${subSubSubject}`}>{item.expiryDate}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.status}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.Piority}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <p className={`${subSubSubject}`}>{item.lastAction}</p>
                            </div>
                            <div className={`${rowlist}`}>
                                <Eye className="w-5 h-5 text-slate-500" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}