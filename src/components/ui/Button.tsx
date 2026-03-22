import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", href, children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3.5 font-semibold rounded-lg transition-all w-full sm:w-auto min-h-[48px] min-w-[48px]";
  const variants = {
    primary: "bg-secondary-base text-white hover:bg-secondary-hover shadow-lg animate-cta-pulse",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 border border-neutral-300",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
