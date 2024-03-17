import { Input } from "@/components/ui/input"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";
import MenuMobile from "./MenuMobile";

const Navbar = () => {

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 py-4 container  ">
                <div className=" flex justify-between gap-1 items-center">
                    <h1 className="hidden sm:block">Delcy</h1>

                    {/** Menu web */}
                    <div className="overflow-auto rounded-md ">
                        <Input
                            name="search"
                            type="search"
                            className="w-[14rem]"
                            iconLeft={<CiSearch className="text-lg" />}
                            placeholder="Cari di Delcy"
                        />
                    </div>
                    <div className="flex justify-center gap-1 items-center">
                        <Button
                            variant="outline"
                            className="border-0"
                        >
                            <AiOutlineShoppingCart
                                className="text-2xl hover:text-indigo-500"
                            />
                        </Button>
                        {/** Menu Mobile */}
                        <MenuMobile />
                        {/** End Menu Mobile */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
