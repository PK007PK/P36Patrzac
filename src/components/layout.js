import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
