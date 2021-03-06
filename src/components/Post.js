import React from "react";
import Newfeed from "./Newfeed";
import Stories from "./Stories";
import Whatson from "./Whatson";

function Post() {
  return (
    <div className="post">
      <Stories />
      <Whatson />
      <Newfeed />
    </div>
  );
}

export default Post;
