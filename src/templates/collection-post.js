import React from "react";
import PropTypes from "prop-types";
import * as dateformat from "dateformat";

const CollectionPostTemplate = ({
  name,
  salepending,
  dob,
  content,
  contentComponent,
  image,
  setModal,
  sex
}) => {
  const date = dateformat(dob, "mmmm dS, yyyy");
  return (
    <a
      id={name}
      className="collection-post"
      onClick={() => setModal(name, image, content, sex, dob)}
    >
      <div
        className="feature-image"
        style={{
          backgroundImage: `url(${image.childImageSharp.fluid.src})`
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
    </a>
  );
};

CollectionPostTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

export default CollectionPostTemplate;
