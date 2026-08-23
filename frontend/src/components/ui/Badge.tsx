type BadgeVariant =
  | "positive"
  | "pending"
  | "neutral"
  | "verified"
  | "unavailable";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
};

const variantStyles: Record<BadgeVariant, string> = {
  positive:
    "bg-[#e7f3ee] text-[var(--teal)] border-[#c9e3d8]",

  pending:
    "bg-[#fff3dc] text-[#9a6418] border-[#f1d39a]",

  neutral:
    "bg-[#f1eee8] text-[var(--ink-muted)] border-[var(--border)]",

  verified:
    "bg-[#e7f3ee] text-[var(--teal)] border-[#c9e3d8]",

  unavailable:
    "bg-[#f4e9e7] text-[#8a3f35] border-[#e2c8c3]",
};

export default function Badge({
  children,
  variant = "neutral",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        border
        px-2.5 py-1
        text-xs font-semibold
        leading-none
        ${variantStyles[variant]}
      `}
    >
      {children}
    </span>
  );
}