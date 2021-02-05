import React from "react";
import PropTypes from "prop-types";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

// Content
import Map from "../contentComponents/map";
import ContactDetails from "../contentComponents/contactDetails";

const Contact = ({ location }) => (
  <Layout isdark={location && location.state && location.state.isdark}>
    <SEO title="Kontakt" lang="pl" />
    <Header
      rightColumnContent={Map}
      leftColumnContent={ContactDetails}
      style={{ minHeight: "calc(100vh - 180px)" }}
    />
  </Layout>
);

Contact.propTypes = {
  location: PropTypes.object,
};

export default Contact;
