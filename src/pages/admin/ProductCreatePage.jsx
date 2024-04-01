import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Form,
  Input,
  Label,
  Textarea,
} from "@/components/ui";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { LuPackagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

const ProductCreatePage = () => {
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
            <Form>
              <form className="space-y-7">
                {/* product name */}
                <div className="space-y-1">
                  <Label>Product Title</Label>
                  <Input
                    name="title"
                    variant="rawrr"
                    placeholder="Masukkan Product title..."
                    required
                  />
                </div>

                {/* category */}
                <div className="space-y-1">
                  <Label>category</Label>
                  <Input
                    name="category"
                    variant="rawrr"
                    placeholder="Masukkan category..."
                    required
                  />
                </div>

                {/* price */}
                <div className="space-y-1">
                  <Label>price</Label>
                  <Input
                    name="price"
                    variant="rawrr"
                    placeholder="Masukkan price..."
                    required
                  />
                </div>

                {/* variant */}
                <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-5">
                  {/* color */}
                  <div className="space-y-1 md:flex-grow">
                    <Label>color</Label>
                    <Input
                      name="color"
                      variant="rawrr"
                      placeholder="Masukkan color..."
                      className="md:w-full"
                      required
                    />
                  </div>

                  <div className="space-y-1 lg:flex-grow">
                    <Label>size</Label>
                    <Input
                      name="size"
                      variant="rawrr"
                      placeholder="Masukkan size..."
                      required
                    />
                  </div>
                </div>

                {/* stock */}
                <div className="space-y-1">
                  <Label>stock</Label>
                  <Input
                    name="stock"
                    variant="rawrr"
                    placeholder="Masukkan stock..."
                    required
                  />
                </div>

                {/* description */}
                <div className="space-y-1">
                  <Label>description</Label>
                  <Textarea
                    name="description"
                    variant="rawrr"
                    placeholder="Masukkan description..."
                    required
                  />
                </div>

                {/* image */}
                <div className="space-y-1">
                  <Label>Thumbnail</Label>
                  <Input
                    type="file"
                    variant="rawrr"
                    className="hover:file:bg-zinc-200"
                  />
                </div>

                {/* action submit and discard */}
                <div className="flex gap-5">
                  <Button
                    type="button"
                    variant="danger"
                    className="w-full"
                  >
                    Discard
                  </Button>
                  <Button
                    type="submit"
                    variant="warning"
                    className="w-full"
                  >
                    Create
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </AdminLayout>
  );
};

export { ProductCreatePage };
