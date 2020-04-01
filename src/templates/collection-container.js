import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import CollectionPostTemplate from "./collection-post";
import { Link } from "gatsby";
import { SidebarNav } from "../components/SidebarNav";
import DetailModal from "../components/DetailModal";

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  const data = useStaticQuery(graphql`
    query collectionPostQuery {
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

  const setDetailsAndOpen = (name, image, content, price, sex, dob) => {
    setModalOpen(true);
    setDetailInfo({
      name,
      image,
      content,
      price,
      sex,
      dob
    });
  };

  const showDetailModal = () => {
    return <DetailModal setModal={setModalOpen} details={detailInfo} />;
  };

  return (
    <Layout navbarBackground="#032108">
      {modalOpen ? showDetailModal() : null}
      <div className="collection-container">
        <SidebarNav currentPage="/collection-container" />
        <div>
          <h1>Collection</h1>
          <div className="horizontal-scroll">
            <p>Jump To...</p>
            <ul>
              <li>
                <Link to="#wild-type">Wild Type</Link>
              </li>
              <li>
                <Link to="#hypo">Hypo</Link>
              </li>
              <li>
                <Link to="#t+">T +</Link>
              </li>
              <li>
                <Link to="#t-">T -</Link>
              </li>
              <li>
                <Link to="#pied">Pied</Link>
              </li>
              <li>
                <Link to="#xanthic">Xanthic</Link>
              </li>
            </ul>
          </div>
          <div className="type-section" id="wild-type">
            <h2>Wild Type</h2>

            <div className="post-container">
              {getArray("wild-type").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="hypo">
            <h2>Hypo</h2>

            <div className="post-container">
              {getArray("hypo").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t+" name="t+">
            <h2>T +</h2>

            <div className="post-container">
              {getArray("t+").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t-">
            <h2>T -</h2>

            <div className="post-container">
              {getArray("t-").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="pied">
            <h2>Pied</h2>

            <div className="post-container">
              {getArray("pied").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="xanthic">
            <h2>Xanthic</h2>

            <div className="post-container">
              {getArray("xanthic").map((post, index) => (
                <CollectionPostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  setModal={setDetailsAndOpen}
                  key={index}
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
