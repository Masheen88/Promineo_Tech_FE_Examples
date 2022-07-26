import commentsAPI from "./rest_api/mainAPI";

//export comments form
export default function CommentsForm({ setComments }) {
  // On submit of form, post comment to API and get new list of comments
  const handleSubmit = (event) => {
    event.preventDefault(); //prevent page from refreshing
    const comment = event.target.comment.value; //get comment value from form

    console.log("myComment:", comment);

    postComment(comment); //post comment to API

    event.target.comment.value = ""; //clears the form

    // wait for postCommmment to finish
    setTimeout(() => {
      console.log("test");
      getComments(); //get new list of comments
    }, 125); //wait 500ms before getting new list of comments
  };

  //get comments and update state
  const getComments = async () => {
    console.log("getComments"); //console to check if function is running
    try {
      const resp = await commentsAPI.getComments();
      setComments(resp); //update state on CommentsPage
    } catch (error) {
      console.log("Oh no! There was an error with getting your review.", error);
    }
  };

  // handleSubmit post comment
  const postComment = async (comment) => {
    try {
      const response = await commentsAPI.postComment(comment); //post comment to API
      console.log("postComment response:", response); //console to check if comment was posted
    } catch (error) {
      console.log("Oh no! There was an error with adding a review.", error);
    }
  };

  return (
    <div className="commentsForm">
      <h1>Add a Comment</h1>
      {/* on submit of form call handleSubmit */}
      <form onSubmit={handleSubmit}>
        <label>
          Comment:&nbsp;
          <input type="text" name="comment" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
