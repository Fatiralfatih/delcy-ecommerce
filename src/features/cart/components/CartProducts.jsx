import { Card, CardContent, } from "@/components/ui"
import { cn } from "@/lib"
import { array, string } from "prop-types"

const CartProducts = ({ children, className }) => {
    return (
        <Card>
            <CardContent className={cn("py-4 pb-5 lg:flex lg:justify-between", className)}>
                {children}
            </CardContent>
        </Card>
    )
}

CartProducts.propTypes = {
    children: array,
    className: string,
}

export { CartProducts }
