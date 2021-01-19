import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

// Content
import ContactDetails from "../contentComponents/contactDetails";
import Map from "../contentComponents/map";

const Contact = ({ location }) => (
  <Layout dark={location && location.state && location.state.dark}>
    <Header rightColumnContent={Map} leftColumnContent={ContactDetails} />
  </Layout>
);

export default Contact;
