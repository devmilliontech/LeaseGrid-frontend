import Checkbox from "@mui/material/Checkbox";
import type { ListViewDataProps } from "./ListView";
import { UserAvatar } from "../../common/UserAvtar";
import { subSubject, subSubSubject } from "../../common/style";

interface GridViewProps {
    data: ListViewDataProps[];
}

export const GridView: React.FC<GridViewProps> = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {data.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md shadow-gray-100 p-4 border border-red-300">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-row justify-between w-full items-center">
                            <div>
                                <Checkbox size="small" color="secondary" />
                            </div>
                            <div>
                                <p>{item.Piority}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
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
                </div>
                </div>
    ))
}
        </div >
    );
}