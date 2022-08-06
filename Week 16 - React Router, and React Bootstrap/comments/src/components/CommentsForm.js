import { useEffect } from "react";
import commentsAPI from "./rest_api/mainAPI";

//export comments form
export default function CommentsForm({ setComments }) {
  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    console.log("myComment:", comment);
    postComment(comment);
    // wait for postCommmment to finish
    setTimeout(() => {
      getComments();
    }, 1000);
  };

  //get comments and update state
  const getComments = async () => {
    console.log("getComments");
    try {
      const resp = await commentsAPI.getComments();
      setComments(resp);
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  // handleSubmit post comment
  const postComment = async (comment) => {
    try {
      const response = await commentsAPI.postComment(comment);
      console.log("postComment response:", response);
    } catch (error) {
      console.log("Oh no! There was an error with adding a review.", error);
    }
  };

  return (
    <div className="commentsForm">
      <h1>Add a Comment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:
          <input type="text" name="comment" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
