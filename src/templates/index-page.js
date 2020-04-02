import React, { useState } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import DownArrow from "../img/DownArrow.png";
import { useEffect } from "react";

export const IndexPageTemplate = ({ image, title, heading, subheading }) => {
  return (
    <div>
      <div className="index-page">
        <div className="overlay"></div>
        <div
          className="showcase-image"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
            backgroundSize: "cover"
          }}
        >
          <p className="caption">{subheading}</p>
        </div>
        <div className="slogan">
          <h1>{title}</h1>
          <h3>{heading}</h3>
        </div>
        <div className="down-arrow">
          <p>Scroll down to see more!</p>
          <img src={DownArrow} alt="" />
        </div>
      </div>
      <div className="content">
        <section className="testimonials">
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
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  const [height, setHeight] = useState(0);

  const [scrolled, setScrolled] = useState();

  useEffect(_ => {
    setHeight(window.innerHeight);
    const handleScroll = _ => {
      if (window.pageYOffset > height + 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return _ => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout navbarBackground={scrolled ? "#032108" : "transparent"}>
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
      frontmatter: PropTypes.object
    })
  })
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
