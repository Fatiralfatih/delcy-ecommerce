import ProductPage from "@/pages/ProductPage"
import { Navbar } from "@/components/element"

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
