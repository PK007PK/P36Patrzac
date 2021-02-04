import React, { useState, useContext, useEffect } from "react";

import Logo from "../contentComponents/logo";
import { Link } from "gatsby";

import { PageContext } from "../components/layout";

const Navbar = () => {
  const [isExpanded, toogleExpanded] = useState(0);
  const { dark } = useContext(PageContext);
  const handleButton = () => toogleExpanded((prevState) => !prevState);

  return (
    <div className={dark ? "container bg-dark" : "container bg-light"}>
      <div
        style={{ lineHeight: "0.1" }}
        className={dark ? "text-dark" : "text-light"}
      >
        -
      </div>
      <nav
        className={
          dark
            ? "mt-2 mb-2 navbar navbar-expand-lg navbar-dark text-white shadow-none"
            : "mt-2 mb-2 navbar navbar-expand-lg navbar-light shadow-none"
        }
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            state={{ isdark: dark ? true : false }}
            to="/"
          >
            <Logo withName />
          </Link>
          <button
            onClick={handleButton}
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
          <div
            className={
              isExpanded
                ? "collapse show navbar-collapse"
                : "collapse navbar-collapse"
            }
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  state={{ isdark: dark ? true : false }}
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
                  tabIndex="-1"
                  state={{ isdark: dark ? true : false }}
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
                  tabIndex="-1"
                  state={{ isdark: dark ? true : false }}
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
  );
};

export default Navbar;
