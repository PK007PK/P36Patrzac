import React from "react";
import Logo from "./logo";
import { Link } from "gatsby";

const Navbar = () => (
  <div className="container">
    <nav className="my-2 navbar navbar-expand-lg navbar-light bg-white bg-light shadow-none">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Logo />
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
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Początek
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/publications"
                tabindex="-1"
                // aria-disabled="true"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Publikacje
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                tabindex="-1"
                // aria-disabled="true"
                activeStyle={{
                  fontWeight: "bold",
                  color: "black",
                }}
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

export default Navbar;
