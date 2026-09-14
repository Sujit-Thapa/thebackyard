import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  variant = "primary",
}) => {
  const baseStyles = "px-6 py-2.5 rounded-lg text-sm font-medium transition-colors";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:opacity-60",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-50 disabled:opacity-60",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
