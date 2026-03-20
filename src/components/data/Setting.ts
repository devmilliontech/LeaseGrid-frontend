import { Download, FileJson, FileText, HardDriveDownload, Network, NotebookText } from "lucide-react";
import type { CardProps } from "../appShell/Cards";
import type { categoryData } from "../appShell/CategoryCard";


export const SettingCardData: CardProps[] = [
    {
        title: "Export to Excel",
        subtitle: "Download as .xlsx file",
        icon: NotebookText,
        button:{
            label:"Download",
            icon:Download,
            color:"success",
            variant:"contained",
            onClick:()=>{
                console.log("Download");
            }
        }
    },
    {
        title: "Export to CSV",
        subtitle: "Download as .csv file",
        icon: HardDriveDownload,
        button:{
            label:"Download",
            icon:Download,
            color:"primary",
            variant:"contained",
            onClick:()=>{
                console.log("Download");
            }
        }
    },
    {
        title: "Export to PDF",
        subtitle: "Download as .pdf file",
        icon: FileText,
       button:{
            label:"Download",
            icon:Download,
            color:"danger",
            variant:"contained",
            onClick:()=>{
                console.log("Download");
            }
        }
    },
    {
        title: "Export to JSON",
        subtitle: "Download as .json file",
        icon: FileJson,
        button:{
            label:"Download",
            icon:Download,
            color:"secondary",
            variant:"contained",
            onClick:()=>{
                console.log("Download");
            }
        }
    },
]


export const IpAddressData :categoryData[] = [
    {
        title:"192.168.1.1",
        subTitle:"Internal Network",
        total:123,
        status:"requests",

    },
    {
        title:"203.45.128.92",
        subTitle:"India",
        total:123,
        status:"blocked",
    },
    {
        title:"45.128.203.17",
        subTitle:"United States",
        total:123,
        status:"blocked",
    },
    {
        title:"185.220.101.43",
        subTitle:"Blocked - Suspicious",
        total:123,
        status:"requests",
    },
    {
        title:"118.92.203.45",
        subTitle:"Singapore",
        total:123,
        status:"requests",
    },
    
]