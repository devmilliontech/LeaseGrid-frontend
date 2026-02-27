import { UserIcon, CalendarDaysIcon, Clock, HousePlus, Mail, UserRoundX, RefreshCwOff, File, BriefcaseBusiness, CircleCheck, UserX } from "lucide-react";
import { Search, SlidersHorizontal, ArrowDownWideNarrow, LayoutGrid, Info, X } from "lucide-react";
import React from "react";






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
                              <Info className="w-4 h-4 text-blue-400" />
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

     const getTypeColor = (type: string) => {
          switch (type) {
               case "Landlord":
                    return "bg-blue-200 text-blue-600";
               case "Tenant":
                    return "bg-purple-200 text-purple-600";
               case "Tradie":
                    return "bg-orange-200 text-orange-600";
               default:
                    return "bg-gray-200 text-gray-600";
          }
     }
     const getProfileBorderColor = (status: string) => {
          switch (status) {
               case "Verified":
                    return "border-green-200";
               case "Pending":
                    return "border-yellow-200";
               case "Suspend":
                    return "border-red-200";
               default:
                    return "border-gray-200";
          }
     }

     return (
          <>
               {data.map((user, index) => {
                    return (
                         <div key={index} className="bg-white rounded-3xl border border-slate-100 
                               transition-all hover:shadow-lg  h-74  shadow-slate-500"
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
                              <div className=" flex flex-row justify-between items-center gap-2 m-4">
                                   <button
                                        className="text-xs font-medium bg-teal-500  text-white 
                                             hover:text-teal-800 transition-colors cursor-pointer 
                                             rounded-lg hover:bg-teal-600 px-4 py-2"
                                   >
                                        View Profile
                                   </button>
                                   <button
                                        className="text-xs bg-slate-200 font-medium  
                                             hover:bg-slate-400 transition-colors cursor-pointer 
                                             rounded-2xl px-4 py-2"
                                   >
                                        <Mail className="w-5 h-5 text-slate-800" />
                                   </button>
                                   <button>
                                        <UserRoundX
                                             className="w-9 h-9 text-red-500 hover:text-white 
                                             hover:bg-red-600 transition-colors cursor-pointer 
                                             rounded-2xl px-2 py-2 bg-red-200"
                                        />
                                   </button>
                              </div>
                         </div>
                    );
               })}

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

