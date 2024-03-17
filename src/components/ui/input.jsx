import * as React from "react"

import { cn } from "@/lib/utils"
import { element, string } from "prop-types";

const Input = React.forwardRef(({ className, type, iconLeft, iconRight, name, ...props }, ref) => {
  return (
    (
      <div className="w-full relative">
        <input
          type={type}
          id={name}
          className={cn(
            `flex items-center  h-10 w-full rounded-md border border-zinc-200 bg-white ${iconLeft && 'ps-10'} px-4 py-2 text-[15px] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300`,
            className
          )}
          ref={ref}
          {...props} />
        {iconLeft && (
          <label
            htmlFor={name}
            className="absolute top-[10px] ps-3">
            {iconLeft}
          </label>
        )}
        {iconRight && (
          <label
            htmlFor={name}
            className="absolute top-3 right-3"
          >
            {iconRight}
          </label>
        )}
      </div>)
  );
})
Input.displayName = "Input"

Input.propTypes = {
  className: string,
  type: string.isRequired,
  iconLeft: element,
  iconRight: element,
  name: string.isRequired,
}

export { Input }
