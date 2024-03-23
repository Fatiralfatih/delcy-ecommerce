import { cn } from "@/lib"
import { array, string } from "prop-types"

const ProductList = ({ children, className }) => {
    return (
        <div className={cn("grid grid-cols-2 gap-x-2 gap-y-5 md:px-4 sm:grid-cols-3 md:grid-cols-2 lg:gap-y-7 lg:grid-cols-3 xl:grid-cols-4", className)}>
            {children}
        </div>
    )
}

ProductList.propTypes = {
    children: array,
    className: string,
}


export { ProductList }
