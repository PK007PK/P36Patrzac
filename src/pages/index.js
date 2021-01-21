import React from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import LocalLayout from "../components/localLayout";
import Divider from "../contentComponents/divider";

//Content
import IndexHeadingTexts from "../contentComponents/indexHeadingTexts";
import AllIndexButtons from "../contentComponents/allIndexButtons";
import IndexAboutMe from "../contentComponents/indexAboutMe";
import IndexHowICanHelp from "../contentComponents/indexHowICanHelp";
import IndexTherapyDetails from "../contentComponents/indexTherapyDetails";
import CardLibrary from "../contentComponents/cardLibrary";
import CardTalia from "../contentComponents/cardTalia";

//Data
import { indexButtonsData } from "../data/indexButtonsData";

class IndexPage extends React.Component {
  state = { isMounted: false, activeTxt: "O mnie" };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 500);
  }

  handleButton = (id) => {
    this.setState(() => ({ activeTxt: id }));
  };

  render() {
    const background = this.props.data.backgroundImage.childImageSharp.fluid;
    const library = this.props.data.libraryImage.childImageSharp.fluid;

    const SelectedContent = () => {
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
      <Layout
        dark={
          this.props.location &&
          this.props.location.state &&
          this.props.location.state.dark
        }
      >
        <Header background={background} leftColumnContent={IndexHeadingTexts} />
        <Divider />
        <LocalLayout
          leftSize="6"
          rightSize="3"
          leftColumnContent={() => (
            <>
              <AllIndexButtons
                data={indexButtonsData}
                fn={this.handleButton}
                active={this.state.activeTxt}
              />
              <SelectedContent />
            </>
          )}
          rightColumnContent={() => (
            <>
              <CardLibrary fluid={library} />
              <CardTalia />
            </>
          )}
        />
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
