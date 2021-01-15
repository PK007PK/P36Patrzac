import React from "react";
import Image from "gatsby-image";
import logoSvg from "../../static/znak3.svg";

const Logo = () => (
  <div className="logo">
    <i
      className="logo__icon"
      alt="logo"
      style={{ backgroundImage: `url(${logoSvg})` }}
    ></i>
    <span className="logo__sign">Urszula Krasny</span>
  </div>
);

export default Logo;
