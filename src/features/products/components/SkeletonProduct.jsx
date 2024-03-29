import { Skeleton } from "@/components/ui";
import { ProductList } from "./ProductList";

const SkeletonProduct = () => {
  return (
    <ProductList>
      {Array(8)
        .fill()
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 mt-3 px-2"
          >
            <Skeleton className="w-full h-[140px] max-h-[300px] md:h-[180px] xl:h-[200px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className="w-full h-[25px]" />
              <Skeleton className="w-32 h-[20px]" />
              <Skeleton className="w-24 h-[20px]" />
              <Skeleton className="w-full h-7 mt-2" />
            </div>
          </div>
        ))}
    </ProductList>
  );
};

export { SkeletonProduct };
