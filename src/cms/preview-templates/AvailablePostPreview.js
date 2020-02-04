import React from "react";
import PropTypes from "prop-types";
import { AvalablePostTemplate } from "../../templates/available-summary";

const AvalablePostPreview = ({ entry, widgetFor }) => (
  <AvalablePostTemplate
    name={entry.getIn(["data", "title"])}
    dob={widgetFor("datetime")}
    content={widgetFor("body")}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AvalablePostPreview;
