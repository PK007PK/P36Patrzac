import React from "react";
import PropTypes from "prop-types";

// Components
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header";

// Content
import Map from "../contentComponents/Map";
import ContactDetails from "../contentComponents/ContactDetails";

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
