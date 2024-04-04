import { cn } from "@/lib";
import { array, string } from "prop-types";

const BadgeCategory = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex gap-3 w-full overflow-auto scrollbar-hide md:hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

BadgeCategory.propTypes = {
  children: array,
  className: string,
};

export { BadgeCategory };
