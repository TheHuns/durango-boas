import React from "react";
import CollectionPostTemplate from "../templates/collection-post";

const TypeSectionCollection = ({ title, typeArray, setDetailsAndOpen, id }) => {
  return (
    <div className="type-section">
      <div className="space-holder" id={id}></div>
      <h2 className="title">
        {title}{" "}
        <span>
          <i> - Click or tap on image to see detailed view.</i>
        </span>
      </h2>

      <div className="post-container">
        {typeArray.map((post, index) => (
          <CollectionPostTemplate
            name={post.node.frontmatter.name}
            content={post.node.frontmatter.description}
            dob={post.node.frontmatter.dob}
            image={post.node.frontmatter.featuredimage}
            // sex={post.node.frontmatter.sex}
            setModal={setDetailsAndOpen}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TypeSectionCollection;
