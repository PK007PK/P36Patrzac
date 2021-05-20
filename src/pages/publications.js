import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import Header from "../components/header";
import CardLibrary from "../contentComponents/cardLibrary";
import LocalLayout from "../components/localLayout";
import CardPost from "../components/cardPost";
import Divider from "../contentComponents/divider";
import SEO from "../components/seo";
import { api, endpoints } from '../api';

// Data
import HeadingText from "../contentComponents/publicationsHeadingText";

const Publications = ({ data, location }) => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function loadPosts() {
  //     const response = await fetch(
  //       "http://bibliotekagestalt.pl//wp-json/wp/v2/posts"
  //     );
  //     if (!response.ok) {
  //       return;
  //     }

  //     const posts = await response.json();
  //     posts.length = 3;
  //     setPosts(posts);
  //   }

  //   loadPosts();
  // }, []);

  useEffect(() => {
    api.get(endpoints.posts)
      .then(({ data }) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (data.length > 3) {data.length = 3};
        setPosts(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const background = data.backgroundImage.childImageSharp.fluid;
  const library = data.libraryImage.childImageSharp.fluid;

  return (
    <Layout isdark={location?.state?.isdark} location={location}>
      {" "}
      <SEO title="Publikacje" lang="pl" description="`Urszula Krasny. Publikacje. Terapeutka i counsellorką Gestalt oraz autorka Talii Ja-Ty. Konsultacje terapeutyczne w gabinecie w Krakowie oraz online"/>
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
    backgroundImage: file(relativePath: { eq: "sun.jpg" }) {
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
