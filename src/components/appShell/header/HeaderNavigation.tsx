import Popover from "@mui/material/Popover";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { notificationData, type Notification } from "../../data/notifiacation";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Button } from "../../common/fromComponent/button";
import { header1 } from "../../common/style";

export default function HeaderNavigation({ title, subtitle }: { title: string, subtitle?: string }) {
     const [username, setUserName] = useState('');
     const [open, setOpen] = useState(false);
     const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
     const [notificationCount, setNotificationCount] = useState<number>(0);
     const [notifiacation, setNotifiacation] = useState<Notification[]>();
     const user = localStorage.getItem('user') as string;
     const userObj = JSON.parse(user);
     const { setNotification } = useAuthStore();
     const navigate = useNavigate();

     useEffect(() => {
          if (user) {
               setUserName(userObj.name.toUpperCase());
          }
          if (notificationData) {
               setNotifiacation(notificationData);
               setNotificationCount(notificationData.filter((notification) => !notification.read).length);
               setNotification(notificationData);
          }
          console.log("notifiacation", notifiacation);
     }, [notificationData])

     const handleNotificationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          setOpen(true);
          setAnchorEl(event.currentTarget);
     }

     const handleClose = () => {
          setOpen(false);
          setAnchorEl(null);
     }

     const handelClickNotification = () => {
          setOpen(false);
          setAnchorEl(null);
          navigate("/jobs");
     }

     const getNotificationColor = (notification: Notification) => {
          if (notification.read === false) {
               return "bg-teal-50 border border-teal-300 hover:bg-teal-100 hover:shadow-lg";
          }
          return "bg-slate-50 border border-slate-300 hover:bg-slate-100 hover:shadow-lg";
     }


     return (
          <div className="h-17 sticky top-0 z-10 w-full
                    border-b border-slate-100 
                    bg-white px-6 flex
                    items-center justify-between"
          >
               {/* Left: Title */}
               <div className="flex flex-col">
                    <h1 className={header1}>
                         {title}
                    </h1>
                    {subtitle && (
                         <p className="text-sm text-slate-500">{subtitle}</p>
                    )}
               </div>
               <div className="flex items-center gap-6">
                    {/* Search */}
                    <div className="relative mr-12 w-full">
                         <input
                              type="text"
                              placeholder="Search users, jobs, payments..."
                              className="
                              w-full
                              mr-7
                              pl-4 pr-30 py-2
                              border border-green-600
                              rounded-2xl 
                              placeholder:text-zinc-300
                              focus:outline-none focus:ring-2 focus:ring-green-200
                              "
                         />

                         <svg
                              className="w-5 h-5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2}
                                   d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                              />
                         </svg>
                    </div>


                    {/* Notification */}
                    <Button
                         className="!bg-transparent !p-0 !border-0 relative !text-slate-600 hover:!text-slate-900"
                         onClick={handleNotificationClick as any}
                    >
                         <Bell className="w-6 h-6" />
                         {/* Notification dot */}
                         {notificationCount > 0 ? (
                              <span
                                   className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 
                                   rounded-full text-white text-xs flex items-center justify-center"
                              >
                                   {notificationCount}
                              </span>
                         ) : null}
                    </Button>

                    {open && (
                         <Popover
                              open={open}
                              anchorEl={anchorEl}
                              onClose={handleClose}
                              anchorOrigin={{
                                   vertical: "bottom",
                                   horizontal: "right",
                              }}
                              transformOrigin={{
                                   vertical: "top",
                                   horizontal: "right",
                              }}
                              PaperProps={{
                                   sx: {
                                        borderRadius: 2,
                                        maxHeight: "150",
                                        overflowY: "auto",
                                        scrollbarWidth: "none",
                                        "&::-webkit-scrollbar": {
                                             display: "none",
                                        },
                                   }
                              }}
                         >
                              <div className="w-85 max-h-150 overflow-y-auto scrollbar-hide ">
                                   <h2 className="text-lg font-semibold mb-3 border-b border-slate-100 p-4 w-full">Notifications</h2>

                                   {notifiacation && notifiacation.length > 0 ? (
                                        notifiacation.map((notification, key) => (
                                             <div className="px-4">
                                                  <div
                                                       onClick={() => handelClickNotification()}
                                                       key={key}
                                                       className={`${getNotificationColor(notification)} flex 
                                                   flex-col rounded-2xl p-3 mb-2 cursor-pointer w-full h-20`}
                                                  >
                                                       <p className="text-xs font-semibold text-slate-700">
                                                            {notification.title}
                                                       </p>
                                                       <p className="text-xs text-slate-500">
                                                            {notification.description}
                                                       </p>
                                                       <p className="text-xs text-slate-400 ml-auto mt-2">
                                                            {notification.time}
                                                       </p>
                                                  </div>
                                             </div>
                                        ))
                                   ) : (
                                        <p className="text-sm text-slate-500">No new notifications</p>
                                   )}
                              </div>
                         </Popover>
                    )}


                    <div className="text-5xl font-light text-slate-100 flex  iteams-center pb-3">|</div>
                    {/* Profile */}
                    <div className="flex items-center gap-3 mr-5 cursor-pointer">
                         <img
                              src="https://i.pravatar.cc/40"
                              alt="Profile"
                              className="w-9 h-9 rounded-full object-cover"
                         />
                         <span className="text-sm font-medium text-slate-700">
                              {username?.split(' ')[0] || "jhon doe"}
                         </span>
                    </div>
               </div>
          </div>
     )

}
