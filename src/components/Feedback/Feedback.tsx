import { FeedbackProps } from "./types";
import Button from "../Button/Button";
import {
  FeedbackComponent,
  FeedbackResultComponent,
  LikeDislikeComponent,
  Fontesult,
} from "./styles";

function Feedback(
  {countLike, 
  countDislike, 
  onLike, 
  onDislike, 
  onReset}: FeedbackProps
) {
  

  return (
    <FeedbackComponent>
      <FeedbackResultComponent>
        <LikeDislikeComponent>
          <Fontesult>{countLike}</Fontesult>
          <Button name="LIKE" onButtonClick={onLike} />
        </LikeDislikeComponent>
        <LikeDislikeComponent>
          <Button name="DISLIKE" onButtonClick={onDislike} />
          <Fontesult>{countDislike}</Fontesult>
        </LikeDislikeComponent>
      </FeedbackResultComponent>
      <Button name="RESET RESULT" onButtonClick={onReset} />
    </FeedbackComponent>
  );
}

export default Feedback;
