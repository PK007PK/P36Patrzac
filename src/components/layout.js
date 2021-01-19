import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const PageContext = React.createContext();

class Layout extends React.Component {
  state = {
    dark: false,
    changeMode: () => this.changeMode,
  };

  componentDidMount() {
    this.setState({ dark: this.props.dark === true ? true : false });
  }

  changeMode = () => {
    this.setState((prevState) => ({ dark: !prevState.dark }));
    console.log(this.state.dark);
  };

  render() {
    const { children, style } = this.props;
    return (
      <PageContext.Provider value={this.state}>
        <div
          className={this.state.dark ? "bg-dark" : "bg-light"}
          style={this.state.dark ? { color: "rgba(255,255,255,0.7" } : {}}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </PageContext.Provider>
    );
  }
}

export default Layout;
