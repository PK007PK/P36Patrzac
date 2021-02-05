import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const PageContext = React.createContext();

const Layout = ({ location, children, isdark }) => {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(isdark), []);

  const changeMode = () => {
    setDark((prevState) => !prevState);
  };

  return (
    <PageContext.Provider value={{ dark, changeMode }}>
      <div
        className={dark ? "bg-dark" : "bg-light"}
        style={dark ? { color: "rgba(255,255,255,0.7" } : {}}
      >
        <Navbar location={location} />

        {children}
        <Footer />
      </div>
    </PageContext.Provider>
  );
};

Layout.propTypes = {
  location: PropTypes.object,
  isdark: PropTypes.bool,
};

export default Layout;
