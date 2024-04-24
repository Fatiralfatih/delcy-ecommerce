import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  ProductDetailPage as ProductDetailCostumer,
  ProductPage as ProductPageCostumer,
} from "./pages/costumer";
import {
  ProductCreatePage,
  ProductDetailPage as ProductDetailPageAdmin,
  ProductEditPage as ProductEditPageAdmin,
  ProductPage as ProductPageAdmin,
} from "./pages/admin";
import { LoginPage, RegisterPage } from "./pages/authentication";
import { useAuthenticated } from "./contexts";
import { NotFound404 } from "./components/element";

function App() {
  const { authedUser } = useAuthenticated();

  return (
    <Routes>
      <Route
        path='*'
        element={
          <NotFound404
            error={!authedUser && "silahkan login terlebih dahulu"}
          />
        }
      />

      {!authedUser ? (
        <>
          <Route
            path='/login'
            element={<LoginPage />}
          />

          <Route
            path='/register'
            element={<RegisterPage />}
          />
        </>
      ) : (
        <>
          {/* costumer */}
          <Route
            path='/cart'
            element={<CartPage />}
          />

          <Route
            path='/'
            element={<ProductPageCostumer />}
          />

          <Route
            path='/show/:slug/'
            element={<ProductDetailCostumer />}
          />
          {/* end Costumer */}

          {/* admin */}
          <Route
            path='/admin/product'
            element={<ProductPageAdmin />}
          />
          <Route
            path='/admin/product/:slug/show'
            element={<ProductDetailPageAdmin />}
          />
          <Route
            path='/admin/product/create'
            element={<ProductCreatePage />}
          />
          <Route
            path='/admin/product/:slug/edit'
            element={<ProductEditPageAdmin />}
          />
          {/* end admin */}
        </>
      )}
    </Routes>
  );
}

export default App;
