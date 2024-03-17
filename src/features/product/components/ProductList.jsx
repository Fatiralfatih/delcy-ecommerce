import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { object, string } from "prop-types"
import { CiStar } from "react-icons/ci"
import { FaCartPlus } from "react-icons/fa6"

const ProductList = ({ title, testimony, price, image }) => {

    return (
        <Card className="max-w-md">
            <CardHeader className="p-2">
                <figure className="w-full h-[170px]">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full max-w-md rounded-lg bg-cover"
                    />
                </figure>
            </CardHeader>
            <CardContent>
                <article className="flex flex-col gap-0 flex-shrink-0 pt-3">
                    <h1 className="text-sm font-semibold line-clamp-2 w-full">{title}</h1>
                    <div className="flex gap-1 text-xs items-center">
                        <Button
                            variant="ghost"
                            className="border-0 p-0 mb-1"
                        >
                            <CiStar
                                className="text-lg fill-current"
                            />
                        </Button>
                        {testimony.rating} ({testimony.review} reviews)
                    </div>
                    <div className="flex justify-between items-center pe-1 pb-2">
                        <h1 className="text-sm pt-1 font-black md:text-lg">Rp{price}</h1>
                        <Button
                            className=" text-xs rounded-xl"
                            variant="primary"
                            size="icon"
                        >
                            <FaCartPlus
                                className="text-sm md:text-lg"
                            />
                        </Button>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}

ProductList.propTypes = {
    title: string.isRequired,
    price: string,
    testimony: object,
    image: object.isRequired,
}

export { ProductList }
