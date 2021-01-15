import React from "react";

import BackgroundImg from "gatsby-background-image";

const Header = ({ leftColumnContent, img, alt }) => {
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
              fluid={img}
              alt={alt}
              Tag="div"
            ></BackgroundImg>
          </div>
        </div>
        <div className="col-sm-1 d-flex flex-column justify-content-between align-items-center">
          <button type="button" className="btn btn-dark">
            <i class="fas fa-moon"></i>
          </button>
          <div className="d-flex flex-column">
            <button type="button" className="btn btn-light">
              <i className="fas fa-envelope"></i>
            </button>
            <button type="button" className="btn btn-light mt-4">
              <i className="fas fa-phone-square-alt"></i>
            </button>
            <button type="button" className="btn btn-light my-4">
              <i className="fab fa-facebook"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
