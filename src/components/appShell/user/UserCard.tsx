import { UserIcon, CalendarDaysIcon, Clock, HousePlus, Mail, UserRoundX, RefreshCwOff, File, BriefcaseBusiness, CircleCheck, UserX, Save } from "lucide-react";
import { Search, SlidersHorizontal, ArrowDownWideNarrow, LayoutGrid, Info, X } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../fromComponent/Input";
import Tooltip from '@mui/material/Tooltip';
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from "@mui/material/IconButton";
import { Button } from "../fromComponent/button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";





//------Users Filter Card------

export const UsersFilterCard: React.FC = () => {
     return (
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-6">
               {/* Search and Main Actions */}
               <div className="flex flex-wrap items-center gap-4">
                    <div className="flex-1 min-w-[300px] relative">
                         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                              <Search className="w-5 h-5" />
                         </div>
                         <input
                              type="text"
                              placeholder="Search by name, email, or ID..."
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-3 pl-12 pr-4 
                                   text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                                   transition-all placeholder:text-slate-400"
                         />
                    </div>

                    <div className="flex items-center gap-3">
                         {/* Filter Button */}
                         <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 
                              text-slate-700 px-4 py-3 rounded-2xl font-medium transition-colors cursor-pointer group">
                              <SlidersHorizontal className="w-4 h-4 text-slate-500 group-hover:text-slate-700" />
                              <span>Filters</span>
                              <span className="bg-teal-600 text-white text-[10px] w-5 h-5 flex items-center 
                                   justify-center rounded-full ml-1">3</span>
                         </button>

                         {/* Sort Button */}
                         <button className="flex flex-col items-center justify-center bg-slate-100 
                              hover:bg-slate-200 text-slate-700 px-6 py-2 rounded-2xl font-medium 
                              transition-colors cursor-pointer min-w-[120px] text-center">
                              <div className="flex items-center gap-2">
                                   <ArrowDownWideNarrow className="w-4 h-4 text-slate-500" />
                                   <span className="text-xs text-slate-500">Sort by:</span>
                              </div>
                              <span className="text-sm">Last Seen</span>
                         </button>

                         {/* View Toggle */}
                         <div className="flex items-center gap-2 text-sm text-slate-500 ml-2">
                              <span>View:</span>
                              <button className="p-2 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-500/20 cursor-pointer">
                                   <LayoutGrid className="w-5 h-5" />
                              </button>
                         </div>
                    </div>
               </div>

               {/* Active Filters */}
               <div className="flex items-center gap-4 pt-2">
                    <span className="text-sm font-semibold text-slate-600">Active Filters:</span>
                    <div className="flex flex-wrap gap-2">
                         <div className="flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium border border-teal-100">
                              Role: Landlord
                              <X className="w-4 h-4 cursor-pointer hover:text-teal-900" />
                         </div>
                         <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-100">
                              Status: Verified
                              <X className="w-4 h-4 cursor-pointer hover:text-emerald-900" />
                         </div>
                         <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                              Joined: Last 30 days
                              <X className="w-4 h-4 text-blue-400 cursor-pointer hover:text-blue-900" />
                         </div>
                    </div>
                    <button className="text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors ml-auto cursor-pointer">
                         Clear All
                    </button>
               </div>
          </div>
     );
};



// User Table Card

export interface UserTableList {
     id?: number;
     name: string;
     email: string;
     join: string;
     lastSeen: string;
     TotalProperties?: number;
     totalJobsCompleted?: number;
     documentsStatus?: string;
     status: string;
     type: string;
     avatar?: string;
}

interface UserTableProps {
     data: UserTableList[];
}

export const UserTable: React.FC<UserTableProps> = ({
     data,
}) => {
     const [isOpen, setIsOpen] = useState(false);
     const [name, setName] = useState("");
     const [selectedUser, setSelectedUser] = useState<UserTableList | null>(null);
     const [activePage, setActivePage] = useState(0);

     const handleViewProfile = (data: UserTableList) => {
          setSelectedUser(data);
          setName(data.name);
          setIsOpen(true);
     };
     const getStatusColor = (status: string) => {
          switch (status) {
               case "Verified":
                    return "bg-green-200 text-green-600";
               case "Pending":
                    return "bg-yellow-200 text-yellow-600";
               case "Suspend":
                    return "bg-red-200 text-red-600";
               default:
                    return "bg-gray-200 text-gray-600";
          }
     };

     const getType = (
          type: string,
          TotalProperties: number,
          totalJobsCompleted: number,
          documentsStatus: string,
     ) => {
          switch (type) {
               case "Landlord":
                    return (
                         <div className="flex flex-row  gap-2">
                              <HousePlus className="w-5 h-5 text-slate-600" />
                              <span className="text-xs font-semibold text-slate-600">{TotalProperties} Properties</span>
                         </div>
                    );
               case "Tenant":
                    return (
                         <div className="flex flex-row  gap-2">
                              <File className="w-5 h-5 text-slate-600" />
                              <span className="text-xs font-semibold text-slate-600">Documents {documentsStatus}</span>
                         </div>
                    );
               case "Tradie":
                    return (
                         <div className="flex flex-row  gap-2">
                              <BriefcaseBusiness className="w-5 h-5 text-slate-600" />
                              <span className="text-xs font-semibold text-slate-600">{totalJobsCompleted} Jobs Completed</span>
                         </div>
                    );
               default:
                    return (
                         <div className="flex flex-row  gap-2">
                              <RefreshCwOff className="w-5 h-5 text-slate-600" />
                              <span className="text-xs font-semibold text-slate-600">-------</span>
                         </div>
                    );
          }
     };


     const navPage = ["Details", "Activity", "Documents", "History"]
     const getTypeColor = (type: string) => {
          switch (type) {
               case "Landlord":
                    return "bg-blue-100 text-blue-600";
               case "Tenant":
                    return "bg-purple-100 text-purple-600";
               case "Tradie":
                    return "bg-orange-100 text-orange-600";
               default:
                    return "bg-gray-200 text-gray-600";
          }
     }
     const getProfileBorderColor = (status: string) => {
          switch (status) {
               case "Verified":
                    return "border-green-100";
               case "Pending":
                    return "border-yellow-100";
               case "Suspend":
                    return "border-red-100";
               default:
                    return "border-gray-200";
          }
     }

     const getRoleBasedInput = (type: string) => {
          switch (type) {
               case "Landlord":
                    return (
                         <Input
                              label="Total Properties"
                              value={selectedUser?.TotalProperties || ""}
                              className="border-slate-200"
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }}
                         />
                    );

               case "Tenant":
                    return <Input
                         label="Documents Status"
                         value={selectedUser?.documentsStatus || ""}
                         className="border-slate-200"
                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }}
                    />;
               case "Tradie":
                    return <Input
                         label="Total Jobs Completed"
                         value={selectedUser?.totalJobsCompleted || ""}
                         className="border-slate-200"
                         onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }}
                    />;
          }
     };

     return (
          <>
               {data.map((user, index) => {
                    return (
                         <div key={index} className="bg-white rounded-xl border border-slate-100 
                               transition-all hover:shadow-md  h-74  shadow-slate-400"
                         >
                              <div className="flex flex-row justify-between m-4">
                                   <div className={`w-15 h-15 rounded-full  
                                          flex items-center justify-center
                                          border-3 ${getProfileBorderColor(user.status)}`}
                                   >
                                        {user.avatar ? <img src={user.avatar} alt=""
                                             className="rounded-full w-full 
                                             h-full " />
                                             : <UserIcon
                                                  className="w-full h-full p-2 rounded-full bg-gray-200" />
                                        }
                                   </div>
                                   <div className="flex flex-col gap-2">
                                        <span
                                             className={`text-xs font-extrabold px-4 py-1 flex items-center 
                                                  justify-center rounded-full
                                                  ${getStatusColor(user.status)}
                                             `}
                                        >
                                             {user.status}
                                        </span>
                                        <span
                                             className={`text-xs font-extrabold px-4 py-1 flex items-center 
                                                  justify-center rounded-full 
                                                  ${getTypeColor(user.type)}
                                             `}
                                        >
                                             {user.type}
                                        </span>
                                   </div>
                              </div>
                              <div className="flex flex-col  gap-2 m-4">
                                   <div className="flex flex-col ">
                                        <p className="text-xl italic font-bold text-black">{user.name}</p>
                                        <p className="text-sm font-bold text-slate-500">{user.email}</p>
                                   </div>
                                   <div className="flex flex-col gap-1">
                                        <div className="flex flex-row  gap-2">
                                             <CalendarDaysIcon className="w-5 h-5 text-slate-600" />
                                             <span className=" text-xs font-semibold text-slate-600">{user.join}</span>
                                        </div>
                                        <div className="flex flex-row  gap-2">
                                             <Clock className="w-5 h-5 text-slate-600" />
                                             <span className="text-xs font-semibold text-slate-600">{user.lastSeen}</span>
                                        </div>
                                        {getType(user.type, user.TotalProperties ?? 0, user.totalJobsCompleted ?? 0, user.documentsStatus ?? "N/A")}
                                   </div>
                              </div>
                              <div className=" flex flex-row justify-between items-center ">
                                   <Tooltip title="View Profile">
                                        <IconButton onClick={() => handleViewProfile(user)}>
                                             <Button
                                                  label="View Profile"
                                                  onClick={() => { }}
                                                  color="primary"
                                                  className="px-3 py-2 rounded-xl"
                                             />
                                        </IconButton>
                                   </Tooltip>
                                   <Tooltip title="Send Email">
                                        <IconButton>
                                             <Mail className="w-12 h-9 font-medium text-slate-800  text-xs
                                                  hover:bg-slate-400 transition-colors cursor-pointer 
                                                  rounded-2xl px-2 py-2 bg-slate-200" />
                                        </IconButton>
                                   </Tooltip>
                                   <Tooltip title="Suspend" >
                                        <IconButton>
                                             <UserRoundX
                                                  className="w-12 h-9 text-red-500 hover:text-white 
                                                       hover:bg-red-600 transition-colors cursor-pointer 
                                                       rounded-2xl px-2 py-2 bg-red-200"
                                             />
                                        </IconButton>
                                   </Tooltip >
                              </div>
                         </div>
                    );
               })}

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
                                   width: "100%", 
                                   height: "100%", 
                                   position: "fixed", 
                                   top: 0,  
                                   bottom: 0,
                                   transform: "translateX(-20%)",
                                   overflow: "hidden",
                                   zIndex: 9999,
                              }}
                         >
                              <div className="flex flex-col gap-4 mt-5 h-145 relative overflow-hidden rounded-xl bg-white w-150">
                                   <div className="flex flex-row gap-5 items-center p-4">
                                        <div className={`w-20 h-20 rounded-full  
                                             flex items-center justify-center
                                             border-3 ${getProfileBorderColor(selectedUser.status)}`}
                                        >
                                             {selectedUser.avatar ? <img src={selectedUser.avatar} alt=""
                                                  className="rounded-full w-full 
                                                  h-full " />
                                                  : <UserIcon
                                                       className="w-full h-full p-2 rounded-full bg-gray-200" />
                                             }
                                        </div>
                                        <div className="flex flex-col">
                                             <div>
                                                  <p className="text-2xl font-bold text-black">{selectedUser.name}</p>
                                             </div>
                                             <div>
                                                  <p className="text-sm font-bold text-slate-500">{selectedUser.email}</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex flex-row gap-10 items-center border-t border-b border-slate-200 ">
                                        {navPage.map((page, index) => {
                                             return (
                                                  <div key={index} >
                                                       <button
                                                            onClick={() => setActivePage(index)}
                                                            className={`text-sm font-medium text-slate-600 
                                                            cursor-pointer p-5 hover:text-teal-600 
                                                            ${activePage === index ? "text-teal-600 border-b-2 border-teal-600 pb-3" : "pb-3"}
                                                            `}
                                                       >
                                                            {page}
                                                       </button>
                                                  </div>
                                             )
                                        })}
                                   </div>
                                   {
                                        activePage == 0 && (

                                             <div className="flex flex-col gap-2 overflow-y-auto px-3 roundered-b-xl scrollbar-hide">
                                                  <div className="flex flex-row justify-between gap-2 ">
                                                       <Input
                                                            label="Role"
                                                            value={selectedUser.type}
                                                            disabled
                                                            className={`font-bold w-full py-5 
                                                            px-5 ${getTypeColor(selectedUser.type)}`}
                                                       />
                                                       <Input
                                                            label="Verification Status"
                                                            value={selectedUser.status}
                                                            disabled
                                                            className={`font-bold w-full py-5 
                                                            px-5 ${getStatusColor(selectedUser.status)}`}
                                                       />
                                                  </div>

                                                  <Input
                                                       label="Account Created"
                                                       value={selectedUser.join}
                                                       className="border-slate-200"
                                                       disabled
                                                  />
                                                  <Input
                                                       label="Last Seen"
                                                       value={selectedUser.lastSeen}
                                                       className="border-slate-200"
                                                       disabled
                                                  />
                                                  {getRoleBasedInput(selectedUser.type)}
                                                  <Input
                                                       label="Total Revenue"
                                                       value={200000}
                                                       className="border-slate-200"
                                                       disabled
                                                  />
                                                  <div>
                                                       <div className="flex flex-row gap-4 items-center">
                                                            <p>Account Status</p>
                                                            <span
                                                                 className={`text-xs font-extrabold px-4 py-1 flex items-center 
                                                       justify-center rounded-full
                                                       ${getStatusColor(selectedUser.status)}
                                                  `}
                                                            >{selectedUser.status}</span>
                                                       </div>
                                                       <div>
                                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Active" />
                                                            <FormControlLabel control={<Checkbox />} label="Email Verified" />
                                                            <FormControlLabel control={<Checkbox />} label="Phone Verified" />
                                                       </div>
                                                  </div>
                                             </div>


                                        )
                                   }
                                   {
                                        activePage == 1 && (

                                             <div className="flex flex-col gap-2 overflow-y-auto px-3 scrollbar-hide">
                                                  <div className="flex justify-center">
                                                       <h1 className="text-lg font-bold">Waiting For Load Activity</h1>
                                                  </div>
     
                                             </div>


                                        )
                                   }
                                   {
                                        activePage == 2 && ( 
                                             <div className="flex flex-col gap-2 overflow-y-auto px-3 scrollbar-hide">
                                                  <div className="flex justify-center">
                                                       <h1 className="text-lg font-bold">Waiting For Load Documents</h1>
                                                  </div>
                                             </div>
                                        )
                                   }
                                   {
                                        activePage == 3 && ( 
                                             <div className="flex flex-col gap-2 overflow-y-auto px-3 scrollbar-hide">
                                                  <div className="flex justify-center">
                                                       <h1 className="text-lg font-bold">Waiting For Load History</h1>
                                                  </div>
                                             </div>
                                        )
                                   }
                                   {/* Bottom Section */}
                                   <div 
                                        className="flex items-center justify-between flex-row gap-5 border-t-slate-200
                                        border-t w-full absolute bottom-0 bg-slate-50 px-4 rounded-b-xl py-2"
                                   >
                                        <div className="flex flex-row-start gap-4">
                                             <Tooltip title="Suspend" >
                                                  <IconButton>
                                                       <UserRoundX
                                                            className="w-12 h-9 text-red-500 hover:text-white 
                                                            hover:bg-red-600 transition-colors cursor-pointer 
                                                            rounded-2xl px-2 py-2 bg-red-200"
                                                       />
                                                  </IconButton>
                                             </Tooltip >
                                             <Tooltip title="Send Email">
                                                  <IconButton>
                                                       <Mail className="w-12 h-9 font-medium text-slate-800  text-xs
                                                       hover:bg-slate-400 transition-colors cursor-pointer 
                                                       rounded-2xl px-2 py-2 bg-slate-200" />
                                                  </IconButton>
                                             </Tooltip>
                                        </div>
                                        <div className="flex flex-row-start gap-4 items-center">
                                             <Tooltip title="Closed">
                                                  <IconButton>
                                                       <X
                                                            onClick={() => setIsOpen(false)}
                                                            className="bg-slate-200 w-14 h-9 cursor-pointer px-4 py-2
                                                       rounded-2xl text-slate-800 hover:bg-slate-400 transition-colors"
                                                       />
                                                  </IconButton>
                                             </Tooltip>
                                             <Tooltip title="Save Changes">
                                                  <IconButton>
                                                       <Save
                                                            className=" bg-teal-400  w-14 h-9 px-4 py-2
                                                            hover:bg-teal-600 transition-colors cursor-pointer 
                                                            rounded-2xl text-white "
                                                       />
                                                  </IconButton>
                                             </Tooltip>
                                        </div>
                                   </div>
                              </div>
                         </Box>
                    </Dialog>
               )}
          </>
     );
};


// Bulk Actions 

export const BulkActions: React.FC = () => {
     return (
          <div
               className="bg-white  rounded-3xl border border-slate-100 h-40 flex flex-row justify-between items-center "
          >
               <div className=" p-6">
                    <p className="text-xl font-bold text-black">Bulk Actions</p>
                    <p className="text-sm font-sm text-slate-500">Select users to perform bulk actions</p>
               </div>
               <div className=" p-6 flex flex-row gap-8">
                    <div>
                         <button
                              className={`text-green-800 font-semibold text-md px-6 py-2 rounded-full bg-green-200
                                   hover:bg-green-300 transition-colors cursor-pointer flex flex-row gap-2 items-center`}
                         >
                              <CircleCheck className="w-5 h-5" />Verify Selected
                         </button>
                    </div>
                    <div>
                         <button
                              className={`text-orange-800 font-semibold text-md px-6 py-2 rounded-full bg-orange-200
                                   hover:bg-orange-300 transition-colors cursor-pointer flex flex-row gap-2 items-center`}
                         >
                              <Mail className="w-5 h-5" />Send Massage
                         </button>
                    </div>
                    <div>
                         <button
                              className={`text-red-700 font-semibold text-md px-6 py-2 rounded-full bg-red-200
                                   hover:bg-red-300 transition-colors cursor-pointer flex flex-row gap-2 items-center`}
                         >
                              <UserX className="w-5 h-5" />Suspend Selected
                         </button>

                    </div>
               </div>
          </div>
     );
}

