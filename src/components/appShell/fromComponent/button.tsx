interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  variant?: "outlined" | "contained";
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  color = "primary",
  variant = "contained",
}) => {

  const colors = {
    primary: "teal-400 hover:bg-teal-500",
    secondary: "slate-400 hover:bg-slate-500",
    success: "green-400 hover:bg-green-500",
    danger: "red-400 hover:bg-red-500",
    warning: "yellow-400 hover:bg-yellow-500",
    info: "orange-400 hover:bg-orange-500",
  };

  const baseColor = colors[color];

  const styles =
    variant === "contained"
      ? `bg-${baseColor} text-white hover:bg-${baseColor.replace("400","500")}`
      : `border-2 border-${baseColor} text-${baseColor} hover:bg-${baseColor} hover:text-white`;

  return (
    <button
      onClick={onClick}
      className={`${styles} ${className} text-sm font-semibold px-4 py-2 rounded cursor-pointer`}
    >
      {label}
    </button>
  );
};