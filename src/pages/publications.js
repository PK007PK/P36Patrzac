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
      posts.length = 3;
      setPosts(posts);
    }

    loadPosts();
  }, []);

  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;

  return (
    <Layout isdark={location?.state?.isdark} location={location}>
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
            {" "}
            {posts.length === 0 ? (
              <div className="d-flex justify-content-center">
                <div
                  className="spinner-border"
                  style={{ width: "3rem", height: "3rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : null}
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
    backgroundImage: file(relativePath: { eq: "lamp.jpg" }) {
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
