import { CardContent } from "@/components/ui"
import { ProductItem, ProductList } from "../../components"
import { products } from "@/lib"

const SimilarProductItem = () => {
    return (
        <CardContent className="p-0">
            <ProductList className="md:grid-cols-3 md:pb-5 lg:grid-cols-4 xl:grid-cols-5 ">
                {products.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </ProductList>
        </CardContent>
    )
}

export { SimilarProductItem }
