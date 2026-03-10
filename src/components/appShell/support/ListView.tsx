import { CircleCheck } from 'lucide-react';
import ProgressBar from '../../common/ProgressBar';
import { subject, subSubject } from '../../common/style';
import { UserAvatar } from '../../common/UserAvtar'
import { Button } from '../../common/fromComponent/button';

export interface TicketProps {
    ticket: {
        id: number;
        subject: string;
        subSubject: string;
        status: string;
        priority: string;
        CreatedOn: string;
        sla: number;

    }
    ticketAssignee?: {
        name: string;
        avatar: string;
    };
    ticketRequestor?: {
        name: string;
        avatar: string;
    };
}


export interface ListViewProps {
    data: TicketProps[];
}

const headerProps = [
    "Ticket ID",
    "Subject",
    "Requestor",
    "Assignee",
    "Status",
    "Created On",
    "Priority",
    "SLA",
    "View",
]

export const ListView: React.FC<ListViewProps> = ({ data }) => {


    const getRemainingPercent = (hoursLeft: number) => {
        const total = 24
        const remaining = total - hoursLeft
        return (remaining / total) * 100
    }

    const rowList='flex w-full justify-center items-center'

    const getPriorityColor = (priority?: string) => {
        switch (priority) {
            case "Critical":
                return "text-red-600 bg-red-100";
            case "High":
                return "text-orange-600 bg-orange-100";
            case "Medium":
                return "text-yellow-600 bg-yellow-100";
            case "Resolved":
                return "text-green-600 bg-green-100";
            default:
                return "text-gray bg-gray";
        }
    }

    const getStatus = (status: string) => {
        switch (status) {
            case "New":
                return "text-orange-600 bg-orange-100"
            case "In Progress":
                return "text-blue-600 bg-blue-100"
            case "Waiting":
                return "text-yellow-600 bg-yellow-100"
            case "Resolved":
                return "text-green-600 bg-green-100"
            default:
                return "text-gray bg-gray";
        }
    }

    return (
        <div className="w-full rounded-2xl">
            <div className="flex flex-row justify-between border-b border-slate-300 py-6 bg-white rounded-t-2xl">
                {headerProps.map((item, key) =>
                    <p key={key} className={` ${subject} ${rowList}`}>{item}</p>

                )}

            </div>
            <div className="flex flex-col rounded-2xl">
                {data?.map((ticket) => {
                    const ticketData = ticket.ticket
                    const percent = getRemainingPercent(ticketData.sla ?? 0)
                    return (
                        <div key={ticket.ticket?.id} className="flex flex-row justify-between py-8 bg-white  border-b border-slate-300">
                            <p className={`${rowList} text-teal-400`}>#TKT-{ticket.ticket?.id}</p>
                            <div className={`${rowList} flex-col`}>
                                <p className={`${subject}`}>{ticket.ticket?.subject}</p>
                                <p className={`${subSubject}`}>{ticket.ticket?.subSubject}</p>
                            </div>
                            <div className={`${rowList} flex-row gap-2`}>
                                {<UserAvatar img={ticket.ticketRequestor?.avatar} className='w-8 h-8' />}
                                <p className={`${subSubject}`}>{ticket.ticketRequestor?.name}</p>
                            </div>
                            {ticket.ticketAssignee ? <div className={`${rowList} flex-row gap-2`}>
                                {<UserAvatar img={ticket.ticketAssignee?.avatar} className='w-8 h-8' />}
                                <p className={`${subSubject}`}>{ticket.ticketAssignee?.name}</p>
                            </div>
                                :
                                <div className={`${rowList}`}>
                                    <p className={`${subSubject}`}>Unassigned</p>
                                </div>
                            }
                            <div className={`${rowList}`}>
                                <p className={`px-4 py-2 rounded-full font-medium text-xs ${getStatus(ticket.ticket?.status)}`}>{ticket.ticket?.status}</p>
                            </div>
                            <div className={`${rowList}`}>
                                <p className={`${subSubject}`}>{ticket.ticket?.CreatedOn} ago</p>
                            </div>
                            <div className={`${rowList}`}>
                                <p className={`px-4 py-2 rounded-full font-semibold text-xs ${getPriorityColor(ticket.ticket?.priority)}`}>{ticket.ticket?.priority}</p>
                            </div>
                            {ticketData.status !== "Resolved" ?
                                <div className={`${rowList} flex-row`}>
                                    <div className=' w-full'>
                                        <ProgressBar value={percent} />
                                    </div>
                                    <p className={`${subSubject}`}>{ticket.ticket?.sla}h left</p>
                                </div>
                                :
                                <div className={`${rowList} flex-row`}>
                                    <div className=' w-full'>
                                        <CircleCheck className='text-green-500' />
                                    </div>
                                    <p className={`text-green-500`}>{ticket.ticket?.sla}m resolution</p>
                                </div>
                            }
                            <div className={`${rowList}`}>
                                <p className='text-teal-500 cursor-pointer hover:text-teal-700'>View</p>
                            </div>
                        </div>
                    )
                })}
                <div className='bg-white rounded-2xl py-3 p-4 flex flex-row justify-between itms-center'>
                    <div className='flex flex-row'>
                        <p>Showing 1 - 3 of 456 tickets</p>
                        <p> </p>
                    </div>
                    <div className='flex gap-2'>
                        <Button variant='contained' label='Previous' onClick={() => { }} className='rounded-lg' />
                        <Button variant='contained' label='Next' onClick={() => { }} className='rounded-lg' />
                    </div>
                </div>
            </div>
        </div>
    );
};