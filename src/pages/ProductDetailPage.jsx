import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselThumbs } from "@/components/ui"
import { DetailProductItem, Detailtransaction, ReviewsContent, ReviewsItem, SimilarProductContent, SimilarProductItem } from "@/features/products/product-detail/components"
import { images } from "@/lib"
import { LuHome } from "react-icons/lu"
import { RxSlash } from "react-icons/rx"

const ProductDetailPage = () => {

    return (
        <div className="pt-[90px]">
            {/** bredcrumbs */}
            <Breadcrumb className="container">
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
                            href="#"
                            className="bg-zinc-200 py-1 px-4 rounded-lg"
                        >
                            Skena
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                        <RxSlash className="text-xl text-zinc-500" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="#"
                            className="bg-zinc-200 py-1 px-4 rounded-lg"
                        >
                            Matnernal
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/**product detail and transaction detail */}
            <section className="flex flex-col md:flex-row pt-5 md:container">
                <Carousel className="basis-[400px] lg:basis-[600px]">
                    <CarouselContent className=" max-w-[25rem] md:max-w-md lg:max-w-full">
                        {images.map(image => (
                            <CarouselItem
                                key={image.alt}
                                className="pl-0 md:pl-2"
                            >
                                <figure className="w-full" >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="rounded-xl w-full h-full"
                                    />
                                </figure>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="top-1/2 left-3 w-10 sm:hidden" />
                    <CarouselNext className="top-1/2 right-3 w-10 sm:hidden" />
                    <CarouselThumbs images={images} className="md:max-w-[20rem] lg:max-w-full" />
                </Carousel>

                <div className="flex flex-col gap-5 pt-4 px-4 md:flex-row md:pt-0">

                    {/** detail product */}
                    <DetailProductItem />

                    {/** detail transaction */}
                    <Detailtransaction />
                </div>
            </section>

            {/** reviews and similar product */}
            <section className="px-4 pt-5 md:container md:flex md:flex-col md:gap-3">
                { /**reviews */}
                <ReviewsContent>
                    <ReviewsItem />
                </ReviewsContent>

                {/**similar products */}
                <SimilarProductContent
                    className="mt-0"
                >
                    <SimilarProductItem />
                </SimilarProductContent>
            </section>

        </div>
    )
}

export { ProductDetailPage }
