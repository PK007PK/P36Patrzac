import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const PageContext = React.createContext();

const Layout = ({ location, children, isdark }) => {
  const [dark, setDark] = useState(false);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
