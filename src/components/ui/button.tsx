import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium CTA variants - 16px vertical padding, balanced horizontal
        hero: "bg-foreground text-background text-[15px] font-semibold hover:bg-foreground/90 shadow-[0_2px_8px_-2px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_16px_-4px_rgba(255,255,255,0.2)]",
        heroOutline: "border border-foreground/20 text-foreground text-[15px] font-medium hover:border-foreground/40 hover:bg-foreground/5 bg-transparent",
        minimal: "text-muted-foreground hover:text-foreground text-[15px] font-medium",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-10 px-5 text-[14px]",
        lg: "h-12 px-7",
        // Premium CTA size with 16px vertical padding
        xl: "h-[52px] px-8",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
