import React from "react";

const allIndexButtons = ({ className, style, data, fn, active }) => (
  <div
    style={style}
    className={"text-center d-flex mt-4 flex-column ".concat(className)}
  >
    {data.map((item) => (
      <button
        id={item.name}
        type="button"
        className={item.name === active ? "btn btn-dark mb-3" : "btn mb-3"}
        onClick={fn && fn.bind(this, item.name)}
      >
        {item.name}
      </button>
    ))}
  </div>
);

export default allIndexButtons;
