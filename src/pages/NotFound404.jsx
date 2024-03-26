import { Card, CardContent } from "@/components/ui"
import { bool } from "prop-types"
import { Link } from "react-router-dom"

const NotFound404 = ({ error }) => {
    return (
        <div className="flex min-h-[60vh] justify-center items-center lg:min-h-[80vh]">
            <Card className="px-[20px] md:px-[30px] border-0 bg-opacity-0">
                <CardContent className=" bg-violet-500/50 rounded-lg shadow-intervaless-button  py-[100px] px-[30px] md:px-[150px]">
                    <div className="flex justify-between gap-10 items-center">
                        <div className="flex-grow">
                            <h1 className=" text-4xl sm:text-9xl">404</h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-xl sm:text-3xl">{error ? error.message : 'Can`t Find Page'} :)</h1>
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

NotFound404.propTypes = {
    error: bool,
}

export { NotFound404 }
