import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AvailablePostTemplate from "./available-post";
import { SidebarNav } from "../components/SidebarNav";

export default () => {
  const data = useStaticQuery(graphql`
    query availablePostQuery {
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
      <div className="available-summary">
        <SidebarNav />
        <div className=""></div>
        <div>
          <h1>Available Animals</h1>
          <div className="horizontal-scroll">
            <p>Jump To...</p>
            <ul>
              <li>
                <a href="#wild-type">Wild Type</a>
              </li>
              <li>
                <a href="#hypo">Hypo</a>
              </li>
              <li>
                <a href="#t+">T +</a>
              </li>
              <li>
                <a href="#t-">T -</a>
              </li>
              <li>
                <a href="#pied">Pied</a>
              </li>
              <li>
                <a href="#xanthic">Xanthic</a>
              </li>
            </ul>
          </div>
          <div className="type-section" id="wild-type">
            <h2>Wild Type</h2>

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
          <div className="type-section" id="hypo">
            <h2>Hypo</h2>

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
          <div className="type-section" id="t+" name="t+">
            <h2>T +</h2>

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
          <div className="type-section" id="t-">
            <h2>T -</h2>

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
          <div className="type-section" id="pied">
            <h2>Pied</h2>

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
          <div className="type-section" id="xanthic">
            <h2>Xanthic</h2>

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
