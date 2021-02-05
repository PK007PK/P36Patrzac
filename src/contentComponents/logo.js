import React, { useContext } from "react";
import PropTypes from "prop-types";

import logoSvg from "../../static/znak3.svg";
import logoSvgWhite from "../../static/znak4.svg";

import { PageContext } from "../components/Layout";

const Logo = ({ withName, className, style }) => {
  const { dark } = useContext(PageContext);

  const nameComponent = withName ? (
    <span
      className="logo__sign"
      style={dark ? { color: "rgba(255,255,255,0.7)" } : {}}
    >
      Urszula Krasny
    </span>
  ) : null;

  return (
    <div className={"logo ".concat(className)} style={style}>
      <i
        className="logo__icon makeWhite"
        alt="logo"
        style={{
          backgroundImage: `url(${dark ? logoSvgWhite : logoSvg})`,
        }}
      ></i>
      {nameComponent}
    </div>
  );
};

Logo.propTypes = {
  withName: PropTypes.bool,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Logo;
