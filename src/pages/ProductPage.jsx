import { Button, Card, CardContent, CardHeader, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { ProductCategoryList, ProductColorList, ProductList, ProductSizeList, SkeletonCategories, SkeletonCategoryMobile, SkeletonProduct } from "@/features/products/components";
import { ProductItem } from "@/features/products/components/ProductItem";
import { useEffect, useState } from "react";
import NotFound404 from "./NotFound404";
import { axiosInstance } from "@/lib/axiosInstance";

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const [initialize, setinitialize] = useState(true);

    const getProducts = async () => {
        try {
            setinitialize(false);
            setIsLoading(true)
            const response = await axiosInstance.get('/products');
            setProducts(response.data.data)
        } catch (error) {
            setError({
                message: error.message,
                status: error.response.status,
            });
        } finally {
            setIsLoading(false)
        }
    }

    const getCategories = async () => {
        try {
            const response = await axiosInstance.get('/categories')
            setCategories(response.data.data);
        } catch (error) {
            setError({
                message: error.message,
                status: error.status,
            })
        }
    }

    useEffect(() => {
        getProducts();
        getCategories();
    }, [])

    if (initialize) {
        return null
    }

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <NotFound404 error={error} />
            </div>
        )
    }

    return (
        <div className="container pb-96">
            {/**Category mobile */}
            {isloading && (<SkeletonCategoryMobile />)}
            <div className="flex gap-3 w-full overflow-auto scrollbar-hide md:hidden">
                {
                    categories.map(category => (
                        <Button
                            key={category.id}
                            variant="ghost"
                            className="capitalize px-2 py-1 hover:text-white hover:bg-slate-400"
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
                        {isloading ? (
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
                    {isloading && (
                        <SkeletonProduct />
                    )}
                    <ProductList>
                        {products.map(product => (
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
