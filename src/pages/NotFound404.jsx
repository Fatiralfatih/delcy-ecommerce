import { Card, CardContent } from "@/components/ui"
import { Link } from "react-router-dom"

const NotFound404 = () => {
    return (
        <div className="flex min-h-[60vh] justify-center items-center">
            <Card>
                <CardContent className=" bg-violet-500/50 rounded-lg shadow-intervaless-button  py-[100px] px-[30px] md:px-[150px]">
                    <div className="flex justify-between gap-10 items-center">
                        <div className="flex-grow">
                            <h1 className=" text-4xl sm:text-9xl">404</h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl sm:text-3xl">Can`t Find Page :)</h1>
                            <Link to={'/'} className="">
                                <p className="text-xl link-underline w-fit link-underline-black">Delcy.GG</p>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotFound404
