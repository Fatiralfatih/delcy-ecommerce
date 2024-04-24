import { cn } from "@/libs";
import { string } from "prop-types";

const Loader = ({ className }) => {
  return (
    <div
      className={cn(
        "spinner w-[56px] h-[56px] grid border-4 border-solid border-[#0000] rounded-[50%] border-r-success-500",
        className
      )}
    />
  );
};

Loader.propTypes = {
  className: string,
};

export { Loader };
