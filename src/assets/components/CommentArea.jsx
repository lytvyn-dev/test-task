import { useEffect, useState } from "react";
import styles from "./CommentArea.module.css";

function CommentArea({ onGetData }) {
  const [areaText, setAreaText] = useState("");

  const changeAreaHandler = (event) => {
    const userText = event.target.value;
    setAreaText(userText);
    localStorage.setItem("comment", userText);
  };

  useEffect(() => {
    const comment = localStorage.getItem("comment");
    if (comment) setAreaText(comment);
  }, []);

  const addComment = async () => {
    //* send data up
    const commentText = localStorage.getItem("comment");
    const data = { body: commentText, id: Math.random() * 1000, user: { username: "Guest" } };
    onGetData(data);
    setAreaText("");
    localStorage.removeItem("comment");
  };

  return (
    <div className={styles.form}>
      <textarea
        onChange={changeAreaHandler}
        className={styles["text-area"]}
        name="comment"
        id="comment"
        placeholder="Start typing..."
        cols="30"
        rows="10"
        value={areaText}
      ></textarea>
      <button onClick={addComment} className={styles.button}>
        Send
      </button>
    </div>
  );
}

export default CommentArea;
