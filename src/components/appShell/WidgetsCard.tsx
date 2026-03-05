import { type LucideIcon } from "lucide-react";

export interface WidgetsCardProps{
    title:string;
    value:number;
    description:string;
    icon:LucideIcon;
}


export const WidgetsCard:React.FC<{data:WidgetsCardProps[]}>=({data})=>{

    const getDivColor=(title:string)=>{
        switch (title) {
            case "Urgent Jobs":
                return "bg-green-50 border-green-500";
            case "Standard Jobs":
                return "bg-blue-50 border-blue-500 ";
            case "Scheduled Jobs":
                return "bg-purple-50 border-purple-500 ";
            default:
                return "bg-slate-50 border-slate-500 ";
        }
    }

    const getTextColor=(title:string)=>{
        switch (title) {
            case "Urgent Jobs":
                return "text-green-500";
            case "Standard Jobs":
                return "text-blue-500";
            case "Scheduled Jobs":
                return "text-purple-500";
            default:
                return "text-gray-500";
        }
    }
    return(
        <>
            {data.map((item,key)=>{
                const Icon=item.icon;
                return(
                    <div 
                    key={key}
                    className={`flex flex-col gap-2 rounded-2xl h-40 
                        transition-shadow duration-300 shadow-sm shadow-gray-300 border 
                        ${getDivColor(item.title)} `}
                    >
                        <div className="flex flex-col gap-2 px-6 py-8">
                                <div className="flex flex-row justify-between">
                                    <p className="text-md font-medium">{item.title}</p>
                                    <div className="px-5"><Icon className={getTextColor(item.title)} /></div>
                                </div>
                                <div>
                                    <p className={`${getTextColor(item.title)} text-3xl font-semibold`}>{item.value} <span className="text-md font-semibold">hrs</span></p>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}