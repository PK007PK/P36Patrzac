import React from "react";
import Image from "gatsby-image";

import { PageContext } from "../components/layout";

const CardImage = ({ fluid, style, className }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div style={style} className={dark ? "card bg-dark " : "card bg-light "}>
        <Image
          fluid={fluid}
          className={dark ? "bg-dark header__img" : "bg-light header__img"}
        />
      </div>
    )}
  </PageContext.Consumer>
);

export default CardImage;
