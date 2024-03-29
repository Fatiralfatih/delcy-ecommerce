import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  NotFound404,
  ProductDetailPage,
  ProductPage as ProductPageCostumer,
} from "./pages/costumer";
import { ProductPage as ProductPageAdmin } from "./pages/admin";

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
        element={<ProductDetailPage />}
      />
      <Route
        path="cart"
        element={<CartPage />}
      />
      {/* end Costumer */}

      {/* admin */}
      <Route
        path="/admin/product"
        element={<ProductPageAdmin />}
      />
      {/* end admin */}
    </Routes>
  );
}

export default App;
