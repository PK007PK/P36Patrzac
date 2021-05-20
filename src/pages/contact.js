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
  <Layout isdark={location?.state?.isdark}>
    <SEO title="Kontakt" lang="pl" description="`Urszula Krasny. Kontakt. Terapeutka i counsellorką Gestalt oraz autorka Talii Ja-Ty. Konsultacje terapeutyczne w gabinecie w Krakowie oraz online"/>
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
