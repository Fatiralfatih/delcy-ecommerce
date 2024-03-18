import { Checkbox } from "@/components/ui"
import { RiPencilRuler2Line } from "react-icons/ri"

const ProductSizeList = () => {
    return (
        <div className="grid gap-2 pt-4">
            <h1 className="text-lg font-semibold flex gap-1 items-center">
                <span>
                    <RiPencilRuler2Line className="text-xl" />
                </span>
                Size
            </h1>
            <ul className="ps-2 space-y-2">
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-red"
                    />
                    <label
                        htmlFor="color-red"
                        className="flex items-center gap-1 cursor-pointer"
                    >
                        small
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-green"
                    />
                    <label
                        htmlFor="color-green"
                        className="flex items-center gap-1 cursor-pointer "
                    >
                        large
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-black"
                    />
                    <label
                        htmlFor="color-black"
                        className="flex items-center gap-1 cursor-pointer "
                    >
                        x-large
                    </label>
                </li>
            </ul>
        </div>
    )
}

export { ProductSizeList }
