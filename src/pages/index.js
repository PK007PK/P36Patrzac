import * as React from "react";
import Header from "../components/header";
import Navbar from "../components/navbar";
import IndexHeadingSign from "../contentComponents/indexHeadingSign";
import LocalLayout from "../components/localLayout";
import IndexText from "../contentComponents/indexText";
import IndexButtons from "../contentComponents/indexButtons";

const IndexPage = ({ data }) => {
  const HeroImg = data.placeholderImage.childImageSharp.fluid;

  return (
    <>
      <Navbar />
      <Header img={HeroImg} leftColumnContent={IndexHeadingSign} />
      <section>
        <div className="lead">
          <LocalLayout
            title={"W czym mogę Ci pomóc:"}
            leftColumnContent={IndexText}
            rightColumnContent={IndexButtons}
          />
        </div>
      </section>
    </>
  );
};

export const pageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "sun.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
