import { Footer } from "@/components/element";
import { Navbar as NavbarCostumer } from "./components";
import { element } from "prop-types";

const CostumerLayout = ({ children }) => {
  return (
    <>
      <NavbarCostumer />
      <main className="pb-10 bg-zinc-100">{children}</main>
      <Footer />
    </>
  );
};

CostumerLayout.propTypes = {
  children: element,
};

export default CostumerLayout;
