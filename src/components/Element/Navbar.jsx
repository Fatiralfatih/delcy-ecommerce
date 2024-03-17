import { Input } from "@/components/ui/input"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import MenuMobile from "./MenuMobile";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";

const Navbar = () => {

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 py-5 bg-white container md:py-8">
                <div className=" flex justify-between gap-1 items-center sm:gap-8 lg:gap-44 ">
                    <h1 className="hidden sm:block sm:text-2xl font-black lg:text-3xl">
                        Delcy.
                        <span className="text-fuchsia-500">GG</span>
                    </h1>

                    {/** Menu web */}
                    <Input
                        name="search"
                        type="search"
                        aria-label="input-search"
                        className="w-full border-2 max-w-3xl"
                        // iconLeft={<CiSearch className="text-xl" />}
                        placeholder="Cari di Delcy....." />
                    <div className="flex justify-center gap-1 items-center">
                        <Button
                            variant="outline"
                            className="border-0"
                        >
                            <AiOutlineShoppingCart
                                className="text-2xl hover:text-indigo-500 "
                            />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-0 hidden sm:flex"
                            name="whislist"
                        >
                            <FaRegHeart
                                className="text-2xl hover:text-indigo-500 "
                            />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-0 hidden sm:flex"
                            name="user"
                        >
                            <FaRegUser
                                className="text-2xl hover:text-indigo-500 "
                            />
                        </Button>
                        {/** Menu Mobile */}
                        <div className="md:hidden">
                            <MenuMobile />
                        </div>
                        {/** End Menu Mobile */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
