import React from "react";
import PropTypes from "prop-types";
import * as dateformat from "dateformat";

const AvailablePostTemplate = ({
  name,
  salepending,
  dob,
  content,
  contentComponent,
  image
}) => {
  const date = dateformat(dob, "mmmm dS, yyyy");
  return (
    <section className="post">
      <div
        className="feature-image"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,

          backgroundSize: "cover"
        }}
      ></div>
      <div className="info">
        <h2>
          <span className="label">Name:</span> {name}
        </h2>
        <p>
          <span className="label">Date of Birth:</span> {date}
        </p>
        <p>
          <span className="label">About:</span> {content}
        </p>
      </div>
    </section>
  );
};

AvailablePostTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default AvailablePostTemplate;
