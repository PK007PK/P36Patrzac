import React from "react";
import LocalLayout from "./localLayout";

const Footer = () => (
  <footer className="bg-white text-center text-lg-start">
    <div className="container">
      <LocalLayout
        className="my-5"
        leftSize="3"
        rightSize="6"
        leftColumnContent={() => (
          <p className="copyryght">
            &copy; Urszula Krasny {new Date().getFullYear()}
          </p>
        )}
        rightColumnContent={() => (
          <a
            href="https://krasny.netlify.app/programming"
            target="blank"
            className="text-end"
          >
            <p className="text-end">Realizacja: PK</p>
          </a>
        )}
      />
    </div>
  </footer>
);

export default Footer;
