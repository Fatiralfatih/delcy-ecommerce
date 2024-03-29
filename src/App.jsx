import { Footer, Navbar } from "@/components/element";
import { Route, Routes } from "react-router-dom";
import { CartPage, NotFound404, ProductDetailPage, ProductPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-9 bg-[#F0F2F5]">
        <Routes>
          <Route
            path="*"
            element={<NotFound404 />}
          />
          <Route
            path="/"
            element={<ProductPage />}
          />
          <Route
            path="/:slug"
            element={<ProductDetailPage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
