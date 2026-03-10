import React, { useState } from "react";
import { StatusCard } from "../appShell/Cards";
import { SupportData, TicketData } from "../data/SupportData";
import { ListView } from "../appShell/support/ListView";
import { Button } from "../common/fromComponent/button";
import { GridView } from "../appShell/support/GridView";
import { LayoutGrid, List } from "lucide-react";





const Support: React.FC = () => {

     const [active, setActive] = useState(true);
     const [view, setView] = useState("kanban");


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
               </div>
          </>
     );
};

export default Support;
