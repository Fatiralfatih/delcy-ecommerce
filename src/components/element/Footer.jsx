import { Button, Card, CardContent } from "@/components/ui"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6"

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className="mt-[100px] container">
            <Card className="px-4 py-6">
                <CardContent>
                    <div className="flex flex-col gap-4">
                        <article className="flex flex-col space-y-2 md:text-center">
                            <h1 className="text-2xl font-black md:text-3xl">Delcy</h1>
                            <p className="text-sm">We Growing up your bussiness with personal manager</p>
                            <p className="text-sm text-green-500">Delcy, {year}</p>
                        </article>

                        <hr className="bg-zinc-900/60" />

                        <div className="flex gap-8 flex-col sm:flex-row sm:justify-between items-center">
                            <div className="sm:mt-8">
                                <p className="text-sm">&copy; {year} Delcy Inc. All rights reserver </p>
                            </div>
                            <div className="flex gap-4">
                                <Button
                                    variant="instagram"
                                    size="icon"
                                    className="text-2xl"
                                >
                                    <FaInstagram />
                                </Button>
                                <Button
                                    variant="facebook"
                                    size="icon"
                                    className="text-2xl text-white"
                                >
                                    <FaFacebook />
                                </Button>
                                <Button
                                    size="icon"
                                    className="text-2xl text-white"
                                >
                                    <FaGithub />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export { Footer }
