import { element } from "prop-types";
import { Navbar as NavbarAdmin } from "./components";
import { Footer } from "@/components/element";

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <main className="min-h-screen pt-24">{children}</main>
      <Footer />
    </>
  );
};

AdminLayout.propTypes = {
  children: element,
};

export default AdminLayout;
