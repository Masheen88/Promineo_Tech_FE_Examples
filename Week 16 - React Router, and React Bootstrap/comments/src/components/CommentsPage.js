import React, { useState, useEffect } from "react";
import commentsAPI from "./rest_api/mainAPI";
import CommentsForm from "./CommentsForm";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const resp = await commentsAPI.getComments();
      setComments(resp);
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  const deleteComment = async (event) => {
    event.preventDefault();
    const deleteButtonId = event.target.value;
    commentsAPI.deleteComment(deleteButtonId).then((response) => {
      setComments([response]);
      getComments();
    });
  };

  //useEffect to get initial list of comments on page load
  useEffect(() => {
    getComments();
  }, []);

  // returns a list of comments
  return (
    <div className="commentsPage">
      <h1>Comments</h1>
      <CommentsForm setComments={setComments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id + 1}>
            {comment.name}{" "}
            <button value={comment.id} onClick={deleteComment}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsPage;
