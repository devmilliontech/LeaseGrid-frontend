import { useEffect, useState } from "react";

export default function HeaderNavigation({ title ,subtitle }: { title: string ,subtitle?: string }) {
     const [username,setUserName] = useState('');
     const user = localStorage.getItem('user') as string;
     const userObj = JSON.parse(user);
     useEffect(()=>{
       if(user){
         setUserName(userObj.name.toUpperCase());
       }
     },[])
     return (
          <div className="h-17 sticky top-0 z-10 w-full
                    border-b border-slate-100 
                    bg-white px-6 flex
                    items-center justify-between"
          >
               {/* Left: Title */}
               <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-slate-800">
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
                    <button className="relative text-slate-600 hover:text-slate-900 cursor-pointer" >
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                         >
                              <path
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth={2}
                                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5"
                              />
                         </svg>
                         {/* Notification dot */}
                         <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="text-4xl font-light text-slate-200 flex  iteams-center">|</div>
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
