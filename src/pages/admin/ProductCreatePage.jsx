import { Card, CardContent, CardHeader } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";
import { useAuthenticated } from "@/contexts";
import { HeaderFormBackProductPage } from "@/features/products/components";
import { useFetchCategories } from "@/features/products/hooks";
import { ProductCreateForm } from "@/features/products/product-create/components";
import { useMutationCreateProduct } from "@/features/products/product-create/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { AxiosError } from "axios";
import { LuPackagePlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const ProductCreatePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { authedUser } = useAuthenticated();

  const { data: categories } = useFetchCategories({ token: authedUser.token });

  const { mutate, isPending } = useMutationCreateProduct({
    token: authedUser.token,
    onSuccess: (data) => {
      if (data.status === "success") {
        toast({
          title: "berhasil create product",
          variant: "info",
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

  return (
    <AdminLayout>
      <HeaderFormBackProductPage />
      <section className='container flex justify-start md:justify-center md:items-center md:max-w-xl lg:max-w-4xl pt-7'>
        <Card className='w-full'>
          <CardHeader className='p-4'>
            <h1 className='text-xl font-semibold flex items-center gap-4 lg:text-2xl'>
              <span>
                <LuPackagePlus className='text-3xl mb-[2px] lg:text-4xl' />
              </span>
              Form Create Product
            </h1>
          </CardHeader>
          <CardContent className='px-5 pt-4 pb-8'>
            <ProductCreateForm
              handleSubmit={mutate}
              isPending={isPending}
              categories={categories}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export { ProductCreatePage };
