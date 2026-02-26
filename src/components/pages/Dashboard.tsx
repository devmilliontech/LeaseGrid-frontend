import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobsChart, RentChart, SupportChart } from "../appShell/dashboard/DashboardCharts";
import {
  RecentActivity,
  SystemAlerts,
  TopPerformingTradies,
  TopLandlords,
} from "../appShell/dashboard/DashboardWidgets";

import { topPerformingTradiesData } from "../data/topPerformingTradiesData";
import { topLandlordsData } from "../data/topPerformingLandlordsData";
import { recentActivityData } from "../data/recentActivityData";
import { systemAlertsData } from "../data/systemAlertsData"
import { PaymentOverView } from "../appShell/dashboard/PaymentOverView";
import { StatusCard } from "../appShell/Cards";
import { DashboardCardData, ComplianceOverviewCard, QuickActionsCard } from "../data/dashboard.ts";
import { paymentData, paymentWidgetsData } from "../data/PaymentDAta.ts";
import { PaymentWidgets } from "../appShell/payments/PaymentWidgets.tsx";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  // Mock Data for Charts
  const jobsData = [
    { name: "Open", value: 350, fill: "#2dd4bf" }, // Teal-400
    { name: "In Progress", value: 550, fill: "#0d9488" }, // Teal-600
    { name: "Complete", value: 1500, fill: "#10b981" }, // Emerald-500
    { name: "Disputed", value: 150, fill: "#f43f5e" }, // Rose-500
    { name: "Cancelled", value: 80, fill: "#64748b" }, // Slate-500
  ];

  const rentData = [
    { name: "Jan", value: 145 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 148 },
    { name: "Apr", value: 165 },
    { name: "May", value: 170 },
    { name: "Jun", value: 168 },
    { name: "Jul", value: 185 },
    { name: "Aug", value: 190 },
    { name: "Sep", value: 185 },
    { name: "Oct", value: 200 },
    { name: "Nov", value: 210 },
    { name: "Dec", value: 220 },
  ];

  // Mock Data for Support Chart
  type TimeRange = 'Week' | 'Month' | 'Year';
  const [timeRange, setTimeRange] = useState<TimeRange>('Week');

  const supportDataWeek = [
    { name: "Mon", value: 45 },
    { name: "Tue", value: 52 },
    { name: "Wed", value: 49 },
    { name: "Thu", value: 62 },
    { name: "Fri", value: 58 },
    { name: "Sat", value: 38 },
    { name: "Sun", value: 35 },
  ];

  const supportDataMonth = [
    { name: "Week 1", value: 320 },
    { name: "Week 2", value: 380 },
    { name: "Week 3", value: 350 },
    { name: "Week 4", value: 410 },
  ];

  const supportDataYear = [
    { name: "Jan", value: 1200 },
    { name: "Feb", value: 1350 },
    { name: "Mar", value: 1250 },
    { name: "Apr", value: 1400 },
    { name: "May", value: 1500 },
    { name: "Jun", value: 1450 },
    { name: "Jul", value: 1600 },
    { name: "Aug", value: 1650 },
    { name: "Sep", value: 1550 },
    { name: "Oct", value: 1700 },
    { name: "Nov", value: 1800 },
    { name: "Dec", value: 1900 },
  ];

  const getCurrentSupportData = () => {
    switch (timeRange) {
      case 'Week': return supportDataWeek;
      case 'Month': return supportDataMonth;
      case 'Year': return supportDataYear;
      default: return supportDataWeek;
    }
  };


  return (
    <>
      <div className="p-2 space-y-6 max-w-[1600px] mx-auto">

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <StatusCard data={DashboardCardData} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-96">
          {/* Jobs by Status Chart */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Jobs by Status</h3>
                <p className="text-sm text-slate-500">Current month breakdown</p>
              </div>
            </div>
            <div className="flex-1 min-h-0">
              <JobsChart data={jobsData} />
            </div>
          </div>

          {/* Rent Collection Trend */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800">Rent Collection Trend</h3>
                <p className="text-sm text-slate-500">Last 12 months</p>
              </div>
            </div>
            <div className="flex-1 min-h-0 max-h-full">
              <RentChart data={rentData} />
            </div>
          </div>
        </div>

        {/* Support Chart Section */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-96 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">Support Load Distribution</h3>
              <p className="text-sm text-slate-500">Daily ticket volume over time</p>
            </div>
            <div className="flex gap-2">
              {['Week', 'Month', 'Year'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range as TimeRange)}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${timeRange === range
                    ? "bg-teal-50 text-teal-600"
                    : "text-slate-400 hover:bg-slate-50"
                    }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-0">
            <SupportChart data={getCurrentSupportData()} />
          </div>
        </div>


        {/* Quick Actions Title */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatusCard data={QuickActionsCard.slice(0, 3)} />
          </div>
        </div>

        {/* Activity and Alerts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:min-h-[420px]">
          <RecentActivity data={recentActivityData.slice(0, 5)} onViewAll={() => console.log('View all activity')} />
          <SystemAlerts data={systemAlertsData.slice(0, 4)} onViewAll={() => console.log('View all alerts')} />
        </div>

        {/* Compliance Overview */}
        <div className="bg-white  p-2  rounded-2xl">
          <div className="">
            <div className="flex justify-between items-center mb-2 ">
              <div>
                <h3 className="text-2xl font-bold p-1 text-slate-800">Compliance Overview</h3>
                <p className="text-sm p-1 font-semibold text-slate-500">Document verification and user compliance status</p>
              </div>
              <div>
                <button
                  className="bg-teal-500 text-white px-8 py-3 rounded-full cursor-pointer font-bold"
                  onClick={() => navigate('/compliance')}
                >
                  Review All
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between flex flex-row p-5">
              <StatusCard data={ComplianceOverviewCard} />
            </div>
          </div>
        </div>

        {/* Top Performing Tradies And Top Landlords by Revenue */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:min-h-[420px] ">
          <div className="bg-white p-4 rounded-2xl ">
            <div className="flex justify-between items-center ">
              <div className="mt-7 ml-7">
                <h3 className="text-lg font-bold text-slate-800">Top Performing Tradies</h3>
                <p className="text-sm text-slate-500">Top performing tradies based on revenue</p>
              </div>
            </div>
            <div className="overflow-y-auto h-[720px]">
              <TopPerformingTradies data={topPerformingTradiesData} />
            </div>

          </div>
          <div className="bg-white p-4 rounded-2xl ">
            <div className="flex justify-between items-center ">
              <div className="mt-7 ml-7">
                <h3 className="text-lg font-bold text-slate-800">Top Landlords by Revenue</h3>
                <p className="text-sm text-slate-500">Top landlords based on revenue</p>
              </div>
            </div>
            <div className="overflow-y-auto h-[720px]">
              <TopLandlords data={topLandlordsData} />
            </div>
          </div>
        </div>

        {/* Payment Overview */}

        <div className="bg-white p-4 rounded-2xl lg:min-h-[420px]">
          <div className="flex justify-between flex-col m-2 p-2 ">
            <h3 className="text-lg font-bold text-slate-800">Payment Overview</h3>
            <p className="text-sm text-slate-500">Transaction volume and platform fees</p>
          </div>
          <div className="overflow-y-auto h-[720px]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <StatusCard data={paymentData.slice(0, 4)} />
            </div>
            <div className="flex flex-col gap-4">
              <PaymentWidgets data={paymentWidgetsData} />
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Dashboard;
