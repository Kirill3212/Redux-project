import React from "react";
import { useState } from "react";
import SingleComment from "./SingleComment";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  //   console.log("comments props >>", props);

  const handleInput = (e) => {
    console.log("input >>>>>", e.target.value);
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textComment", textComment);
  };

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input
          type="text"
          className="comments-input-field"
          placeholder="Type in..."
          value={textComment}
          onChange={handleInput}
        ></input>
        <input type="submit" hidden></input>
      </form>
      <SingleComment></SingleComment>
    </div>
  );
};

export default Comments;
