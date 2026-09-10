import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141414] disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-[#141414] text-white hover:bg-[#262626]",
        outline: "bg-white text-[#141414] border border-[#e0e0e0] hover:bg-[#f3f3f3]",
        soft: "bg-[#f3f3f3] text-[#141414] hover:bg-[#e8e8e8]",
        ghost: "text-[#141414] hover:bg-[#f3f3f3]",
        accent: "bg-[#0066ff] text-white hover:bg-[#0052cc]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-1.5 text-xs",
        lg: "h-13 px-8 py-3.5 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
