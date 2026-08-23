import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "amber";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--teal)] text-white hover:bg-[var(--teal-deep)]",
  secondary:
    "border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] hover:bg-[var(--surface)]",
  amber:
    "bg-[var(--amber)] text-[var(--ink)] hover:brightness-95",
};

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const styles = `
    inline-flex items-center justify-center
    rounded-md
    px-4 py-2.5
    text-sm font-semibold
    transition-colors
    duration-200
    disabled:pointer-events-none
    disabled:opacity-50
    ${variantStyles[variant]}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}