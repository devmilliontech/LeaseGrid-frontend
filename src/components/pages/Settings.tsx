import React, { useState } from "react";

import { PlatformRulesTab } from "./settingsTabs/PlatformRulesTab";
import { AuditTrail } from "./settingsTabs/AuditTrail";
import { Button } from "../common/fromComponent/button";
import { NotepadText, Save } from "lucide-react";

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("AuditTrail");

    const tabs = ["Platform Rules", "Pricing & Fees", "Subscriptions", "Affiliates", "Content Management", "Notification"]

    return (
        <>
            <div className="p-2 space-y-3 max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex flex-row justify-end gap-4 items-center">
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {setActiveTab("AuditTrail") }}
                        label="View Audit Log"
                        className="pr-6 pl-3 py-2 rounded-xl mt-6"
                        icon={NotepadText}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {  }}
                        label="Save All Changes"
                        className="pr-6 pl-3 py-2 rounded-xl mt-6"
                        icon={Save}
                    />
                </div>
                {/* Header Tabs */}
                <div className="flex flex-row overflow-x-auto gap-3 pb-2 scrollbar-hide">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex flex-row items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-colors border
                                ${activeTab === tab
                                    ? "bg-teal-500 text-white border-teal-500"
                                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-4 h-4 rounded-full border border-current ${activeTab === tab ? '' : 'text-slate-300'}`}>
                                {activeTab === tab && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                            </div>
                            {tab}
                        </button>
                    ))}
                </div>

                {activeTab === "Platform Rules" ? (
                    <PlatformRulesTab />
                ) : (activeTab === "AuditTrail" ? (
                    <AuditTrail />
                ) : (
                    <p>Other tabs content</p>
                ))}
            </div>
        </>
    );
};

export default Settings;