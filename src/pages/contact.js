import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

// Content
import ContactDetails from "../contentComponents/contactDetails";
import Map from "../contentComponents/map";

const Contact = () => (
  <Layout>
    <Header rightColumnContent={Map} leftColumnContent={ContactDetails} />
  </Layout>
);

export default Contact;
