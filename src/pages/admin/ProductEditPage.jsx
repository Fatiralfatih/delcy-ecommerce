import { Card, CardContent, CardHeader, useToast } from "@/components/ui";
import { HeaderFormBackProductPage } from "@/features/products/components";
import { useFetchCategories } from "@/features/products/hooks";
import { useFetchProductBySlug } from "@/features/products/product-detail/hooks";
import {
  LoadingFormProductEdit,
  ProductEditForm,
} from "@/features/products/product-edit/components";
import { useMutationEditProductBySlug } from "@/features/products/product-edit/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { AxiosError } from "axios";
import { LuPackageOpen } from "react-icons/lu";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthenticated } from "@/contexts";
import { NotFound404 } from "@/components/element";

const ProductEditPage = () => {
  const { slug } = useParams();

  const { authedUser } = useAuthenticated();

  const { toast } = useToast();

  const navigate = useNavigate();

  const {
    data: product,
    isError: isErrorInProduct,
    error: errorInProduct,
    isLoading: isLoadingInProduct,
  } = useFetchProductBySlug({ slug, token: authedUser.token });

  const {
    data: categories,
    isError: isErrorInCategories,
    isLoading: isLoadingInCategories,
    error: errorInCategories,
  } = useFetchCategories({ token: authedUser.token });

  const {
    mutate,
    error: errorMutationInProduct,
    isPending: isPendingInMutationProduct,
  } = useMutationEditProductBySlug({
    slug, // parameter slug
    token: authedUser.token,
    onSuccess: (data) => {
      if (data.status === "success") {
        toast({
          title: `berhasil edit product ${product?.data.title}`,
        });
        navigate("/admin/product");
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const err = error;
        toast({
          title: err.response?.data.message,
          description: "Check again inputs",
          variant: "destructive",
        });
      }
    },
  });

  if (isErrorInProduct || isErrorInCategories) {
    return (
      <NotFound404
        error={errorInProduct.message || errorInCategories.message}
      />
    );
  }

  return (
    <AdminLayout>
      <HeaderFormBackProductPage />
      {isLoadingInProduct || isLoadingInCategories ? (
        <LoadingFormProductEdit />
      ) : (
        <section className='container flex justify-start md:justify-center md:items-center md:max-w-xl lg:max-w-4xl pt-7'>
          <Card className='w-full'>
            <CardHeader className='p-4'>
              <h1 className='text-xl font-semibold flex items-center gap-4 lg:text-2xl'>
                <span>
                  <LuPackageOpen className='text-3xl mb-[2px] lg:text-4xl' />
                </span>
                Form Edit Product {product?.data.title}
              </h1>
            </CardHeader>
            <CardContent className='px-5 pt-4 pb-8'>
              <ProductEditForm
                onSubmit={mutate}
                product={product}
                categories={categories}
                errorMutationInProduct={errorMutationInProduct?.response?.data}
                isPendingInMutationProduct={isPendingInMutationProduct}
              />
            </CardContent>
          </Card>
        </section>
      )}
    </AdminLayout>
  );
};

export { ProductEditPage };
