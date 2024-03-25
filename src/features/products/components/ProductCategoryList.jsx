import { Checkbox } from "@/components/ui"
import { any } from "prop-types";
import { TbCategory } from "react-icons/tb"

const ProductCategoryList = ({ categories }) => {

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label
                    className="font-semibold flex items-center gap-1 ps-2 w-full text-lg cursor-pointer"
                    htmlFor="category"
                >
                    <span>
                        <TbCategory />
                    </span>
                    Category
                </label>
            </div>

            <ul
                className={`ps-3 space-y-2 max-h-full`}>
                {categories.map(category => (
                    <li
                        key={category.id}
                        className="flex gap-2 items-center"
                    >
                        <Checkbox
                            id={category.name}
                            className=" mb-1"
                        />
                        <label
                            htmlFor={category.name}
                            className="cursor-pointer"
                        >
                            {category.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProductCategoryList.propTypes = {
    categories: any,
}

export { ProductCategoryList }
