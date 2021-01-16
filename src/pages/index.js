import * as React from "react";
import Image from "gatsby-image";
import Header from "../components/header";
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import LocalLayout from "../components/localLayout";
import IndexText from "../contentComponents/indexText";
import IndexButtons from "../contentComponents/indexButtons";
import Layout from "../components/layout";
import Logo from "../components/logo";

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
      <div className="d-flex justify-content-center">
        <Logo className="text-center" style={{ margin: "75px 0" }} />
      </div>
      <section>
        <LocalLayout
          style={{ marginTop: "200px" }}
          className="my-5"
          leftSize="3"
          rightSize="6"
          leftColumnContent={() => (
            <div className="card">
              <Image fluid={face} className="card-img" />
            </div>
          )}
          rightColumnContent={() => (
            <>
              <IndexButtons className="mb-3" />
              <IndexText />
            </>
          )}
        />
      </section>
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
  }
`;

export default IndexPage;
