import { Button } from "@/components/ui"
import { FaMinus, FaPlus } from "react-icons/fa6"


export const Detailtransaction = () => {
    return (
        <div className="p-4 bg-white space-y-3 rounded-lg w-full h-fit ">
            <h1
                className="text-xl font-black md:text-lg lg:text-xl"
            >
                Jumlah Catatan
            </h1>

            <div className="md:text-sm lg:text-[16px] lg:space-y-1">
                <h2 >Size : M</h2>
                <h2 >Warna: Pink</h2>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex gap-2 border-2 items-center rounded-lg ">
                    <span className="p-2 cursor-pointer hover:bg-success-500 md:py-2 md:px-3">
                        <FaPlus
                            className="md:text-xs"
                        />
                    </span>
                    <p className="text-lg py-1 px-5 md:px-1 md:text-xs lg:text-sm">1</p>
                    <span className="p-2 cursor-pointer hover:bg-success-500 md:py-2 md:px-3">
                        <FaMinus className="md:text-xs" />
                    </span>
                </div>
                <h1 className="md:text-xs lg:text-sm">Stock: 123</h1>
            </div>

            <div className="py-2 flex justify-between items-center">
                <h1 className="text-xl font-semibold md:text-sm lg:text-xl">Sub Total</h1>
                <p className="text-lg mb-1 md:text-sm lg:text-lg">Rp 123.000</p>
            </div>

            <div className="flex flex-col gap-5 pb-4">
                <Button
                    variant="outline"
                    className="md:p-2 md:text-xs lg:text-sm lg:p-4"
                >
                    Keranjang
                </Button>
                <Button
                    variant="primary"
                    className="md:p-2 md:text-xs lg:text-sm lg:p-4"
                >
                    Beli Langsung
                </Button>
            </div>
        </div>
    )
}