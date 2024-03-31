import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbs,
} from "@/components/ui";
import { useFetchProductBySlug } from "@/features/products/product-detail/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { formatRupiah } from "@/lib";
import { AiOutlineShop } from "react-icons/ai";
import { RiBox3Line } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const { data: product } = useFetchProductBySlug({ slug });
  console.log(product);

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
          <h1 className="text-lg font-bold flex items-center gap-2">
            <span>
              <AiOutlineShop className="text-2xl mb-1" />
            </span>
            Detail Product {product?.data.title}
          </h1>

          {/* product detail description */}
          <section className="flex flex-col gap-3 mt-5 md:flex-row">
            {/* galleries */}
            <Carousel className="md:order-2 bg-white md:p-3 h-fit">
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
            </Carousel>
            {/* description product */}
            <Card className="mt-3 md:mt-0 md:order-1 lg:basis-[50rem]">
              <CardHeader className="p-4">
                <h1 className="text-xl font-semibold">Description</h1>
              </CardHeader>
              <CardContent className="space-y-2 ps-6">
                {/* name */}
                <div className="flex gap-2">
                  <CardDescription className="text-lg w-[120px]">
                    Name
                  </CardDescription>
                  <CardTitle className="text-lg w-[200px] line-clamp-2">
                    {product?.data.title}
                  </CardTitle>
                </div>

                {/* status */}
                <div className="flex items-center gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    status
                  </CardDescription>
                  <CardTitle className="text-lg text-green-500">
                    Active
                  </CardTitle>
                </div>

                {/* category */}
                <div className="flex items-center gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    Category
                  </CardDescription>
                  <CardTitle className="text-lg">
                    {product?.data.category.name}
                  </CardTitle>
                </div>

                {/* price */}
                <div className="flex  gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    price
                  </CardDescription>
                  <CardTitle className="text-lg truncate ps-2 lg:ps-0">
                    {formatRupiah(product?.data.price)}
                  </CardTitle>
                </div>

                {/* stock */}
                <div className="flex items-center gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    stock
                  </CardDescription>
                  <CardTitle className="text-lg">
                    {product?.data.stock}
                  </CardTitle>
                </div>

                {/* color */}
                <div className="flex items-center gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    color
                  </CardDescription>
                  <CardTitle className="text-lg capitalize">
                    {product?.data.variant.color.map((color) => color + " ")}
                  </CardTitle>
                </div>

                {/* size */}
                <div className="flex items-center gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    size
                  </CardDescription>
                  <CardTitle className="text-lg capitalize">
                    {product?.data.variant.size.map((size) => size + " ")}
                  </CardTitle>
                </div>

                {/* description */}
                <div className="flex gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    description
                  </CardDescription>
                  <CardTitle className="text-lg ps-3 line-clamp-3 capitalize lg:ps-0">
                    {product?.data.description}
                  </CardTitle>
                </div>

                <div className="flex gap-2">
                  <CardDescription className="text-lg capitalize w-[120px]">
                    Thumbnail
                  </CardDescription>
                  <figure className="md:max-w-[260px] border rounded-lg">
                    <img
                      src={product?.data.thumbnail}
                      alt={"thumbnail-" + product?.data.title}
                      className="w-full h-full aspect-auto rounded-lg"
                    />
                  </figure>
                </div>
              </CardContent>
              <CardFooter className="gap-5 mt-6 lg:justify-center">
                <Button
                  variant="danger"
                  className="w-fit "
                >
                  Delete Product
                </Button>
                <Button
                  variant="primary"
                  className="w-full lg:w-fit"
                >
                  Edit Product
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </div>
    </AdminLayout>
  );
};

export { ProductDetailPage };
