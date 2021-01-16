import React from "react";
import Image from "gatsby-image";
import logoSvg from "../../static/znak3.svg";

const Logo = ({ full, className, style }) => (
  <div className={"logo ".concat(className)} style={style}>
    <i
      className="logo__icon"
      alt="logo"
      style={{ backgroundImage: `url(${logoSvg})` }}
    ></i>
    {full && <span className="logo__sign">Urszula Krasny</span>}
  </div>
);

export default Logo;
