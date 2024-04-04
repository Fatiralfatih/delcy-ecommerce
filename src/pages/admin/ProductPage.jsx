import { BadgeCategory } from "@/components/element";
import { Button, Card, CardContent, CardHeader, Input } from "@/components/ui";
import {
  ProductContent,
  ProductFooter,
  ProductHeader,
  ProductItem,
  ProductList,
} from "@/features/products/components";
import { useFetchProducts } from "@/features/products/hooks";
import AdminLayout from "@/layouts/admin/AdminLayout";
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { data: products, isFetching } = useFetchProducts();

  return (
    <AdminLayout>
      {isFetching ? (
        <div>loading pak</div>
      ) : (
        <section className="flex justify-center md:gap-3 md:px-3 lg:gap-4 xl:px-16">
          {/* products items */}
          <Card className={`py-3 w-full}`}>
            <CardHeader className="p-3 gap-y-2 lg:flex-row lg:justify-between lg:items-center">
              {/* header */}
              <h1 className="font-bold text-xl lg:text-2xl">Products</h1>
              <div className="flex gap-3">
                <Input
                  type="text"
                  name="seact-product"
                  placeholder="Search product..."
                  className="text-sm"
                />
                <Link to="/admin/product/create">
                  <Button
                    variant="outline"
                    className="text-sm px-3 flex gap-2"
                  >
                    Add Product
                    <PiPlusCircle className="text-xl" />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className="pt-2 space-y-5">
              {products?.data.length <= 0 ? (
                <div className=" flex justify-center w-full">
                  <h1 className="w-full text-red-600">Tidak ada product</h1>
                </div>
              ) : (
                <>
                  <BadgeCategory className="max-w-xs md:flex">
                    <Button
                      variant="ghost"
                      className="capitalize border px-3 py-2 rounded-xl hover:bg-success-500 hover:text-zinc-800"
                    >
                      All Product
                    </Button>
                  </BadgeCategory>
                  {/* product list */}
                  <ProductList className="md:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {products?.data.map((product) => (
                      <ProductItem key={product.id}>
                        <ProductHeader thumbnail={product.thumbnail} />
                        <ProductContent
                          title={product.title}
                          price={product.price}
                        />
                        <ProductFooter className="pb-5 ps-3 pe-5 flex flex-col gap-4">
                          <Link
                            to={`/admin/product/${product.slug}/show`}
                            className="w-full"
                          >
                            <Button
                              variant="primary"
                              className="w-full"
                            >
                              Show
                            </Button>
                          </Link>
                          <Button className="w-full">Edit</Button>
                        </ProductFooter>
                      </ProductItem>
                    ))}
                  </ProductList>
                </>
              )}
              {/* category list */}
            </CardContent>
          </Card>
        </section>
      )}
    </AdminLayout>
  );
};

export { ProductPage };
