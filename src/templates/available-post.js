import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

const AvailablePostTemplate = ({
  name,
  salepending,
  dob,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="post">
      <h2>{name}</h2>
      <p>Date of Birth: {dob}</p>
      <p>About: {content}</p>
    </section>
  );
};

AvailablePostTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default AvailablePostTemplate;
