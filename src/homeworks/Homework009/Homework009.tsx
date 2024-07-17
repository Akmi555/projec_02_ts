import { Homework009Component } from "./styles";
import { useState } from "react";
import Feedback from "../../components/Feedback/Feedback";
import ResultBlock from "../../components/ResultBlock/ResultBlock";

function Homework009() {
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
    <Homework009Component>
        <Feedback 
        countLike={countLike} 
        countDislike={countDislike}
        onLike={onLikeClick}
        onDislike={onDislikeClick}
        onReset={onResetResults}
        />
        <ResultBlock resultName="likes" result={countLike}/>
        <ResultBlock resultName="dislikes" result={countDislike}/>
    </Homework009Component>
    )
}

export default Homework009