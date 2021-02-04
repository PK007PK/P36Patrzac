import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import CardLibrary from "../contentComponents/cardLibrary";
import LocalLayout from "../components/localLayout";
import CardPost from "../components/cardPost";
import Divider from "../contentComponents/divider";
import SEO from "../components/seo";
// Data
import HeadingText from "../contentComponents/publicationsHeadingText";

const Publications = ({ data, location }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function loadPosts() {
      const response = await fetch(
        "http://bibliotekagestalt.pl//wp-json/wp/v2/posts"
      );
      if (!response.ok) {
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);
  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;

  return (
    <Layout
      dark={location && location.state && location.state.dark}
      location={location}
    >
      {" "}
      <SEO title="Publikacje" lang="pl" />
      <Header background={background} leftColumnContent={HeadingText} />
      <Divider />
      <LocalLayout
        className=""
        leftSize="6"
        rightSize="3"
        leftColumnContent={() => (
          <>
            {posts.map((post, index) => (
              <CardPost className="mb-5" post={post} key={index} />
            ))}
          </>
        )}
        rightColumnContent={() => <CardLibrary fluid={library} />}
      />
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
    libraryImage: file(relativePath: { eq: "library.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 354) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Publications;
