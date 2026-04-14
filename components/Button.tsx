import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-medium uppercase tracking-[0.05em] text-sm group";
  
  const variants = {
    primary: "bg-primary text-surface-container-lowest px-8 py-4 hover:bg-on-surface",
    secondary: "bg-transparent border border-outline/40 text-on-surface px-8 py-4 hover:bg-primary-container/10",
    tertiary: "bg-transparent text-on-surface px-0 py-2 border-b border-primary hover:text-primary pb-1 tracking-[0.1em] text-xs",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
