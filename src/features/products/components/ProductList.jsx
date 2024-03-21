import { array } from "prop-types"

const ProductList = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-5 md:px-4 sm:grid-cols-3 md:grid-cols-2 lg:gap-y-7 lg:grid-cols-3 xl:grid-cols-4 ">
            {children}
        </div>
    )
}

ProductList.propTypes = {
    children: array,
}


export { ProductList }
