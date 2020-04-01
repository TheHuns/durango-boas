import React from "react";
import PropTypes from "prop-types";
import CollectionPostTemplate from "../../templates/collection-post";
import Layout from "../../components/Layout";

const AvalablePostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <Layout>
        <CollectionPostTemplate
          image={data.image}
          name={data.name}
          dob={data.dob}
          content={data.content}
        />
      </Layout>
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
