interface inputProps{
    placeholder?: string;
    type?: string;
    value?: string | number;
    onChange?:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    className?: string;
    error?: string | string[];
    required?: boolean;
    label?: string;
    disabled?: boolean;
}

export const Input : React.FC<inputProps> = ({
        placeholder,
        type,
        value,
        onChange,
        className,
        error,
        required,
        label,
        disabled,
    }:inputProps) => {
    return (
        <div className="w-full">
            <label className="text-sm font-semibold text-slate-700">{label}</label>
            {type === "textarea" ? (
                <textarea
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={`
                            ${className} 
                            w-full border rounded-xl py-3 px-3 resize-none
                            text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                            transition-all placeholder:text-slate-400
                    `}
                />
            ) : (
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    value={value}
                    onChange={onChange}
                    required={required}
                    disabled={disabled}
                    className={`
                            ${className} 
                            w-full border rounded-xl py-3 px-3 
                            text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 
                            transition-all placeholder:text-slate-400
                    `}
                />
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};