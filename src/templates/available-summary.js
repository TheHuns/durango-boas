import React, { useState, useEffect } from "react";
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
  const [xanthic, setXanthic] = useState(null);
  const [wildType, setWildType] = useState(null);
  const [hypo, setHypo] = useState(null);
  const [tplus, setTplus] = useState(null);
  const [tminus, settminus] = useState(null);
  const [pied, setPied] = useState(null);

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
              sold
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    setXanthic(getArray("xanthic"));
    setWildType(getArray("wild-type"));
    setHypo(getArray("hypo"));
    settminus(getArray("t-"));
    setTplus(getArray("t+"));
    setPied(getArray("pied"));
  }, []);

  const getArray = name => {
    let arr = null;

    let temp = data.allMarkdownRemark.edges.filter(
      item => item.node.frontmatter.parentgenetics === name
    );

    if (temp.length > 0) {
      arr = temp;
    }

    return arr;
  };
  // const getAvailTypes = () => {
  //   const typeArray = ["xanthic", "pied", "t+", "t-", "wild-type", "hypo"];

  //   typeArray.forEach(name => {
  //     let temp = data.allMarkdownRemark.edges.filter(
  //       item => item.node.frontmatter.parentgenetics === name
  //     );

  //     if (temp.length > 0) {
  //       setAvailTypes({ [name]: true });
  //     }
  //   });
  //   console.log(availTypes);
  // };

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
        <SidebarNav
          currentPage="/available-summary"
          xanthic={xanthic}
          wildType={wildType}
          hypo={hypo}
          tplus={tplus}
          tminus={tminus}
          pied={pied}
        />

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
          {wildType && (
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
                {wildType.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
          {hypo && (
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
                {hypo.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
          {tplus && (
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
                {tplus.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
          {tminus && (
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
                {tminus.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
          {pied && (
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
                {pied.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
          {xanthic && (
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
                {xanthic.map(post => (
                  <AvailablePostTemplate
                    name={post.node.frontmatter.name}
                    content={post.node.frontmatter.description}
                    dob={post.node.frontmatter.dob}
                    image={post.node.frontmatter.featuredimage}
                    mothername={post.node.frontmatter.mothername}
                    fathername={post.node.frontmatter.fathername}
                    sex={post.node.frontmatter.sex}
                    price={post.node.frontmatter.price}
                    sold={post.node.frontmatter.sold}
                    setModal={setDetailsAndOpen}
                  />
                ))}
              </div>
            </div>
          )}
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
