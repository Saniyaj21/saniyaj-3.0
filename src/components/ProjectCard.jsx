import React from "react";
import Tags from "./Tags";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div>
        {item.id} {item.name}
      </div>

      <div className="tags">
      {item.tags.map((tag, index) => (
            <Tags key={index} tag={tag} />
            ))}
    </div>
    </>
  );
};

export default ProjectCard;
