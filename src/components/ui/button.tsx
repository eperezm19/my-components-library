import React from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "gshop"
  | "destructive"
  | "online";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[var(--color-primary)] text-[var(--color-primary-text)] hover:opacity-90",
    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-secondary-text)] hover:opacity-90",
    gshop:
      "bg-[var(--color-gshop)] text-[var(--color-gshop-text)] hover:opacity-90",
    destructive:
      "bg-[var(--color-destructive)] text-[var(--color-destructive-text)] hover:opacity-90",
    online:
      "bg-[var(--color-online)] text-[var(--color-online-text)] hover:opacity-90",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
