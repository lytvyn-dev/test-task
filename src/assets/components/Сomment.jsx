import { useState } from "react";
import styles from "./Comment.module.css";

function Comment({ text, user, id }) {
  const [comment, setComment] = useState(true);
  const firstTwoChars = user.slice(0, 2).toUpperCase();

  const deleteCommentHandler = () => {
    setComment((prevState) => !prevState);
  };

  return (
    comment && (
      <article className={styles.comment}>
        <div className={styles.userData}>
          <div className={styles["initials"]}>
            <p className={styles["initials__text"]}>{firstTwoChars}</p>
          </div>
          <h2 className={styles.fullName}>{user}</h2>
        </div>
        <div className={styles.feedback}>
          <p className={styles.text}>{text}</p>
        </div>

        <svg onClick={deleteCommentHandler} className={styles.close} viewBox="0 0 20 20">
          <path
            fill="black"
            d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
          ></path>
        </svg>
      </article>
    )
  );
}

export default Comment;
