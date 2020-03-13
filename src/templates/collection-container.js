import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AvailablePostTemplate from "./available-post";

export default () => {
  const data = useStaticQuery(graphql`
    query availableCollectionQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "available-post" } } }
      ) {
        edges {
          node {
            html
            frontmatter {
              name
              description
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 240, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              dob
            }
          }
        }
      }
    }
  `);

  console.log(data);
  return (
    <Layout navbarBackground="#032108">
      <div className="collection-container">
        <h1>Collection</h1>
        <div className="post-container">
          {data.allMarkdownRemark.edges.map(post => (
            <AvailablePostTemplate
              name={post.node.frontmatter.name}
              content={post.node.frontmatter.description}
              dob={post.node.frontmatter.dob}
              image={post.node.frontmatter.featuredimage}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query AvailablePostsPage {
//     allMarkdownRemark(
//       filter: { frontmatter: { templateKey: { eq: "available-post" } } }
//     ) {
//       edges {
//         node {
//           html
//           frontmatter {
//             name
//             description
//             featuredimage {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             dob
//           }
//         }
//       }
//     }
//   }
// `;
