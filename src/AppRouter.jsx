import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  NotFound404,
  ProductDetailPage as ProductDetailCostumer,
  ProductPage as ProductPageCostumer,
} from "./pages/costumer";
import {
  ProductCreatePage,
  ProductDetailPage as ProductDetailPageAdmin,
  ProductPage as ProductPageAdmin,
} from "./pages/admin";

function App() {
  return (
    <Routes key={"costumer"}>
      {/* costumer */}
      <Route
        path="*"
        element={<NotFound404 />}
      />
      <Route
        path="/"
        element={<ProductPageCostumer />}
      />
      <Route
        path="/:slug/"
        element={<ProductDetailCostumer />}
      />
      <Route
        path="/cart"
        element={<CartPage />}
      />
      {/* end Costumer */}

      {/* admin */}
      <Route
        path="/admin/product"
        element={<ProductPageAdmin />}
      />
      <Route
        path="/admin/product/:slug/show"
        element={<ProductDetailPageAdmin />}
      />
      <Route
        path="/admin/product/create"
        element={<ProductCreatePage />}
      />
      {/* end admin */}
    </Routes>
  );
}

export default App;
