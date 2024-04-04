import { cn } from "@/lib";
import { string } from "prop-types";

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
  children: string,
  className: string,
};

export { BadgeCategory };
