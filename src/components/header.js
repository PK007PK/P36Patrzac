import React from "react";

import BackgroundImg from "gatsby-background-image";
import LocalLayout from "../components/localLayout";
const Header = ({ leftColumnContent, background, alt }) => {
  const LeftColumnContent = leftColumnContent;
  return (
    <div class="container">
      <div className="row justify-content-center">
        <div className="col-sm-1 d-flex align-items-center"></div>
        <div className="col-sm-5 d-flex align-items-center">
          {leftColumnContent && <LeftColumnContent />}
        </div>{" "}
        <div className="col-sm-1 d-flex align-items-center"></div>
        <div className="col-sm-4">
          <div className="card">
            <BackgroundImg
              style={{ height: "650px" }}
              fluid={background}
              alt={alt}
              Tag="div"
            ></BackgroundImg>
          </div>
        </div>
        <div className="col-sm-1 d-flex flex-column position-relative justify-content-between align-items-center">
          <button type="button" className="btn btn-dark">
            <i class="fas fa-moon"></i>
          </button>
          <div className="d-flex flex-column">
            <a
              href={`mailto:urszulakrasny@gmail.com`}
              type="button"
              className="btn btn-light"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              type="button"
              target="blank"
              className="btn btn-light mt-4"
              href="tel:608 658 488"
              rel="noopener noreferrer"
              aria-label="Phone"
            >
              <i className="fas fa-phone-square-alt"></i>
            </a>
            <a
              className="btn btn-light my-4"
              href="https://www.facebook.com/ukrasny"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
