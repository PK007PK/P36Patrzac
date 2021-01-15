import * as React from "react";
import Header from "../components/header";
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import LocalLayout from "../components/localLayout";
import IndexText from "../contentComponents/indexText";
import IndexButtons from "../contentComponents/indexButtons";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const background = data.backgroundImage.childImageSharp.fluid;
  const face = data.face.childImageSharp.fluid;

  return (
    <Layout>
      <Header
        background={background}
        face={face}
        leftColumnContent={IndexHeadingTexts}
      />
      <section>
        <div className="lead">
          <LocalLayout
            title={"W czym mogę Ci pomóc:"}
            leftColumnContent={IndexText}
            rightColumnContent={IndexButtons}
          />
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "sun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    face: file(relativePath: { eq: "ula2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
