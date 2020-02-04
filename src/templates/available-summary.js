import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import AvailablePostTemplate from "./available-post";

const AvailablePostsPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  return (
    <Layout>
      <div className="available-summary">
        <h1>Available Animals</h1>
        <div className="post-container">
          {edges.map(post => (
            <AvailablePostTemplate
              name={post.node.frontmatter.name}
              content={post.node.frontmatter.description}
              dob={post.node.frontmatter.dob}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

AvailablePostsPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AvailablePostsPage;

export const pageQuery = graphql`
  query AvailablePostsPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "available-post" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            name
            description
          }
        }
      }
    }
  }
`;
