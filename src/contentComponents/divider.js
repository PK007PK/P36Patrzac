import React from "react";
import Logo from "../contentComponents/logo";

const Divider = ({ style }) => (
  <div className="d-flex justify-content-center">
    <Logo
      className="text-center"
      style={style ? style : { margin: "75px 0" }}
    />
  </div>
);

export default Divider;
