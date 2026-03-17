import React from "react";
import { StatusCard } from "../appShell/Cards";
import { reviewCardData, reviewData, reviewType } from "../data/Reviews";
import { Button } from "../common/fromComponent/button";
import { DropDown } from "../common/fromComponent/DropDown";
import { header } from "../common/style";
import { RefreshCw, CircleCheck, EyeOff, Flag, Star } from "lucide-react";
import { subSubject } from "../common/style";
import Checkbox from "@mui/material/Checkbox";
import { ReviewsCard } from "../appShell/reviews/ReviewsCard";
import ProgressBar from "../common/ProgressBar";
import { CategoryCard } from "../appShell/CategoryCard";

const Reviews: React.FC = () => {
    return (
        <>
            <div className="p-2 space-y-6 max-w-[1600px] mx-auto">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <StatusCard data={reviewData} />
                </div>
                {/* Filter & Sort Disputes */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col mb-4">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col m-2">
                            <p className={header}>Filter & Sort Disputes</p>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => { }}
                                label="Reset All Filters"
                                className="pr-5 pl-3 py-2 rounded-2xl"
                                icon={RefreshCw}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between py-5">
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
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-1/3 flex flex-row items-center">
                            <Checkbox
                                onChange={(value) => console.log(value)}
                                sx={{
                                    color: "purple",
                                    '&.Mui-checked': {
                                        color: "purple",
                                    },
                                    '& .MuiSvgIcon-root': {
                                        width: 15,
                                        height: 15,
                                        borderRadius: "50%",
                                    },
                                }}
                            />
                            <p className={`${subSubject}`}>Select All</p>
                        </div>
                        <div className="flex flex-row justify-start gap-5 px-5 py-3">
                            <Button
                                variant="contained"
                                onClick={() => { }}
                                label="Approve Selected"
                                className="pr-5 pl-3 py-2 rounded-2xl"
                                icon={CircleCheck}
                            />
                            <Button
                                variant="contained"
                                color="danger"
                                onClick={() => { }}
                                label="Hide Selected"
                                className="pr-5 pl-3 py-2 rounded-2xl"
                                icon={EyeOff}
                            />
                            <Button
                                variant="contained"
                                color="info"
                                onClick={() => { }}
                                label="Flag Selected"
                                className="pr-5 pl-3 py-2 rounded-2xl"
                                icon={Flag}
                            />
                        </div>
                    </div>
                </div>
                {/* Reviews Card */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-2">
                    <ReviewsCard data={reviewCardData} />
                </div>
                <div className="flex flex-row justify-between py-4 px-4 items-center bg-white rounded-2xl">
                    <div className="">
                        <p>Showing 5 of 147 failed payouts</p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-5 flex-col" >
                        <div className="flex flex-col gap-2">
                            <p className={header}>Rating Distribution</p>
                            <p className={subSubject}>Breakdown of all reviews by star rating</p>
                        </div>
                        <div className="flex flex-col gap-5 pt-4">
                            <div className="flex flex-row gap-4">
                                <div className={`${subSubject} flex flex-row items-center gap-1`}>
                                    <p>5</p>
                                    <Star color="#FFD700" size={18} />
                                </div>
                                <div className="w-full">
                                    <ProgressBar value={90} height={15} />
                                </div>
                                <div className="w-1/10">
                                    <p className={subSubject}>6025</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className={`${subSubject} flex flex-row items-center gap-1`}>
                                    <p>4</p>
                                    <Star color="#FFD700" size={18} />
                                </div>
                                <div className="w-full">
                                    <ProgressBar value={75} height={15} />
                                </div>
                                <div className="w-1/10">
                                    <p className={subSubject}>6025</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className={`${subSubject} flex flex-row items-center gap-1`}>
                                    <p>3</p>
                                    <Star color="#FFD700" size={18} />
                                </div>
                                <div className="w-full">
                                    <ProgressBar value={60} height={15} />
                                </div>
                                <div className="w-1/10">
                                    <p className={subSubject}>6025</p>
                                </div>
                            </div><div className="flex flex-row gap-4">
                                <div className={`${subSubject} flex flex-row items-center gap-1`}>
                                    <p>2</p>
                                    <Star color="#FFD700" size={18} />
                                </div>
                                <div className="w-full">
                                    <ProgressBar value={40} height={15} />
                                </div>
                                <div className="w-1/10">
                                    <p className={subSubject}>6025</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className={`${subSubject} flex flex-row items-center gap-1`}>
                                    <p>1</p>
                                    <Star color="#FFD700" size={18} />
                                </div>
                                <div className="w-full">
                                    <ProgressBar value={30} height={15} />
                                </div>
                                <div className="w-1/10">
                                    <p className={subSubject}>6025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-5 flex-col" >
                        <div className="flex flex-col gap-2">
                            <p className={header}>Review Type Breakdown</p>
                            <p className={subSubject}>Distribution by review category</p>
                        </div>
                        <div className="flex flex-col gap-5 pt-4">
                            <CategoryCard data={reviewType} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
