interface buttonProps{
    label: string;
    onClick: () => void;
    className?: string;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
    variant?:"outlined" | "danger";
}

export const Button: React.FC<buttonProps> = ({ label, onClick, className, color, variant }: buttonProps) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`
                    ${className}
                    ${variant === "outlined" ? "border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white" : ""}
                    ${variant === "danger" ? "border-2 border-red-500 text-red-500 hover:bg-red-200 hover:text-red-500" : ""}
                    text-sm flex justify-center font-semibold cursor-pointer 
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