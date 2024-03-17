import { Button } from "@/components/ui/button"
import { FiFilter } from "react-icons/fi";
import { products } from "@/lib/dummyData";
import { ProductList } from "@/features/product/components";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ProductPage = () => {


    return (
        <div className="container">

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
            {/**Header Title mobile */}
            <div className="flex justify-between items-center mt-6 md:hidden">
                <h1 className="font-bold text-xl">Give All You Need</h1>
                <Button
                    size="icon"
                    variant="ghost"
                    className="hover:bg-slate-300"
                >
                    <FiFilter />
                </Button>
            </div>


            {/** Dekstop */}
            <div className="flex gap-3">
                <Card className="max-w-md basis-[400px] h-fit hidden md:block">
                    <CardHeader>
                        <h1 className="font-bold text-lg">Category</h1>
                    </CardHeader>
                    <CardContent>
                        <div className="px-3">

                        </div>
                    </CardContent>
                </Card>
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 md:mt-0 ">
                    {products.map(product => (
                        <ProductList
                            key={product.id}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductPage
