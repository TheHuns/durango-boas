import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { navigate } from "@reach/router";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Logo from "../img/Logo_full.png";
import { useEffect } from "react";

export const IndexPageTemplate = ({ image, title, heading, subheading }) => {
  const clickHandler = () => {
    navigate("#testimonials");
  };

  return (
    <div>
      <div className="index-page">
        <div className="overlay"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="showcase-image"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: "cover",
          }}
        >
          <p className="caption"> - {subheading}</p>
          <p style={{ position: "absolute", top: "2%", right: "0" }}>
            The image here could be a single image or roll through a few images.
          </p>
        </motion.div>
        <div className="slogan">
          <motion.img
            initial={{ y: "-300px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src={Logo}
            alt=""
          />
          <motion.div
            initial={{ x: "-400px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text"
          >
            <h1>{title}</h1>
            <p>
              {heading} Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum quo officiis facilis fugit possimus eos aut obcaecati
              atque sequi libero.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: "300px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="show-more-button"
            onClick={() => clickHandler()}
          >
            See more about us!
          </motion.div>
        </div>
      </div>
      <div className="content">
        <section className="testimonials" id="testimonials">
          <h3>Testimonials</h3>
        </section>
        <section className="testimonials">
          <h3>Stories/Blog</h3>
        </section>
        <section className="testimonials">
          <h3>About us/Our procedures</h3>
        </section>
      </div>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const [height, setHeight] = useState(0);

  const [scrolled, setScrolled] = useState();

  useEffect((_) => {
    setHeight(window.innerHeight);
    const handleScroll = (_) => {
      if (window.pageYOffset > height + 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return (_) => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout navbarBackground={"#670700"}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`;
