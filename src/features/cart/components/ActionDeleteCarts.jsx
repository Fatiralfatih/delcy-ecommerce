import { Button, Card, CardContent } from "@/components/ui"
import { IoCheckboxOutline } from "react-icons/io5"

const ActionDeleteCarts = () => {
    return (
        <Card>
            <CardContent className="p-5 flex justify-between">
                <p className="flex gap-2 items-center text-lg font-semibold">
                    <span>
                        <IoCheckboxOutline className="text-xl" />
                    </span>
                    Select All
                </p>
                <Button
                    variant="danger"
                    className="py-3 px-4"
                >
                    Delete
                </Button>
            </CardContent>
        </Card>
    )
}

export { ActionDeleteCarts }
