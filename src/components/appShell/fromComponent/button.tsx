interface buttonProps{
    label: string;
    onClick: () => void;
    className?: string;
}

export const Button : React.FC<buttonProps> = ({ label, onClick, className }: buttonProps) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`
                    ${className} w-full bg-teal-400 border border-slate-200 rounded-xl py-3 
                                   text-sm hover:bg-teal-500 transition-all hover:text-teal-200
                                   flex justify-center text-white font-semibold cursor-pointer 
                        `}
            >{label}</button>
        </div>
    );
};