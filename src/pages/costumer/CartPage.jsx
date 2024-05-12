import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui";
import { LuHome } from "react-icons/lu";
import { RxSlash } from "react-icons/rx";
import {
  ActionCarts,
  CartProductDescription,
  CartProductFooter,
  CartProducts,
  OrderAmount,
} from "@/features/cart/components";
import CostumerLayout from "@/layouts/costumer/CostumerLayout";

const CartPage = () => {
  return (
    <CostumerLayout>
      <div className='container pt-24'>
        {/** breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList className='overflow-auto text-zinc-800 flex-nowrap'>
            <BreadcrumbItem>
              <LuHome className='text-xl mb-[0.5px]' />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href='/'
                className='px-4 py-1 rounded-lg bg-zinc-200 '
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <RxSlash className='text-xl text-zinc-500' />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href='/'
                className='px-4 py-1 rounded-lg bg-zinc-200'
              >
                Cart
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/** cart section */}
        <section className='pt-6'>
          <h1 className='text-2xl font-bold'>My Cart</h1>
          <div className='flex flex-col gap-3 pt-3 md:flex-row md:justify-between'>
            <div className='flex flex-col gap-3 relative lg:basis-[800px]'>
              {/** select All for delete cart */}
              <ActionCarts />

              {/** list product in cart */}
              <CartProducts>
                <CartProductDescription />
                <CartProductFooter />
              </CartProducts>
            </div>

            {/** summary order */}
            <OrderAmount />
          </div>
        </section>
      </div>
    </CostumerLayout>
  );
};

export { CartPage };
