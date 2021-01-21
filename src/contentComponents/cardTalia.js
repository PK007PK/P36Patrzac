import React from "react";
import logo from "../images/znak.svg";

const Talia = ({ style, className }) => (
  <div className={"card".concat(className)} style={style}>
    <div className={"talia"}>
      <i
        className="talia__logo"
        style={{
          backgroundImage: `url(${logo})`,
        }}
      ></i>
      <h3 className="talia__title">JA-Ty</h3>
      <div className="talia__wrapper">
        <span className="talia__subtitle">Talia</span>pytania które łączą ludzi
      </div>
    </div>
    <a
      href="https://taliajaty.pl/"
      target="blank"
      className="btn btn-light w-100"
    >
      taliajaty.pl
    </a>
  </div>
);

export default Talia;
