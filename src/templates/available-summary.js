import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { SidebarNav } from "../components/SidebarNav";
import { Link } from "gatsby";
import { navigate } from "@reach/router";
import DetailModal from "../components/DetailModal";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeSection } from "../components/TypeSection";

export default () => {
  // State for Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [detailInfo, setDetailInfo] = useState({});

  // State to hold animal lists for individual traits
  const [xanthic, setXanthic] = useState(null);
  const [wildType, setWildType] = useState(null);
  const [hypo, setHypo] = useState(null);
  const [tplus, setTplus] = useState(null);
  const [tminus, settminus] = useState(null);
  const [pied, setPied] = useState(null);

  // Setup for motion draggable div phone menu
  const constraintsRef = useRef(null);
  const x = useMotionValue(1);
  const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
    clamp: false,
  });

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
                  fluid(maxWidth: 640, quality: 100) {
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

  const getArray = (name) => {
    let arr = null;

    let temp = data.allMarkdownRemark.edges.filter(
      (item) => item.node.frontmatter.parentgenetics === name
    );

    if (temp.length > 0) {
      arr = temp;
    }

    return arr;
  };

  const clickHandler = (section) => {
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
      dob,
    });
  };

  const showDetailModal = () => {
    return <DetailModal setModal={setModalOpen} details={detailInfo} />;
  };

  return (
    <Layout navbarBackground="#670700" currentPage={"Available"}>
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

        {/* <motion.div
          className="horizontal-scroll"
          ref={constraintsRef}
          // style={{
          //   rotateY
          // }}
        >
          <p>Jump To...</p>
          <motion.ul
            drag="x"
            dragConstraints={constraintsRef}
            style={{
              x,
            }}
          >
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
          </motion.ul>
        </motion.div> */}
        <div className="main-column">
          <h1>Available Animals</h1>

          {wildType && (
            <TypeSection
              title="Wild Type"
              linkDescription="Go to our Wild Type Collection"
              typeArray={wildType}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="wild-type"
            />
          )}
          {hypo && (
            <TypeSection
              title="Hypo"
              linkDescription="Go to our Hypo Collection"
              typeArray={hypo}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="hypo"
            />
          )}
          {tplus && (
            <TypeSection
              title="T +"
              linkDescription="Go to our T +  Collection"
              typeArray={tplus}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="t+"
            />
          )}
          {tminus && (
            <TypeSection
              title="T -"
              linkDescription="Go to our T - Collection"
              typeArray={tminus}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="t-"
            />
          )}
          {pied && (
            <TypeSection
              title="Pied"
              linkDescription="Go to our Pied Collection"
              typeArray={pied}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="pied"
            />
          )}
          {xanthic && (
            <TypeSection
              title="Xanthic"
              linkDescription="Go to our Xanthic Collection"
              typeArray={xanthic}
              clickHandler={clickHandler}
              setDetailsAndOpen={setDetailsAndOpen}
              id="xanthic"
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
