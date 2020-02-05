import React from "react";
import PropTypes from "prop-types";
import AvalablePostTemplate from "../../templates/available-post";

const AvalablePostPreview = ({ entry, widgetFor }) => (
  <AvalablePostTemplate
    name={entry.getIn(["data", "title"])}
    dob={widgetFor("datetime")}
    content={widgetFor("body")}
  />
);

AvalablePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AvalablePostPreview;
