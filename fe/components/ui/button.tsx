import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap hover:brightness-105 duration-300 ease-in-out transition-all rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-90",
  {
    variants: {
      variant: {
        default:
          "border-2 border-magenta/40 bg-gradient-to-r from-magenta via-magenta-light to-magenta text-magenta-foreground hover:shadow-[0_16px_40px_hsla(289, 93.66%, 64.78%, 20%)]",
        white:
          "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,63%)] bg-muted text-muted-foreground rounded-md disabled:bg-muted/95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-default bg-transparent hover:bg-muted/5 shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,63%)]",
        secondary: "bg-magenta text-magenta-foreground hover:bg-magenta/80",
        ghost:
          "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:text-magenta-light hover:shadow-[0_16px_40px_hsla(289, 93.66%, 64.78%, 20%)]",
        link: "text-magenta-light underline-offset-4 hover:underline hover:shadow-[0_6px_20px_hsla(289, 93.66%, 64.78%, 20%)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const childProps = asChild ? { disabled: isLoading || disabled } : {};

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
        {...childProps}
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 text-white animate-spin" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
