import React from "react";
import Image from "gatsby-image";

import { PageContext } from "../components/layout";

const CardImage = ({ fluid }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <Image
        fluid={fluid}
        className={dark ? "card bg-dark header__img" : "card header__img"}
      />
    )}
  </PageContext.Consumer>
);

export default CardImage;
