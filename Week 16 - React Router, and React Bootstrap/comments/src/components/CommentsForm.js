import React, { useCallback } from "react";
import commentsAPI from "./rest_api/mainAPI";

//export comments form
export default function CommentsForm(onCommentChange) {
  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    console.log("myComment:", comment);
    postComment(comment);
  };

  //useCallback to update onCommentChange state
  const postComment = useCallback(
    async (comment) => {
      try {
        const resp = await commentsAPI.postComment(comment);
        console.log("resp:", resp);
        const getResp = await commentsAPI.getComments();
        console.log("getResp:", getResp);
        return (onCommentChange = getResp);
      } catch (error) {
        console.log(
          "Oh no! There was an error with posting your review.",
          error
        );
      }
    },
    [onCommentChange]
  );

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
