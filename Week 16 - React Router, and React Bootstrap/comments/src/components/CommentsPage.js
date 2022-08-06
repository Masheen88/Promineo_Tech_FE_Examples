import React, { useState, useEffect } from "react";
import commentsAPI from "./rest_api/mainAPI";
import CommentsForm from "./CommentsForm";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const resp = await commentsAPI.getComments(); //get comments from API
      setComments(resp); //update state on CommentsPage
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  const deleteComment = async (event) => {
    event.preventDefault(); //prevent page from refreshing
    const deleteButtonId = event.target.value; //get comment value from form
    commentsAPI.deleteComment(deleteButtonId).then((response) => {
      setComments([response]); //update state on CommentsPage
      getComments(); //get new list of comments
    });
  };

  //useEffect to get initial list of comments on page load
  useEffect(() => {
    getComments(); //get initial list of comments
  }, []); //empty array means only run once on page load

  // returns a list of comments
  return (
    <div className="commentsPage">
      <h1>Comments</h1>
      {/* pass setComments to CommentsForm */}
      <CommentsForm setComments={setComments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            ID: {comment.id} - Name: {comment.name}{" "}
            {/* pass comment id to deleteComment */}
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
