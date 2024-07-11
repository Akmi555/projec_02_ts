import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";

function Feedback() {
  const [countLike, setLikeCount] = useState(0);
  const [countDislike, setDislikeCount] = useState(0);

  const onLikeClick = (): void => {
    setLikeCount((prevValue) => prevValue + 1);
  };  

  const onDislikeClick = (): void => {
    setDislikeCount((prevValue) => prevValue + 1);
  };
  const onResetResults = (): void => {
    setLikeCount(0);
    setDislikeCount(0);
  };


  return (
    <div className="feedback-component">
      <div className="feedback-result-component">
        <div className="like-dislike-component">
          <div className="fesult">{countLike}</div>
          <Button name="LIKE" onButtonClick={onLikeClick} />
        </div>
        <div className="like-dislike-component">
          <Button name="DISLIKE" onButtonClick={onDislikeClick} />
          <div className="fesult">{countDislike}</div>
        </div>
      </div>

      <div>
        <Button name="RESET RESULT" onButtonClick={onResetResults} />
      </div>
    </div>
  );
}

export default Feedback;
