import { Button, CardContent } from "@/components/ui";
// import { ProductItem, ProductList } from "../../components";
import { array, bool, func } from "prop-types";
import {
  ProductContent,
  ProductFooter,
  ProductHeader,
  ProductItem,
  ProductList,
} from "../../components";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { Loader } from "@/components/element";

const SimilarProductItem = ({
  products,
  isLoadingInProducts,
  isFetchingInProducts,
  refetch,
}) => {
  return isLoadingInProducts || isFetchingInProducts ? (
    <div className="w-full h-full flex justify-center  py-40">
      <Loader />
    </div>
  ) : (
    <CardContent className="p-0">
      {products?.length >= 1 ? (
        <ProductList className="md:grid-cols-3 md:pb-5 lg:grid-cols-4 xl:grid-cols-5 ">
          {products?.map((product) => (
            <ProductItem key={product.id}>
              <ProductHeader thumbnail={product.thumbnail} />
              <ProductContent
                title={product.title}
                price={product.price}
              />
              <ProductFooter>
                <div className="flex w-full px-3 pb-5">
                  <Link
                    to={`/${product.slug}`}
                    className="w-full"
                  >
                    <Button
                      className=" w-full text-xs lg:text-sm"
                      name={`${product.slug}`}
                      onClick={() => refetch()}
                    >
                      <span className="pe-2">
                        <TbListDetails className="text-sm md:text-lg" />
                      </span>
                      Lihat Detail
                    </Button>
                  </Link>
                </div>
              </ProductFooter>
            </ProductItem>
          ))}
        </ProductList>
      ) : (
        <p>tidak ada </p>
      )}
    </CardContent>
  );
};

SimilarProductItem.propTypes = {
  products: array,
  isLoadingInProducts: bool,
  isFetchingInProducts: bool,
  refetch: func,
};

export { SimilarProductItem };
