import React, { useState } from "react";
import { StatusCard } from "../appShell/Cards";
import { AgentData, SupportData, TicketData,CategoryData} from "../data/SupportData";
import { ListView } from "../appShell/support/ListView";
import { Button } from "../common/fromComponent/button";
import { GridView } from "../appShell/support/GridView";
import { LayoutGrid, List, } from "lucide-react";
import { AgentCard } from "../appShell/support/AgentCard";
import { header } from "../common/style";
import ColorProgreebar from '../common/ColorProgreebar'
import {CategoryCard} from "../appShell/support/CategoryCard";







const Support: React.FC = () => {

     const [active, setActive] = useState(true);
     const [view, setView] = useState("kanban");

     const text="text-sm font-semibold text-slate-600"
     const subText="text-sm font-semibold text-slate-400"
     return (
          <>
               <div className="px-2 py-2 space-y-6 max-w-[1600px] mx-auto">
                    {/* First Div Row Components */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                         <StatusCard data={SupportData} />
                    </div>

                    {/* Second Div Row Components */}
                    <div className="flex flex-col gap-4">
                         <div className="flex flex-row">
                              <div className="flex justify-start gap-5 px-5 py-3 bg-white rounded-2xl shadow-sm shadow-gray-300">
                                   <Button
                                        variant={active ? "contained" : "outlined"}
                                        onClick={() => { setActive(true); setView("kanban") }}
                                        label="Grid View"
                                        className="px-4 py-2 rounded-lg"
                                        icon={LayoutGrid}
                                   />

                                   <Button
                                        variant={!active ? "contained" : "outlined"}
                                        onClick={() => { setActive(false); setView("list") }}
                                        label="List View"
                                        className="px-4 py-2 rounded-lg"
                                        icon={List}
                                   />
                              </div>
                              <div>

                              </div>
                         </div>

                         <div className="grid grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 gap-4">
                              {view === "list" ? <ListView data={TicketData} /> :
                                   <GridView
                                        data={TicketData}
                                   />
                              }
                         </div>
                    </div>

                    {/* Third Div Row Components */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                         {/* Agent Performance Div */}
                         <div className="bg-white px-4 py-6 rounded-2xl h-[460px] shadow-md shadow-gray-100">
                              <div className="pb-5 " >
                                   <h1 className={`${header}`}>Agent Performance</h1>
                              </div>
                              <AgentCard data={AgentData} />
                         </div>
                         {/* Response Time Div */}
                         <div className="bg-white px-4 py-6 rounded-2xl h-[460px] shadow-md shadow-gray-100">
                              <div className="pb-5 " >
                                   <h1 className={`${header}`}>Response Time</h1>
                              </div>
                              <div className="flex flex-col gap-2">
                                   <div className="flex flex-col gap-2 border-2 rounded-2xl px-4  py-2  bg-green-50 border border-green-200">
                                        <div className="flex flex-row justify-between">
                                             <p className={text}>First Response</p>
                                             <span className="mr-2 text-green-600 font-semibold">12m</span>
                                        </div>
                                        <ColorProgreebar value={75} color="green"/>
                                        <p className={subText}>Target: 15m • 15% faster</p>
                                   </div>
                                   <div className="flex flex-col gap-2 border-2 rounded-2xl px-4 py-2 bg-blue-50 border border-blue-200">
                                        <div className="flex flex-row justify-between">
                                             <p className={text}>Average Resolution</p>
                                             <span className="mr-2 text-blue-600 font-semibold">4.2h</span>
                                        </div>
                                        <ColorProgreebar value={75} color="blue"/>
                                        <p className={subText}>Target: 6h • 30% faster</p>
                              
                                   </div>
                                   <div className="flex flex-col gap-2 border-2 rounded-2xl px-4 py-2 bg-purple-50 border border-purple-200">
                                        <div className="flex flex-row justify-between">
                                             <p className={text}>Customer Satisfaction</p>
                                             <span className="mr-2 text-purple-600 font-semibold">4.8/5</span>
                                        </div>
                                        <ColorProgreebar value={75} color="purple"/>
                                        <p className={subText}>Based on 342 ratings this week</p>

                                   </div>
                              </div>
                         </div>
                         {/* Response Time Div */}
                         <div className="bg-white px-4 py-6 rounded-2xl h-[460px] shadow-md shadow-gray-100">
                              <div className="pb-5 " >
                                   <h1 className={`${header}`}>Category Breakdown</h1>
                              </div>
                              <CategoryCard data={CategoryData} />
                         </div>
                    </div>

               </div>
          </>
     );
};

export default Support;
