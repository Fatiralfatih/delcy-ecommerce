import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import { cn, formatRupiah } from "@/lib";
import { any, array, element, string } from "prop-types";
import { forwardRef } from "react";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

const ProductList = forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-2 gap-x-2 gap-y-5 md:px-4 sm:grid-cols-3 md:grid-cols-2 lg:gap-y-7 lg:grid-cols-3 xl:grid-cols-4",
      className
    )}
    {...props}
  >
    {children}
  </div>
));

ProductList.displayName = "ProductList";

const ProductItem = forwardRef(({ className, children, ...props }, ref) => (
  <Card
    ref={ref}
    className={cn("w-full rounded-sm md:shadow-lg", className)}
    {...props}
  >
    {children}
  </Card>
));

ProductItem.displayName = "ProductItem";

const ProductHeader = forwardRef(({ className, thumbnail, ...props }, ref) => (
  <CardHeader
    ref={ref}
    className={cn("p-2 relative w-full", className)}
    {...props}
  >
    <figure className="w-full group h-[150px] sm:h-[180px] max-h-[300px] md:h-[200px] ">
      <img
        src={`http://localhost:8000/storage/${thumbnail}`}
        alt={`image-product-delcy`}
        className="w-full h-full rounded-lg aspect-auto"
      />
      <Button
        className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 duration-500 border-0"
        variant="ghost"
        size="icon"
      >
        <FaRegHeart className="text-2xl text-pink-500 md:text-4xl" />
      </Button>
    </figure>
  </CardHeader>
));

ProductHeader.displayName = "ProductHeader";

const ProductContent = forwardRef(
  ({ className, title, price, ...props }, ref) => (
    <CardContent
      ref={ref}
      className={cn("", className)}
      {...props}
    >
      <article className="flex flex-col pt-2">
        {/* title */}
        <h1 className="text-sm font-semibold line-clamp-2 w-full h-[20px] overflow-hidden md:h-[30px] md:text-[15px] md:text-lg">
          {title}
        </h1>
        {/* reviews */}
        <div className="flex gap-1 text-xs items-center">
          <Button
            variant="ghost"
            className="border-0 p-0 mb-1"
            name={`reviews-${title}`}
          >
            <CiStar className="text-lg fill-current" />
          </Button>
          404 (23 reviews)
        </div>
        {/* price */}
        <h1 className="text-lg pt-1 font-black">{formatRupiah(price)}</h1>
      </article>
    </CardContent>
  )
);

ProductContent.displayName = "ProductContent";

const ProductFooter = forwardRef(({ className, children, ...props }, ref) => (
  <CardFooter
    ref={ref}
    className={cn("p-0", className)}
    {...props}
  >
    {children}
  </CardFooter>
));

ProductFooter.displayName = "ProductFooter";

ProductList.propTypes = {
  children: array,
  className: string,
};

ProductItem.propTypes = {
  className: string,
  children: array || element,
};

ProductHeader.propTypes = {
  className: string,
  thumbnail: string,
};

ProductContent.propTypes = {
  className: string,
  title: string.isRequired,
  price: string.isRequired,
};

ProductFooter.propTypes = {
  className: string,
  children: any,
};

export {
  ProductList,
  ProductItem,
  ProductHeader,
  ProductContent,
  ProductFooter,
};
