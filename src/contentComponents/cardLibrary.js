import React, { useContext } from "react";
import Image from "gatsby-image";

import { PageContext } from "../components/Layout";

const CardLibrary = ({ fluid, style }) => {
  const { dark } = useContext(PageContext);

  return (
    <a
      href="http://bibliotekagestalt.pl/"
      target="blank"
      className="w-100"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div style={style} className={dark ? "card bg-dark" : "card"}>
        <Image fluid={fluid} className="card-img" />
        <div
          className={
            dark
              ? "card-body text-center bg-light text-dark"
              : "card-body text-center"
          }
        >
          Biblioteka Gestalt
        </div>
      </div>
    </a>
  );
};

export default CardLibrary;
