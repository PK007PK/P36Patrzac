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
            className="mt-5"
            leftSize="3"
            rightSize="6"
            leftColumnContent={() => (
              <div className="my-3">
                <a
                  href="tel:608 658 488"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Tel. 608658488
                </a>
                ,{" "}
                <a
                  href="mailto:urszulakrasny@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  urszulakrasny@gmail.com
                </a>
              </div>
            )}
            rightColumnContent={() => (
              <div className="d-flex justify-content-end align-items-center my-3">
                <div className="me-5">
                  &copy; Urszula Krasny {new Date().getFullYear()}
                </div>
                <a
                  href="https://krasny.netlify.app/programming"
                  target="blank"
                  // className="btn btn-sm"
                  style={
                    dark
                      ? {
                          color: "rgba(255,255,255,0.7)",
                          textDecoration: "none",
                        }
                      : { color: "black", textDecoration: "none" }
                  }
                >
                  <i class="fas fa-check-double"></i> PK
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
