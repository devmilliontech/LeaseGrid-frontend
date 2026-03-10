import { UserAvatar } from "../../common/UserAvtar";
import { subject,subSubject } from "../../common/style";

export interface agentData {
    name: string;
    role: string;
    avatar?: string;
    totalResolved: number;
}

interface AgentCardProps {
    data: agentData[];
}

export const AgentCard: React.FC<AgentCardProps> = ({ data }) => {

    const getDivColor = (role: string) => {
        switch (role) {
            case "Senior Support":
                return "bg-teal-50 border-teal-500 border";
            default:
                return "bg-slate-50";
        }
    }
    const getTextColor = (role: string) => {
        switch (role) {
            case "Senior Support":
                return "text-teal-500";
            default:
                return "text-slate-500";
        }
    }
    return (
        <div className="flex flex-col gap-2">
            {data.map((data) => (
                <div className={`flex items-center space-x-4 py-4 px-4 rounded-lg ${getDivColor(data.role)}`}>
                    <UserAvatar img={data.avatar} />
                    <div>
                        <p className={`${subject}`}>{data.name}</p>
                        <p className={`${subSubject}`}>{data.role} Agent</p>
                    </div>
                    <div className="ml-auto">
                        <p className={`${getTextColor(data.role)} text-lg font-bold`}>{data.totalResolved}</p>
                        <p className={`${subSubject}`}>Resolved</p>
                    </div>
                </div>
            ))}
        </div>

    )
};