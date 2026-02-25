import React from "react";
import { UsersFilterCard, UserTable, BulkActions } from "../appShell/user/UserCard.tsx";
import { activityAnalyticsData, usersOverviewData,usersTableData, verificationQueueTableData } from "../data/user";
import { RegistrationTable, VerificationQueueTable } from "../appShell/user/UserWidgets";
import { registrationTableData } from "../data/user";
import { StatusCard } from "../appShell/Cards";

const Users: React.FC = () => {
  return (
    <>
      <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
        {/* Users Status Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatusCard
            data={usersOverviewData.slice(0, 5)}
          />
        </div>
        {/* Users Filter Card */}
        <div>
          <UsersFilterCard />
        </div>
        {/* Users Table Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  min-h-[420px] max-h-[1250px] overflow-y-auto">
          <UserTable data={usersTableData} />
        </div>
        {/* Bulk Actions */}
        <div>
          <BulkActions />
        </div>
        {/* Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  lg:min-h-[420px] ">
          {/* Registration Table */}
          <div className="bg-white p-4 rounded-2xl">
            <RegistrationTable data={registrationTableData.slice(0, 5)} />
          </div>
          {/* Verification Queue Table */}
          <div className="bg-white p-4 rounded-2xl min-h-[420px] max-h-[1250px] overflow-y-auto">
            <VerificationQueueTable data={verificationQueueTableData.slice(0, 5)} />
          </div>
        </div>
        {/* Activity Analytics Card */}
        <div className="min-h-[420px] max-h-[1250px] ">
          <div className="bg-white p-6 rounded-3xl border border-slate-100">
               <div className="flex flex-col mb-6">
                    <p className="text-2xl font-bold text-black">User Activity Analytics</p>
                    <p className="text-sm text-slate-500">User engagement and platform activity metrics</p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatusCard data={activityAnalyticsData} />
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;