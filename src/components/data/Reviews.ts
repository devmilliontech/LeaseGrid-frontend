import { BriefcaseBusiness, Building, CircleCheck, Clock, Flag, Star, StarHalf, User } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { ReviewCardDataProps } from "../appShell/reviews/ReviewsCard";
import type { categoryData } from "../appShell/CategoryCard";

export const reviewData :CardProps[] = [
    {
        title: "Total Reviews",
        value: 1245,
        subtitle: "All time",
        icon: Star,
        badgeText: "+15.3%",
    },
    {
        title: "Pending Review",
        value: 4.5,
        subtitle: "Out of 5",
        icon: Clock,
        badgeText: "78 new",
    },
    {
        title: "Flagged Reviews",
        value: 1024,
        subtitle: "4-5 stars",
        icon: Flag,
        badgeText: "12 urgent",
    },
    {
        title: "Approved",
        value: 221,
        subtitle: "1-2 stars",
        icon: CircleCheck,
        badgeText: "98.2%",
    },
    {
        title: "Avg Rating",
        value: 221,
        subtitle: "1-2 stars",
        icon: StarHalf,
        badgeText: "4.7/5",
    },
]




export const reviewCardData: ReviewCardDataProps[] = [
    {
        reviewCreate: {
            name: "John Doe",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Jane Doe",
            type: "Landlord",
            property: "123",
        },
        rating: 5.0,
        review: "This tradie was absolutely fantastic! Completed the job ahead of schedule and the quality of work was exceptional. Would definitely hire again for future projects. Highly recommended!",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Flagged",
        flagedReason: "Suspicious activity - Multiple 5-star reviews from same IP",
    },
    {
        reviewCreate: {
            name: "Emma Richardson",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Sarah Johnson",
            type: "Tradie",
            jobCompleted:"5",
        },
        rating: 4.0,
        review: "Great property overall. Location is perfect and the landlord was responsive. Only minor issue was some maintenance delays, but everything was eventually resolved satisfactorily.",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Pending",
    },
    {
        reviewCreate: {
            name: "David Wilson",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Michael Brown",
            type: "Landlord",
            property: "123",
        },
        rating: 5,
        review: "This tradie was absolutely fantastic! Completed the job ahead of schedule and the quality of work was exceptional. Would definitely hire again for future projects. Highly recommended!",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Approved",
        flagedReason: "Suspicious activity - Multiple 5-star reviews from same IP",
    },
    {
        reviewCreate: {
            name: "David Wilson",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Michael Brown",
            type: "Landlord",
            property: "123",
        },
        rating: 5,
        review: "This tradie was absolutely fantastic! Completed the job ahead of schedule and the quality of work was exceptional. Would definitely hire again for future projects. Highly recommended!",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Approved",
        flagedReason: "Suspicious activity - Multiple 5-star reviews from same IP",
    },
    {
        reviewCreate: {
            name: "David Wilson",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Michael Brown",
            type: "Landlord",
            property: "123",
        },
        rating: 5,
        review: "This tradie was absolutely fantastic! Completed the job ahead of schedule and the quality of work was exceptional. Would definitely hire again for future projects. Highly recommended!",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Approved",
        flagedReason: "Suspicious activity - Multiple 5-star reviews from same IP",
    },
    {
        reviewCreate: {
            name: "David Wilson",
            avatar: "https://i.pravatar.cc/40",
        },
        rateUser: {
            name: "Michael Brown",
            type: "Landlord",
            property: "123",
        },
        rating: 5,
        review: "This tradie was absolutely fantastic! Completed the job ahead of schedule and the quality of work was exceptional. Would definitely hire again for future projects. Highly recommended!",
        date: "2022-01-01",
        time: "12:00 PM",
        status: "Approved",
        flagedReason: "Suspicious activity - Multiple 5-star reviews from same IP",
    },
];



export const reviewType:categoryData[]=[
    {
        title:"Tradie Review",
        total:1245,
        icon:BriefcaseBusiness,
        subTitle:"58.5% of total reviews"

    },
    {
        title:"Property Review",
        total:1245,
        icon:Building,
        subTitle:"31.8% of total reviews"

    },
    {
        title:"Landlord Review",
        total:1245,
        icon:User,
        subTitle:"9.7% of total reviews"
        
    },
]