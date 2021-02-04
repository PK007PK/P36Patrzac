import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import BackgroundImg from "gatsby-background-image";
import Logo from "../contentComponents/logo";
import { PageContext } from "../components/layout";

const Header = ({
  style,
  leftColumnContent,
  rightColumnContent,
  background,
  alt,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { dark, changeMode } = useContext(PageContext);

  useEffect(() => {
    setTimeout(() => setIsMounted({ isMounted: true }), 500);
  }, []);

  const initialIconComponent = !isMounted ? (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "650px" }}
    >
      <Logo />
    </div>
  ) : null;

  const LeftColumnContent = leftColumnContent;
  const LeftColumnContentComponent = leftColumnContent ? (
    <LeftColumnContent />
  ) : null;

  const RightColumnContent = rightColumnContent;
  const rightColumnContentComponent = rightColumnContent ? (
    <RightColumnContent />
  ) : null;

  const backgroundComponent = background ? (
    <BackgroundImg
      style={{ height: "650px" }}
      fluid={background}
      alt={alt}
      Tag="div"
      className="header__img"
    ></BackgroundImg>
  ) : (
    <div style={{ height: "650px" }}></div>
  );

  return (
    <div className={dark ? "container bg-dark" : "container"} style={style}>
      <div className="row justify-content-center">
        <div className="d-none d-lg-block col-lg-1"></div>
        <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
          {LeftColumnContentComponent}
        </div>
        <div className="d-none d-lg-block col-lg-1"></div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={dark ? "card bg-dark" : "card"}>
            {initialIconComponent}
            {isMounted && backgroundComponent}
            {isMounted && rightColumnContentComponent}
          </div>
        </div>
        <div className="d-flex flex-lg-column col-12 col-lg-1 justify-content-between align-items-center">
          <button
            aria-label="Przełącznik jasny / ciemny motyw"
            type="button"
            className={dark ? "btn btn-warning" : "btn btn-dark"}
            onClick={changeMode}
          >
            {dark ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
          <div className="d-flex flex-lg-column align-items-center">
            <a
              href={`mailto:urszulakrasny@gmail.com`}
              type="button"
              className="btn btn-light"
              aria-label="Wyślij email"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              type="button"
              target="blank"
              className="btn btn-light mx-3 mx-lg-0 mt-lg-4"
              href="tel:608 658 488"
              rel="noopener noreferrer"
              aria-label="Zadzwoń"
            >
              <i className="fas fa-phone-square-alt"></i>
            </a>
            <a
              className="btn btn-light my-4"
              href="https://www.facebook.com/ukrasny"
              target="blank"
              rel="noopener noreferrer"
              aria-label="Przejdź do facebooka"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  style: PropTypes.object,
  leftColumnContent: PropTypes.object,
  rightColumnContent: PropTypes.object,
  background: PropTypes.object,
  className: PropTypes.string,
};

export default Header;
