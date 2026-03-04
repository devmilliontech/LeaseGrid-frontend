import Checkbox from "@mui/material/Checkbox";
import { CalendarDays, Clock, House, Mail, MapPin, Phone, UserIcon, type LucideIcon } from "lucide-react";
import { Button } from "./fromComponent/button";
import { useState } from "react";
import Modal from "./Modal";



export interface UserListCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    location: string;
    postDate: string;
    time: string;
    badgeText: string;
    status: string;
    tradie?: { name: string, avatar: string, type: string, jobsCompleted: number, status: string, distance: number }
    budget: number;
    jobRequest: { name: string, avatar: string, email: string, phone: string, role: string, properties?: number }
}

interface ListCardProps {
    data: UserListCardProps[];
}


export const UserListCard: React.FC<ListCardProps> = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<UserListCardProps>();
    const [Icon, setIcon] = useState<LucideIcon>();
    const handelClick = (item: UserListCardProps, Icon: LucideIcon) => {
        setSelectedItems(item);
        setIcon(Icon);
        setOpen(true);
    };

    const getBadgeColor = (badgeText: string) => {
        switch (badgeText) {
            case "Urgent":
            case "Disputed":
                return "bg-red-100 text-red-600";
            case "In Progress":
                return "bg-yellow-100 text-yellow-600";
            case "Completed":
                return "bg-green-100 text-green-600";
            case "Scheduled":
                return "bg-blue-100 text-blue-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    const getButton = (item: UserListCardProps, status: string, Icon: LucideIcon) => {
        switch (status) {
            case "Urgent Priority":
                return <Button label="Assign Tradie" onClick={() => { handelClick(item, Icon) }} color="primary" className="px-10 py-3 " />;
            case "in_progress":
                return <Button variant="outlined" label="View Details" onClick={() => { handelClick(item, Icon) }} className="px-10 py-3 " />;
            case "completed":
                return <Button variant="outlined" label="View Details" onClick={() => { handelClick(item, Icon) }} className="px-10 py-3 " />;
            case "Disputed":
                return <Button color="danger" label="View Details" onClick={() => { handelClick(item, Icon) }} className="px-10 py-3 " />;
            case "Scheduled":
                return <Button variant="outlined" label="View Details" onClick={() => { handelClick(item, Icon) }} className="px-10 py-3 " />
            default:
                return <Button color="secondary" label="View Details" onClick={() => { handelClick(item, Icon) }} className="px-10 py-3 " />;
        }
    };

    const getText = (status: string) => {
        switch (status) {
            case "awaiting_tradie":
                return "Budget";
            case "in_progress":
                return "Total cost";
            case "Scheduled":
                return "Service fee";
            case "disputed":
                return "Disputed";
            case "Completed":
                return "Paid";
            default:
                return "Amount";
        }

    }
    const getMoneyColor = (status: string) => {
        switch (status) {
            case "Disputed":
                return "text-red-600";
            case "completed":
                return "text-green-600";
            default:
                return "text-teal-600";
        }
    }
    return (
        <>
            <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-1 gap-4 ">
                {data.map((item, key) => {
                    const Icon = item.icon
                    return (
                        <div key={key}
                            className="flex flex-col gap-2 bg-white rounded-2xl h-60 
                        transition-shadow duration-300 mb-5 shadow-sm shadow-gray-300 relative"
                        >
                            <div className="flex flex-row items-center gap-2 rounded-2xl p-2">
                                <div className="rounded-2xl">
                                    <Checkbox />
                                </div>
                                <div className="flex flex-row items-center gap-6  rounded-2xl">
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <span className={`${getBadgeColor(item.badgeText)} px-2 py-1 rounded-full font-medium text-sm`}>{item.badgeText}</span>
                                </div>
                            </div>
                            <div className="rounded-2xl px-13">
                                <p className="text-sm text-slate-500">{item.description}</p>
                            </div>
                            <div className="flex flex-row items-center gap-6 px-13">
                                <div className="rounded-2xl flex flex-row items-center gap-2">
                                    <MapPin className="w-5 h-5 text-teal-500" />
                                    <p className="text-sm text-slate-500">{item.location}</p>
                                </div>
                                <div className="rounded-2xl flex flex-row items-center gap-2">
                                    <CalendarDays className="w-5 h-5 text-teal-500" />
                                    <p className="text-sm text-slate-500">{item.postDate}</p>
                                </div>
                                <div className="rounded-2xl flex flex-row items-center gap-2">
                                    <Clock className="w-5 h-5 text-teal-500" />
                                    <p className="text-sm text-slate-500">{item.time}</p>
                                </div>
                            </div>

                            <div
                                className=" flex flex-row justify-between items-center gap-6
                                 w-full px-8 border-slate-200 border-t pt-2 absolute bottom-5 "
                            >
                                <div className="flex flex-row items-center gap-6 ">
                                    <div className="flex flex-row items-center gap-2">
                                        <div className={`w-10 h-10 rounded-full  
                                          flex items-center justify-center
                                          border-2 border-teal-200 `}
                                        >
                                            {item.jobRequest.avatar ? <img src={item.jobRequest.avatar} alt=""
                                                className="rounded-full w-full 
                                             h-full " />
                                                : <UserIcon
                                                    className="w-full h-full p-2 rounded-full bg-gray-200" />
                                            }
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="text-sm font-medium">{item.jobRequest.name}</p>
                                            <p className="text-xs text-slate-500 font-medium">{item.jobRequest.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-slate-300 text-2xl items-center">|</span>
                                    {/* Tradie details */}
                                    {item.tradie ? (
                                    <div className="flex flex-row items-center gap-2">
                                        <div className={`w-10 h-10 rounded-full  
                                          flex items-center justify-center
                                          border-2 border-teal-200 `}
                                        >
                                            {item.tradie?.avatar ? <img src={item.tradie?.avatar} alt=""
                                                className="rounded-full w-full 
                                             h-full " />
                                                : <UserIcon
                                                    className="w-full h-full p-2 rounded-full bg-gray-200" />
                                            }
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{item.tradie?.name}</p>
                                            <p className="text-xs text-slate-500 font-medium">{item.tradie?.type}</p>
                                        </div>
                                    </div>
                                    ) : (
                                        <div className="flex flex-row items-center gap-2">
                                            <div className={`w-10 h-10 rounded-full  
                                              flex items-center justify-center
                                              border-2 border-teal-200 `}
                                            >
                                                <UserIcon
                                                    className="w-full h-full p-2 rounded-full bg-gray-200" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">No Tradie Assigned</p>
                                                <p className="text-xs text-slate-500 font-medium">Awaiting Assignment</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-row items-center gap-8">
                                    <div className="flex flex-col">
                                        <p className={`text-xl font-medium ${getMoneyColor(item.status)}`}>${item.budget}</p>
                                        <span className="text-xs text-gray-500">{getText(item.status)}</span>
                                    </div>
                                    <div>
                                        {getButton(item, item.status, Icon)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {open && selectedItems && (

                <Modal isOpen={open} onClose={() => setOpen(false)} title="Job Details" >
                    <div className="p-2 flex flex-col overflow-y-auto h-[calc(100vh-110px)] scrollbar-hide">
                        <div className="flex flex-col gap-5 px-4 mt-5 border-b border-slate-200 pb-5">
                            <div className="flex flex-row items-center gap-2 ">
                                <div>
                                    {Icon && <Icon className={`${getBadgeColor(selectedItems.badgeText)} rounded-2xl p-4 w-full h-full`} />}
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">{selectedItems.title}</p>
                                    <p className="text-sm text-slate-500">Job ID: #JOB-8472</p>
                                </div>
                            </div>
                            <div>
                                <span className={`${getBadgeColor(selectedItems.badgeText)} px-8 py-2 rounded-full font-medium text-md`}>{selectedItems.status}</span>
                            </div>
                            <div>
                                <h5 className="text-sm font-medium text-slate-600">Description</h5>
                                <p className="text-sm text-slate-500">{selectedItems.description}</p>
                            </div>
                            <div>
                                <h5 className="text-sm font-medium text-slate-600">Location</h5>
                                <div className="flex flex-row items-center gap-2">
                                    <MapPin className="w-4 h-4 text-teal-400"/> 
                                    <p className="text-sm text-slate-500">{selectedItems.location}</p>
                                </div>
                               
                            </div>
                            <div className="flex flex-row justify-between w-1/2">
                                <div className="flex flex-col">
                                    <h5 className="text-sm font-medium text-slate-600">Posted</h5>
                                    <p className="text-sm text-slate-500">{selectedItems.postDate}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs text-gray-500">{getText(selectedItems.status)}</span>
                                    <p className={`text-xl font-medium ${getMoneyColor(selectedItems.status)}`}>${selectedItems.budget}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 px-4 mt-5 border-b border-slate-200 pb-5">
                            <h6 className="text-sm font-semibold text-slate-800">Client Information</h6>
                            <div className="flex flex-row items-center gap-2 ">
                                <div className={`w-15 h-15 rounded-full  
                                                flex items-center justify-center border border-teal-200`}
                                >
                                    {selectedItems.jobRequest.avatar ? <img src={selectedItems.jobRequest.avatar} alt=""
                                        className="rounded-full w-full 
                                             h-full " />
                                    : <UserIcon
                                        className="w-full h-full p-2 rounded-full bg-gray-200" />
                                    }
                                </div>
                                <div>
                                    <p className="text-md font-semibold">{selectedItems.jobRequest.name}</p>
                                    <p className="text-xs text-slate-500">{selectedItems.jobRequest.role}</p>  
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <div className="flex flex-row items-center gap-2 ">
                                    <Mail className="text-teal-300 w-4 h-4"/>
                                    <p className="text-sm text-slate-500">{selectedItems.jobRequest.email}</p>
                                </div>
                                <div className="flex flex-row items-center gap-2 ">
                                    <Phone className="text-teal-300 w-4 h-4"/>
                                    <p className="text-sm text-slate-500">{selectedItems.jobRequest.phone}</p>
                                </div>
                                {selectedItems.jobRequest.properties &&
                                    <div className="flex flex-row items-center gap-2 ">
                                        <House className="text-teal-300 w-4 h-4"/>    
                                        <p className="text-sm text-slate-500">{selectedItems.jobRequest.properties} Properties Managed</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div>
                            <h6 className="text-sm font-semibold text-slate-800">Assignment Status</h6>
                            <div>
                                
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}