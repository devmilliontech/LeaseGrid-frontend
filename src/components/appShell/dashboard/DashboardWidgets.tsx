import React, { useEffect, useState } from 'react';
import {
     User,
     FileText,
     DollarSign,
     Star,
     AlertCircle,
     AlertTriangle,
     Info,
     CheckCircle,
     ArrowRight,
     Angry
} from 'lucide-react';
import Rating from '@mui/material/Rating';
import { Button } from '../../common/fromComponent/button';
import { header, subHeader } from '../../common/style';
import { UserAvatar } from "../../common/UserAvtar";

// Types for Recent Activity
export interface ActivityItem {
     id: string;
     user: {
          name: string;
          avatar?: string; // URL or undefined for placeholder
          initials?: string;
     };
     action: string;
     target?: string; // e.g., "posted a job"
     time: string;
     type: 'register' | 'job' | 'payment' | 'dispute' | 'review';
     status: 'New' | 'Job' | 'Paid' | 'Dispute' | 'Review';
}

interface RecentActivityProps {
     data: ActivityItem[];
     onViewAll?: () => void;
}

// Types for System Alerts
export type AlertSeverity = 'critical' | 'warning' | 'info' | 'success';

export interface AlertItem {
     id: string;
     title: string;
     description: string;
     severity: AlertSeverity;
     time: string;
     actionText?: string;
     actionUrl?: string;
}

interface SystemAlertsProps {
     data: AlertItem[];
     onViewAll?: () => void;
}

// --- Helper Components ---

const ActivityIcon = ({ type }: { type: ActivityItem['type'] }) => {
     switch (type) {
          case 'register': return <User className="w-4 h-4 text-emerald-600" />;
          case 'job': return <FileText className="w-4 h-4 text-blue-600" />;
          case 'payment': return <DollarSign className="w-4 h-4 text-emerald-600" />;
          case 'dispute': return <AlertCircle className="w-4 h-4 text-rose-600" />;
          case 'review': return <Star className="w-4 h-4 text-yellow-600" />;
          default: return <User className="w-4 h-4 text-slate-600" />;
     }
};

const StatusBadge = ({ status }: { status: ActivityItem['status'] }) => {
     const styles = {
          'New': 'bg-emerald-100 text-emerald-700',
          'Job': 'bg-blue-100 text-blue-700',
          'Paid': 'bg-teal-100 text-teal-700',
          'Dispute': 'bg-rose-100 text-rose-700',
          'Review': 'bg-yellow-100 text-yellow-700',
     };

     return (
          <span className={`px-2 py-1 rounded-full text-xs font-bold ${styles[status] || 'bg-slate-100 text-slate-600'}`}>
               {status}
          </span>
     );
};



// --- Main Exported Components ---

export const RecentActivity: React.FC<RecentActivityProps> = ({ data, onViewAll }) => {
     return (
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
               <div className="flex justify-between items-center mb-6">
                    <div>
                         <h3 className={header}>Recent User Activity</h3>
                         <p className={subHeader}>Real-time updates</p>
                    </div>
                    <Button
                         onClick={onViewAll || (() => { })}
                         className="!bg-transparent !border-0 !p-0 !text-sm !font-medium !text-teal-600 hover:!text-teal-700 hover:!underline"
                         label="View All"
                    />
               </div>

               <div className="flex-1 overflow-y-auto pr-2 space-y-4 ">
                    {data.map((item) => (
                         <div key={item.id} className="flex items-start justify-between group p-2 
                              hover:bg-slate-200 rounded-xl transition-colors cursor-pointer">
                              <div className="flex gap-3">
                                   <div className="relative">
                                        {item.user.avatar ? (
                                             <img src={item.user.avatar} alt={item.user.name} className="w-10 h-10 rounded-full object-cover" />
                                        ) : (
                                             <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                                                  {item.user.initials || item.user.name.charAt(0)}
                                             </div>
                                        )}
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
                                             <ActivityIcon type={item.type} />
                                        </div>
                                   </div>
                                   <div>
                                        <p className="text-sm font-semibold text-slate-800">
                                             {item.user.name} <span className="text-slate-500 font-normal">{item.action}</span>
                                        </p>
                                        <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                                        {item.target && <p className="text-xs text-slate-500 mt-1 italic">"{item.target}"</p>}
                                   </div>
                              </div>
                              <StatusBadge status={item.status} />
                         </div>
                    ))}
               </div>
          </div>
     );
};


const AlertIcon = ({ severity }: { severity: AlertSeverity }) => {
     switch (severity) {
          case 'critical': return <Angry className="w-5 h-5 text-rose-500" />;
          case 'warning': return <AlertTriangle className="w-5 h-5 text-orange-500" />;
          case 'info': return <Info className="w-5 h-5 text-blue-500" />;
          case 'success': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
     }
};

const AlertStyles = (severity: AlertSeverity) => {
     switch (severity) {
          case 'critical': return 'bg-rose-100 border-rose-200';
          case 'warning': return 'bg-orange-100 border-orange-200';
          case 'info': return 'bg-blue-100 border-blue-200';
          case 'success': return 'bg-emerald-100 border-emerald-200';
     }
};

const AlertTextStyles = (severity: AlertSeverity) => {
     switch (severity) {
          case 'critical': return '!text-rose-500';
          case 'warning': return '!text-orange-500';
          case 'info': return '!text-blue-500';
          case 'success': return '!text-emerald-500';
     }
};


// System Alerts
export const SystemAlerts: React.FC<SystemAlertsProps> = ({ data }) => {

     return (
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
               <div className="flex justify-between items-center mb-6">
                    <div>
                         <h3 className={header}>System Alerts</h3>
                         <p className={subHeader}>System health & notifications</p>
                    </div>
               </div>

               <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                    {data.map((alert) => (
                         <div
                              key={alert.id}
                              className={`p-4 rounded-xl border ${AlertStyles(alert.severity)} transition-all hover:shadow-md cursor-default`}
                         >
                              <div className="flex gap-3">
                                   <div className="mt-0.5">
                                        <AlertIcon severity={alert.severity} />
                                   </div>
                                   <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                             <h4 className={`text-sm font-bold ${AlertTextStyles(alert.severity)}`}>{alert.title}</h4>
                                             <span className={`text-xs whitespace-nowrap ml-2 ${AlertTextStyles(alert.severity)}`}>{alert.time}</span>
                                        </div>
                                        <p className={`text-sm mt-1 leading-relaxed ${AlertTextStyles(alert.severity)}`}>
                                             {alert.description}
                                        </p>
                                        {alert.actionText && (
                                             <Button
                                                  onClick={() => { }}
                                                  className={`!bg-transparent !border-0 !p-0 mt-2 !text-xs !font-semibold flex items-center gap-1 
                                                            hover:!underline ${AlertTextStyles(alert.severity)}
                                                            `}
                                             >
                                                  {alert.actionText} <ArrowRight className="w-3 h-3" />
                                             </Button>
                                        )}
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};



// Top Performing Tradies

export interface TopPerformingTradiesItem {
     name: string;
     rating: number;
     jobsCompleted: number;
     totalEarnings: number;
     avatar?: string;
     type?: string;
     status?: string;

}

interface TopPerformingTradiesProps {
     data: TopPerformingTradiesItem[];
}

export const TopPerformingTradies: React.FC<TopPerformingTradiesProps> = ({ data }) => {
     const [topTradies, setTopTradies] = useState<TopPerformingTradiesItem[]>([])
     const getTopTradies = (data: TopPerformingTradiesItem[]) => {
          const topTradies = data.sort((a, b) => b.totalEarnings - a.totalEarnings)
          setTopTradies(topTradies);
     }
     useEffect(() => {
          getTopTradies(data);

     }, [data]);
     const getTopTradiesColor = (index: number) => {
          switch (index) {
               case 0:
                    return 'bg-teal-50 border-teal-500';
               case 1:
                    return 'bg-yellow-50 border-yellow-500';
               case 2:
                    return 'bg-fuchsia-50 border-fuchsia-500 ';
               default:
                    return 'bg-gray-50 border-gray-200 ';
          }
     }

     const getIdBgColor = (index: number) => {
          switch (index) {
               case 0:
                    return 'bg-teal-400';
               case 1:
                    return 'bg-yellow-400';
               case 2:
                    return 'bg-fuchsia-400 ';
               default:
                    return 'bg-gray-200 ';
          }
     }

     

     return (
          <div className="bg-white p-6 rounded-2xl h-full flex flex-col">

               <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                    {topTradies.map((trades, index) => (
                         <div key={index} className={`p-4 rounded-xl border 
                              shadow-sm ${getTopTradiesColor(index)}`}
                         >
                              <div className="flex justify-between">
                                   <div className="flex items-center gap-2  w-70 ">
                                        <p className={`text-sm font-medium text-slate-800 px-4 py-2 
                                             rounded-full ${getIdBgColor(index)}`}>
                                             {index + 1}
                                        </p>
                                        <UserAvatar img={trades.avatar} className={`border-1 ${getTopTradiesColor(index)} w-10 h-10`} />
                                   </div>
                                   <div className="flex flex-col flex w-full ">
                                        <p className="text-md font-semibold text-slate-800">{trades.name}</p>
                                        <p className="text-xs font-semibold text-slate-500 w-full">{trades.type}</p>
                                   </div>
                                   <div className="flex justify-end w-full pr-4 ">
                                        <p className='text-lg font-semibold'>${trades.totalEarnings}</p>
                                   </div>
                              </div>
                              <div className="flex flex-row justify-between items-center pt-6">
                                   <div className="flex items-center w-full ">
                                        <p className="text-sm text-slate-800">{trades.jobsCompleted} Jobs Completed</p>
                                   </div>
                                   <div className="flex items-center gap-2 w-full justify-end pr-4">
                                        <Rating value={trades.rating} readOnly size="small" precision={0.5} />
                                        <p className="text-xs text-slate-500">{trades.rating}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};




// Top Landlords by Revenue

export interface TopLandlordsItem {
     id?: number;
     name: string;
     rating: number;
     properties: number;
     totalEarnings: number;
     month: string;
     avatar?: string;


}

interface TopLandlordsProps {
     data: TopLandlordsItem[];
}

export const TopLandlords: React.FC<TopLandlordsProps> = ({ data, }) => {

     const [topLandlords, setTopLandlords] = useState<TopLandlordsItem[]>([]);

     const getTopLandlords = (data: TopLandlordsItem[]) => {
          const topLandlords = data.sort((a, b) => b.totalEarnings - a.totalEarnings)
          setTopLandlords(topLandlords);
     }

     useEffect(() => {
          getTopLandlords(data);

     }, [data]);

     const getTopLandlordsColor = (index: number) => {
          switch (index) {
               case 0:
                    return 'bg-teal-50 border-teal-500';
               case 1:
                    return 'bg-yellow-50 border-yellow-500';
               case 2:
                    return 'bg-lime-50 border-lime-500 ';
               case 3:
                    return 'bg-blue-50 border-blue-500 ';
               case 4:
                    return 'bg-purple-50 border-purple-500 ';
               case 5:
                    return 'bg-pink-50 border-pink-500 ';
               default:
                    return 'bg-gray-50 border-gray-200 ';
          }
     }


     return (
          <div className="bg-white p-6 rounded-2xl h-full flex flex-col">
               <div className="flex-1 overflow-y-auto pr-2 space-y-3 scrollbar-hide">
                    {topLandlords.map((landlord, index) => (
                         <div
                              key={index}
                              className={`p-4 rounded-xl border
                              shadow-sm ${getTopLandlordsColor(index)}`}
                         >
                              <div className="flex justify-between">
                                   <div className="flex items-center gap-2">
                                        <UserAvatar img={landlord.avatar} className={`border-1 ${getTopLandlordsColor(index)} w-10 h-10`}/>
                                        <div className="flex flex-col">
                                             <p className="text-md font-semibold text-slate-800">{landlord.name}</p>
                                             <div className="flex items-center gap-2 justify-center">
                                                  <p className="text-sm text-slate-500">{landlord.properties} Properties</p>
                                                  <div className="flex items-center gap-2">
                                                       <Rating value={landlord.rating} readOnly size="small" precision={0.5} />
                                                       <p className="text-sm text-slate-500">{landlord.rating}</p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex flex-col">
                                        <p className='text-md font-semibold'>${landlord.totalEarnings}</p>
                                        <p className="text-sm font-medium text-slate-500">{landlord.month}</p>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

