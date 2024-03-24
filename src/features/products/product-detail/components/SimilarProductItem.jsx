import { CardContent } from "@/components/ui"
import { ProductItem, ProductList } from "../../components"
import { array } from "prop-types"

const SimilarProductItem = ({ products }) => {
    return (
        <CardContent className="p-0">
            <ProductList className="md:grid-cols-3 md:pb-5 lg:grid-cols-4 xl:grid-cols-5 ">
                {products?.map(product => (
                    <ProductItem key={product.id} {...product} />
                ))}
            </ProductList>
        </CardContent>
    )
}

SimilarProductItem.propTypes = {
    products: array,
}

export { SimilarProductItem }
