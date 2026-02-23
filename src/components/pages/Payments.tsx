import React from "react";
import { paymentData } from "../data/PaymentDAta";
import { ActivityAnalyticsCard } from "../appShell/user/UserCard";
import PieChartWithCustomizedLabel from "../appShell/payments/PaymentsCharts";
import { RentChart } from "../appShell/payments/PaymentsCharts.tsx";
import { paymentTrendData } from "../data/PaymentDAta";


const Payments: React.FC = () => {
     return (
          <>
               <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
                    {/* Payment First Row Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 m-1">
                         <ActivityAnalyticsCard data={paymentData} />
                    </div>

                    {/* Payment Second Row Card */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-96 m-1 mt-4"
                    >
                         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
                              <div className="flex flex-col mb-6 m-2">
                                   <p className="text-2xl font-bold text-black">Transaction Volume Trend</p>
                                   <p className="text-sm text-slate-500">Last 30 days performance</p>
                              </div>
                              <div className="flex-1 min-h-0 max-h-full">
                                   <RentChart data={paymentTrendData } />
                              </div>
                         </div>
                         <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
                              <div className="flex flex-col mb-6 m-2">
                                   <p className="text-2xl font-bold text-black">Payment Status Distribution</p>
                                   <p className="text-sm text-slate-500">Current month breakdown</p>
                              </div>
                              <div className="flex-1 min-h-0 max-h-full">
                                   <PieChartWithCustomizedLabel />
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Payments;
