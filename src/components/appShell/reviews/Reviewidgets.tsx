import { UserIcon } from "lucide-react";
import { useEffect, useState } from "react";


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
                    <div className=" flex flex-row  justify-between ">
                        <div className="">
                            {avatar ? <img src={avatar} alt={name}
                                className={`border-1 border-yellow-200 w-10 h-10 rounded-full`} />
                                : <UserIcon
                                    className={`p-2 w-10 h-10 rounded-full bg-gray-200 border-1}`} />
                            }
                        </div>
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-bold text-slate-800">{name}</h3>
                            <p className="text-xs text-slate-500">{rating}</p>
                        </div>
                        <div>
                            <span className="text-sm font-bold text-yellow-600 bg-yellow-200 px-5 py-1 rounded-full">Flagged</span>
                        </div>
                    </div>
                    <div className=" mt-2">
                        <p className="text-sm text-slate-600">{reviewMessage}</p>
                    </div>
                    <div className="flex flex-row justify-between gap-5 mt-2">
                        <button className="bg-green-600 cursor-pointer hover:bg-green-800
                             text-white text-sm font-medium w-full py-2 rounded-2xl"
                        >
                            Approve
                        </button>
                        <button className="bg-red-600 cursor-pointer hover:bg-red-800
                            text-white text-sm font-medium w-full py-2 rounded-2xl"
                        >
                            Reject
                        </button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="border-2 flex flex-col p-4 justify-between shadow-md mb-2 border-slate-200 rounded-2xl">
                    <div className=" flex flex-row  justify-between ">
                        <div className="">
                            {avatar ? <img src={avatar} alt={name}
                                className={`border-1 border-yellow-200 w-10 h-10 rounded-full`} />
                                : <UserIcon
                                    className={`p-2 w-10 h-10 rounded-full bg-gray-200 border-1}`} />
                            }
                        </div>
                        <div className="flex-1 ml-4">
                            <h3 className="text-sm font-bold text-slate-800">{name}</h3>
                            <p className="text-xs text-slate-500">{rating}</p>
                        </div>
                    </div>
                    <div className=" mt-2 pl-14">
                        <p className="text-sm text-slate-600">{reviewMessage}</p>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex flex-row justify-between items-center mb-6 p-4 ">
                <div className="flex flex-row items-center">
                    <h2 className="text-lg font-bold text-slate-800">Active Disputes</h2>
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