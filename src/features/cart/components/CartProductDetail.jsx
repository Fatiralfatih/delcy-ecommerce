import { cn } from "@/lib"
import { string } from "prop-types"
import { IoCheckboxOutline } from "react-icons/io5"

const CartProductDetail = ({ className }) => {
    return (
        <div className={cn("flex gap-2 md:gap-4", className)}>
            <span><IoCheckboxOutline className="text-xl" /></span>
            <figure className="w-full h-[120px] sm:h-[220px] sm:w-[250px] md:h-[150px] lg:h-[150px] lg:w-full xl:h-[150px] xl:w-[200px] max-w-[220px] max-h-[160px] ">
                <img
                    src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?t=st=1711202523~exp=1711206123~hmac=6128d0aa00c3534319e9c2a30c95e4737641ce71702f20e7ba1132bad07aa69c&w=740" alt=""
                    className="w-full h-full aspect-auto rounded-lg"
                />
            </figure>
            <article className="flex flex-col gap-2">
                <h3
                    className="border-2 py-[3px] px-3 w-fit rounded-xl text-xs lg:text-sm lg:py-1"
                >
                    Category
                </h3>
                <h1
                    className="font-semibold text-[16px] line-clamp-1 md:line-clamp-2 lg:text-lg"
                >
                    Maternal portal akjsdhksad asdah asd lasdalsh ka dka sk
                </h1>
                <div className="flex gap-3">
                    <h2 className="text-sm lg:text-[16px]">
                        size : <span className="font-bold">M</span>
                    </h2>
                    <h2 className="text-sm lg:text-[16px]">
                        color : <span className="font-bold">Red</span>
                    </h2>
                </div>
            </article>
        </div>
    )
}

CartProductDetail.propTypes = {
    className: string,
}

export { CartProductDetail }
