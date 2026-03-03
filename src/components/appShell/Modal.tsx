import { X } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

interface ModalProps {
     isOpen: boolean;
     onClose: () => void;
     children: React.ReactNode;
     title?: string;
     description?: string;
     button?:string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, description }) => {
     if (!isOpen) return null;
     const handleCloseViewProfile = () => {
          onClose();
     };
     return (
          
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-600/50">
               <div className="relative bg-slate-50 rounded-lg w-250 rounded-xl h-145">
                    <div className="flex items-center justify-between ">
                        {title && <div className="px-4 pt-4">
                            <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
                        </div>}
                         <div className="absolute top-4 right-4 z-50">
                              <Tooltip title="Close">
                                   <IconButton onClick={handleCloseViewProfile}>
                                        <X className="text-gray-500 hover:text-gray-700 cursor-pointer w-5 h-5"/>
                                   </IconButton>
                              </Tooltip>
                         </div> 
                    </div>
                    {description && <div className="px-4"><p className="text-gray-600 mb-4">{description}</p></div>}
                    <div className="h-full w-full" >
                         {children}
                    </div>
               </div>
          </div>
     );
};

export default Modal;