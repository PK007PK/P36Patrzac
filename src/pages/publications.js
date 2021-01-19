import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";

// Data
import HeadingText from "../contentComponents/publicationsHeadingText";

const Publications = ({ data, location }) => {
  const background = data.backgroundImage.childImageSharp.fluid;
  return (
    <Layout dark={location && location.state && location.state.dark}>
      <Header background={background} leftColumnContent={HeadingText} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "publications2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 354) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Publications;
