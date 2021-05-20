import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import LocalLayout from "../components/LocalLayout";
import Divider from "../contentComponents/Divider";
import SEO from "../components/SEO";
import Card from "../components/Card";

//Content
import IndexHeadingTexts from "../contentComponents/IndexHeadingTexts";
import IndexAboutMe from "../contentComponents/IndexAboutMe";
import IndexHowICanHelp from "../contentComponents/IndexHowICanHelp";
import IndexTherapyDetails from "../contentComponents/IndexTherapyDetails";
import Talia from "../contentComponents/CardTalia";

const IndexPage = ({ data, location }) => {
  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;
  const face = data.face.childImageSharp.fluid;

  return (
    <Layout isdark={location?.state?.isdark} location={location}>
      <SEO title="Strona Główna" lang="pl" description="`Urszula Krasny. Terapeutka i counsellorką Gestalt oraz autorka Talii Ja-Ty. Konsultacje terapeutyczne w gabinecie w Krakowie oraz online"/>
      <Header background={background} leftColumnContent={IndexHeadingTexts} />
      <Divider />
      <LocalLayout
        leftSize="6"
        rightSize="3"
        leftColumnContent={() => (
          <>
            <IndexAboutMe />
            <IndexHowICanHelp />
            <IndexTherapyDetails />
          </>
        )}
        rightColumnContent={() => (
          <>
            <Card fluid={face} title="Urszula Krasny" alt="Urszula Krasny" />
            <Card
              fluid={library}
              title="Biblioteka Gestalt"
              alt="Urszula Krasny"
              link="http://bibliotekagestalt.pl/"
              style={{ margin: "50px 0" }}
            />

            <Talia style={{ margin: "50px 0" }} />
          </>
        )}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "slonce2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 354) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    face: file(relativePath: { eq: "ula2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 259) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    libraryImage: file(relativePath: { eq: "library.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 354) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
