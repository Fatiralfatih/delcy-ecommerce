import { Button, Card, CardContent, CardHeader } from "@/components/ui";
import { useToast } from "@/components/ui/use-toast";
import { ProductCreateForm } from "@/features/products/product-create/components";
import { useFetchCreateProduct } from "@/features/products/product-create/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { AxiosError } from "axios";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { LuPackagePlus } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const ProductCreatePage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const { mutate, isPending } = useFetchCreateProduct({
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
      <header className="container -mt-2 flex justify-start items-start md:mt-0 md:max-w-xl lg:max-w-4xl ">
        <Link to="/admin/product">
          <Button
            variant="primary"
            className="flex items-center gap-2 text-[15px]"
          >
            <span>
              <IoArrowBackCircleOutline className="text-2xl mt-[1px]" />
            </span>
            Kembali ke halaman product
          </Button>
        </Link>
      </header>
      <section className="container flex justify-start md:justify-center md:items-center md:max-w-xl lg:max-w-4xl pt-7">
        <Card className="w-full">
          <CardHeader className="p-4">
            <h1 className="text-xl font-semibold flex items-center gap-2 lg:text-2xl">
              <span>
                <LuPackagePlus className="text-3xl mb-[2px] lg:text-4xl" />
              </span>
              From Create Product
            </h1>
          </CardHeader>
          <CardContent className="px-5 pt-4 pb-8">
            <ProductCreateForm
              handleSubmit={mutate}
              isPending={isPending}
            />
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export { ProductCreatePage };
