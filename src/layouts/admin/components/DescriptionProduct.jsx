import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { formatRupiah } from "@/lib";
import { array, object, string } from "prop-types";

const DescriptionProduct = ({
  title,
  category,
  price,
  stock,
  color,
  size,
  description,
  thumbnail,
}) => {
  return (
    <article>
      <CardHeader className='p-4'>
        <h1 className='text-xl font-semibold'>Description</h1>
      </CardHeader>
      <CardContent className='space-y-2 ps-6'>
        {/* name */}
        <div className='flex gap-2'>
          <CardDescription className='text-lg w-[120px]'>Name</CardDescription>
          <CardTitle className='text-lg w-[200px] line-clamp-2'>
            {title}
          </CardTitle>
        </div>

        {/* status */}
        <div className='flex items-center gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            status
          </CardDescription>
          <CardTitle className='text-lg text-green-500'>Active</CardTitle>
        </div>

        {/* category */}
        <div className='flex items-center gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            Category
          </CardDescription>
          <CardTitle className='text-lg'>{category.name}</CardTitle>
        </div>

        {/* price */}
        <div className='flex  gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            price
          </CardDescription>
          <CardTitle className='text-lg truncate ps-2 lg:ps-0'>
            {formatRupiah(price)}
          </CardTitle>
        </div>

        {/* stock */}
        <div className='flex items-center gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            stock
          </CardDescription>
          <CardTitle className='text-lg'>{stock}</CardTitle>
        </div>

        {/* color */}
        <div className='flex items-center gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            color
          </CardDescription>
          <CardTitle className='text-lg capitalize'>
            {color?.map((color) => color + ", ") || "tidak ada color"}
          </CardTitle>
        </div>

        {/* size */}
        <div className='flex items-center gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            size
          </CardDescription>
          <CardTitle className='text-lg capitalize'>
            {size?.map((size) => size + ", ") || "tidak ada size"}
          </CardTitle>
        </div>

        {/* description */}
        <div className='flex gap-2'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            description
          </CardDescription>
          <CardTitle className='text-lg ps-3 line-clamp-3 capitalize lg:ps-0'>
            {description}
          </CardTitle>
        </div>

        {/* thumbnail */}
        <div className='flex gap-2 flex-col md:flex-row'>
          <CardDescription className='text-lg capitalize w-[120px]'>
            Thumbnail
          </CardDescription>
          <figure className='h-full md:max-w-[260px] border rounded-lg'>
            <img
              src={`http://localhost:8000/storage/${thumbnail}`}
              alt={"thumbnail-" + title}
              className='w-full h-full aspect-auto rounded-lg'
            />
          </figure>
        </div>
      </CardContent>
    </article>
  );
};

DescriptionProduct.propTypes = {
  title: string.isRequired,
  category: object.isRequired,
  price: string.isRequired,
  stock: string.isRequired,
  color: array,
  size: array,
  description: string.isRequired,
  thumbnail: string,
};

export { DescriptionProduct };
