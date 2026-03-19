import { Download, FileJson, FileText, HardDriveDownload, NotebookText } from "lucide-react";
import type { CardProps } from "../appShell/Cards";


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