import React from "react";
import { StatusCard } from "../appShell/Cards";
import { disputeCategory, disputeData, disputeQueueData } from "../data/Disputes";
import { Button } from "../common/fromComponent/button.tsx";
import { RefreshCw, Columns4, List, LayoutGrid } from "lucide-react";
import { header, subHeader, subject, subSubject, subSubSubject } from "../common/style";
import { DropDown } from "../common/fromComponent/DropDown.tsx";
import { QueueView } from "../appShell/disputes/QueueView";
import ProgressBar from "../common/ProgressBar.tsx";
import { CategoryCard } from "../appShell/CategoryCard.tsx";
import { CategoryData } from "../data/SupportData.ts";


const Disputes: React.FC = () => {

    const [view, setView] = React.useState("Queue");
    return (
        <>
            <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <StatusCard data={disputeData} />
                </div>
                {/* Filter & Sort Disputes */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Filter & Sort Disputes</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => { }}
                                label="Reset All Filters"
                                className="px-5 py-2 rounded-2xl"
                                icon={RefreshCw}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between py-5">
                        <DropDown
                            label="Status"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Statuses",
                                "Open",
                                "Closed"
                            ]}
                        />
                        <DropDown
                            label="Priority"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Priorities",
                                "High",
                                "Medium",
                                "Low"
                            ]}
                        />
                        <DropDown
                            label="Category"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Categories",
                                "Category 1",
                                "Category 2",
                                "Category 3"
                            ]}
                        />
                        <DropDown
                            label="Date Range"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "Last 7 Days",
                                "Last 30 Days",
                                "Last 90 Days"
                            ]}
                        />
                        <DropDown
                            label="Assigned To"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Admins",
                                "Admin 1",
                                "Admin 2",
                                "Admin 3"
                            ]}
                        />
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row justify-start gap-5 px-5 py-3">
                            <Button
                                variant={view === "Queue" ? "contained" : "outlined"}
                                onClick={() => setView("Queue")}
                                label="Queue View"
                                className="px-4 py-2 rounded-lg"
                                icon={Columns4}
                            />

                            <Button
                                variant={view === "List" ? "contained" : "outlined"}
                                onClick={() => setView("List")}
                                label="List View"
                                className="px-4 py-2 rounded-lg"
                                icon={List}
                            />
                            <Button
                                variant={view === "Grid" ? "contained" : "outlined"}
                                onClick={() => setView("Grid")}
                                label="Grid View"
                                className="px-4 py-2 rounded-lg"
                                icon={LayoutGrid}
                            />
                        </div>
                    </div>
                </div>
                {/* Disputes View */}
                <div className="h-full rounded-2xl">
                    {view === "Queue" ?
                        <QueueView data={disputeQueueData} />
                        : view === "List" ?
                            // <ListView />
                            <div>ListView</div>
                            :
                            // <GridView />
                            <div>GridView</div>
                    }
                </div>
                {/* Dispute Analytics & Insights */}
                <div className="">
                    <div className="flex flex-col m-2">
                        <p className={header}>Dispute Analytics & Insights</p>
                        <p className={subHeader}>Performance metrics and resolution patterns</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <StatusCard data={disputeData.slice(0, 4)} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {/* Disputes by Category */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-sm shadow-gray-300 px-6 py-8">
                        <div className="flex flex-row justify-between mb-4 ">
                            <p className={header}>Disputes by Category</p>
                            <p className="text-sm font-semibold text-teal-600 cursor-pointer hover:text-teal-400">View Reports</p>
                        </div>
                        <div className="flex flex-col ">
                            <div className="flex flex-col ">
                                <h1 className={subSubject}>Payment Issues</h1>
                                <ProgressBar value={85} height={10} />
                            </div>
                            <div className="flex flex-col ">
                                <h1 className={subSubject}>Work Quality</h1>
                                <ProgressBar value={65} height={10} />
                            </div>
                            <div className="flex flex-col ">
                                <h1 className={subSubject}>Communication</h1>
                                <ProgressBar value={45} height={10} />
                            </div>
                            <div className="flex flex-col ">
                                <h1 className={subSubject}>Property Damage</h1>
                                <ProgressBar value={30} height={10} />
                            </div>
                            <div className="flex flex-col ">
                                <h1 className={subSubject}>Contract Breach</h1>
                                <ProgressBar value={15} height={10} />
                            </div>
                        </div>
                    </div>
                    {/* Resolution Outcomes */}
                    <div className="flex flex-col bg-white rounded-2xl shadow-sm shadow-gray-300 px-6 py-8">
                        <div className="flex flex-row justify-between mb-4 ">
                            <p className={header}>Resolution Outcomes</p>
                            <p className="text-sm font-semibold text-teal-600 cursor-pointer hover:text-teal-400">View Reports</p>
                        </div>
                        <CategoryCard data={disputeCategory} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Disputes;
