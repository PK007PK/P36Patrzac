import React from "react";
import logoSvg from "../../static/znak3.svg";
import logoSvgWhite from "../../static/znak4.svg";

import { PageContext } from "../components/layout";

const Logo = ({ full, className, style }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div className={"logo ".concat(className)} style={style}>
        <i
          className="logo__icon makeWhite"
          alt="logo"
          style={{
            backgroundImage: `url(${dark ? logoSvgWhite : logoSvg})`,
          }}
        ></i>
        {full && (
          <span
            className="logo__sign"
            style={dark ? { color: "rgba(255,255,255,0.7)" } : {}}
          >
            Urszula Krasny
          </span>
        )}
      </div>
    )}
  </PageContext.Consumer>
);

export default Logo;
