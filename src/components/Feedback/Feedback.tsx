import { useState } from "react";
import Button from "../Button/Button";
import{FeedbackComponent, 
  FeedbackResultComponent, 
  LikeDislikeComponent,
  Fontesult
} from "./styles";

function Feedback() {
  const [countLike, setLikeCount] = useState<number>(0);
  const [countDislike, setDislikeCount] = useState<number>(0);

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
    <FeedbackComponent>
      <FeedbackResultComponent>
        <LikeDislikeComponent>
          <div className="fesult">{countLike}</div>
          <Button name="LIKE" onButtonClick={onLikeClick} />
        </LikeDislikeComponent>
        <LikeDislikeComponent>
          <Button name="DISLIKE" onButtonClick={onDislikeClick} />
          <div className="fesult">{countDislike}</div>
        </LikeDislikeComponent>
      </FeedbackResultComponent>

      <div>
        <Button name="RESET RESULT" onButtonClick={onResetResults} />
      </div>
    </FeedbackComponent>
  );
}

export default Feedback;
