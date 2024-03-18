import { products } from "@/lib/dummyData";
import { Button, Card, CardContent, CardHeader, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui";
import { ProductCategoryList, ProductColorList, ProductList, ProductSizeList } from "@/features/products/components";
import { ProductItem } from "@/features/products/components/ProductItem";

const ProductPage = () => {

    return (
        <div className="container relative">

            {/**Category mobile */}
            <div className="flex gap-3 w-full overflow-auto scrollbar-hide md:hidden">
                {products.map(product => (
                    <Button
                        key={product.id}
                        variant="ghost"
                        className="capitalize px-2 py-1 hover:text-white hover:bg-slate-400"
                    >
                        {product.category}
                    </Button>
                ))}
            </div>

            {/** web */}
            <div className="flex gap-3">
                <Card className="max-w-md basis-[440px] border-0 hidden md:block lg:basis-[500px]">
                    <CardHeader className="p-3">
                        <h1 className="text-2xl font-black">Filter</h1>
                    </CardHeader>
                    <CardContent className="sticky top-[100px]">
                        {/**category */}
                        <ProductCategoryList />
                        {/** Color */}
                        <ProductColorList />
                        {/** Size */}
                        <ProductSizeList />

                    </CardContent>
                </Card>
                <div className="space-y-4 mt-[30px] md:mt-[14px] md:pe-3 lg:mt-[10px]">
                    <div className="flex justify-between items-center sticky top-[75px] md:top-24 bg-success-300 py-3 px-4 rounded-lg">
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
                    <ProductList>
                        {products.map(product => (
                            <ProductItem
                                key={product.id}
                                {...product}
                            />
                        ))}
                        {products.map(product => (
                            <ProductItem
                                key={product.id}
                                {...product}
                            />
                        ))}
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
