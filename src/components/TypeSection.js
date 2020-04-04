import React from "react";
import AvailablePostTemplate from "../templates/available-post";

export const TypeSection = ({
  title,
  linkDescription,
  typeArray,
  clickHandler,
  setDetailsAndOpen,
  id,
}) => {
  return (
    <div className="type-section" id={id}>
      <h2 className="title">
        {title}{" "}
        <span>
          <i> - Click or tap on image to see detailed view.</i>
        </span>
      </h2>
      <div
        className="link-to-collection"
        onClick={() => clickHandler("wild-type")}
      >
        <p>{linkDescription}</p>
      </div>

      <div className="post-container">
        {typeArray.map((post) => (
          <AvailablePostTemplate
            name={post.node.frontmatter.name}
            content={post.node.frontmatter.description}
            dob={post.node.frontmatter.dob}
            image={post.node.frontmatter.featuredimage}
            mothername={post.node.frontmatter.mothername}
            fathername={post.node.frontmatter.fathername}
            sex={post.node.frontmatter.sex}
            price={post.node.frontmatter.price}
            sold={post.node.frontmatter.sold}
            setModal={setDetailsAndOpen}
          />
        ))}
      </div>
    </div>
  );
};
