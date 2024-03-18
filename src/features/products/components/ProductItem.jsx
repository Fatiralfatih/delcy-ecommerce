import { Button, Card, CardContent, CardHeader } from "@/components/ui"
import { object, string } from "prop-types"
import { CiStar } from "react-icons/ci"
import { TbListDetails } from "react-icons/tb";

const ProductItem = ({ title, testimony, price, image }) => {

    return (
        <Card className="max-w-md shadow-lg">
            <CardHeader className="p-2">
                <figure className="w-full h-[140px] max-h-[300px] md:h-[180px] xl:h-[200px]">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full max-w-md rounded-lg bg-cover"
                    />
                </figure>
            </CardHeader>
            <CardContent>
                <article className="grid pt-3">
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
                    <article>
                        <h1 className="text-sm pt-1 font-black md:text-lg">Rp{price}</h1>
                    </article>

                    <div className="flex items-center pe-1 pb-2 mt-4">
                        <Button
                            className=" w-full text-xs lg:text-sm"
                            variant="success"
                        >
                            <span className="pe-2">
                                <TbListDetails
                                    className="text-sm md:text-lg" />
                            </span>
                            Lihat Detail
                        </Button>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
}

ProductItem.propTypes = {
    title: string.isRequired,
    price: string,
    testimony: object,
    image: object.isRequired,
}

export { ProductItem }
