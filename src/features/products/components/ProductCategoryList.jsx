import { TbCategory } from "react-icons/tb";

const ProductCategoryList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label
          className="font-semibold flex items-center gap-1 ps-2 w-full text-lg"
          htmlFor="category"
        >
          <span>
            <TbCategory />
          </span>
          Category
        </label>
      </div>

      <ul className={`ps-8 space-y-2 max-h-full`}>
          <li
            className={`flex gap-2 items-center cursor-pointer w-fit link-underline link-underline-black`}
          >
            All
          </li>
      </ul>
    </div>
  );
};

export { ProductCategoryList };
