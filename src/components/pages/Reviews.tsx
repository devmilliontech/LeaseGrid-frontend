import React from "react";
import { StatusCard } from "../appShell/Cards";
import { reviewData } from "../data/Reviews";

const Reviews: React.FC = () => {
    return (
        <>
            <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <StatusCard data={reviewData} />
                </div>
            </div>
        </>
    );
};

export default Reviews;
