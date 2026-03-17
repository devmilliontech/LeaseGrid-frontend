import { useEffect, useState } from "react";
import { header, subject, subSubject, subSubSubject } from "../../common/style";
import { AlertCircle, Calendar, CircleAlert, Folder, MessageSquare, Star, Mail, Phone, Flag, FileText, ImageIcon, Play, Clock10, SendHorizonal, CircleCheck, X, CircleX,} from "lucide-react";
import { UserAvatar } from "../../common/UserAvtar";
import { GetDays } from "../../common/GetDays";
import Checkbox from "@mui/material/Checkbox";
import { Input } from "../../common/fromComponent/Input";
import { DropDown } from "../../common/fromComponent/DropDown";
import { Button } from "../../common/fromComponent/button";




export interface QueueViewDataProps {
    status: string;
    disputeId: number;
    issue: string;
    complainant: {
        name: string;
        avatar: string;
        role: {
            name: string;
            type?: string;
        };
        mail: string;
        phone: number;
        joinDate: string;
        rating: number;
        reviews?: number;
        file?: number;
        jobCompleted?: number;
        message?: {
            subject: string;
            file?: string[];
            issue?: string[];
            time: string;
            date: string;
        }[];
    }
    respondent: {
        name: string;
        avatar: string;
        role: {
            name: string;
            type?: string;
        };
        mail: string;
        phone: number;
        joinDate: string;
        rating: number;
        reviews?: number;
        jobCompleted?: number;
        message?: {
            subject: string,
            file?: string[],
            time: string,
            date: string,
        }[];
    }
    date: string;
    time: string;

}

interface QueueViewProps {
    data: QueueViewDataProps[];
}

const getFileType = (file: string) => {
    const ext = file.split('.').pop()?.toLowerCase();

    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext || "")) return "image";
    if (["mp4", "mov", "webm", "avi"].includes(ext || "")) return "video";
    if (["pdf", "doc", "docx", "xls", "xlsx"].includes(ext || "")) return "document";

    return "file";
};

export const GridView: React.FC<QueueViewProps> = ({ data }) => {
    const [totalOpen, setTotalOpen] = useState(0);
    const [open, setOpen] = useState(false)
    const [selectedDispute, setSelectedDispute] = useState<QueueViewDataProps | null>(null)
    const [filteredMessages, setFilteredMessages] = useState<any[]>([]);
    const [selectedDecision, setSelectedDecision] = useState<string | null>(null)
    const [selectedActions, setSelectedActions] = useState<string[]>([]);



    useEffect(() => {
        const total = data?.filter((itm) => itm.disputeId).length;
        setTotalOpen(total)
        if (selectedDispute) {
            // Combine complainant and respondent messages
            const complainantMessages = selectedDispute?.complainant?.message || [];
            const respondentMessages = selectedDispute?.respondent?.message || [];
            console.log(complainantMessages)
            const allMessages = [
                ...complainantMessages.map(msg => ({ ...msg, isComplainant: true })),
                ...respondentMessages.map(msg => ({ ...msg, isComplainant: false }))
            ];

            // Filter messages to only include those within the last 24 hours
            const filtered = allMessages.filter(message =>
                isMessageWithinLast24Hours(message.date, message.time)
            );

            // Sort the filtered messages by time difference (newest first)
            const sortedMessages = filtered.sort((a, b) => {
                const timeDiffA = isMessageWithinLast24Hours(a.date, a.time);
                const timeDiffB = isMessageWithinLast24Hours(b.date, b.time);
                return timeDiffB - timeDiffA;
            });

            // Reverse the filtered messages to show the most recent first
            setFilteredMessages(sortedMessages);
        } else {
            setFilteredMessages([]);
        }

    }, [data, selectedDispute])
    // Function to check if a message is within the last 24 hours
    const isMessageWithinLast24Hours = (messageDate: string, messageTime: string): number => {
        const messageDateTime = new Date(`${messageDate} ${messageTime}`);
        const currentDateTime = new Date();

        // Calculate the difference in time (in milliseconds)
        // Get the timestamps in milliseconds
        const messageTimestamp = messageDateTime.getTime();
        const currentTimestamp = currentDateTime.getTime();

        // Calculate the difference in time (in milliseconds)
        const timeDifference = currentTimestamp - messageTimestamp;



        return timeDifference
    };



    const handelDisputeClick = (dispute: QueueViewDataProps) => {
        setSelectedDispute(dispute)
        setOpen(true)
    }

    const getDuvColor = (status: string) => {
        switch (status) {
            case "High Risk":
                return "bg-red-50  border-red-200"
            case "Medium Risk":
                return "bg-orange-50 border-orange-200"
            case "Low Risk":
                return "bg-yellow-50 border-yellow-200"
            default:
                return "bg-gray-50 border-gray-200"
        }
    }
    const statusColor = (status: string) => {
        switch (status) {
            case "High Risk":
                return "bg-red-100  text-red-600"
            case "Medium Risk":
                return "bg-orange-100 text-orange-600"
            case "Low Risk":
                return "bg-yellow-100 text-yellow-600"
            default:
                return "bg-gray-50 border-gray-200"
        }
    }

    const countFiles = (messages?: any[]) =>
        messages?.reduce((total, msg) => total + (msg.file?.length || 0), 0) || 0;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 w-full h-full pb-4 ">
            <div className=" px-4 py-2 rounded-2xl bg-white w-80">
                <div className="flex flex-row my-4 justify-between">
                    <p className={`${header}`}>Dispute Queue</p>
                    <p className="px-3 py-2 bg-red-50 text-red-600 rounded-full text-xs font-semibold">{totalOpen} open</p>
                </div>
                <div className="flex flex-col gap-4 overflow-y-auto scrollbar-hide h-260" >
                    {data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => handelDisputeClick(item)}
                                className={`${getDuvColor(item.status)} border-2 rounded-2xl px-3 py-3 cursor-pointer hover:shadow-lg`}
                            >
                                <div className="flex felx-row  justify-between items-center">
                                    <p className={`px-3 py-2 ${statusColor(item.status)} rounded-full text-xs font-semibold`}>{item.status}</p>
                                    <AlertCircle className={`w-4 h-4 ${statusColor(item.status)} rounded-full`} />
                                </div>
                                <div className="px-1 py-2">
                                    <p className={`${subject}`}>job #{item.disputeId}</p>
                                    <p className={`${subSubSubject} whitespace-nowrap`}>{item.issue}</p>

                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row items-center gap-2 w-full">
                                        <UserAvatar img={`${item.complainant.avatar}`} className="w-7 h-7 border border-slate-300 " />
                                        <p className={`${subSubSubject}`}>VS</p>
                                        <UserAvatar img={`${item.respondent.avatar}`} className="w-7 h-7 border border-slate-300  " />
                                    </div>
                                    <div className="w-full">
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between py-4">
                                    <div className="flex flex-row items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                        <p className={`${subSubSubject}`}>{GetDays(item.date, item.time)}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-1">
                                        <Folder className="w-3.5 h-3.5 text-slate-500" />
                                        <p className={`${subSubSubject}`}>{countFiles(item.complainant.message) + countFiles(item.respondent.message)}</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-1">
                                        <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                                        <p className={`${subSubSubject}`}>{(item.complainant.message?.length || 0) + (item.respondent.message?.length || 0)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-white w-full rounded-2xl ">
                {selectedDispute && open ? (
                    <div className="flex flex-col gap-4 px-4 py-4 mt-2">
                        {/* Dispute Header */}
                        <div className="flex flex-row justify-between items-center border-b-2 border-slate-200 pb-6">
                            <div className=" w-full">
                                <div className="flex flex-row gap-2 pb-2">
                                    <p className={header}>Dispute #{selectedDispute.disputeId}</p>
                                    <p className={`${statusColor(selectedDispute.status)} px-3 py-2 text-xs font-medium rounded-full`}> {selectedDispute.status}</p>
                                </div>
                                <p className={subSubSubject}>{selectedDispute.issue} - {selectedDispute.complainant.message?.[0]?.issue?.join(" & ")} Dispute</p>
                            </div>
                            <div className=" w-full flex justify-end pr-5 ">
                                <CircleX className={`w-5 h-5 rounded-full cursor-pointer bg-red-100 text-red-600`} 
                                    onClick={() => {setSelectedDispute(null); setOpen(false);}}
                                />
                            </div>
                        </div>
                        {/* Parties Involved */}
                        <div className="flex flex-col gap-4">
                            <p className={subject}>Parties Involved</p>
                            <div className="flex flex-row justify-between items-center gap-4">
                                <div className={`w-full bg-blue-50  rounded-2xl border border-blue-200 p-4`}>
                                    <div className="flex flex-row justify-between items-center">
                                        <p className={`bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-xs font-semibold`}>Complainant</p>
                                        <p className={`text-xs font-medium text-blue-400 cursor-pointer hover:text-blue-600`}>View profile</p>
                                    </div>
                                    <div className="flex flex-row gap-2 pt-4">
                                        <div>
                                            <UserAvatar
                                                img={`${selectedDispute.complainant.avatar}`}
                                                className="w-15 h-15 border-2 border-blue-300"
                                            />
                                        </div>
                                        <div>
                                            <p className={`${subject}`}>{selectedDispute.complainant.name}</p>
                                            <p className={`${subSubSubject}`}>{selectedDispute.complainant.role.type}</p>
                                            <div className="flex flex-row">
                                                <div className="flex flex-row items-center gap-1">
                                                    <Star className="w-3.5 h-3.5 text-yellow-500" />
                                                    <p className={`${subSubSubject}`}>{selectedDispute.complainant.rating}</p>
                                                </div>
                                                {
                                                    selectedDispute.complainant.reviews ? (
                                                        <p className={`${subSubSubject}`}>({selectedDispute.complainant.reviews} Reviews)</p>
                                                    ) : (
                                                        <p className={`${subSubSubject}`}>({selectedDispute.complainant.file} Documents)</p>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 pt-5">
                                        <div className="flex flex-row gap-2">
                                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.complainant.mail}</p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.complainant.phone}</p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.complainant.joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={`w-full bg-purple-50 border border-purple-200  rounded-2xl p-4`}>
                                    <div className="flex flex-row justify-between items-center">
                                        <p className={`bg-purple-100 text-purple-600 px-3 py-2 rounded-full text-xs font-semibold`}>Respondent</p>
                                        <p className={`text-xs font-medium text-purple-400 cursor-pointer hover:text-purple-600`}>View profile</p>
                                    </div>
                                    <div className="flex flex-row gap-2 pt-4">
                                        <div>
                                            <UserAvatar
                                                img={`${selectedDispute.respondent.avatar}`}
                                                className="w-15 h-15 border-2 border-purple-300 "
                                            />
                                        </div>
                                        <div>
                                            <p className={`${subject}`}>{selectedDispute.respondent.name}</p>
                                            <p className={`${subSubSubject}`}>Licensed {selectedDispute.respondent.role.type}</p>
                                            <div className="flex flex-row">
                                                <div className="flex flex-row items-center gap-1">
                                                    <Star className="w-3.5 h-3.5 text-yellow-500" />
                                                    <p className={`${subSubSubject}`}>{selectedDispute.respondent.rating}</p>
                                                </div>
                                                <p className={`${subSubSubject}`}>({selectedDispute.respondent.jobCompleted} Jobs)</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1 pt-5">
                                        <div className="flex flex-row gap-2">
                                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.respondent.mail}</p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <Phone className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.respondent.phone}</p>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                            <p className={`${subSubSubject}`}>{selectedDispute.respondent.joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Dispute Timeline & Messages */}
                        <div className="flex flex-col gap-4">
                            <p className={`${header}`}>Dispute Timeline & Messages</p>
                            {selectedDispute.complainant.message &&
                                <div className="bg-slate-100 rounded-2xl p-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide  h-100">
                                    <div className="flex flex-row gap-4 w-full">
                                        <div className=" p-2 rounded-full bg-blue-100 h-fit">
                                            <Flag className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div className="bg-white w-full rounded-2xl">
                                            <div className="flex flex-col px-4 py-2 gap-2">
                                                <div className="flex flex-row justify-between items-center">
                                                    <p className={`${subject}`}>Dispute Created</p>
                                                    <p className={`${subSubSubject}`}>{selectedDispute.date} at {selectedDispute.time}</p>
                                                </div>
                                                <p className={`${subSubSubject}`}>{selectedDispute.complainant.name} opened a dispute regarding {selectedDispute.issue}.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {filteredMessages
                                        .map((message, index) => (
                                            <div key={index} className={`flex flex-row gap-4 w-full`}>
                                                <div>
                                                    <UserAvatar
                                                        img={message.isComplainant ? selectedDispute.complainant.avatar : selectedDispute.respondent.avatar}
                                                        className={`w-10 h-10 border-2 ${message.isComplainant ? 'border-blue-300' : 'border-purple-300'}`}
                                                    />
                                                </div>
                                                <div className={` w-full rounded-2xl border ${message.isComplainant ? 'bg-blue-50 border-blue-300' : 'bg-purple-50 border-purple-300'}`}>
                                                    <div className="flex flex-col px-4 py-2 gap-2">
                                                        <div className="flex flex-row justify-between items-center">
                                                            <p className={`${subject}`}>{message.isComplainant ? selectedDispute.complainant.name : selectedDispute.respondent.name}</p>
                                                            <p className={`${subSubSubject}`}>{message.date} at {message.time}</p>
                                                        </div>
                                                        <p className={`${subSubSubject}`}>{message.subject}</p>
                                                    </div>
                                                    <div className="flex flex-row gap-4 p-4">
                                                        {Array.isArray(message.file) && message.file.length > 0 ? (
                                                            message.file.map((file: string, index: number) => {
                                                                const type = getFileType(file);

                                                                return (
                                                                    <div
                                                                        onClick={() => {

                                                                        }}
                                                                        key={index}
                                                                        className={`flex flex-row gap-2 bg-white px-3 py-1 rounded-lg border 
                                                                            cursor-pointer 
                                                                            ${message.isComplainant ? "border-blue-300" : "border-purple-300"
                                                                            }`}
                                                                    >
                                                                        {type === "image" && (
                                                                            <ImageIcon
                                                                                className={`w-3.5 h-3.5 ${message.isComplainant ? "text-blue-500" : "text-purple-500"
                                                                                    }`}
                                                                            />
                                                                        )}

                                                                        {type === "video" && (
                                                                            <Play
                                                                                className={`w-3.5 h-3.5 ${message.isComplainant ? "text-blue-500" : "text-purple-500"
                                                                                    }`}
                                                                            />
                                                                        )}

                                                                        {type === "document" && (
                                                                            <FileText
                                                                                className={`w-3.5 h-3.5 ${message.isComplainant ? "text-blue-500" : "text-purple-500"
                                                                                    }`}
                                                                            />
                                                                        )}

                                                                        <p className={`${subSubSubject}`}>{file}</p>
                                                                    </div>
                                                                );
                                                            })
                                                        ) : (
                                                            <div
                                                                className={`flex flex-row gap-2`}
                                                            >
                                                                {message.isComplainant ? (
                                                                    Array.isArray(message.issue) &&
                                                                    message.issue.map((reason: string, index: number) => (
                                                                        <p key={index}
                                                                            className={`${subSubSubject} !text-blue-600 px-3 py-1 bg-blue-200 rounded-lg`}
                                                                        >
                                                                            Issue: {reason}
                                                                        </p>
                                                                    ))
                                                                ) : (
                                                                    <p className={`${subSubSubject} !text-purple-600 px-3 py-1 bg-purple-200 rounded-lg`}>Response</p>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            }
                        </div>
                        {/* Evidence Gallery */}
                        <div className="flex flex-col gap-4 py-4">
                            <p className={`${header}`}>Evidence Gallery</p>
                            <div className="flex flex-row gap-4 justify-between">
                                <div className="bg-slate-100  w-full rounded-2xl h-30 flex items-center justify-center">
                                    <FileText className="w-10 h-10  text-center" />
                                </div>
                                <div className="bg-slate-100  w-full rounded-2xl h-30 flex items-center justify-center">
                                    <FileText className="w-10 h-10  text-center" />
                                </div>
                                <div className="bg-slate-100  w-full rounded-2xl h-30 flex items-center justify-center">
                                    <FileText className="w-10 h-10  text-center" />
                                </div>
                                <div className="bg-slate-100 cursor-pointer w-full rounded-2xl h-30 flex items-center justify-center">
                                    View ALL
                                </div>
                            </div>
                        </div>
                        {/* Admin Decision Panel */}
                        <div className="bg-blue-50 border-2 border-blue-200 py-5 p-4 rounded-2xl h-full flex flex-col">
                            <p className={`${header}`}>Admin Decision Panel</p>
                            <div className="flex flex-row justify-between py-4 gap-4">
                                <div className="w-full flex flex-col gap-2">
                                    <p className={`${subSubject}`}>Resolution Outcome</p>
                                    <div className="flex flex-col gap-4 ">
                                        <div className="flex flex-row items-center gap-2 p-2 border-2 border-slate-300 rounded-2xl bg-white">
                                            <Checkbox
                                                checked={selectedDecision === "favor_complainant"}
                                                onChange={() => setSelectedDecision(selectedDecision === "favor_complainant" ? null : "favor_complainant")}
                                            />
                                            <div className="flex flex-col">
                                                <p className={`${subSubject}`}>Favor Complainant</p>
                                                <p className={`${subSubSubject}`}>{selectedDispute?.complainant.name} wins the dispute</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 p-2 border-2 border-slate-300 rounded-xl bg-white">
                                            <Checkbox
                                                checked={selectedDecision === "favor_respondent"}
                                                onChange={() => setSelectedDecision(selectedDecision === "favor_respondent" ? null : "favor_respondent")}
                                            />
                                            <div className="flex flex-col">
                                                <p className={`${subSubject}`}>Favor Respondent</p>
                                                <p className={`${subSubSubject}`}>{selectedDispute?.respondent.name} wins the dispute</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 p-2 border-2 border-slate-300 rounded-2xl bg-white">
                                            <Checkbox
                                                checked={selectedDecision === "split_decision"}
                                                onChange={() => setSelectedDecision(selectedDecision === "split_decision" ? null : "split_decision")}
                                            />
                                            <div className="flex flex-col">
                                                <p className={`${subSubject}`}>Split Decision</p>
                                                <p className={`${subSubSubject}`}>Partial resolution for both parties</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2 p-2 border-2 border-slate-300 rounded-2xl bg-white">
                                            <Checkbox
                                                checked={selectedDecision === "mediation_required"}
                                                onChange={() => setSelectedDecision(selectedDecision === "mediation_required" ? null : "mediation_required")}
                                            />
                                            <div className="flex flex-col">
                                                <p className={`${subSubject}`}>Mediation Required</p>
                                                <p className={`${subSubSubject}`}>Schedule mediation call</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className={`${subSubject}`}>Financial Resolution</p>
                                    <div className="flex flex-col gap-4 ">
                                        <div>
                                            <Input
                                                type="number"
                                                label="Refund Amount"
                                                placeholder="$ 0.00"
                                                className="w-full border-2 border-slate-300 rounded-xl bg-white"
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                type="number"
                                                label="Payment to Tradie"
                                                placeholder="$ 0.00"
                                                className="w-full border-2 border-slate-300 rounded-xl bg-white"
                                            />
                                        </div>
                                        <div>
                                            <DropDown
                                                label="Platform Fee Adjustment"
                                                options={["No Adjustment", "Waive Platform Fee", "50% Refund", "Custom Amount"]}
                                                className="w-full border-2 border-slate-300 rounded-xl py-3 bg-white"
                                                onChange={(value) => console.log(value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-2">
                                <Input
                                    type="textarea"
                                    label="Admin Resolution Notes"
                                    placeholder="Enter detailed reasoning for your decision. this will shared with both parties...."
                                    className="!h-30 border-2 border-slate-300 bg-white !py-2"
                                />
                            </div>
                            <div className="pb-2">
                                <p className={`${header}`}>Follow-up Actions</p>
                                <div className="flex flex-col gap-4 py-4">
                                    <div className="flex flex-row gap-4">
                                        <div className="w-full bg-white rounded-xl border-2 border-slate-300 flex flex-row items-center p-2 h-10">
                                            <Checkbox
                                                sx={{
                                                    color: "purple",
                                                    '&.Mui-checked': {
                                                        color: "purple",
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: "50%",
                                                    },
                                                }}
                                                checked={selectedActions.includes("send_warning_tradie")}
                                                onChange={() => setSelectedActions(selectedActions.includes("send_warning_tradie") ? selectedActions.filter((action) => action !== "send_warning_tradie") : [...selectedActions, "send_warning_tradie"])}
                                            />
                                            <p className={`${subSubject}`}>Send warning to tradie</p>
                                        </div>
                                        <div className="w-full bg-white rounded-xl p-2 border-2 border-slate-300 flex flex-row items-center h-10">
                                            <Checkbox
                                                checked={selectedActions.includes("flag_quality_review")}
                                                onChange={() => setSelectedActions(selectedActions.includes("flag_quality_review") ? selectedActions.filter((action) => action !== "flag_quality_review") : [...selectedActions, "flag_quality_review"])}
                                                sx={{
                                                    color: "purple",
                                                    '&.Mui-checked': {
                                                        color: "purple",
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: "50%",
                                                    },
                                                }}
                                            />
                                            <p className={`${subSubject}`}>Flag for quality review</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="w-full bg-white rounded-xl p-2 border-2 border-slate-300 flex flex-row items-center h-10">
                                            <Checkbox
                                                checked={selectedActions.includes("user-rating")}
                                                onChange={() => setSelectedActions(selectedActions.includes("user-rating") ? selectedActions.filter((action) => action !== "user-rating") : [...selectedActions, "user-rating"])}
                                                sx={{
                                                    color: "purple",
                                                    '&.Mui-checked': {
                                                        color: "purple",
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: "50%",
                                                    },
                                                }}
                                            />
                                            <p className={`${subSubject}`}>Update user ratings</p>
                                        </div>
                                        <div className="w-full bg-white rounded-xl p-2 border-2 border-slate-300 flex flex-row items-center h-10">
                                            <Checkbox
                                                checked={selectedActions.includes("require_reinspection")}
                                                onChange={() => setSelectedActions(selectedActions.includes("require_reinspection") ? selectedActions.filter((action) => action !== "require_reinspection") : [...selectedActions, "require_reinspection"])}
                                                sx={{
                                                    color: "purple",
                                                    '&.Mui-checked': {
                                                        color: "purple",
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        width: 15,
                                                        height: 15,
                                                        borderRadius: "50%",
                                                    },
                                                }}
                                            />
                                            <p className={`${subSubject}`}>Require re-inspection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <Button
                                    label="Save as Draft"
                                    onClick={() => { }}
                                    className="w-full rounded-full py-2"
                                    icon={Clock10}
                                    color="secondary"
                                    variant="contained"
                                />
                                <Button
                                    label="Request Mediation"
                                    onClick={() => { }}
                                    className="w-full rounded-full py-2"
                                    icon={SendHorizonal}
                                    color="info"
                                    variant="contained"
                                />
                                <Button
                                    label="Finalize Decision"
                                    onClick={() => { }}
                                    className="w-full rounded-full py-2"
                                    icon={CircleCheck}
                                    color="success"
                                    variant="contained"
                                />
                            </div>
                        </div>
                    </div>

                ) : <p className={`${header} text-center mt-10`}>Click The Dispute To View Details</p>}
            </div>
        </div>
    )
}   