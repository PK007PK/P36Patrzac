import React, { useContext } from "react";
import Image from "gatsby-image";
import PropTypes from "prop-types";

import { PageContext } from "../components/Layout";

const Card = ({ fluid, style, className, title, link, alt }) => {
  const { dark } = useContext(PageContext);

  const Link = ({ link, children, style }) =>
    link ? (
      <a
        href={link}
        target="blank"
        className={"w-100 ".concat(className)}
        style={style}
      >
        {children}
      </a>
    ) : (
      <div className={"w-100 ".concat(className)} style={style}>
        {children}
      </div>
    );

  return (
    <Link
      link={link}
      style={Object.assign({ textDecoration: "none", color: "inherit" }, style)}
    >
      <div
        className={dark ? "card bg-dark" : "card"}
        style={{ marginBottom: "50px" }}
      >
        <Image
          fluid={fluid}
          className="card-img"
          alt={alt}
          style={{ height: "300px" }}
        />
        <div
          className={
            dark
              ? "card-body text-center bg-light text-dark"
              : "card-body text-center"
          }
        >
          {title}
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  fluid: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
};

export default Card;
