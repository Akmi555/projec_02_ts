import { ChangeEvent, useState } from "react";
import { Homework010Component, FormWrapper, ResultWrapper } from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ResultBlock from "../../components/ResultBlock/ResultBlock";

function Homework010() {
  const [resultValue1, setResultValue1] = useState<string>("");
  const [resultValue2, setResultValue2] = useState<string>("");
  const [value1Result, setvalue1Result] = useState<string>("");
  const [value2Result, setvalue2Result] = useState<string>("");
  const [isShowBlock, setIsShowBloc] = useState<boolean>(false);

  const changeResultValue1 = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event);
    setResultValue1(event.target.value);
  };

  const changeResultValue2 = (event: ChangeEvent<HTMLInputElement>): void => {
    setResultValue2(event.target.value);
  };

  const showResult = () => {
    setvalue1Result(resultValue1);
    setvalue2Result(resultValue2);
    if (resultValue1!=='' || resultValue2!=='') {
        setIsShowBloc(!isShowBlock)
    }
  };

  return (
    <Homework010Component>
      <FormWrapper>
        <Input
          label="Result 1"
          name="result1"
          placeholder="Enter result 1"
          value={resultValue1}
          onChange={changeResultValue1}
        />
        <Input
          label="Result 2"
          name="result1"
          placeholder="Enter result 2"
          value={resultValue2}
          onChange={changeResultValue2}
        />
        <Button name="Result Value 1" onButtonClick={showResult} />
      </FormWrapper>
      {isShowBlock && 
        <ResultWrapper>
          {value1Result !== '' && <ResultBlock resultName="result 1" result={value1Result} />}
          {value2Result && <ResultBlock resultName="result 2" result={value2Result} />}
        </ResultWrapper>}
    </Homework010Component>
  );
}

export default Homework010;
