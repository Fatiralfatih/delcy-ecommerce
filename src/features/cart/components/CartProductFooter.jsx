import { Button, Input } from "@/components/ui";
import { cn } from "@/libs";
import { string } from "prop-types";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartProductFooter = ({ className }) => {
  return (
    <div
      className={cn(
        "text-end px-4 -mt-4 sm:-mt-20 md:-mt-5 lg:-mt-0 lg:self-end",
        className
      )}
    >
      <h1 className="text-sm md:text-lg font-bold lg:text-xl">Rp 123.000</h1>
      <div className="flex gap-2 justify-end items-center pt-2">
        <Button
          variant="outline"
          size="icon"
          className="border-0 text-zinc-500"
        >
          <FaRegTrashCan className="text-xl" />
        </Button>
        <div className="flex items-center border rounded-lg bg-zinc-50">
          <span className="hover:bg-zinc-200 p-2">
            <FiMinus />
          </span>
          <Input
            type="number"
            name="quantity-cart"
            className="text-sm w-14 border-none text-center h-7 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-white"
            value="123"
            onChange={(e) => console.log(e.target.value)}
          />
          <span className="p-2 hover:bg-zinc-200">
            <FiPlus />
          </span>
        </div>
      </div>
    </div>
  );
};

CartProductFooter.propTypes = {
  className: string,
};

export { CartProductFooter };
