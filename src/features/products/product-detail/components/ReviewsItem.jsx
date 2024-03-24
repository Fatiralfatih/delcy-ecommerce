import { Avatar, AvatarFallback, AvatarImage, Card, CardContent, CardHeader } from "@/components/ui"
import { cn } from "@/lib"
import { string } from "prop-types"
import { CiStar } from "react-icons/ci"

const ReviewsItem = ({ className }) => {

    return (
        <CardContent className={cn("space-y-3", className)}>
            <Card className="border-2">
                <CardHeader className="flex-row p-3 justify-between">
                    <div className="flex gap-2 items-center">
                        <Avatar className="w-14 h-14 lg:w-16 lg:h-16">
                            <AvatarImage
                                src="https://avatars.githubusercontent.com/u/137702546?v=4"
                                alt="fatir-ganteng"
                            />
                            <AvatarFallback>profil image</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <div className="flex">
                                {Array(5).fill().map((_, index) => (
                                    <span key={index + 1}>
                                        <CiStar className="text-sm lg:text-lg" />
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-[17px] font-semibold lg:text-lg">Fatir Al Fatih</h1>
                        </div>
                    </div>
                    <p className="text-sm">2 day ago</p>
                </CardHeader>
                <CardContent>
                    <h1 className="xl:text-lg">Barang ini sangat recomendedBarang ini sangat recomended Barang ini sangat recomended recomended recomended recomended</h1>
                </CardContent>
            </Card>
        </CardContent>
    )
}

ReviewsItem.propTypes = {
    className: string,
}
export { ReviewsItem }
