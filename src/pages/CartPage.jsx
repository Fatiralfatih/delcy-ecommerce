import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui"
import { LuHome } from "react-icons/lu"
import { RxSlash } from "react-icons/rx"
import { ActionDeleteCarts, CartProductDetail, CartProductFooter, CartProducts, OrderAmount } from "@/features/cart/components";

const CartPage = () => {

    return (
        <div className="container pt-24">
            {/** breadcrumbs */}
            <Breadcrumb>
                <BreadcrumbList className="text-zinc-800 flex-nowrap overflow-auto">
                    <BreadcrumbItem>
                        <LuHome
                            className="text-xl mb-[0.5px]"
                        />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/"
                            className="bg-zinc-200 py-1 px-4 rounded-lg "
                        >
                            Home
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <RxSlash className="text-xl text-zinc-500" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/"
                            className="bg-zinc-200 py-1 px-4 rounded-lg"
                        >
                            Cart
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/** cart section */}
            <section className="pt-6">
                <h1 className="text-2xl font-bold">My Cart</h1>
                <div className="flex flex-col pt-3 gap-3 md:flex-row md:justify-between">

                    <div className="flex flex-col gap-3 relative lg:basis-[800px]">
                        {/** select All for delete cart */}
                        <ActionDeleteCarts />

                        {/** list product in cart */}
                        <CartProducts>
                            <CartProductDetail />
                            <CartProductFooter />
                        </CartProducts>
                    </div>

                    {/** summary order */}
                    <OrderAmount />
                </div>
            </section>
        </div>
    )
}

export { CartPage }
