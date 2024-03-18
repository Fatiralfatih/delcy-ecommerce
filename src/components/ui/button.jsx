import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { bool, string } from "prop-types";

const buttonVariants = cva(
  "inline-flex items-center py-5 justify-center whitespace-nowrap rounded-md font-normal font-mono text-lg border border-black transition-all ease-in-out duration-300",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        primary: "bg-primary text-zinc-800 hover:bg-primary/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        facebook: "bg-cyan-800/80 text-zinc-800 hover:bg-sky-800/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        instagram: "bg-pink-800/80 text-white hover:bg-fuchsia-800/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        success: 'bg-zinc-900 text-white hover:bg-success-500 hover:text-zinc-900 shadow-intervaless-button active:shadow-intervaless-button-active',
        danger:
          "bg-danger text-zinc-800 hover:bg-danger/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        warning: "bg-warning text-zinc-800 hover:bg-warning/90 shadow-intervaless-button active:shadow-intervaless-button-active",
        outline:
          "border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        secondary:
          "bg-zinc-600 text-zinc-900 hover:bg-zinc-800/80 text-white shadow-intervaless-button active:shadow-intervaless-button-active dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
        ghost: "",
        link: "text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50",
      },
      size: {
        default: "h-8 text-sm px-3",
        sm: "h-9 px-6",
        lg: "h-9 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

Button.propTypes = {
  className: string,
  variant: string,
  size: string,
  asChild: bool,
}

export { Button, buttonVariants }
