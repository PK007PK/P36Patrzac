import React from "react";
import Image from "gatsby-image";
const IndexButtons = ({ face, className }) => (
  <div className={"text-center btn-group w-100 ".concat(className)}>
    <div className="card">
      <div className="card-body">O mnie</div>
    </div>
    <div className="card ">
      <div className="card-body">W czym mogę Ci pomóc...</div>
    </div>
    <div className="card">
      <div className="card-body">Terapia</div>
    </div>
  </div>
);

export default IndexButtons;
