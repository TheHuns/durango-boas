import React from "react";
import PropTypes from "prop-types";
import * as dateformat from "dateformat";

import Male from "../img/MaleSymbol.png";
import Female from "../img/FemaleSymbol.png";

const AvailablePostTemplate = ({
  name,
  dob,
  content,
  image,
  mothername,
  fathername,
  sex,
  price
}) => {
  const date = dateformat(dob, "mmmm dS, yyyy");
  return (
    <section className="post">
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
        <img
          className="gender"
          src={sex == "M" ? Male : Female}
          alt="gender-symbol"
        />
        <p>
          <span className="label">Parents:</span>
          <p style={{ borderTop: "none", width: "fit-content" }}>
            M: {fathername}
          </p>
          <p style={{ borderTop: "none", display: "inline-block" }}>
            F: {mothername}
          </p>
        </p>
        <p>
          <span className="label">Date of Birth:</span> {date}
        </p>
        <p>
          <span className="label">About:</span> {content}
        </p>
        <p>
          <span className="label">Price: </span> ${price}
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
