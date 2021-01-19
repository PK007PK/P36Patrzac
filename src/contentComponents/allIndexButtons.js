import React from "react";

import { PageContext } from "../components/layout";

const allIndexButtons = ({ className, style, data, fn, active }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div
        style={style}
        className={"text-center d-flex mt-4 flex-column ".concat(className)}
      >
        {data.map((item) => (
          <button
            id={item.name}
            type="button"
            className={
              item.name === active
                ? dark
                  ? "active-and-dark btn btn-warning mb-3"
                  : "active-and-not-dark btn btn-warning mb-3"
                : dark
                ? "not-active-dark btn btn-light mb-3"
                : "not-active-not-dark btn mb-3"
            }
            // className={item.name === !active && dark && "btn btn-light mb-3"}
            // className={item.name === active && !dark && "btn btn-light mb-3"}
            // className={item.name === !active && !dark && "btn btn-dark mb-3"}
            // className={const abc =
            //   if (item.name === active && dark) {
            //     ("btn btn-dark mb-3");
            //   } else if (item.name === !active && dark) {
            //     ("btn btn-light mb-3");
            //   } else if (item.name === active && !dark) {
            //     ("btn btn-light mb-3");
            //   } else "btn btn-dark mb-3";
            // }
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
