import { Loader } from "@/components/element";
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
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Skeleton,
} from "@/components/ui";
import { useFetchProductBySlug } from "@/features/products/product-detail/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { AiOutlineShop } from "react-icons/ai";
import { RiBox3Line } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";
import { useNavigate, useParams } from "react-router-dom";
import { NotFound404 } from "../costumer";
import { DescriptionProduct } from "@/layouts/admin/components";
import { ProductFooter } from "@/features/products/components";
import { QueryCache } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { AxiosError } from "axios";
import { useFetchDeleteProductBySlug } from "@/features/products/product-delete/hooks";

const ProductDetailPage = () => {
  const { slug } = useParams();

  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    data: product,
    isLoading: isLoadingInProduct,
    isError: isErrorInProduct,
    error: errorInProduct,
  } = useFetchProductBySlug({ slug });

  const { mutate } = useFetchDeleteProductBySlug({
    slug, //parameter slug
    onSuccess: () => {
      toast({
        title: "berhasil menghapus barang",
      });
      navigate("/admin/product");
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const err = error;
        toast({
          title: err.response?.data.message,
          variant: "destructive",
        });
      }
    },
    onSettled: () => {
      QueryCache.invalidateQueries({ queryKey: "products-data" });
    },
  });

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
                  <div className="flex justify-between gap-20 md:mb-10">
                    <h1 className="text-xl font-bold p-4 lg:p-2">Galleries</h1>
                    <Button>Tambah Gallery</Button>
                  </div>
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
                              src={`http://localhost:8000/storage/${image.image}`}
                              alt={image.image}
                              className="rounded-xl w-full h-full"
                            />
                          </figure>
                        </CarouselItem>
                      ))
                    )}
                  </CarouselContent>
                  <CarouselPrevious className="top-[180px] left-3 w-10 sm:hidden " />
                  <CarouselNext className="top-[180px] right-6 w-10 sm:hidden" />
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
                    category={product?.data.category}
                    price={product?.data.price}
                    stock={product?.data.stock}
                    color={product?.data.variant?.color}
                    size={product?.data.variant?.size}
                    description={product?.data.description}
                    thumbnail={product?.data.thumbnail}
                  />
                  <ProductFooter className="flex justify-center gap-5 py-8">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="danger"
                          className="w-fit "
                        >
                          Delete Product
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader className="text-lg">
                          Delete Product {product?.data.title}
                        </DialogHeader>
                        <DialogDescription className="text-red-600 text-lg">
                          Yakin mau hapus?
                        </DialogDescription>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button>Cancel</Button>
                          </DialogClose>
                          <Button
                            type="submit"
                            name="delete-product"
                            variant="danger"
                            onClick={mutate}
                          >
                            Delete
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="primary"
                      className="w-full lg:w-fit"
                    >
                      Edit Product
                    </Button>
                  </ProductFooter>
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
