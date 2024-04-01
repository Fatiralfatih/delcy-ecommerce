import { Loader } from "@/components/element";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Card,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbs,
  Skeleton,
} from "@/components/ui";
import { useFetchProductBySlug } from "@/features/products/product-detail/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { AiOutlineShop } from "react-icons/ai";
import { RiBox3Line } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { NotFound404 } from "../costumer";
import {
  ActionDetailProduct,
  DescriptionProduct,
} from "@/layouts/admin/components";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const {
    data: product,
    isLoading: isLoadingInProduct,
    isError: isErrorInProduct,
    error: errorInProduct,
  } = useFetchProductBySlug({ slug });

  if (isErrorInProduct) {
    return <NotFound404 error={errorInProduct} />;
  }

  return (
    <AdminLayout>
      <Breadcrumb className="container lg:px-3">
        <BreadcrumbList className="text-zinc-800 flex-nowrap overflow-auto">
          <BreadcrumbItem>
            <RiBox3Line className="text-xl mb-[0.5px]" />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/admin/product"
              className="bg-zinc-200 py-1 px-4 rounded-lg text-nowrap"
            >
              Product
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <RxSlash className="text-xl text-zinc-500" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="#"
              className="bg-zinc-200 py-1 px-4 rounded-lg text-nowrap"
            >
              {product?.data.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="px-1 mt-4 container sm:px-0">
        <div className=" p-3">
          {/* detail product header */}
          {isLoadingInProduct ? (
            <Skeleton className="w-full h-6 md:w-80" />
          ) : (
            <h1 className="text-lg font-bold flex items-center gap-2 lg:text-2xl ">
              <span>
                <AiOutlineShop className="text-2xl mb-1 lg:text-3xl" />
              </span>
              Detail Product {product?.data.title}
            </h1>
          )}

          {/* product detail description */}
          <section className="flex flex-col gap-3 mt-5 md:flex-row">
            {/* galleries */}

            <Carousel className="md:order-2 bg-white md:p-3 h-fit">
              {isLoadingInProduct ? (
                <div className="flex justify-center items-center h-[140px] pb-5 w-[300px] lg:w-[460px] lg:h-[300px]">
                  <Loader />
                </div>
              ) : (
                <>
                  <h1 className="text-xl font-bold p-4 lg:p-2">Galleries</h1>
                  <CarouselContent className="max-w-[25rem] md:max-w-xl lg:max-w-[30rem] border">
                    {product?.data.gallery <= 1 ? (
                      <CarouselItem>
                        <p className="uppercase text-xl text-red-500 p-4">
                          tidak ada gallery
                        </p>
                      </CarouselItem>
                    ) : (
                      product?.data.gallery.map((image) => (
                        <CarouselItem key={image.id}>
                          <figure className="w-full h-full lg:w-fit">
                            <img
                              src={image.image}
                              alt={"sda"}
                              className="rounded-xl w-full h-full"
                            />
                          </figure>
                        </CarouselItem>
                      ))
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="top-1/2 left-3 w-10 sm:hidden" />
                  <CarouselNext className="top-1/2 right-6 w-10 sm:hidden" />
                  <CarouselThumbs
                    images={product}
                    className="md:max-w-[20rem] lg:max-w-full "
                  />
                </>
              )}
            </Carousel>

            {/* description product */}
            <Card className="mt-3 md:mt-0 md:order-1 lg:basis-[50rem]">
              {isLoadingInProduct ? (
                <CardHeader className="flex justify-center items-center py-40 md:w-[400px] lg:w-full">
                  <Loader />
                </CardHeader>
              ) : (
                <>
                  <DescriptionProduct
                    title={product?.data.title}
                    category={product?.data.category.name}
                    price={product?.data.price}
                    stock={product?.data.stock}
                    color={product?.data.variant.color}
                    size={product?.data.variant.size}
                    description={product?.data.description}
                    thumbnail={product?.data.thumbnail}
                  />
                  <ActionDetailProduct />
                </>
              )}
            </Card>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export { ProductDetailPage };
