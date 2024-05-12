import { Button, Card, CardContent, Input } from "@/components/ui";
import { cn } from "@/libs";
import { array, element, string } from "prop-types";
import { forwardRef } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IoCheckboxOutline } from "react-icons/io5";

const CartProducts = forwardRef(({ children, className }, ref) => {
  return (
    <Card ref={ref}>
      <CardContent
        className={cn("py-4 pb-5 lg:flex lg:justify-between", className)}
      >
        {children}
      </CardContent>
    </Card>
  );
});

CartProducts.displayName = "CardProducts";

const CartProductDescription = forwardRef(({ className }, ref) => {
  return (
    <div
      className={cn("flex gap-2 md:gap-4", className)}
      ref={ref}
    >
      <span>
        <IoCheckboxOutline className='text-xl' />
      </span>
      <figure className='w-full h-[120px] sm:h-[220px] sm:w-[250px] md:h-[150px] lg:h-[150px] lg:w-full xl:h-[150px] xl:w-[200px] max-w-[220px] max-h-[160px] '>
        <img
          src='https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?t=st=1711202523~exp=1711206123~hmac=6128d0aa00c3534319e9c2a30c95e4737641ce71702f20e7ba1132bad07aa69c&w=740'
          alt=''
          className='w-full h-full rounded-lg aspect-auto'
        />
      </figure>
      <article className='flex flex-col gap-2'>
        <h3 className='border-2 py-[3px] px-3 w-fit rounded-xl text-xs lg:text-sm lg:py-1'>
          Category
        </h3>
        <h1 className='font-semibold text-[16px] line-clamp-1 md:line-clamp-2 lg:text-lg'>
          Maternal portal akjsdhksad asdah asd lasdalsh ka dka sk
        </h1>
        <div className='flex gap-3'>
          <h2 className='text-sm lg:text-[16px]'>
            size : <span className='font-bold'>M</span>
          </h2>
          <h2 className='text-sm lg:text-[16px]'>
            color : <span className='font-bold'>Red</span>
          </h2>
        </div>
      </article>
    </div>
  );
});

CartProductDescription.displayName = "CartProductDescription";

const CartProductFooter = forwardRef(({ className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "text-end px-4 -mt-4 sm:-mt-20 md:-mt-5 lg:-mt-0 lg:self-end",
        className
      )}
    >
      <h1 className='text-sm font-bold md:text-lg lg:text-xl'>Rp 123.000</h1>
      <div className='flex items-center justify-end gap-2 pt-2'>
        <Button
          variant='outline'
          size='icon'
          className='border-0 text-zinc-500'
        >
          <FaRegTrashCan className='text-xl' />
        </Button>
        <div className='flex items-center border rounded-lg bg-zinc-50'>
          <span className='p-2 hover:bg-zinc-200'>
            <FiMinus />
          </span>
          <Input
            type='number'
            name='quantity-cart'
            className='text-sm text-center border-none w-14 h-7 bg-zinc-50 focus-visible:ring-0 focus-visible:ring-white'
            value='123'
            onChange={(e) => console.log(e.target.value)}
          />
          <span className='p-2 hover:bg-zinc-200'>
            <FiPlus />
          </span>
        </div>
      </div>
    </div>
  );
});

CartProductFooter.displayName = "CardProductFooter";

CartProducts.propTypes = {
  children: array || element,
  className: string,
};

CartProductDescription.propTypes = {
  className: string,
};

CartProductFooter.propTypes = {
  className: string,
};

export { CartProducts, CartProductDescription, CartProductFooter };
