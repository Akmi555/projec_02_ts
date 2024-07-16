import {CounterComponent, ButtonWrapper, CounterResult} from "./styles";
import Button from "../Button/Button";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  return (
    <CounterComponent>
      <ButtonWrapper>
        <Button name="-" onButtonClick={onMinusClick} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onButtonClick={onPlusClick} />
      </ButtonWrapper>
    </CounterComponent>
  );
}

export default Counter;
