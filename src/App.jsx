import ProductPage from "@/pages/ProductPage"
import { Navbar } from "@/components/element"
import { Route, Routes } from "react-router-dom"
import NotFound404 from "@/pages/NotFound404"

function App() {

  return (
    <>
      <Navbar />
      <main className="mt-32">
        <Routes>
          <Route path="*" element={<NotFound404 />} />
          <Route path="/" element={<ProductPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
