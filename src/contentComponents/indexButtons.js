import React from "react";

const IndexButtons = ({ className }) => (
  <div className={"text-center d-flex mt-4 flex-column ".concat(className)}>
    <button type="button" className="btn btn-dark">
      O mnie
    </button>
    <button className="btn shadow-none my-2">W czym mogę Ci pomóc...</button>
    <button className="btn shadow-none">Terapia</button>
  </div>
);

export default IndexButtons;
