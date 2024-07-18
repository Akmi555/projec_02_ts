import { useState, useEffect } from "react";
import Counter from "../../components/Counter/Counter";
import { Lesson011Component } from "./styles";
import Button from "../../components/Button/Button";

function Lesson011() {
  //   console.log("component lesson 11 re-render");

  const [count, setCount] = useState<number>(0);

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  // console.log(`new state ${count}`)

  const getCat = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const result = await response.json();
      console.log(result);
    } catch (error) {}
  };

  // 1. Пример использования хука useEffrct, для выполнения функции в после монтирования компонента (monting)
  //Правила: 
  //1-й аргумент - callback функция, внутри которой будет находится необходимая логика
  //2-й аргумент - пустой массив зависимостей
  // useEffect(() => { console.log('Component did mount') }, [])

  useEffect(() => {
    getCat();
  }, []);

  //2. Пример использования хука useEffect, для выполнения функции при обновлении компонента (updating)
  //Правила: 
  //1-й аргумент - callback функция, внутри которой будет находится необходимая логика
  //2-й аргумент - непустой массив зависимостей, в котором указаны те переменные, при измении которых нужно выполнять функцию из первого аргумента

  useEffect(() => {
    console.log("Component did update");
  }, [count]);

  //3. Пример использования хука useEffect, для выполнения функции при удалении компонента (unmounting)
  //Правила: 
  //1-й аргумент - callback функция, внутри которой будет возврат другой функции, в которой будет находится необходимая логика
  //2-й аргумент - пустой массив

  useEffect(() => {
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  return (
    <Lesson011Component>
      <Counter count={count} onMinus={onMinusClick} onPlus={onPlusClick} />
      {/* <Button name="change Lesson11" onButtonClick={onPlusClick}/> */}
    </Lesson011Component>
  );
}

export default Lesson011;
