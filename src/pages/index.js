import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import LocalLayout from "../components/localLayout";
import Divider from "../contentComponents/divider";
import CardImage from "../components/cardImage";
import SEO from "../components/seo";

//Content
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import IndexAboutMe from "../contentComponents/indexAboutMe";
import IndexHowICanHelp from "../contentComponents/indexHowICanHelp";
import IndexTherapyDetails from "../contentComponents/indexTherapyDetails";
import CardLibrary from "../contentComponents/cardLibrary";
import Talia from "../contentComponents/cardTalia";

const IndexPage = ({ data, location }) => {
  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;
  const face = data.face.childImageSharp.fluid;
  console.log(location);
  return (
    <Layout
      isdark={location && location.state && location.state.isdark}
      location={location}
    >
      <SEO title="Strona Główna" lang="pl" />
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
            <CardImage fluid={face} alt="Urszula Krasny" />
            <CardLibrary style={{ margin: "50px 0" }} fluid={library} />
            <Talia style={{ margin: "50px 0" }} />
          </>
        )}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "sun.jpg" }) {
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
