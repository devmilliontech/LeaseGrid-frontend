import { CircleCheck, Clock, Flag, Star, StarHalf } from "lucide-react";
import type { CardProps } from "../appShell/Cards";

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