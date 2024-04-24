import { Button } from "@/components/ui";
import { cn } from "@/libs";
import { string } from "prop-types";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderFormBackProductPage = ({ className }) => {
  return (
    <header
      className={cn(
        "container -mt-2 flex justify-start items-start md:mt-0 md:max-w-xl lg:max-w-4xl ",
        className
      )}
    >
      <Link to="/admin/product">
        <Button
          variant="primary"
          className="flex items-center gap-2 text-[15px]"
        >
          <span>
            <IoArrowBackCircleOutline className="text-2xl mt-[1px]" />
          </span>
          Kembali ke halaman product
        </Button>
      </Link>
    </header>
  );
};

HeaderFormBackProductPage.propTypes = {
  className: string,
};

export { HeaderFormBackProductPage };
