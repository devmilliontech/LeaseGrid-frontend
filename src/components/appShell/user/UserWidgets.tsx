import { UserIcon, EyeIcon, CircleCheck, CircleX, X } from "lucide-react";
import { Button } from "../../common/fromComponent/button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { header } from "../../common/style";
import { UserAvatar } from "../../common/UserAvtar";


export interface RegistrationList {
     avatar?: string;
     name: string;
     role: string;
     status: string;
     registrationTime: string;
     registrationDate: string;
}

interface RegistrationListProps {
     data: RegistrationList[];
}

export const RegistrationTable: React.FC<RegistrationListProps> = ({ data }) => {

     const getStatusColor = (status: string) => {
          switch (status) {
               case "Verified":
                    return "bg-green-200";
               case "Pending":
                    return "bg-yellow-200";
               default:
                    return "bg-gray-200";
          }
     };
     const getStatusBorderColor = (status: string) => {
          switch (status) {
               case "Pending":
                    return "border-yellow-200 bg-yellow-50";
               case "Verified":
                    return "border-green-200 bg-green-50";
               default:
                    return "border-gray-200 bg-gray-50";
          }
     };
     const getProfileBorderColor = (status: string) => {
          switch (status) {
               case "Verified":
                    return "border-green-400";
               case "Pending":
                    return "border-yellow-400";
               case "Suspend":
                    return "border-red-400";
               default:
                    return "border-gray-200";
          }
     }
     return (
          <div className="flex flex-col gap-5 h-full w-full  bg-white rounded-lg">
               <div className="flex flex-row justify-between items-center p-2">
                    <h4 className={header}>Recent Registrations</h4>
                    <Button
                         label="View All"
                         onClick={() => { }}
                         color="primary"
                         className="px-5 py-2 rounded-xl"
                    />
               </div>
               {data.map((item, index) => {
                    return (
                         <div key={index}
                              className={`flex flex-row gap-5 border ${getStatusBorderColor(item.status)} justify-between 
                              items-center p-5 rounded-lg`}
                         >
                              <div className="p-2 rounded-full">
                                   {item.avatar ? <img src={item.avatar} alt=""
                                        className={`rounded-full w-15 
                                             h-15 border-1 ${getProfileBorderColor(item.status)}`} />
                                        : <UserIcon
                                             className={`rounded-full w-15 p-2
                                             h-15 border-1 ${getProfileBorderColor(item.status)}`} />
                                   }
                              </div>
                              <div className="flex flex-col  ">
                                   <div className="flex justify-between items-center">
                                        <p className="font-bold text-lg">{item.name}</p>
                                   </div>
                                   <div className="flex flex-row gap-1 justify-between items-center">
                                        <p className="text-xs font-semibold text-slate-500">{item.role}.</p>
                                        <p className="text-xs font-semibold text-slate-500">Registered {item.registrationDate}</p>
                                        <p className="text-xs font-semibold text-slate-500">at {item.registrationTime}</p>
                                   </div>

                              </div>
                              <div className={`flex flex-row rounded-full px-4 py-1 ${getStatusColor(item.status)}`}>
                                   <p>{item.status}</p>
                              </div>
                         </div>

                    );
               })}
          </div>
     );
};





// Verification Queue Table

export interface VerificationList {
     avatar?: string;
     name: string;
     role: string;
     status: string;
     submitTime: string;
     documentsNumber: string;
}

interface VerificationListProps {
     data: VerificationList[];
}

export const VerificationQueueTable: React.FC<VerificationListProps> = ({ data }) => {
     const [selectedUser, setSelectedUser] = useState<VerificationList | null>(null);
     const [isOpen, setIsOpen] = useState(false);

     const pendingCount = data.filter((item) => item.status === "Pending").length;
     const handleReview = (data: VerificationList) => {
          setSelectedUser(data);
          setIsOpen(true);
     }


     const getRegistrationType = (data: VerificationList) => {
          switch (data.status) {
               case "Pending":
                    return (
                         <div className="flex flex-col border border-yellow-200 bg-yellow-50 justify-between 
                              items-center p-2 rounded-lg">
                              <div className="flex flex-row gap-5 justify-between items-center w-full">
                                   <div className="flex flex-row gap-5">
                                        <div className="rounded-full p-2">
                                             {data.avatar ? <img src={data.avatar} alt=""
                                                  className="border-1 border-yellow-400 rounded-full w-full 
                                                       h-full " />
                                                  : <UserIcon
                                                       className="w-full h-full p-2 rounded-full border-1 border-yellow-400" />
                                             }
                                        </div>
                                        <div className="pt-2">
                                             <p className="font-bold text-md ">{data.name}</p>
                                             <p className="text-xs text-slate-600">{data.role}. Awaiting ID verification</p>
                                        </div>
                                   </div>
                                   <div className="px-5 py-1 rounded-full bg-yellow-200">
                                        <p className="text-xs font-semibold text-yellow-500">{data.status}.</p>
                                   </div>
                              </div>
                              <div className="flex flex-row justify-between items-center mr-50">
                                   <p className="text-xs font-semibold text-slate-500 mr-3">{data.documentsNumber} documents uploaded.</p>
                                   <p className="text-xs font-semibold text-slate-500">submitted {data.submitTime}</p>
                              </div>
                              <div className="flex flex-row justify-between items-center p-2 w-full gap-2">
                                   <span
                                        className="bg-green-700 hover:bg-green-900 text-white w-full text-sm py-1
                                             font-medium rounded-lg cursor-pointer  flex flex-row items-center 
                                             justify-center gap-2"
                                        onClick={() => { }}
                                   >
                                        <CircleCheck size={18} />
                                        Approve
                                   </span>
                                   <span
                                        className="bg-red-700 hover:bg-red-900 text-white w-full text-sm py-1 
                                             font-medium rounded-lg cursor-pointer flex flex-row items-center 
                                             justify-center gap-2"
                                        onClick={() => { }}
                                   >
                                        <CircleX size={18} />
                                        Reject
                                   </span>
                              </div>
                         </div>
                    );
               default:
                    return (
                         <div className="flex flex-col border border-slate-200 bg-slate-50 justify-between 
                              items-center p-2 rounded-lg">
                              <div className="flex flex-row gap-5 justify-between items-center w-full">
                                   <div className="flex flex-row gap-5">
                                        <div className="rounded-full p-2">
                                             {data.avatar ? <img src={data.avatar} alt=""
                                                  className="border-1 border-green-400 rounded-full w-full 
                                                       h-full " />
                                                  : <UserIcon
                                                       className="w-full h-full p-2 rounded-full bg-gray-200" />
                                             }
                                        </div>
                                        <div className="pt-2">
                                             <p className="font-bold text-md ">{data.name}</p>
                                             <p className="text-xs text-slate-600">{data.role}. Awaiting ID verification</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex flex-row justify-between items-center mr-50">
                                   <p className="text-xs font-semibold text-slate-500 mr-3">{data.documentsNumber} documents uploaded.</p>
                                   <p className="text-xs font-semibold text-slate-500">submitted {data.submitTime}</p>
                              </div>
                              <div className="flex flex-row justify-between items-center p-2 w-full gap-2">
                                   <span className="bg-slate-700 hover:bg-slate-900 text-white w-full rounded-lg cursor-pointer
                                        flex flex-row items-center justify-center text-sm py-1 font-medium"
                                        onClick={() => handleReview(data)}
                                   >
                                        <EyeIcon size={18} className=" mr-2 " />
                                        Review
                                   </span>
                              </div>
                         </div>
                    );
          }
     }
     return (
          <>
               <div className="flex flex-col gap-5 h-full w-full  bg-white rounded-lg">
                    <div className="flex flex-row justify-between items-center p-2">
                         <h4 className={header}>Verification Queue</h4>
                         {pendingCount > 0 ? <span className={`px-4  py-1 rounded-full cursor-pointer bg-yellow-100 text-yellow-600`}>{pendingCount} pending</span> : <span className={`px-4  py-1 rounded-full cursor-pointer`}></span>}
                    </div>
                    {data.map((item, index) => {
                         return (
                              <div key={index}
                                   className={``}
                              >
                                   {getRegistrationType(item)}
                              </div>

                         );
                    })}
               </div>
               {isOpen && selectedUser && (
                    <Dialog
                         open={isOpen}
                         onClose={() => setIsOpen(false)}
                         PaperProps={{
                              sx: {
                                   borderRadius: 4,
                              },
                         }}
                    >
                         <Box
                              sx={{
                                   width: "1200px",
                                   height: "750px",
                                   maxWidth: "100%",
                                   maxHeight: "100%",
                                   overflow: "hidden",
                                   borderRadius: "20px",
                              }}
                         >
                              <div className="flex flex-col gap-5 h-full">

                                   <div className="flex items-center justify-between border-b border-slate-200 py-4 pl-5">
                                        <div className=" px-5">
                                             <h2 className="text-xl font-bold text-slate-700">Job Details</h2>
                                        </div>
                                        <div className="px-5">
                                             <Tooltip title="Close">
                                                  <IconButton onClick={() => { setIsOpen(false) }}>
                                                       <X className="text-gray-500 hover:text-gray-700 cursor-pointer w-5 h-5" />
                                                  </IconButton>
                                             </Tooltip>
                                        </div>
                                   </div>
                                   <div className="flex flex-row gap-5 px-10">
                                        <div className="rounded-full ">
                                             <UserAvatar img={selectedUser.avatar} className="w-10 h-10 border-green-300 border" />
                                             
                                        </div>
                                        <div>
                                             <p className="font-bold text-md ">{selectedUser?.name}</p>
                                             <p className="text-xs text-slate-600">{selectedUser?.role}. Awaiting ID verification</p>
                                        </div>
                                   </div>
                                   <div className="px-10 mt-2 ">
                                        <p className="text-sm font-semibold">Documents</p>
                                        <p className="text-xs text-slate-600">{selectedUser?.documentsNumber} documents uploaded.</p>
                                   </div>

                              </div>
                         </Box>

                    </Dialog>
               )}
          </>

     );
};   
