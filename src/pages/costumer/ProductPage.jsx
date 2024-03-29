import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import {
  ProductCategoryList,
  ProductItem,
  ProductList,
  ProductVariantList,
  SkeletonProduct,
} from "@/features/products/components";
import { useState } from "react";
import { NotFound404 } from ".";
import CostumerLayout from "@/layouts/costumer/CostumerLayout";
import {
  useFetchCategories,
  useFetchProducts,
} from "@/features/products/hooks";

const ProductPage = () => {
  const [filterProductByCategory, setFlterProductByCategory] = useState("");

  const {
    data: products,
    isError: isErrorInProducts,
    error: errorInProducts,
    isLoading: isLoadingInProducts,
  } = useFetchProducts();

  const {
    data: categories,
    isError: isErrorInCategories,
    isLoading: isLoadingInCategories,
    error: errorInCategories,
  } = useFetchCategories();

  const handleFilterCategory = (category) => {
    const { name } = category;

    setFlterProductByCategory(name);
  };

  const filterProducts = products?.data.filter((product) =>
    filterProductByCategory
      ? product.category.name === filterProductByCategory
      : product
  );

  if (isErrorInProducts || isErrorInCategories) {
    return <NotFound404 error={errorInProducts || errorInCategories} />;
  }

  return (
    <CostumerLayout>
      <div className="container pt-24">
        {/**Category mobile */}
        {isLoadingInCategories ? (
          <></>
        ) : (
          <div className="flex gap-3 w-full overflow-auto scrollbar-hide md:hidden">
            {categories?.data.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className="capitalize px-2 py-1 rounded-xl hover:bg-success-500 hover:text-zinc-800"
              >
                {category.name}
              </Button>
            ))}
          </div>
        )}
        {/** web */}
        <div className="flex">
          <Card className="hidden md:max-w-md md:basis-[300px] rounded-s-lg rounded-e-none md:border-0 md:block lg:basis-[350px]">
            <CardHeader className="p-4">
              <h1 className="text-2xl font-black">Filter </h1>
            </CardHeader>
            <CardContent className="sticky top-[100px] md:top-[79px]">
              {/**category */}
              {isLoadingInCategories ? (
                <></>
              ) : (
                <>
                  <ProductCategoryList
                    categories={categories}
                    handleFilterCategory={handleFilterCategory}
                  />
                  {/** product size list */}
                  <ProductVariantList />
                </>
              )}
            </CardContent>
          </Card>
          <div className="space-y-4  pb-5 md:pb-10 w-full rounded-e-lg mt-[30px] md:mt-0 bg-white">
            <div className="flex justify-between rounded-b-lg rounded-e-lg items-center sticky z-20 top-[75px] md:top-[79px] bg-success-300 py-3 px-4 ">
              <article className="flex flex-col gap-y-1">
                <h1 className="text-xl font-bold md:text-2xl">
                  Give All You Need
                </h1>
                <p className="text-sm w-full">
                  {filterProductByCategory || "All"} (25 total)
                </p>
              </article>
              <Select>
                <SelectTrigger className="w-[100px] max-w-xs sm:w-[150px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="all">all</SelectItem>
                    <SelectItem value="name">name</SelectItem>
                    <SelectItem value="popular">popular</SelectItem>
                    <SelectItem value="ratings">ratings</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {isLoadingInProducts && <SkeletonProduct />}
            <ProductList>
              {filterProducts?.map((product) => (
                <ProductItem
                  key={product.id}
                  {...product}
                />
              ))}
            </ProductList>
          </div>
        </div>
      </div>
    </CostumerLayout>
  );
};

export { ProductPage };
