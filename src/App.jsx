import ProductPage from "@/pages/ProductPage"
import { Footer, Navbar } from "@/components/element"
import { Route, Routes } from "react-router-dom"
import NotFound404 from "@/pages/NotFound404"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-9 bg-[#F0F2F5]">
        <Routes>
          <Route path="*" element={<NotFound404 />} />
          <Route path="/" element={<ProductPage />} />
          <Route path="/:slug" element={<ProductDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
