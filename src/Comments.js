import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentCreate } from "./redux/actions";
import uniqid from "uniqid";
import SingleComment from "./SingleComment";

const Comments = (props) => {
  const [textComment, setTextComment] = useState("");
  const comments = useSelector((state) => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit textComment", textComment);
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
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
      {!!comments.length &&
        comments.map((res) => {
          return <SingleComment key={res.id} data={res}></SingleComment>;
        })}
    </div>
  );
};

export default Comments;
