import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework011Component, FormWrapper } from "./styles";

function Homework011() {
  const [example1Value, setExample1Value] = useState<string>("");
  const [example2Value, setExample2Value] = useState<string>("");

  const changeExample1 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample1Value(event.target.value);
  };

  const changeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2Value(event.target.value);
  };

  const getDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const result = await response.json();
        console.log(result);        
    } catch (error) {}
  };

  useEffect(() => {
    console.log("test");
    getDog();
  }, [example1Value]);

  return (
    <Homework011Component>
      <FormWrapper>
        <Input
          name="Example1"
          placeholder="Enter value 1"
          value={example1Value}
          onChange={changeExample1}
        />
        <Input
          name="Example2"
          placeholder="Enter value 2"
          value={example2Value}
          onChange={changeExample2}
        />
      </FormWrapper>
    </Homework011Component>
  );
}

export default Homework011;
