import React from "react";
import LocalLayout from "./localLayout";

const Footer = () => (
  <footer className="bg-white text-center text-lg-start">
    <div className="container">
      <LocalLayout
        className="my-5"
        leftSize="3"
        rightSize="6"
        leftColumnContent={() => <p>Polityka prywatności</p>}
        rightColumnContent={() => (
          <div className="d-flex justify-content-end">
            <div className="me-5">
              &copy; Urszula Krasny {new Date().getFullYear()}
            </div>
            <a
              href="https://krasny.netlify.app/programming"
              target="blank"
              style={{ color: "black" }}
            >
              <p className="d-inline-block ml-4">Realizacja: PK</p>
            </a>
          </div>
        )}
      />
    </div>
  </footer>
);

export default Footer;
