import { Footer, Navbar } from "@/components/element"
import { Route, Routes } from "react-router-dom"
import { CartPage, NotFound404, ProductDetailPage, ProductPage } from "./pages"
import { useProducts } from "./features/products/hooks"

function App() {

  const {
    data: products,
    isError: isErrorInProducts,
    isLoading: isLoadingInProducts,
    error: errorInProducts,
  } = useProducts()

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-9 bg-[#F0F2F5]">
        <Routes>
          <Route path="*" element={<NotFound404 />} />
          <Route
            path="/"
            element={<ProductPage
              products={products}
              isErrorInProducts={isErrorInProducts}
              errorInProducts={errorInProducts}
              isLoadingInProducts={isLoadingInProducts}
            />} />
          <Route
            path="/:slug"
            element={
              <ProductDetailPage
                products={products}
              />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
