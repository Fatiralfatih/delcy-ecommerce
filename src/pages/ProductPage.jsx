import { Button, Card, CardContent, CardHeader, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { ProductCategoryList, ProductColorList, ProductList, ProductSizeList, SkeletonCategories, SkeletonCategoryMobile, SkeletonProduct } from "@/features/products/components";
import { ProductItem } from "@/features/products/components/ProductItem";
import NotFound404 from "./NotFound404";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib";

const ProductPage = () => {

    const { isLoading: loadingInCategories, isError: errorInCategories, data: categories } = useQuery({
        queryKey: ['categories-data'],
        queryFn: () => axiosInstance.get('/categories')
    })

    const { isLoading: loadingInProduct, isError: errorInProduct, data: products } = useQuery({
        queryKey: ['product-data'],
        queryFn: () => axiosInstance.get('/products')
    })

    if (errorInProduct || errorInCategories) {
        return <NotFound404 error={true} />
    }

    return (
        <div className="container pt-24">
            {/**Category mobile */}
            {loadingInCategories && (<SkeletonCategoryMobile />)}
            <div className="flex gap-3 w-full overflow-auto scrollbar-hide md:hidden">
                {
                    categories?.data.data.map(category => (
                        <Button
                            key={category.id}
                            variant="ghost"
                            className="capitalize px-2 py-1 rounded-xl hover:bg-success-500 hover:text-zinc-800"
                        >
                            {category.name}
                        </Button>
                    ))
                }
            </div>
            {/** web */}
            <div className="flex">
                <Card className="hidden md:max-w-md md:basis-[320px] rounded-s-lg rounded-e-none md:border-0 md:block">
                    <CardHeader className="p-4">
                        <h1 className="text-2xl font-black">Filter</h1>
                    </CardHeader>
                    <CardContent className="sticky top-[100px] md:top-[79px]">
                        {loadingInCategories ? (
                            <SkeletonCategories />
                        ) : (
                            <>
                                {/**category */}
                                <ProductCategoryList categories={categories} />
                                {/** Color */}
                                <ProductColorList />
                                {/** Size */}
                                <ProductSizeList />
                            </>
                        )}
                    </CardContent>
                </Card>
                <div className="space-y-4  pb-5 md:pb-10 w-full rounded-e-lg mt-[30px] md:mt-0 bg-white">
                    <div className="flex justify-between rounded-b-lg rounded-e-lg items-center sticky z-20 top-[75px] md:top-[79px] bg-success-300 py-3 px-4 ">
                        <article className="flex flex-col gap-y-1">
                            <h1 className="text-xl font-bold md:text-2xl">Give All You Need</h1>
                            <p className="text-sm w-full">Gaming (25 total)</p>
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
                    {loadingInProduct && (
                        <SkeletonProduct />
                    )}
                    <ProductList>
                        {products?.data.data.map(product => (
                            <ProductItem
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </ProductList>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
