import React from "react";
import * as dateformat from "dateformat";

import Male from "../img/MaleSymbol.png";
import Female from "../img/FemaleSymbol.png";

const DetailModal = ({ setModal, details }) => {
  const date = dateformat(details.dob, "mmmm dS, yyyy");
  return (
    <div className="modal-overlay">
      <div className="detail-modal">
        <div className="header">
          <div style={{ display: "flex" }}>
            <h2>{details.name} </h2>
            <img
              className="gender"
              src={details.sex == "M" ? Male : Female}
              alt="gender-symbol"
            />
          </div>
          <button onClick={() => setModal(false)}>Close</button>
        </div>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${details.image.childImageSharp.fluid.src})`
          }}
        ></div>
        <div className="info">
          <p>
            <span className="label">About: </span>
            {details.content}
          </p>
          <p>
            <span className="label">D.O.B: </span>
            {date}
          </p>

          {details.price && (
            <p>
              <span className="label">Price: </span>${details.price}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
