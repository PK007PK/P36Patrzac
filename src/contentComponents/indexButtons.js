import React from "react";
import Image from "gatsby-image";
const IndexButtons = ({ face, className }) => (
  <div className={"text-center btn-group w-100 ".concat(className)}>
    <button className="btn active">O mnie</button>
    <button className="btn">W czym mogę Ci pomóc...</button>
    <button className="btn">Terapia</button>
  </div>
);

export default IndexButtons;
