import React from "react";
import { useState, useEffect } from "react";

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState("");
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <form className="comments-item">
      <div className="comments-item-delete">&times;</div>
      <input type="text" value={commentText} onChange={handleInput}></input>
      <input type="submit" hidden></input>
    </form>
  );
};

export default SingleComment;
