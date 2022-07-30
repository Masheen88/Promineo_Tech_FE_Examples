import React, { useState, useEffect, useCallback } from "react";
import commentsAPI from "./rest_api/mainAPI";
import CommentsForm from "./CommentsForm";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  // get comments
  const getComments = async () => {
    try {
      const resp = await commentsAPI.getComments();
      setComments(resp);
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  //useEffect if commentsAPI length has changed
  useEffect(() => {
    // return only one comment
    getComments();
  }, [comments]);

  // get comments in return
  return (
    <div className="commentsPage">
      <h1>Comments</h1>
      <CommentsForm onCommentChange={setComments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsPage;
