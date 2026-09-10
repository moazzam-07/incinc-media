import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        popular: "bg-[#0066ff] text-white", // Signature Mobbin electric blue commercial badge
        overlay: "bg-[rgba(115,115,115,0.65)] text-white backdrop-blur-md",
        neutral: "bg-[#f3f3f3] text-[#141414]",
        outline: "border border-[#e0e0e0] text-[#141414] bg-white",
        dark: "bg-[#141414] text-white",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
