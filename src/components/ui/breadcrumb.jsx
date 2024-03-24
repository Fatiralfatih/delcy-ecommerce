import * as React from "react"
import { LuChevronRight, LuMoreHorizontal } from "react-icons/lu";

import { cn } from "@/lib/utils"
import { element, string } from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = React.forwardRef(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-zinc-500 sm:gap-2.5 dark:text-zinc-400",
      className
    )}
    {...props} />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...props} />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef(({ href, className, children, ...props }, ref) => {

  return (
    (<Link
      ref={ref}
      to={href}
      className={cn("transition-all duration-300 hover:bg-success-500 ease-in-out hover:text-zinc-950 dark:hover:text-zinc-50", className)}
      {...props}
    >
      {children}
    </Link>
    )
  );
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-zinc-950 dark:text-zinc-50", className)}
    {...props} />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-4.0", className)}
    {...props}>
    {children ?? <LuChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <LuMoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"

BreadcrumbList.propTypes = {
  className: string,
}

BreadcrumbItem.propTypes = {
  className: string,
}
BreadcrumbLink.propTypes = {
  className: string,
  href: string,
  children: string
}

BreadcrumbPage.propTypes = {
  className: string,
}

BreadcrumbSeparator.propTypes = {
  children: element,
  className: string,
}

BreadcrumbEllipsis.propTypes = {
  className: string,
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
