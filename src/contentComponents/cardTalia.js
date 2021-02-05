import React, { useContext } from "react";
import logowhite from "../images/znakwhite.svg";

import { PageContext } from "../components/Layout";

const Talia = () => {
  const { dark } = useContext(PageContext);

  return (
    <a
      href="https://taliajaty.pl/"
      target="blank"
      style={{ textDecoration: "none", color: "inherit" }}
      rel="noopener noreferrer"
    >
      <div className={dark ? "card bg-dark" : "card"}>
        <div className={"talia"}>
          <i
            className="talia__logo"
            style={{
              backgroundImage: `url(${logowhite})`,
            }}
          ></i>
          <h3 className="talia__title">JA-Ty</h3>
          <div className="talia__wrapper">
            <span className="talia__subtitle">Talia</span>pytania które łączą
            ludzi
          </div>
        </div>
        <div
          className={
            dark
              ? "card-body bg-light text-dark text-center"
              : "card-body text-center"
          }
        >
          Talia Ja-Ty
        </div>
      </div>
    </a>
  );
};

export default Talia;
