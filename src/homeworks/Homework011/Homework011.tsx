import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework011Component, FormWrapper, DogImg } from "./styles";

function Homework011() {
  const [example1Value, setExample1Value] = useState<string>("");
  const [example2Value, setExample2Value] = useState<string>("");
  const [dogImageUrl, setDogImageUrl] = useState<string>('')

  const changeExample1 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample1Value(event.target.value);
  };

  const changeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
    setExample2Value(event.target.value);
  };

  const getDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        console.log(response);        
        const result = await response.json();
        console.log(result);  
        
        if (!response.ok) {
          // логику ошибки
          throw Object.assign(new Error('API ERROR'), {errorObj: result})
        }else{
          // логику при успешном завершении запроса
          setDogImageUrl(result.message)       
        }
    } catch (error) {
      console.log(error);      
    } finally{
      console.log('Spinner stop');      
    }
  };

  useEffect(() => {
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
        <DogImg src={dogImageUrl} alt="random dog"/>
      </FormWrapper>
    </Homework011Component>
  );
}

export default Homework011;
