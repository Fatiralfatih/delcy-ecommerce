import Navbar from "@/components/Element/Navbar"
import ProductPage from "@/pages/ProductPage"

function App() {

  return (
    <>
      <Navbar />

      <main className="min-h-screen mt-32">
        <ProductPage />
      </main>
    </>
  )
}

export default App
