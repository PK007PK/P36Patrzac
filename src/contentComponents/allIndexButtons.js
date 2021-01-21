import React from "react";

import { PageContext } from "../components/layout";

const allIndexButtons = ({ className, style, data, fn, active }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div
        style={style}
        className={"text-center w-100 btn-group ".concat(className)}
      >
        {data.map((item) => (
          <button
            id={item.name}
            type="button"
            className={
              item.name === active
                ? dark
                  ? "active-and-dark btn btn-sm btn-warning "
                  : "active-and-not-dark btn btn-sm btn-dark "
                : dark
                ? "not-active-dark btn btn-sm btn-light "
                : "not-active-not-dark btn btn-sm "
            }
            onClick={fn && fn.bind(this, item.name)}
          >
            {item.name}
          </button>
        ))}
      </div>
    )}
  </PageContext.Consumer>
);

export default allIndexButtons;
