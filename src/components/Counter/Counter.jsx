import "./styles.css";
import Button from "../Button/Button";
//Шаг 1 - импорт хука useState из react
import { useState } from "react";

function Counter() {
  //Шаг 2 - вызываем хук useState и передаём в него первоначальное состояние для каунтера и
  //делаем деструктуризацию массива, которые возвращает вызов хука
  const [count, setCount] = useState(0);

  //Шаг 3 - необходимо прописать функции, которые будут менять состояние,
  //внутри функций используем setCount.
  //Функция по изменению состояния, которую возвращает нам вызов useState,
  //принимает аргумент, который и будет являться новым значением состояния
  // то есть функцию setCount необходимо вызвать и передать в неё новое значение
  const onMinusClick = () => {
    //если новое значение состояния необходимо вычислить на основе предыдущего значения, то в setCount
    //необходимо передать другую функцию, в которой будет можно использовать предыдущее значения (prevValue)
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = () => {
    setCount((prevValue) => prevValue + 1);
  };
  //   const result = useState(0);
  //   console.log(result);

  return (
    <div className="counter-component">
      <div className="button-wrapper">
        <Button name="-" onButtonClick={onMinusClick} />
      </div>
      <div className="counter-result">{count}</div>
      <div className="button-wrapper">
        <Button name="+" onButtonClick={onPlusClick} />
      </div>
    </div>
  );
}

export default Counter;
