import React from "react";
import { StatusCard } from "../appShell/Cards";
import { LogsStatusData, LogTableCardData } from "../data/logs";
import { DropDown } from "../common/fromComponent/DropDown";
import { Button } from "../common/fromComponent/button";
import { Download, Filter, NotepadText } from "lucide-react";
import { header } from "../common/style";
import { LogsTableCard } from "../appShell/logs/LogTbaleCard";

const Logs: React.FC = () => {
    return (
        <>
            <div className="p-2 space-y-3 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <StatusCard data={LogsStatusData} />
                </div>
                {/* Filter Row */}
                <div className="flex flex-col gap-3">
                    <div className="flex flex-row justify-between p-5 shadow-sm bg-white w-full rounded-2xl items-center">
                        <DropDown
                            label="Status"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Statuses",
                                "Pending",
                                "Approved",
                                "Flagged",
                                "Hidden"
                            ]}
                        />
                        <DropDown
                            label="Rating"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Ratings",
                                "5 Star",
                                "4 Star",
                                "3 Star",
                                "2 Star",
                                "1 Star"
                            ]}
                        />
                        <DropDown
                            label="Review Type"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "All Review Types",
                                "Tradie Review",
                                "Property Review",
                                "Landlord Review"
                            ]}
                        />
                        <DropDown
                            label="Date Range"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "Last 7 Days",
                                "Last 30 Days",
                                "Last 90 Days",
                                "This year",
                                "All time"
                            ]}
                        />
                        <DropDown
                            label="Sort By"
                            onChange={(value) => console.log(value)}
                            className="px-5 rounded-xl py-2"
                            options={[
                                "Newest First",
                                "Oldest First",
                                "Highest Rating",
                                "Lowest Rating",
                                "Most Rating"
                            ]}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { }}
                            label="Filter"
                            className="pr-6 pl-3 py-2 rounded-2xl mt-6"
                            icon={Filter}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => { }}
                            className="px-3 py-2 rounded-2xl mt-6"
                            icon={Download}
                        />
                    </div>
                </div>
                {/* Audit Log Entries */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mx-w-1600 md:w-1000">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Audit Log Entries</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Export CSV"
                                className="pr-4 pl-2 py-2 rounded-2xl"
                                icon={Download}
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
            </div>
        </>
    );
};

export default Logs;
