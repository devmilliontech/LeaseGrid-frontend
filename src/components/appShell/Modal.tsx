import { X } from "lucide-react";
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-700/50 ">
               <div className="relative bg-slate-50 p-6 rounded-lg w-200 rounded-xl">
                    <div className="flex items-center justify-between flex-row-reverse p-2">
                         {title && <h2 className="text-xl font-bold">{title}</h2>}
                         <button
                              onClick={handleCloseViewProfile}
                              className="text-gray-500 hover:text-gray-700 cursor-pointer"
                         >
                              <X />
                         </button>
                    </div>
                    {description && <p className="text-gray-600 mb-4">{description}</p>}
                    <div className="h-120" >
                         {children}
                    </div>
               </div>
          </div>
     );
};

export default Modal;