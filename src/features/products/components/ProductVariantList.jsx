import { Button } from "@/components/ui";
import { variant } from "@/lib";
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
          {variant.size.map((item) => (
            <li
              key={item}
              className="cursor-pointer w-fit link-underline link-underline-black"
            >
              {item}
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
          {variant.color.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="w-16 h-16 border-none hover:bg-zinc-200 flex flex-col text-sm"
            >
              <span>
                <RiCheckboxBlankCircleFill
                  className="text-3xl"
                  style={{ color: item === "white" ? "whitesmoke" : item }}
                />
              </span>
              {item}
            </Button>
          ))}
        </ul>
      </div>
    </>
  );
};

export { ProductVariantList };
