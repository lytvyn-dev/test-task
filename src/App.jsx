import { useEffect, useState } from "react";
import { Fragment } from "react";

import "./App.css";

import Comment from "./assets/components/Сomment";
import CommentArea from "./assets/components/CommentArea";

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/comments?limit=5");

      if (!response.ok) {
        throw new Error("Something were wrong! 💥");
      }

      const { comments } = await response.json();
      setComments(comments);
    };
    fetchData().catch((err) => console.error(err));
  }, []);

  //* getData to update comments
  const getNewCommentData = (data) => {
    console.log(data);
    setComments((prevState) => [...prevState, data]);
  };

  return (
    <Fragment>
      {comments.map((el) => (
        <Comment id={el.id} key={el.id} text={el.body} user={el.user.username} />
      ))}
      <CommentArea onGetData={getNewCommentData} />
    </Fragment>
  );
}

export default App;
