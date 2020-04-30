import React from "react";
import PropTypes from "prop-types";
import * as dateformat from "dateformat";
import { navigate } from "@reach/router";

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
  price,
  setModal,
  sold,
}) => {
  const date = dateformat(dob, "mmmm dS, yyyy");

  const clickHandler = async (section) => {
    // let url = `http://localhost:8000/collection-container#${section}`;
    // await window.open(url, "_blank");
    navigate(`/collection-container#${section}`);
  };

  return (
    <div className="post">
      {sold === "true" ? <div className="sold-tag">SOLD</div> : null}
      <div
        title="Click image for more details"
        onClick={() => setModal(name, image, content, price, sex, dob)}
        className="feature-image"
        style={{
          backgroundImage: `url(${image.childImageSharp.fluid.src})`,
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
          <span
            style={{
              borderTop: "none",
              width: "fit-content",
              paddingRight: "5px",
            }}
          >
            M:{" "}
            <i
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(fathername)}
            >
              {fathername}
            </i>
          </span>
          <span style={{ borderTop: "none", display: "inline-block" }}>
            F:{" "}
            <i
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(mothername)}
            >
              {mothername}
            </i>
          </span>
        </p>
        <div className="about">
          <div className="dots">
            <a onClick={() => setModal(name, image, content, price, sex, dob)}>
              read more..
            </a>
          </div>
          <span className="label">About:</span> {content}
        </div>
        <p>
          <span className="label">Price: </span> ${price}
        </p>
      </div>
    </div>
  );
};

AvailablePostTemplate.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AvailablePostTemplate;
