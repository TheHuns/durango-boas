import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import AvailablePostTemplate from "./available-post";
import { SidebarNav } from "../components/SidebarNav";
import { Link } from "gatsby";
import { navigate } from "@reach/router";
import DetailModal from "../components/DetailModal";

export default () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

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
              parentgenetics
              sex
              mothername
              fathername
              price
            }
          }
        }
      }
    }
  `);

  const getArray = name => {
    return data.allMarkdownRemark.edges.filter(
      item => item.node.frontmatter.parentgenetics == name
    );
  };

  const clickHandler = section => {
    navigate(`/collection-container#${section}`);
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

      <div className="available-summary">
        <SidebarNav currentPage="available-summary" />
        <div className=""></div>
        <div>
          <h1>Available Animals</h1>
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
            <h2>
              Wild Type{" "}
              <span
                className="link-to-collection"
                onClick={() => clickHandler("wild-type")}
              >
                See Our Wild Type Collection
              </span>{" "}
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="hypo">
            <h2>
              Hypo
              <span
                className="link-to-collection"
                onClick={() => clickHandler("hypo")}
              >
                See Our Hypo Collection
              </span>
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t+" name="t+">
            <h2>
              T +
              <span
                className="link-to-collection"
                onClick={() => clickHandler("t+")}
              >
                See Our T + Collection
              </span>
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="t-">
            <h2>
              T -
              <span
                className="link-to-collection"
                onClick={() => clickHandler("t-")}
              >
                See Our T - Collection
              </span>
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="pied">
            <h2>
              Pied
              <span
                className="link-to-collection"
                onClick={() => clickHandler("pied")}
              >
                See Our Pied Collection
              </span>
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
                />
              ))}
            </div>
          </div>
          <div className="type-section" id="xanthic">
            <h2>
              Xanthic
              <span
                className="link-to-collection"
                onClick={() => clickHandler("xanthic")}
              >
                See Our Xanthic Collection
              </span>
            </h2>

            <div className="post-container">
              {data.allMarkdownRemark.edges.map(post => (
                <AvailablePostTemplate
                  name={post.node.frontmatter.name}
                  content={post.node.frontmatter.description}
                  dob={post.node.frontmatter.dob}
                  image={post.node.frontmatter.featuredimage}
                  mothername={post.node.frontmatter.mothername}
                  fathername={post.node.frontmatter.fathername}
                  sex={post.node.frontmatter.sex}
                  price={post.node.frontmatter.price}
                  setModal={setDetailsAndOpen}
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
