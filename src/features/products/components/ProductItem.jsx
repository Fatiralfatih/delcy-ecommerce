import { Button, Card, CardContent, CardHeader } from "@/components/ui"
import { number, string } from "prop-types"
import { CiStar } from "react-icons/ci"
import { TbListDetails } from "react-icons/tb";

const ProductItem = ({ id, title, thumbnail, price }) => {

    return (
        <Card className="max-w-md rounded-sm md:shadow-lg">
            <CardHeader className="p-2">
                <figure className="w-full h-[150px] sm:h-[180px] max-h-[300px] md:h-[200px]">
                    <img
                        src={thumbnail}
                        alt={`image-${title}`}
                        className="w-full h-full max-w-md rounded-lg bg-cover aspect-auto"
                    />
                </figure>
            </CardHeader>
            <CardContent>
                <article className="flex flex-col pt-2">
                    <h1 className="text-sm font-semibold line-clamp-2 w-full h-[40px] overflow-hidden md:h-[30px] md:text-[15px] md:text-lg">{title}</h1>
                    <div className="flex gap-1 text-xs items-center">
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
                    <h1 className="text-sm pt-1 font-black md:text-lg">Rp {price}</h1>
                    <div className="flex w-full pe-1 pb-2 mt-4">
                        <Button
                            className=" w-full text-xs lg:text-sm"
                            name={`${id}`}
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
    id: number.isRequired,
    price: string,
    title: string.isRequired,
    thumbnail: string,
}

export { ProductItem }
