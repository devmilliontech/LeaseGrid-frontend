import React, { useState } from "react";
import { StatusCard } from "../appShell/Cards";
import { AutoCardsData, CardData, ComplianceStatusData, ListViewData } from "../data/compilance";
import { Button } from "../common/fromComponent/button";
import { Ban, CircleCheck, Columns4, FileDown, List, Send, Trash } from "lucide-react";
import { header, subHeader } from "../common/style";
import { DropDown } from "../common/fromComponent/DropDown";
import Checkbox from "@mui/material/Checkbox";
import { useAuthStore } from "../store/useAuthStore";
import { ListView } from "../appShell/compilance/ListView";
import { GridView } from "../appShell/compilance/GridView";
import { AutoCards, Card } from "../appShell/compilance/Card";


const Compliance: React.FC = () => {
    const [active, setActive] = useState(true);
    const [view, setView] = useState("kanban");
    const { selectIteam } = useAuthStore();
    const setSelectIteam = useAuthStore((state) => state.setSelectIteam);

    React.useEffect(() => {
        setSelectIteam({ count: 0, total: ListViewData.length, item: [], selectAll: false });
    }, [setSelectIteam]);

    return (
        <>
            <div className="p-2 space-y-3 max-w-[1600px] mx-auto">
                {/* Status Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <StatusCard data={ComplianceStatusData} />
                </div>
                {/* Compliance Records */}
                <div className="flex flex-col gap-3 bg-white rounded-2xl shadow-md shadow-gray-100 p-5">
                    <div className="flex flex-row justify-between ">
                        <h1 className={`${header}`}> Compliance Records</h1>
                    </div>
                    <div className="flex flex-row justify-between  items-center py-2   ">
                        <div className="w-full flex-row flex gap-3 items-center">
                            <Button
                                variant={active ? "contained" : "outlined"}
                                onClick={() => { setActive(true); setView("kanban") }}
                                label="Grid View"
                                className="px-4 py-2 rounded-lg"
                                icon={Columns4}
                            />
                            <Button
                                variant={!active ? "contained" : "outlined"}
                                onClick={() => { setActive(false); setView("list") }}
                                label="List View"
                                className="px-4 py-2 rounded-lg"
                                icon={List}
                            />
                        </div>
                        <div className="flex flex-row gap-3">
                            <DropDown
                                options={["All Categories", "Expiring Soon", "Unverified", "Suspended", "Compliant"]}
                                onChange={(value) => console.log(value)}
                                className="px-3 rounded-lg py-2"
                            />
                            <DropDown
                                options={["Sort by Date", "Sort by Priority", "Sort by Status", "Sort by User"]}
                                onChange={(value) => console.log(value)}
                                className="px-3 rounded-lg py-2"
                            />
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 flex flex-row justify-between">
                        <div className="flex flex-row justify-between items-center gap-2">
                            <Checkbox size="small" color="secondary"
                                checked={selectIteam.selectAll || (selectIteam.total > 0 && selectIteam.count === selectIteam.total)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectIteam({
                                            count: selectIteam.total,
                                            total: selectIteam.total,
                                            item: ListViewData,
                                            selectAll: true
                                        })
                                    } else {
                                        setSelectIteam({
                                            count: 0,
                                            total: ListViewData.length,
                                            item: [],
                                            selectAll: false
                                        })
                                    }
                                }}
                            />
                            <p>{selectIteam.count} items selected</p>
                        </div>
                        <div className="flex flex-row justify-between items-center gap-2">
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                label="Approve All"
                                color="success"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={CircleCheck}
                            />
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                color="warning"
                                label="Send Reminders"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={Send}
                            />
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                color="info"
                                label="Suspend Selected"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={Ban}
                            />
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                color="danger"
                                label="Delete"
                                className="pr-6 pl-4 py-2 rounded-2xl"
                                icon={Trash}
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-1 sm:grid-rows-1 lg:grid-rows-1 gap-4">
                        {view === "list" ?
                            <ListView data={ListViewData} />
                            :
                            <GridView data={ListViewData} />
                        }
                    </div>
                    <div className="flex flex-row justify-between mt-2 px-2 border-t border-slate-300 items-center">
                        <div className="">
                            <p>Showing 5 of 147 failed payouts</p>
                        </div>
                        <div className="flex flex-row items-center gap-4 pt-6">
                            <Button
                                variant="outlined"
                                onClick={() => { }}
                                label="Previous"
                                className="px-4  py-2 rounded-2xl"
                            />
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                label="Next"
                                className="px-7 py-2 rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
                {/* Third row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                    {/* Recent Compliance Actions */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 flex-col">
                        <div>
                            <p className={header}>Recent Compliance Actions</p>
                        </div>
                        <div>
                            <Card data={CardData} />
                        </div>
                    </div>
                    {/* Automated Alerts */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 flex-col">
                        <div>
                            <p className={header}>Automated Alerts</p>
                        </div>
                        <div>
                            <AutoCards data={AutoCardsData} />
                        </div>
                    </div>
                </div>
                {/* Fourth row */}
                <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 flex-col">
                    <div className="flex flex-col">
                        <p className={header}>Compliance Trends & Analytics</p>
                        <p className={subHeader}>Document expiry patterns and verification rates</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <StatusCard data={ComplianceStatusData.slice(0,3)} />
                    </div>
                </div>
                {/* Five row */}
                <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 flex-col">
                    <div className="flex flex-row justify-between ">
                        <p className={header}>Document Categories Overview</p>
                      <Button
                        label="Export Details"
                        onClick={()=>{}}
                        variant="outlined"
                        color="secondary"
                        icon={FileDown}
                        className="pl-2 pr-4 rounded-lg"
                    />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <StatusCard data={ComplianceStatusData} />
                    </div>
                </div>
                {/* six row */}
                <div className="bg-white rounded-2xl p-6 shadow-lg flex gap-5 flex-col">
                    <div className="flex flex-row justify-between ">
                        <p className={header}>Quick Compliance Actions</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <StatusCard data={ComplianceStatusData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Compliance;
