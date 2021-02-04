import React, { useState, useEffect } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const PageContext = React.createContext();

const Layout = ({ location, children, isdark }) => {
  const [dark, setDark] = useState(false);
  // console.log(location);
  useEffect(() => setDark(isdark === true ? true : false), []);

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

export default Layout;
