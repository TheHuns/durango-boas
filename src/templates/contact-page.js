import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Facebook from "../img/Facebook.js";
import Instagram from "../img/Instagram.js";
import Twitter from "../img/Twitter.js";

export const ContactPageTemplate = ({
  title,
  phoneNumber,
  email,
  description,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="contact-page">
      <div className="left-column">
        <div className="greeting">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <form
          className="form-box"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-group">
            <label htmlFor="name">
              NAME
              <input type="text" name="name" placeholder="enter name.." />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="email">
              EMAIL
              <input type="email" name="email" placeholder="enter email.." />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="message">
              MESSAGE{" "}
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="message.."
              ></textarea>
            </label>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
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
        <div className="contact-type social-media">
          <h3>SOCIAL MEDIA</h3>
          <Link to="/">
            <svg height="24" width="24">
              <Facebook />
            </svg>
            Facebook
          </Link>
          <Link to="/">
            <svg height="24" width="24">
              <Instagram />
            </svg>
            Instagram
          </Link>
          <Link to="/">
            <svg height="24" width="24">
              <Twitter />
            </svg>
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout navbarBackground="#2a2a2a">
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
  data: PropTypes.object.isRequired,
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
