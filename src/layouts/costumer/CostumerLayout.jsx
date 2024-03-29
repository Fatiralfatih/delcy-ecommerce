import { Footer } from "@/components/element";
import { Navbar } from "./components";
import { element } from "prop-types";

const CostumerLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

CostumerLayout.propTypes = {
  children: element,
};

export default CostumerLayout;
