import React, { useContext } from "react";

import LocalLayout from "./LocalLayout";
import { PageContext } from "../components/Layout";

const Footer = () => {
  const { dark } = useContext(PageContext);
  return (
    <footer
      className={
        dark
          ? "bg-dark text-center text-lg-start"
          : "bg-light text-center text-lg-start"
      }
    >
      <div className="container">
        <LocalLayout
          className="mt-5"
          leftSize="6"
          rightSize="3"
          leftColumnContent={() => (
            <div className="d-flex justify-content-center justify-content-md-start align-items-center my-3">
              &copy; Urszula Krasny {new Date().getFullYear()}
            </div>
          )}
          rightColumnContent={() => (
            <div className="d-flex justify-content-center justify-content-md-end align-items-center my-3">
              <a
                href="https://krasny.netlify.app/programming"
                target="blank"
                style={
                  dark
                    ? {
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }
                    : { color: "black", textDecoration: "none" }
                }
              >
                <i className="fas fa-check-double"></i> PK
              </a>
            </div>
          )}
        />
      </div>
    </footer>
  );
};

export default Footer;
