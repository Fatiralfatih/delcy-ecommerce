import * as React from "react";

import { cn } from "@/libs/utils";
import { element, string } from "prop-types";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex items-center h-10 w-full rounded-md px-4 py-2 text-sm md:text-[15px]  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 disabled:cursor-not-allowed transition ease-in-out duration-300 ring-offset-white focus-visible:outline-none focus-visible:ring-zinc-950 focus-visible:ring-offset-2s disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "border-zinc-200 bg-white border focus-visible:ring-2",
        rawrr:
          "shadow-intervaless-button border-2 border-zinc-700  active:shadow-intervaless-button-active focus-visible:ring-1 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = React.forwardRef(
  ({ className, variant, children, type = "text", name, ...props }, ref) => {
    return (
      <div className="w-full relative flex">
        <input
          type={type}
          id={name}
          className={cn(inputVariants({ className, variant }))}
          ref={ref}
          {...props}
        />
        {children}
      </div>
    );
  }
);
Input.displayName = "Input";

Input.propTypes = {
  className: string,
  type: string,
  variant: string,
  name: string,
  children: element,
};

export { Input };
