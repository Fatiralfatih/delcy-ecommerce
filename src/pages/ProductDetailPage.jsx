import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Card,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbs,
} from "@/components/ui";
import {
  DetailProductItem,
  Detailtransaction,
  ReviewsItem,
  SimilarProductItem,
} from "@/features/products/product-detail/components";
import { LuFilter, LuHome } from "react-icons/lu";
import { RxSlash } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { NotFound404 } from ".";
import { useProductBySlug } from "@/features/products/product-detail/hooks";
import { object } from "prop-types";

const ProductDetailPage = ({ products }) => {
  const { slug } = useParams();

  const {
    data: product,
    isError: isErrorInProduct,
    error: errorInProdutct,
  } = useProductBySlug({ slug });

  const filterProductByCategory = () => {
    return products?.data.data.filter(
      (data) =>
        data.slug !== slug &&
        data.category.name === product?.data.data.category.name
    );
  };

  if (isErrorInProduct) {
    return <NotFound404 error={errorInProdutct} />;
  }

  return (
    <div className="pt-[90px]">
      {/** bredcrumbs */}
      <Breadcrumb className="container">
        <BreadcrumbList className="text-zinc-800 flex-nowrap overflow-auto">
          <BreadcrumbItem>
            <LuHome className="text-xl mb-[0.5px]" />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="bg-zinc-200 py-1 px-4 rounded-lg text-nowrap"
            >
              home
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
              {product?.data.data.category.name}
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
              {product?.data.data.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/**product detail and transaction detail */}
      <section className="flex flex-col md:flex-row pt-5 md:container">
        <Carousel className="basis-[400px] md:basis-[600px]">
          <CarouselContent className="max-w-[25rem] md:max-w-lg lg:max-w-full">
            {product?.data.data.gallery.map((galery) => (
              <CarouselItem
                key={galery.id}
                className="pl-0 md:pl-2"
              >
                <figure className="w-full">
                  <img
                    src={galery.image}
                    alt={"sda"}
                    className="rounded-xl w-full h-full"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="top-1/2 left-3 w-10 sm:hidden" />
          <CarouselNext className="top-1/2 right-3 w-10 sm:hidden" />
          <CarouselThumbs
            images={product}
            className="md:max-w-[20rem] lg:max-w-full"
          />
        </Carousel>

        <div className="flex flex-col gap-5 pt-4 px-4 w-full md:flex-row md:pt-0">
          {/** detail product */}
          <DetailProductItem product={product} />

          {/** detail transaction */}
          <Detailtransaction />
        </div>
      </section>

      {/** reviews and similar product */}
      <section className="px-4 pt-5 md:container md:flex md:flex-col md:gap-3">
        {/**reviews */}
        <Card className="border-0  h-fit ">
          <CardHeader className="p-3 flex-row items-center justify-between">
            <h1 className="text-2xl font-bold">Reviews</h1>
            <Button
              variant="outline"
              size="icon"
              className="border-0"
            >
              <LuFilter className="text-2xl lg:text-3xl" />
            </Button>
          </CardHeader>
          <ReviewsItem />
        </Card>

        {/**similar products */}
        <Card className="mt-4">
          <CardHeader className="py-4 px-3">
            <h1 className="text-2xl font-bold">Similar Product</h1>
          </CardHeader>
          <SimilarProductItem products={filterProductByCategory()} />
        </Card>
      </section>
    </div>
  );
};

ProductDetailPage.propTypes = {
  products: object,
};

export { ProductDetailPage };
