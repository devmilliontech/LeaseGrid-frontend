import React, { useState } from "react";
import { failedPayoutsData, paymentData, TransactionData,RefundData,PaymentAdjustmentData } from "../data/PaymentDAta";
import { StatusCard } from "../appShell/Cards";
import PieChartWithCustomizedLabel, { RentChart } from "../appShell/payments/PaymentsCharts";
import { paymentTrendData } from "../data/PaymentDAta";
import { header, subHeader } from "../common/style";
import { FailedPayouts, TransactionWidgets,RefundCard,PaymentAdjustmentsCard } from "../appShell/payments/PaymentWidgets";
import { Button } from "../common/fromComponent/button.tsx";
import { CircleDollarSign, RefreshCw } from "lucide-react";
import { DropDown } from "../common/fromComponent/DropDown.tsx";


const Payments: React.FC = () => {
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedStatus, setSelectedStatus] = useState("All Status");

    const filteredTransactions = TransactionData.filter((transaction) => {
        const typeMatch = selectedType === "All Types" || transaction.type === selectedType;
        const statusMatch = selectedStatus === "All Status" || transaction.status === selectedStatus;
        return typeMatch && statusMatch;
    });

    return (
        <>
            <div className="px-2 py-2space-y-6 max-w-[1600px] mx-auto">
                {/* Payment First Row Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 m-1">
                    <StatusCard data={paymentData} />
                </div>

                {/* Payment Second Row Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full m-1 my-4">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col mb-6 m-2">
                            <p className={header}>Transaction Volume Trend</p>
                            <p className={subHeader}>Last 30 days performance</p>
                        </div>
                        <div className="flex-1 min-h-0 max-h-full">
                            <RentChart data={paymentTrendData} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
                        <div className="flex flex-col mb-6 m-2">
                            <p className={header}>Payment Status Distribution</p>
                            <p className={subHeader}>Current month breakdown</p>
                        </div>
                        <div className="flex-1 min-h-0 max-h-full">
                            <PieChartWithCustomizedLabel />
                        </div>
                    </div>
                </div>

                {/* Payment Third Row Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Failed Payouts - Requires Action</p>
                            <p className={subHeader}>147 failed transactions need retry or adjustment</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="outlined"
                                color="danger"
                                onClick={() => { }}
                                label="Retry All"
                                icon={RefreshCw}
                                className="px-3  py-2 rounded-2xl"
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Filter"
                                className="px-5 py-2 rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 max-h-full">
                        <FailedPayouts data={failedPayoutsData} />
                    </div>
                    <div className="flex flex-row justify-between border-t border-slate-200 px-2 items-center mt-2">
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

                {/* Transaction Ledger div */}

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Transaction Ledger</p>
                            <p className={subHeader}>Complete record of all payment transactions</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <DropDown
                                label="Drop"
                                options={["All Types", "Rent Payment", "Job Payment", "Refund"]}
                                className="px-3 py-2 rounded-full"
                                onChange={(e) => setSelectedType(e.target.value)}
                            />
                            <DropDown
                                label="Drop"
                                options={["All Status", "Success", "Pending", "Failed"]}
                                className="px-3 py-2 rounded-full"
                                onChange={(e) => setSelectedStatus(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="More Filter"
                                className="px-5 py-2 rounded-2xl"
                            />
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 max-h-full">
                        <TransactionWidgets data={filteredTransactions} />
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
                {/* Platform Fee Breakdown div */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Platform Fee Breakdown</p>
                            <p className={subHeader}>Detailed commission analysis by category</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <DropDown
                                label="Drop"
                                options={["All Types", "Rent Payment", "Job Payment", "Refund"]}
                                className="px-3 py-2 rounded-full"
                                onChange={(e) => setSelectedType(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-1">
                        <StatusCard data={paymentData.slice(0, 4)} />
                    </div>
                </div>
                {/* Refund Management div */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Refund Management</p>
                            <p className={subHeader}>Process and track all refund requests</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Issue Refund"
                                className="px-3 py-2 rounded-2xl"
                                icon={CircleDollarSign}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-1">
                        <StatusCard data={paymentData.slice(0, 4)} />
                    </div>
                    <div>
                        <RefundCard data={RefundData}/>
                    </div>
                </div>
                {/* Payment Gateway Status div */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Payment Gateway Status</p>
                            <p className={subHeader}>Monitor integration health and performance</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="Refresh Status"
                                className="px-3 py-2 rounded-2xl"
                                icon={RefreshCw}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-1">
                        <StatusCard data={paymentData.slice(0, 3)} />
                    </div>
                </div>
                {/* Payment Adjustments Div */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Payment Adjustments</p>
                            <p className={subHeader}>Manual adjustments and corrections log</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => { }}
                                label="New Adjustment"
                                className="px-5 py-2 rounded-2xl"
                                icon={RefreshCw}
                            />
                        </div>
                    </div>
                    <div className="flex-1 min-h-0 max-h-full">
                        <PaymentAdjustmentsCard data={PaymentAdjustmentData} />
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
    )
};

export default Payments;
