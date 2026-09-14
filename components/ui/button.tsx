import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
};


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
