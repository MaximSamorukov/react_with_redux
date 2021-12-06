import React from "react";
import './CommentDetail.css';

const Comment = ({ comments, name, text }) => {

  return (
    <>
      <div className="box">
        <div className="box green">Green</div>
        <div className="box red">Red</div>
      </div>
      <div className="otherbox">
        <div className="otherbox green">Green</div>
        <div className="otherbox red">Red</div>
      </div>
    </>
  )
};

export default Comment;
