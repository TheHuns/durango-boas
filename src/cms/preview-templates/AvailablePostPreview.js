import React from "react";
import PropTypes from "prop-types";
import AvalablePostTemplate from "../../templates/available-post";

const AvalablePostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <AvalablePostTemplate
        image={data.image}
        name={data.name}
        dob={data.dob}
        content={data.content}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

AvalablePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default AvalablePostPreview;
