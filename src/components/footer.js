import React from "react";
import LocalLayout from "./localLayout";
import { PageContext } from "../components/layout";

const Footer = () => (
  <PageContext.Consumer>
    {({ dark }) => (
      <footer
        className={
          dark
            ? "bg-dark text-center text-lg-start"
            : "bg-light text-center text-lg-start"
        }
      >
        <div className="container">
          <LocalLayout
            className=""
            leftSize="3"
            rightSize="6"
            leftColumnContent={() => <p>Polityka prywatności</p>}
            rightColumnContent={() => (
              <div className="d-flex justify-content-end my-3">
                <div className="me-5">
                  &copy; Urszula Krasny {new Date().getFullYear()}
                </div>
                <a
                  href="https://krasny.netlify.app/programming"
                  target="blank"
                  style={
                    dark
                      ? { color: "rgba(255,255,255,0.7)" }
                      : { color: "black" }
                  }
                >
                  <p className="d-inline-block ml-4">Realizacja: PK</p>
                </a>
              </div>
            )}
          />
        </div>
      </footer>
    )}
  </PageContext.Consumer>
);

export default Footer;
