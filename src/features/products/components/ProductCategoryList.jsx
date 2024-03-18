import { Button, Checkbox } from "@/components/ui"
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"
import { TbCategory } from "react-icons/tb"

const ProductCategoryList = () => {

    const [showCategory, setShowCategory] = useState(false);

    return (
        <div className="flex flex-col gap-2  ">
            <div className="flex justify-between items-center">
                <label
                    className="font-semibold flex items-center gap-1 w-full text-lg cursor-pointer"
                    htmlFor="category"
                >
                    <span>
                        <TbCategory />
                    </span>
                    Category
                </label>
                <Button
                    id="category"
                    variant="ghost"
                    className="border-0"
                    name="category"
                    onClick={() => setShowCategory(!showCategory)}
                >
                    <IoIosArrowDown className="text-lg" />
                </Button>
            </div>

            <ul
                className={`ps-2 space-y-2 overflow-hidden transition-all ease-in-out duration-500 max-h-0 ${!showCategory ? 'max-h-32' : 'max-h-0'}`}>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="gaming"
                        className=" mb-1"
                    />
                    <label
                        htmlFor="gaming"
                        className="cursor-pointer"
                    >
                        Gaming
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="gaming"
                        className=" mb-1"
                    />
                    <label
                        htmlFor="gaming"
                        className="cursor-pointer"
                    >
                        Gaming
                    </label>
                </li>
                <li className="flex gap-2 items-center">
                    <Checkbox
                        id="gaming"
                        className=" mb-1"
                    />
                    <label
                        htmlFor="gaming"
                        className="cursor-pointer"
                    >
                        Gaming
                    </label>
                </li>
            </ul>
        </div>
    )
}

export { ProductCategoryList }
