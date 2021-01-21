import React, { useEffect, useState } from "react";
import Image from "gatsby-image";

import Layout from "../components/layout";
import Header from "../components/header";
import Logo from "../components/logo";

import LocalLayout from "../components/localLayout";

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
        // oups! something went wrong
        return;
      }

      const posts = await response.json();
      setPosts(posts);
    }

    loadPosts();
  }, []);
  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;
  const LibraryInfo = ({ img }) => <Image fluid={img} />;
  return (
    <Layout dark={location && location.state && location.state.dark}>
      <Header background={background} leftColumnContent={HeadingText} />
      <div className="container">
        <div className="d-flex justify-content-center">
          <Logo className="text-center" style={{ margin: "75px 0" }} />
        </div>
        <LocalLayout
          className="my-5"
          leftSize="5"
          rightSize="4"
          leftColumnContent={() => (
            <>
              {posts.map((post, index) => (
                <div className="card w-100 mb-3" key={index}>
                  <div className="card-body">
                    <h3
                      className="card-title"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    ></h3>

                    <p
                      className="card-text"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered,
                      }}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
          rightColumnContent={() => <Image fluid={library} />}
        />
      </div>
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
