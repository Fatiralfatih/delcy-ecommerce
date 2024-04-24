import {
  Button,
  Divide,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui";
import { formatRupiah, removeDuplicateArray } from "@/libs";
import { object } from "prop-types";
import { CiHeart, CiStar } from "react-icons/ci";

export const DetailProductItem = ({ product }) => {
  const renderSize = () => {
    const removeDuplicateSize = removeDuplicateArray(
      product?.data.variant?.size
    );
    return removeDuplicateSize?.map((size) => (
      <TooltipProvider key={size}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950 cursor-pointer uppercase">
              {size}
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>{size}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ));
  };

  const renderColors = () => {
    const removeDuplicateColor = removeDuplicateArray(
      product?.data.variant?.color
    );

    return removeDuplicateColor?.map((color, index) => (
      <TooltipProvider key={index + 1}>
        <Tooltip>
          <TooltipTrigger asChild>
            <span
              className="text-sm p-4 rounded-full  cursor-pointer"
              style={{ backgroundColor: color === "white" ? "#DDDD" : color }}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className="capitalize">{color}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ));
  };

  return (
    <div className="bg-white p-4 text-lg rounded-xl w-full md:basis-[64rem] lg:basis-[70rem] xl:max-w-md xl:basis-[80rem]">
      <article className="space-y-2">
        <div className="flex flex-col">
          <div className="flex justify-between w-full">
            <h1 className="font-bold text-xl line-clamp-3 w-full h-fit lg:line-clamp-none">
              {product?.data.title}
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="border-0"
            >
              <CiHeart className="text-4xl" />
            </Button>
          </div>
          <div className="flex gap-1 text-sm items-center md:text-xs lg:text-sm">
            <Button
              variant="ghost"
              className="border-0 p-0 mb-1"
            >
              <CiStar className="text-lg fill-current" />
            </Button>
            404 (23 reviews)
          </div>
        </div>
        <h1 className="font-semibold text-xl md:text-lg lg:text-xl truncate">
          {formatRupiah(product?.data.price)}
        </h1>
      </article>

      <Divide />

      {/**size */}
      <article className=" space-y-3">
        <h1 className="font-bold text-xl md:text-lg">Size</h1>
        <div className="flex gap-2 flex-wrap">{renderSize()}</div>
      </article>

      <Divide />

      {/** Color */}
      <article className=" space-y-3">
        <h1 className="font-bold text-xl md:text-lg">Color</h1>
        <div className="flex gap-2 flex-wrap ">{renderColors()}</div>
      </article>

      <Divide />

      {/**description */}
      <article className="space-y-2">
        <h1 className="text-xl md:text-lg font-bold lg:text-xl">Description</h1>
        <p className="text-sm md:text-xs lg:text-sm">
          {product?.data.description}
        </p>
      </article>
    </div>
  );
};

DetailProductItem.propTypes = {
  product: object,
};
