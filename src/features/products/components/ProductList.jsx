import { array } from "prop-types"

const ProductList = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 ">
            {children}
        </div>
    )
}

ProductList.propTypes = {
    children: array,
}


export { ProductList }
