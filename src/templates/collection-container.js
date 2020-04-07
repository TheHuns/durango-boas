import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import CollectionPostTemplate from "./collection-post";
import { Link } from "gatsby";
import { SidebarNav } from "../components/SidebarNav";
import DetailModal from "../components/DetailModal";
import TypeSectionCollection from "../components/TypeSectionCollection";

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
                  fluid(maxWidth: 640, quality: 100) {
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

  const getArray = (name) => {
    return data.allMarkdownRemark.edges.filter(
      (item) => item.node.frontmatter.genetics == name
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
      dob,
    });
  };

  const showDetailModal = () => {
    return <DetailModal setModal={setModalOpen} details={detailInfo} />;
  };

  return (
    <Layout navbarBackground="#670700" currentPage=" Our Collection">
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
          <TypeSectionCollection
            title="Wild Type"
            typeArray={getArray("wild-type")}
            id="wild-type"
            setDetailsAndOpen={setDetailsAndOpen}
          />
          <TypeSectionCollection
            title="Hypo"
            typeArray={getArray("hypo")}
            id="hypo"
            setDetailsAndOpen={setDetailsAndOpen}
          />

          <TypeSectionCollection
            title="T +"
            typeArray={getArray("t+")}
            id="t+"
            setDetailsAndOpen={setDetailsAndOpen}
          />

          <TypeSectionCollection
            title="T -"
            typeArray={getArray("t-")}
            id="t-"
            setDetailsAndOpen={setDetailsAndOpen}
          />

          <TypeSectionCollection
            title="Pied"
            typeArray={getArray("pied")}
            id="pied"
            setDetailsAndOpen={setDetailsAndOpen}
          />

          <TypeSectionCollection
            title="Xanthic"
            typeArray={getArray("xanthic")}
            id="xanthic"
            setDetailsAndOpen={setDetailsAndOpen}
          />
        </div>
      </div>
    </Layout>
  );
};
