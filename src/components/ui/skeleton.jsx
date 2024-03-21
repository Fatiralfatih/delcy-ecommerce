import { cn } from "@/lib/utils"
import { string } from "prop-types";

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800", className)}
      {...props} />)
  );
}

Skeleton.propTypes = {
  className: string,
}

export { Skeleton }
