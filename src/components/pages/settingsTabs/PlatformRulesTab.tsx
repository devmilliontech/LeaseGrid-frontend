import React, { useState } from "react";
import { Mail, Smartphone, IdCard, FileBadge, Activity, CheckCircle2, ShieldAlert, Edit, Clock } from "lucide-react";
import { ToggleSwitch } from "../../common/fromComponent/ToggleSwitch";

export const PlatformRulesTab: React.FC = () => {
    const [autoApprove, setAutoApprove] = useState(true);
    const [emailVerif, setEmailVerif] = useState(true);
    const [phoneVerif, setPhoneVerif] = useState(true);
    const [idVerif, setIdVerif] = useState(true);
    const [licenseVerif, setLicenseVerif] = useState(true);
    const [ageRequirement, setAgeRequirement] = useState("18");

    // Reusable row for setting toggles
    const SettingRow = ({ icon: Icon, title, subtitle, checked, onChange, isLast = false }: any) => (
        <div className={`flex flex-row items-center justify-between py-4 ${!isLast ? 'border-b border-slate-100' : ''}`}>
            <div className="flex flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-500" />
                </div>
                <div className="flex flex-col">
                    <p className="text-sm font-semibold text-slate-800">{title}</p>
                    <p className="text-xs text-slate-500">{subtitle}</p>
                </div>
            </div>
            <div>
                <ToggleSwitch checked={checked} onChange={onChange} />
            </div>
        </div>
    );

    return (
        <div className="flex flex-col lg:flex-row gap-5">
            {/* Left Column: User Registration Rules */}
            <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
                <div className="flex flex-row items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex flex-col">
                        <p className="text-lg font-bold text-slate-800">User Registration Rules</p>
                        <p className="text-sm text-slate-500">Configure requirements for new user accounts</p>
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <span className="text-sm font-medium text-slate-600">Auto-approve</span>
                        <ToggleSwitch checked={autoApprove} onChange={setAutoApprove} />
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                    <SettingRow
                        icon={Mail}
                        title="Email Verification Required"
                        subtitle="Users must verify email before accessing platform"
                        checked={emailVerif}
                        onChange={setEmailVerif}
                    />
                    <SettingRow
                        icon={Smartphone}
                        title="Phone Verification Required"
                        subtitle="SMS verification for account security"
                        checked={phoneVerif}
                        onChange={setPhoneVerif}
                    />
                    <SettingRow
                        icon={IdCard}
                        title="ID Verification for Landlords"
                        subtitle="Government ID required for landlord accounts"
                        checked={idVerif}
                        onChange={setIdVerif}
                    />
                    <SettingRow
                        icon={FileBadge}
                        title="License Verification for Tradies"
                        subtitle="Professional license/certification required"
                        checked={licenseVerif}
                        onChange={setLicenseVerif}
                    />

                    {/* Minimum Age Section */}
                    <div className="flex flex-col py-4 mt-2 bg-slate-50 rounded-xl px-5 border border-slate-100">
                        <div className="flex flex-row items-center gap-2 mb-3">
                            <input type="radio" checked readOnly className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300" />
                            <p className="text-sm font-semibold text-slate-700">Minimum Age Requirement</p>
                        </div>
                        <div className="flex flex-row items-center gap-3 pl-6">
                            <input 
                                type="number" 
                                value={ageRequirement}
                                onChange={(e) => setAgeRequirement(e.target.value)}
                                className="w-20 px-3 py-1.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-teal-500" 
                            />
                            <p className="text-sm text-slate-500">years old</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-96 flex flex-col gap-5">
                {/* Platform Health Card */}
                <div className="bg-teal-600 rounded-2xl p-6 shadow-md text-white">
                    <div className="flex flex-row justify-between items-center mb-6">
                        <p className="text-lg font-bold">Platform Health</p>
                        <Activity className="w-5 h-5 text-teal-100" />
                    </div>
                    
                    <div className="space-y-5">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Compliance Rate</span>
                                <span className="font-bold">96.8%</span>
                            </div>
                            <div className="w-full h-2 bg-teal-700 rounded-full overflow-hidden">
                                <div className="h-full bg-white rounded-full" style={{ width: '96.8%' }}></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Active Rules</span>
                                <span className="font-bold">47/52</span>
                            </div>
                            <div className="w-full h-2 bg-teal-700 rounded-full overflow-hidden">
                                <div className="h-full bg-white rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Auto-approval Rate</span>
                                <span className="font-bold">87.3%</span>
                            </div>
                            <div className="w-full h-2 bg-teal-700 rounded-full overflow-hidden">
                                <div className="h-full bg-white rounded-full" style={{ width: '87.3%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Changes Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <div className="flex flex-row justify-between items-center mb-5">
                        <p className="text-base font-bold text-slate-800">Recent Changes</p>
                        <button className="text-xs text-teal-600 font-semibold hover:text-teal-700">View All</button>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-slate-800">Email verification enabled</p>
                                <p className="text-xs text-slate-500">By Admin User • 2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Clock className="w-4 h-4 text-blue-500" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-slate-800">Job expiry set to 30 days</p>
                                <p className="text-xs text-slate-500">By Admin User • 5 hours ago</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Edit className="w-4 h-4 text-orange-500" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-slate-800">Minimum job value updated</p>
                                <p className="text-xs text-slate-500">By Admin User • Yesterday</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ShieldAlert className="w-4 h-4 text-purple-500" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-semibold text-slate-800">Escrow protection activated</p>
                                <p className="text-xs text-slate-500">By Admin User • 2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
