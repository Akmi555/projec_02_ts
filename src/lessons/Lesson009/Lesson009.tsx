import { BlueBigBox, GreenLittleBox, Lesson009Component } from "./styles"
import { useState } from "react";
import Counter from "../../components/Counter/Counter";


function Lesson009() {
  const [count, setCount] = useState<number>(0);

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <Lesson009Component>
      <GreenLittleBox>Green Little Box</GreenLittleBox>
      <BlueBigBox>Blue Big Box{count}</BlueBigBox>
      <Counter count={count} onMinus={onMinusClick} onPlus={onPlusClick}/> 
    </Lesson009Component>
  )
}

export default Lesson009