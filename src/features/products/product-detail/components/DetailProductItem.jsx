import { Button, Divide } from "@/components/ui"
import { CiHeart, CiStar } from "react-icons/ci"


export const DetailProductItem = () => {
    return (
        <div className="bg-white p-4 text-lg rounded-xl w-full lg:basis-[70rem]">
            <article className="space-y-2">
                <div className="flex flex-col">
                    <div className="flex">
                        <h1 className="font-bold text-xl line-clamp-2 h-fit">Matern alaksjhd ka,asndas,d akjsd kashsdkahd akshdajk</h1>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="border-0"
                        >
                            <CiHeart className="text-4xl" />
                        </Button>
                    </div>
                    <div className="flex gap-1 text-sm items-center md:text-xs lg:text-sm">
                        <Button
                            variant="ghost"
                            className="border-0 p-0 mb-1"
                        >
                            <CiStar
                                className="text-lg fill-current"
                            />
                        </Button>
                        404 (23 reviews)
                    </div>
                </div>
                <h1 className="font-semibold text-xl md:text-lg lg:text-xl">Rp 24.0000</h1>
            </article>

            <Divide />

            {/**size */}
            <article className=" space-y-3">
                <h1 className="font-bold text-xl md:text-lg">Size</h1>
                <div className="flex gap-2">
                    <span
                        className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950"
                    >
                        S
                    </span>
                    <span
                        className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950 "
                    >
                        M
                    </span>
                    <span
                        className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950"
                    >
                        XL
                    </span>
                    <span
                        className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950"
                    >
                        XL
                    </span>
                    <span
                        className="text-sm py-[5px] px-3 rounded-lg bg-zinc-200  hover:bg-success-500 text-zinc-950"
                    >
                        XL
                    </span>
                </div>
            </article>

            <Divide />

            {/** Color */}
            <article className=" space-y-3">
                <h1 className="font-bold text-xl md:text-lg">Color</h1>
                <div className="flex gap-2">
                    <span
                        className="text-sm p-4 rounded-full bg-red-600"
                    />
                    <span
                        className="text-sm p-4 rounded-full bg-blue-600"
                    />
                    <span
                        className="text-sm p-4 rounded-full bg-indigo-600"
                    />
                    <span
                        className="text-sm p-4 rounded-full bg-green-600"
                    />
                </div>
            </article>

            <Divide />

            {/**description */}
            <article className="space-y-2">
                <h1 className="text-xl md:text-lg font-bold lg:text-xl">Description</h1>
                <p className="text-sm md:text-xs lg:text-sm">Salam Lorem ipsum 21 Salam Lorem ipsum 21 Salam Lorem ipsum 21</p>
            </article>
        </div>
    )
}
