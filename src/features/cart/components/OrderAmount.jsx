import { Button, Card, CardFooter, CardHeader } from "@/components/ui"
import { cn } from "@/lib"
import { string } from "prop-types"

const OrderAmount = ({ className }) => {
    return (
        <Card className={cn("h-fit md:sticky md:basis-[400px] md:top-24 ", className)}>
            <CardHeader>
                <h1
                    className="text-xl font-bold"
                >
                    Summary Order
                </h1>
                <article
                    className="flex justify-between"
                >
                    <h2
                        className="text-lg font-semibold"
                    >Sub Total
                    </h2>
                    <p
                        className="text-lg"
                    >
                        Rp 123.000
                    </p>
                </article>
            </CardHeader>
            <CardFooter className="flex-col gap-3">
                <Button
                    variant="outline"
                    className="w-full"
                >
                    Continue shooping
                </Button>
                <Button
                    variant="primary"
                    className="w-full"
                >
                    Checkout
                </Button>
            </CardFooter>
        </Card>
    )
}

OrderAmount.propTypes = {
    className: string,
}

export { OrderAmount }
