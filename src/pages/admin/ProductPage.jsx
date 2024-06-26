import { BadgeCategory, NotFound404 } from "@/components/element";
import { Button, Card, CardContent, CardHeader, Input } from "@/components/ui";
import { useAuthenticated } from "@/contexts";
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
import { PiPlusCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const { authedUser } = useAuthenticated();

  const {
    data: products,
    isFetching: isFecthingInProducts,
    isError: isErrorInProducts,
    error: errorInProducts,
  } = useFetchProducts({ token: authedUser.token });
  const {
    data: categories,
    isError: isErrorInCategories,
    error: errorInCategories,
  } = useFetchCategories({ token: authedUser.token });

  if (isErrorInCategories || isErrorInProducts) {
    return (
      <NotFound404
        error={errorInCategories.message || errorInProducts.message}
      />
    );
  }

  return (
    <AdminLayout>
      {isFecthingInProducts ? (
        <div>loading pak</div>
      ) : (
        <section className='flex justify-center md:gap-3 md:px-3 lg:gap-4 xl:px-16'>
          {/* products items */}
          <Card className={`py-3 w-full}`}>
            <CardHeader className='p-3 gap-y-2 lg:flex-row lg:justify-between lg:items-center'>
              {/* header */}
              <h1 className='text-xl font-bold lg:text-2xl'>Products</h1>
              <div className='flex gap-3'>
                <Input
                  type='text'
                  name='seact-product'
                  placeholder='Search product...'
                  className='text-sm'
                />
                <Link to='/admin/product/create'>
                  <Button
                    variant='outline'
                    className='flex gap-2 px-3 text-sm'
                  >
                    Add Product
                    <PiPlusCircle className='text-xl' />
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent className='pt-2 space-y-5'>
              {products?.data.length <= 0 ? (
                <h1 className='flex items-center justify-center min-h-[80vh] text-red-600'>
                  Tidak ada product
                </h1>
              ) : (
                <>
                  <BadgeCategory className='max-w-xs w-fit md:flex md:max-w-full'>
                    <Button
                      variant='ghost'
                      name='all-product'
                      className='px-3 py-2 capitalize border rounded-xl hover:bg-success-500 hover:text-zinc-800'
                    >
                      All Product
                    </Button>
                    {categories?.data.map((category) => (
                      <Button
                        key={category.id}
                        variant='ghost'
                        name={category.name}
                        className='px-3 py-2 capitalize border rounded-xl hover:bg-success-500 hover:text-zinc-800'
                      >
                        {category.name}
                      </Button>
                    ))}
                  </BadgeCategory>
                  {/* product list */}
                  <ProductList className='px-2 md:px-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {products?.data.map((product) => (
                      <ProductItem key={product.id}>
                        <ProductHeader thumbnail={product.thumbnail} />
                        <ProductContent
                          title={product.title}
                          price={product.price}
                        />
                        <ProductFooter className='flex flex-col gap-4 pb-5 ps-3 pe-5'>
                          <Link
                            to={`/admin/product/${product.slug}/show`}
                            className='w-full'
                          >
                            <Button
                              variant='primary'
                              className='w-full'
                              name={`show-${product.slug}`}
                            >
                              Show
                            </Button>
                          </Link>
                          <Link
                            to={`/admin/product/${product.slug}/edit`}
                            className='w-full'
                          >
                            <Button
                              name={`edit-${product.slug}`}
                              className='w-full'
                            >
                              Edit
                            </Button>
                          </Link>
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
