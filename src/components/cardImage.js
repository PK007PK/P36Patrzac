import React, { useContext } from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";

import { PageContext } from "../components/Layout";

const CardImage = ({ fluid, style, alt }) => {
  const { dark } = useContext(PageContext);

  return (
    <div style={style} className={dark ? "card bg-dark " : "card bg-light "}>
      <Image
        fluid={fluid}
        alt={alt}
        className={dark ? "bg-dark header__img" : "bg-light header__img"}
      />
    </div>
  );
};

CardImage.propTypes = {
  fluid: PropTypes.object,
  style: PropTypes.object,
  alt: PropTypes.string,
};

export default CardImage;
