import { Button } from "@/components/ui";
import { variants } from "@/lib";
import { RiCheckboxBlankCircleFill, RiPencilRuler2Line } from "react-icons/ri";
import { TiWaves } from "react-icons/ti";

const ProductVariantList = () => {
  return (
    <>
      <div className="grid gap-2 pt-4">
        <h1 className="text-lg font-semibold flex gap-1 items-center">
          <span>
            <RiPencilRuler2Line className="text-xl" />
          </span>
          Size
        </h1>
        <ul className="ps-8 flex flex-col gap-2 flex-wrap">
          {variants.size.map((size) => (
            <li
              key={size.value}
              className="cursor-pointer w-fit link-underline link-underline-black"
            >
              {size.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-2 pt-4">
        <h1 className="text-lg font-semibold flex gap-1 items-center">
          <span>
            <TiWaves className="text-2xl" />
          </span>
          Color
        </h1>
        <ul className="ps-4 flex gap-2 flex-wrap">
          {variants.color.map((color) => (
            <Button
              key={color.value}
              variant="ghost"
              className="w-16 h-16 border-none hover:bg-zinc-200 flex flex-col text-sm"
            >
              <span>
                <RiCheckboxBlankCircleFill
                  className="text-3xl"
                  style={{
                    color: color.value === "white" ? "whitesmoke" : color.value,
                  }}
                />
              </span>
              {color.value}
            </Button>
          ))}
        </ul>
      </div>
    </>
  );
};

export { ProductVariantList };
