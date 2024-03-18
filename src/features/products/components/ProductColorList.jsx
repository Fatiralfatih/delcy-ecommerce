import { Checkbox } from "@/components/ui"
import { RiCheckboxBlankCircleFill } from "react-icons/ri"
import { TiWaves } from "react-icons/ti";


const ProductColorList = () => {
    return (
        <div className="grid gap-2 pt-4">
            <h1 className="text-lg font-semibold flex gap-1 items-center">
                <span>
                    <TiWaves className="text-2xl" />
                </span>
                Color
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
                        <span>
                            <RiCheckboxBlankCircleFill
                                className="text-red-600 text-lg"
                            />
                        </span>
                        Red
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-blue"
                    />
                    <label
                        htmlFor="color-blue"
                        className="flex items-center gap-1 cursor-pointer capitalize"
                    >
                        <span>
                            <RiCheckboxBlankCircleFill
                                className="text-blue-600 text-lg"
                            />
                        </span>
                        blue
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-green"
                    />
                    <label
                        htmlFor="color-green"
                        className="flex items-center gap-1 cursor-pointer capitalize"
                    >
                        <span>
                            <RiCheckboxBlankCircleFill
                                className="text-green-600 text-lg"
                            />
                        </span>
                        green
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="color-black"
                    />
                    <label
                        htmlFor="color-black"
                        className="flex items-center gap-1 cursor-pointer capitalize"
                    >
                        <span>
                            <RiCheckboxBlankCircleFill
                                className="text-black text-lg"
                            />
                        </span>
                        black
                    </label>
                </li>
            </ul>
        </div>
    )
}

export { ProductColorList }
