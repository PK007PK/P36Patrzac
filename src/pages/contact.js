import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";

// Content
import ContactDetails from "../contentComponents/contactDetails";
import Map from "../contentComponents/map";

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

export default Contact;
