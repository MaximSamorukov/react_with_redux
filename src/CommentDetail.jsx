import React from "react";

const Comment = ({ comments, name, text }) => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src="" alt="some img" />
      </a>
      <div className="content">
        <a className="author">{name}</a>
        <div className="metadata">
          <span className="date">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="text">
          {text}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
      {comments && (
        <div className="comments">
          {comments}
        </div>)}
    </div>
  )
};

export default Comment;
