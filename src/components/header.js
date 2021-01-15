import React from "react";
import Image from "gatsby-image";
import BackgroundImg from "gatsby-background-image";
import CardTalia from "./cardTalia";
const Header = ({ leftColumnContent, background, face, alt }) => {
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
            >
              <div
                className="card bg-dark"
                style={{
                  height: "300px",
                  width: "250px",
                  position: "absolute",
                  left: "-38px",
                  bottom: "76px",
                }}
              >
                <Image
                  className="header-face"
                  fluid={face}
                  className="card-img"
                />
              </div>
            </BackgroundImg>
          </div>
        </div>
        <div className="col-sm-1 d-flex flex-column position-relative justify-content-between align-items-center">
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
