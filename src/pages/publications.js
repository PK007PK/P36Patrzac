import React, { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import CardLibrary from "../contentComponents/CardLibrary";
import LocalLayout from "../components/LocalLayout";
import CardPost from "../components/CardPost";
import Divider from "../contentComponents/Divider";
import SEO from "../components/SEO";

// Data
import HeadingText from "../contentComponents/PublicationsHeadingText";

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
      isdark={location && location.state && location.state.isdark}
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
