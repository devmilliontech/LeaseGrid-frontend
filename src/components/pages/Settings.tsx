import React, { useState } from "react";
import { StatusCard } from "../appShell/Cards";
import { DashboardCardData } from "../data/dashboard";
import { DropDown } from "../common/fromComponent/DropDown";
import { Button } from "../common/fromComponent/button";
import { Circle, Dot, Filter, HardDriveDownload, NotepadText, Star, X, } from "lucide-react";
import { header, subSubject } from "../common/style";
import { LogsTableCard } from "../appShell/logs/LogTbaleCard";
import { LogTableCardData } from "../data/logs";
import ColorProgreebar from "../common/ColorProgreebar";
import { AgentCard } from "../appShell/support/AgentCard";
import { AgentData } from "../data/SupportData";
import { SettingCardData } from "../data/Setting";

const Settings: React.FC = () => {

    const [Filters1, setFilters1] = useState<string>()
    const [Filters2, setFilters2] = useState<string>()
    const [Filters3, setFilters3] = useState<string>()
    const [Filters4, setFilters4] = useState<string>()
    const [Filters5, setFilters5] = useState<string>()

    const textCss = "text-sm text-teal-500 bg-teal-100 rounded-xl px-2 flex flex-row items-center gap-2 py-1"
    return (
        <>
            <div className="p-2 space-y-3 max-w-[1600px] mx-auto">
                {/* status card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <StatusCard data={DashboardCardData} />
                </div>
                {/* Filter Row */}
                <div className="flex flex-col gap-3 bg-white rounded-2xl p-5">
                    <div className="flex flex-row justify-between pb-5 border-b border-slate-200 w-full items-center">
                        <DropDown
                            label="Date Range"
                            onChange={(e) => setFilters1(e.target.value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "Today",
                                "Last 7 days",
                                "Last 30 days",
                                "Last 90 days",
                            ]}
                        />
                        <DropDown
                            label="Action Type"
                            onChange={(e) => setFilters2(e.target.value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Actions",
                                "User Actions",
                                "Admin Actions",
                                "System Actions",
                                "Security Events"
                            ]}
                        />
                        <DropDown
                            label="Actor Role"
                            onChange={(e) => setFilters3(e.target.value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Roles",
                                "Super Admin",
                                "Admin",
                                "Moderator",
                                "Support",
                                "User",
                            ]}
                        />
                        <DropDown
                            label="Entity Type"
                            onChange={(e) => setFilters4(e.target.value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Entities",
                                "User Account",
                                "Job",
                                "Payment",
                                "Property",
                                "Review"
                            ]}
                        />
                        <DropDown
                            label="Sort By"
                            onChange={(e) => setFilters5(e.target.value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Status",
                                "Success",
                                "Failed",
                                "Pending",
                                "Blocked"
                            ]}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { }}
                            label="Apply Filters"
                            className="pr-6 pl-3 py-2 rounded-xl mt-6"
                            icon={Filter}
                        />
                    </div>
                    <div className="bg-white flex flex-row gap-2">
                        <p className="text-sm text-gray-500">Active Filters :</p>
                        {Filters1 &&
                            <p className={textCss}>
                                {Filters1}
                                <X onClick={() => setFilters1(undefined)} className="cursor-pointer w-4 h-4" />
                            </p>
                        }
                        {Filters2 &&
                            <p className={textCss}>
                                {Filters2}
                                <X onClick={() => setFilters2(undefined)} className="cursor-pointer w-4 h-4" />
                            </p>
                        }
                        {Filters3 &&
                            <p className={textCss}>
                                {Filters3}
                                <X onClick={() => setFilters3(undefined)} className="cursor-pointer w-4 h-4" />
                            </p>
                        }
                        {Filters4 &&
                            <p className={textCss}>
                                {Filters4}
                                <X onClick={() => setFilters4(undefined)} className="cursor-pointer w-4 h-4" />
                            </p>
                        }
                        {Filters5 &&
                            <p className={textCss}>
                                {Filters5}
                                <X onClick={() => setFilters5(undefined)} className="cursor-pointer w-4 h-4" />
                            </p>
                        }
                    </div>
                </div>
                {/* Activity Log Entries */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mx-w-1600 md:w-1000">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Activity Log Entries</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Export CSV"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={HardDriveDownload}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Export PDF"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={NotepadText}
                            />
                        </div>
                    </div>
                    <div className="">
                        <LogsTableCard data={LogTableCardData.slice(0, 6)} />
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
                {/* Most Active Users */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 h-full">
                    <div className="bg-white rounded-2xl p-6 shadow-md  flex gap-5 flex-col " >
                        <div className="flex flex-col gap-2">
                            <p className={header}>Most Active Users</p>
                            <p className={subSubject}>Top users by activity count today</p>
                        </div>
                        <div className="flex flex-col gap-5 pt-4">
                            <AgentCard data={AgentData} />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-md flex gap-5 flex-col" >
                        <div className="flex flex-col gap-2">
                            <p className={header}>Rating Distribution</p>
                            <p className={subSubject}>Breakdown of all reviews by star rating</p>
                        </div>
                        <div className="flex flex-col gap-5 pt-4">
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-blue-500 bg-blue-500 rounded-full w-3 h-3" />
                                        <p>userActions</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(50%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={50} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-green-500 bg-green-500 rounded-full w-3 h-3" />
                                        <p>Payment Transactions</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(30%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={30} color="#22c55e" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-purple-500 bg-purple-500 rounded-full w-3 h-3" />
                                        <p>Admin Actions</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(25%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={25} color="#a855f7" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-yellow-500 bg-yellow-500 rounded-full w-3 h-3" />
                                        <p>Job Activities</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(20%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={20} color="#eab308" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-orange-500 bg-orange-500 rounded-full w-3 h-3" />
                                        <p>System Events</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(15%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={15} color="#f97316" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className={`${subSubject} flex flex-row items-center justify-between gap-1`}>
                                    <div className="flex flex-row gap-2 items-center">
                                        <Circle className="text-red-500 bg-red-500 rounded-full w-3 h-3" />
                                        <p>Security Events</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <p>3,847</p>
                                        <p>(5%)</p>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <ColorProgreebar value={5} color="#ef4444" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* status card */}
                <div className="bg-white rounded-2xl p-6 shadow-md  flex gap-5 flex-col " >
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                            <p className={header}>Recent Security Events</p>
                            <p className={subSubject}>Critical security activities and alerts</p>
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                label="Security Dashboard"
                                className="px-4 py-2 rounded-lg"
                                color="danger"
                                onClick={() => { }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        <StatusCard data={DashboardCardData.slice(0,3)} />
                    </div>
                </div>

                {/* status card */}
                <div className="bg-white rounded-2xl p-6 shadow-md  flex gap-5 flex-col " >
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col gap-2">
                            <p className={header}>Export & Download Options</p>
                            <p className={subSubject}>Download logs in various formats for analysis</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <StatusCard data={SettingCardData} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;