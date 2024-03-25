import { Footer, Navbar } from "@/components/element"
import { Route, Routes } from "react-router-dom"
import NotFound404 from "./pages/NotFound404"
import ProductPage from "./pages/ProductPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import { useFetch } from "./hooks"

function App() {

  const {
    data: products,
    error: errorInProducts,
    isError: isErrorInProducts,
    isloading: isLoadingInProducts
  } = useFetch({
    baseUrl: '/products'
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-9 bg-[#F0F2F5]">
        <Routes>
          <Route path="*" element={<NotFound404 />} />
          <Route
            path="/"
            element={
              <ProductPage
                products={products}
                errorInProducts={errorInProducts}
                isErrorInProducts={isErrorInProducts}
                isLoadingInProducts={isLoadingInProducts}
              />}
          />
          <Route
            path="/:slug"
            element={
              <ProductDetailPage
                products={products}
              />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
