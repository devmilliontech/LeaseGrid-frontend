import moment from "moment";

export const GetDays = (date: string, time: string) => {
  const today = moment();

  // Combine date and time into a single moment object
  const itemTime = moment(`${date} ${time}`, "YYYY-MM-DD HH:mm:ss");

  if (!itemTime.isValid()) {
    return "Invalid date"; // Return directly as a string if the date is invalid
  }

  // Get the difference in hours
  const hours = today.diff(itemTime, "hours");

  // If the difference is less than 24 hours
  if (hours < 24) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }

  // Get the difference in days
  const days = today.diff(itemTime, "days");

  // If the difference is less than 30 days (1 month)
  if (days < 30) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  // Get the difference in months
  const months = today.diff(itemTime, "months");

  // If the difference is less than 12 months (1 year)
  if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }

  // Get the difference in years
  const years = today.diff(itemTime, "years");

  return years === 1 ? "1 year ago" : `${years} years ago`;
};