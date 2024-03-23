import { Button, Card, CardHeader } from "@/components/ui"
import { element } from "prop-types"
import { LuFilter } from "react-icons/lu"

const ReviewsContent = ({ children }) => {
    return (
        <Card className="border-0  h-fit ">
            <CardHeader className="p-3 flex-row items-center justify-between">
                <h1 className="text-2xl font-bold">Reviews</h1>
                <Button
                    variant="outline"
                    size="icon"
                    className="border-0"
                >
                    <LuFilter className="text-2xl lg:text-3xl" />
                </Button>
            </CardHeader>
            {children}
        </Card>
    )
}

ReviewsContent.propTypes = {
    children: element,
}

export { ReviewsContent }
