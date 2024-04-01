import { any } from "prop-types";
import { Navbar as NavbarAdmin } from "./components";
import { Footer } from "@/components/element";

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavbarAdmin />
      <main className="min-h-screen pt-24 bg-zinc-100 pb-8">{children}</main>
      <Footer />
    </>
  );
};

AdminLayout.propTypes = {
  children: any,
};

export default AdminLayout;
