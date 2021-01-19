import React from "react";
import Logo from "./logo";
import { Link } from "gatsby";

import { PageContext } from "../components/layout";

const Navbar = () => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div className={dark ? "container bg-dark" : "container bg-light"}>
        <nav
          className={
            dark
              ? "mb-2 navbar navbar-expand-lg navbar-dark text-white shadow-none"
              : "mb-2 navbar navbar-expand-lg navbar-light shadow-none"
          }
        >
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              state={{ dark: dark ? true : false }}
              to="/"
            >
              <Logo full />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    // aria-current="page"
                    state={{ dark: dark ? true : false }}
                    to="/"
                    activeStyle={
                      dark
                        ? {
                            fontWeight: "bold",
                            color: "rgba(255,255,255,0.7",
                          }
                        : {
                            fontWeight: "bold",
                            color: "black",
                          }
                    }
                  >
                    Początek
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/publications"
                    tabindex="-1"
                    state={{ dark: dark ? true : false }}
                    // aria-disabled="true"
                    activeStyle={
                      dark
                        ? {
                            fontWeight: "bold",
                            color: "rgba(255,255,255,0.7",
                          }
                        : {
                            fontWeight: "bold",
                            color: "black",
                          }
                    }
                  >
                    Publikacje
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    tabindex="-1"
                    state={{ dark: dark ? true : false }}
                    // aria-disabled="true"
                    activeStyle={
                      dark
                        ? {
                            fontWeight: "bold",
                            color: "rgba(255,255,255,0.7",
                          }
                        : {
                            fontWeight: "bold",
                            color: "black",
                          }
                    }
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )}
  </PageContext.Consumer>
);

export default Navbar;
