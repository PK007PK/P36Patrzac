import * as React from "react";

const IndexPage = () => {
  return (
    <div class="container">
      <p className="testClass">ddd</p>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div class="row">
        <div class="col-md">
          <div class="card">
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#!" class="btn btn-primary">
                Button
              </a>
            </div>
          </div>
        </div>
        <div class="col-md">One of three columns</div>
        <div class="col-md">One of three columns</div>
      </div>
    </div>
  );
};

export default IndexPage;
