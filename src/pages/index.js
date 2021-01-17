import React from "react";
import Image from "gatsby-image";

import Layout from "../components/layout";
import Header from "../components/header";
import LocalLayout from "../components/localLayout";
import Logo from "../components/logo";

//Content
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import IndexButtons from "../contentComponents/indexButtons";
import IndexHowICanHelp from "../contentComponents/indexHowICanHelp";
import IndexTherapyDetails from "../contentComponents/indexTherapyDetails";
import IndexAboutMe from "../contentComponents/indexAboutMe";

const IndexPage = ({ data }) => {
  const background = data.backgroundImage.childImageSharp.fluid;
  const face = data.face.childImageSharp.fluid;

  return (
    <Layout>
      <Header background={background} leftColumnContent={IndexHeadingTexts} />
      <div className="d-flex justify-content-center">
        <Logo className="text-center" style={{ margin: "75px 0" }} />
      </div>
      <section>
        <LocalLayout
          className="my-5"
          leftSize="3"
          rightSize="6"
          leftColumnContent={() => (
            <>
              <div className="card">
                <Image fluid={face} className="card-img" />
              </div>
              <IndexButtons />
            </>
          )}
          rightColumnContent={() => <IndexAboutMe />}
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
