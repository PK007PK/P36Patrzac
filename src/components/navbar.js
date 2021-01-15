import React from "react";
import Logo from "./logo";

const Navbar = () => (
  <div className="container">
    <nav class="my-2 navbar navbar-expand-lg navbar-light bg-white bg-light shadow-none">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <Logo />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Początek
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
