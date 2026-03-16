import React from "react";
import { StatusCard } from "../appShell/Cards";
import { jobsData } from "../data/jobsData";
import { UserListCard } from "../appShell/ListCard";
import { listCardData } from "../data/jobsData";
import ProgressBar from "../common/ProgressBar";
import { WidgetsCard } from "../appShell/WidgetsCard";
import { JobData, JobTableData } from "../data/Job";
import { JobTable } from "../appShell/job/JobTable";

const Jobs: React.FC = () => {
     return (
          <>
               <div className="px-2 space-y-6 max-w-[1600px] mx-auto gap-2 py-2">
                    {/* First Div Row Components */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                         <StatusCard data={jobsData} />
                    </div>
                    {/* Second Div Row Components */}
                    <div className="">
                         <UserListCard data={listCardData} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:min-h-[420px] ">
                         {/* Third Div Row Components Job Type Distribution */}
                         <div className="flex flex-col bg-white rounded-2xl h-[90vh] shadow-sm shadow-gray-300">
                              <div className="flex flex-col px-6 pt-8">
                                   <h1 className="text-lg font-semibold">Job Type Distribution</h1>
                                   <h4 className="text-sm text-gray-500">Most requested services</h4>
                              </div>
                              <div className="flex flex-col px-6 py-8">
                                   <div className="flex flex-col ">
                                        <h1>Plumbing</h1>
                                        <ProgressBar value={85} height={10} />
                                   </div>
                                   <div className="flex flex-col ">
                                        <h1>Electrician</h1>
                                        <ProgressBar value={65} height={10} />
                                   </div>
                                   <div className="flex flex-col ">
                                        <h1>Painter</h1>
                                        <ProgressBar value={45} height={10} />
                                   </div>
                                   <div className="flex flex-col ">
                                        <h1>Carpentry</h1>
                                        <ProgressBar value={30} height={10} />
                                   </div>
                                   <div className="flex flex-col ">
                                        <h1>HVAC</h1>
                                        <ProgressBar value={15} height={10} />
                                   </div>
                                   <div className="flex flex-col ">
                                        <h1>Other</h1>
                                        <ProgressBar value={5} height={10} />
                                   </div>
                              </div>
                         </div>
                         {/* Average Response Time */}
                         <div className="flex flex-col rounded-2xl h-[90vh] shadow-sm shadow-gray-300 bg-white">
                              <div className="flex flex-col px-6 pt-8">
                                   <h1 className="text-lg font-semibold">Average Response Time</h1>
                                   <h4 className="text-sm text-gray-500">Average response time by job type</h4>
                              </div>
                              <div className="flex flex-col px-6 py-8 gap-4">
                                   <WidgetsCard data={JobData} />
                              </div>
                         </div>
                    </div>
                    {/* Tradie Table */}
                    <div className="flex flex-col rounded-2xl h-full shadow-sm shadow-gray-300 bg-white">
                         <div className="flex flex-col px-6 pt-8">
                              <h1 className="text-lg font-semibold">Tradie Performance</h1>
                              <h4 className="text-sm text-gray-500">Tradie performance by job type</h4>
                         </div>
                         <div className="flex flex-col px-6 py-8 gap-4">
                              <JobTable data={JobTableData} />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Jobs;
