import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import CollectionPostTemplate from "./collection-post";
import { Link } from "gatsby";
import { SidebarNav } from "../components/SidebarNav";

import { navigate } from "@reach/router";

export default () => {
  const data = useStaticQuery(graphql`
    query availableCollectionQuery {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "collection-post" } } }
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
              genetics
            }
          }
        }
      }
    }
  `);

  const getArray = name => {
    return data.allMarkdownRemark.edges.filter(
      item => item.node.frontmatter.genetics == name
    );
  };

  return (
    <Layout navbarBackground="#032108">
      <div className="collection-container">
        <SidebarNav />
        <div className=""></div>
        <div>
          <h1>Collection</h1>
          <div className="horizontal-scroll">
            <p>Jump To...</p>
            <ul>
              <li>
                <Link href="#wild-type">Wild Type</Link>
              </li>
              <li>
                <Link href="#hypo">Hypo</Link>
              </li>
              <li>
                <Link href="#t+">T +</Link>
              </li>
              <li>
                <Link href="#t-">T -</Link>
              </li>
              <li>
                <Link href="#pied">Pied</Link>
              </li>
              <li>
                <Link href="#xanthic">Xanthic</Link>
              </li>
            </ul>
          </div>
          <div className="type-section" id="wild-type">
            <h2>Wild Type</h2>

            <div className="post-container">
              {getArray("wild-type").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="hypo">
            <h2>Hypo</h2>

            <div className="post-container">
              {getArray("hypo").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t+" name="t+">
            <h2>T +</h2>

            <div className="post-container">
              {getArray("t+").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t-">
            <h2>T -</h2>

            <div className="post-container">
              {getArray("t-").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="pied">
            <h2>Pied</h2>

            <div className="post-container">
              {getArray("pied").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="xanthic">
            <h2>Xanthic</h2>

            <div className="post-container">
              {getArray("xanthic").map(post => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                />
              ))}
            </div>
          </div>
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
