import { Button, CardContent } from "@/components/ui";
// import { ProductItem, ProductList } from "../../components";
import { array, bool } from "prop-types";
import {
  ProductContent,
  ProductFooter,
  ProductHeader,
  ProductItem,
  ProductList,
  SkeletonProduct,
} from "../../components";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const SimilarProductItem = ({ products, isLoadingInProducts }) => {
  return isLoadingInProducts ? (
    <SkeletonProduct count={4} />
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
};

export { SimilarProductItem };
