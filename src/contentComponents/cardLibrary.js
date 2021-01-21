import React from "react";
import CardPost from "../components/cardPost";
import CardImage from "../components/cardImage";

import { PageContext } from "../components/layout";

const CardLibrary = ({ fluid }) => (
  <PageContext.Consumer>
    {({ dark }) => (
      <div>
        <CardImage fluid={fluid} />
        <a
          href="http://bibliotekagestalt.pl/"
          target="blank"
          className="btn btn-light w-100"
        >
          bibliotekagestalt.pl
        </a>
      </div>
    )}
  </PageContext.Consumer>
);

export default CardLibrary;
