import React, { useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const PageContext = React.createContext();

const Layout = ({ location, children, style }) => {
  // state = {
  //   dark: false,
  //   changeMode: () => this.changeMode,
  // };

  const [state, setState] = useState({
    dark: false,
    changeMode: () => changeMode,
  });

  // componentDidMount() {
  //   this.setState({ dark: this.props.dark === true ? true : false });
  // }

  const changeMode = () => {
    setState((prevState) => ({ dark: !prevState.dark }));
  };

  const { dark } = state;
  return (
    <PageContext.Provider value={state}>
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
