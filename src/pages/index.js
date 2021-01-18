import React from "react";
import Image from "gatsby-image";

import Layout from "../components/layout";
import Header from "../components/header";
import LocalLayout from "../components/localLayout";
import Logo from "../components/logo";

//Content
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import AllIndexButtons from "../contentComponents/allIndexButtons";
import IndexAboutMe from "../contentComponents/indexAboutMe";
import IndexHowICanHelp from "../contentComponents/indexHowICanHelp";
import IndexTherapyDetails from "../contentComponents/indexTherapyDetails";

//Data
import { indexButtonsData } from "../data/indexButtonsData";

class IndexPage extends React.Component {
  state = { activeTxt: "about" };

  handleButton = (id) => {
    this.setState(() => ({ activeTxt: id }));
  };

  render() {
    const background = this.props.data.backgroundImage.childImageSharp.fluid;
    const face = this.props.data.face.childImageSharp.fluid;

    const selectedContent = () => {
      switch (this.state.activeTxt) {
        case indexButtonsData[0].name:
          return <IndexAboutMe />;
        case indexButtonsData[1].name:
          return <IndexHowICanHelp />;
        case indexButtonsData[2].name:
          return <IndexTherapyDetails />;
        default:
          return <IndexAboutMe />;
      }
    };

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
                <AllIndexButtons
                  data={indexButtonsData}
                  fn={this.handleButton}
                  active={this.state.activeTxt}
                />
              </>
            )}
            rightColumnContent={selectedContent}
          />
        </section>
      </Layout>
    );
  }
}

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
