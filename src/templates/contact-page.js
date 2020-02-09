import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ContactPageTemplate = ({
  title,
  phoneNumber,
  email,
  description,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="contact-page">
      <div className="left-column">
        <div className="greeting">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="form-box">
          <div className="input-group">
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" />
          </div>
          <div className="input-group">
            <label htmlFor="emial">EMAIL</label>
            <input type="text" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="" cols="30" rows="10"></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </div>
      </div>

      <div className="right-column">
        <div className="contact-type">
          <h3>EMAIL</h3>
          <p>{email}</p>
        </div>
        <div className="contact-type">
          <h3>TELEPHONE</h3>
          <p>{phoneNumber}</p>
        </div>
        <div className="contact-type">
          <h3>SOCIAL MEDIA</h3>
          <h5>Link here..</h5>
          <h5>Link here..</h5>
          <h5>Link here..</h5>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout navbarBackground="#032108">
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        phoneNumber={post.frontmatter.phoneNumber}
        email={post.frontmatter.email}
        content={post.html}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        phoneNumber
        email
        description
      }
    }
  }
`;
