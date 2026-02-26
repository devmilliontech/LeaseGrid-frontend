import React from "react";
import { StatusCard } from "../appShell/Cards";
import { jobsData } from "../data/jobsData";

const Jobs: React.FC = () => {
     return (
          <>
               <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
                    {/* First Div Row Components */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                              <StatusCard data={jobsData} />
                    </div>
              </div>
          </>
     );
};

export default Jobs;
