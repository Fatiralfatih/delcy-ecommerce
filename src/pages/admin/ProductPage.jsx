import { BadgeCategory } from "@/components/element";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import {
  ProductContent,
  ProductFooter,
  ProductHeader,
  ProductItem,
  ProductList,
} from "@/features/products/components";
import {
  useFetchCategories,
  useFetchProducts,
} from "@/features/products/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { CgArrowRight, CgSearch } from "react-icons/cg";
import { PiPlusCircle } from "react-icons/pi";

const ProductPage = () => {
  const { data: products } = useFetchProducts();
  const { data: categories } = useFetchCategories();

  return (
    <AdminLayout>
      <div className="px-3 flex justify-center md:gap-3 md:px-5 lg:gap-4 ">
        {/* products items */}
        <Card className="py-3">
          <CardHeader className="p-3 gap-y-2 lg:flex-row lg:justify-between lg:items-center">
            {/* header */}
            <h1 className="font-bold text-xl lg:text-2xl">Products</h1>
            <div className="flex gap-3">
              <Input
                iconLeft={<CgSearch />}
                placeholder="Search product..."
                className="text-sm"
              />
              <Button
                variant="outline"
                className="text-sm px-3 flex gap-2"
              >
                Add Product
                <PiPlusCircle className="text-xl" />
              </Button>
            </div>

            {/* category list */}
            <BadgeCategory className="max-w-xs md:hidden">
              {categories?.data.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="capitalize border px-3 py-2 rounded-xl hover:bg-success-500 hover:text-zinc-800"
                >
                  {category.name}
                </Button>
              ))}
            </BadgeCategory>
          </CardHeader>
          <CardContent className="pt-2">
            {/* product list */}
            <ProductList className="md:px-0 md:grid-cols-2">
              {products?.data.map((product) => (
                <ProductItem key={product.id}>
                  <ProductHeader thumbnail={product.thumbnail} />
                  <ProductContent
                    title={product.title}
                    price={product.price}
                  />
                  <ProductFooter className="pb-5 ps-3 pe-5">
                    <Button className="w-full">Edit Products</Button>
                  </ProductFooter>
                </ProductItem>
              ))}
            </ProductList>
          </CardContent>
        </Card>

        {/* edit detail products on click */}
        <Card className="hidden md:block md:py-3 lg:px-4">
          <CardHeader className="p-3 flex flex-row lg:justify-between lg:items-center">
            <CardTitle className="text-lg lg:text-2xl">
              Detail Product
            </CardTitle>
            <Button
              variant="outline"
              className="gap-3 text-xs lg:text-sm"
            >
              See Full View
              <span>
                <CgArrowRight />
              </span>
            </Button>
          </CardHeader>
          <CardContent className="lg:pt-3">
            {/* thumbnail product */}
            <figure className="w-full h-64 lg:h-[300px] lg:w-[80%] mx-auto">
              <img
                src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg?t=st=1711811605~exp=1711815205~hmac=6a0e0373a9b89f73dcee08f676dd80d4bb1796852aa50ce5042e72eaa08720af&w=740"
                alt="maternal"
                className="w-full h-full aspect-auto rounded-lg"
              />
            </figure>
            {/* title prodcut description */}
            <CardTitle className="text-lg py-4 lg:text-xl">
              Description
            </CardTitle>

            <Card>
              <CardContent className="p-3 space-y-3 lg:space-y-4">
                {/* product title */}
                <div className="space-y-1 lg:space-y-2">
                  <CardDescription className="text-xs lg:text-sm">
                    Product Name
                  </CardDescription>
                  <Input
                    className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm"
                    name="title"
                    placeholder="Masukkan title..."
                  />
                </div>

                {/* product price */}
                <div className="space-y-1 lg:space-y-2">
                  <CardDescription className="text-xs lg:text-sm">
                    Price
                  </CardDescription>
                  <Input
                    className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm"
                    name="price"
                    placeholder="Masukkan price..."
                  />
                </div>

                {/* product stock */}
                <div className="space-y-1 lg:space-y-2">
                  <CardDescription className="text-xs lg:text-sm">
                    Stock
                  </CardDescription>
                  <Input
                    className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm"
                    name="stock"
                    placeholder="Masukkan stock..."
                  />
                </div>

                {/* product category */}
                <div className="space-y-1 lg:space-y-2">
                  <CardDescription className="text-xs lg:text-sm">
                    Category
                  </CardDescription>
                  <Input
                    className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm "
                    name="category"
                    placeholder="Masukkan category..."
                  />
                </div>

                {/* variant (color and size) */}
                <div className="space-y-3 lg:flex lg:items-center lg:space-y-0 lg:gap-3">
                  {/* color */}
                  <div className="space-y-1 lg:space-y-2">
                    <CardDescription className="text-xs lg:text-sm">
                      Color
                    </CardDescription>
                    <Input
                      className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm"
                      name="color"
                      placeholder="Masukkan color..."
                    />
                  </div>
                  {/* size */}
                  <div className="space-y-1 lg:space-y-2">
                    <CardDescription className="text-xs lg:text-sm">
                      Size
                    </CardDescription>
                    <Input
                      className="text text-xs p-2 h-8 ms-1 focus-visible:ring-0 lg:h-10 lg:text-sm"
                      name="size"
                      placeholder="Masukkan size..."
                    />
                  </div>
                </div>

                {/* description */}
                <div className="space-y-1 lg:space-y-2">
                  <CardDescription className="text-xs lg:text-sm">
                    Description
                  </CardDescription>
                  <Textarea
                    className="focus-visible:ring-0 text-xs ms-1 lg:text-sm"
                    placeholder="Masukkan deskripsi..."
                  ></Textarea>
                </div>
              </CardContent>
            </Card>
          </CardContent>

          {/* button */}
          <CardFooter className="justify-between gap-6 py-3 px-5 pb-2">
            <Button
              variant="danger"
              className="w-full"
            >
              Discard
            </Button>
            <Button className="w-full">Update</Button>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
};

export { ProductPage };
