interface buttonProps{
    label: string;
    onClick: () => void;
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

export const Button : React.FC<buttonProps> = ({ label, onClick, className, color }: buttonProps) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`
                    ${className}
                    rounded-xl text-sm flex justify-center font-semibold cursor-pointer 
                    ${color === "primary" ? "bg-teal-500 text-white hover:bg-teal-600" : ""}  
                    ${color === "secondary" ? "bg-slate-400 text-white hover:bg-slate-500" : ""}  
                    ${color === "success" ? "bg-green-400 text-white hover:bg-green-500" : ""}  
                    ${color === "danger" ? "bg-red-400 text-white hover:bg-red-500" : ""}  
                    ${color === "warning" ? "bg-yellow-400 text-white hover:bg-yellow-500" : ""}  
                    ${color === "info" ? "bg-orange-400 text-white hover:bg-orange-500" : ""}  
                `}
            >{label}</button>
        </div>
    );
};