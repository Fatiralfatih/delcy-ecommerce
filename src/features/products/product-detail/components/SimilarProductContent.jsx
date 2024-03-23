import { Card, CardHeader } from "@/components/ui"
import { cn } from "@/lib"
import { element, string } from "prop-types"

const SimilarProductContent = ({ children, className }) => {
    return (
        <Card className={cn("mt-4", className)}>
            <CardHeader className="py-4 px-3">
                <h1 className="text-2xl font-bold">Similar Product</h1>
            </CardHeader>
            {children}
        </Card>
    )
}

SimilarProductContent.propTypes = {
    children: element,
    className: string,
}

export { SimilarProductContent }
