import * as React from "react";

import { cn } from "@/libs/utils";
import { string } from "prop-types";
import { cva } from "class-variance-authority";

const textareaVariants = cva(
  "flex items-center min-h-[80px] w-full rounded-md px-2 py-2 text-[15px]  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 disabled:cursor-not-allowed transition ease-in-out duration-300 ring-offset-white focus-visible:outline-none  focus-visible:ring-zinc-950 focus-visible:ring-offset-2s disabled:opacity-50 ",
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

const Textarea = React.forwardRef(
  ({ className, variant, name, ...props }, ref) => {
    return (
      <textarea
        name={name}
        className={cn(textareaVariants({ className, variant }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

Textarea.propTypes = {
  className: string,
  variant: string,
  name: string,
};

export { Textarea };
