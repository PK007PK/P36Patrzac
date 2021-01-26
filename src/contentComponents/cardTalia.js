import React from "react";
import logo from "../images/znak.svg";

import { PageContext } from "../components/layout";

const Talia = () => (
  <PageContext.Consumer>
    {({ dark }) => (
      <a
        href="https://taliajaty.pl/"
        target="blank"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className={dark ? "card bg-dark" : "card"}>
          <div className={"talia"}>
            <i
              className="talia__logo"
              style={{
                backgroundImage: `url(${logo})`,
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
    )}
  </PageContext.Consumer>
);

export default Talia;
