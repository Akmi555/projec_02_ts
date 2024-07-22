import { useEffect, useState } from "react";

import Button from "components/Button/Button";
import { Lesson013_P_Component, ResultWrapper } from "./styles";
import ResultBlock from "components/ResultBlock/ResultBlock";
import { v4 } from "uuid";

function Lesson013_P() {
  const [resultValue, setResultValue] = useState<string[]>([]);

  const getInfoCat = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    // console.log(response);
    const result = await response.json();
    // console.log(result);
    // setResultValue(result.fact);
    setResultValue((element) => [...element, result.fact]); // расширение массива и 
                                                    //добавление в него result.fact
  };

  useEffect(() => {
    getInfoCat();
  }, []);

  const deletInfoCat = () => {
    setResultValue([]);
  };

  console.log(resultValue);

  const render = resultValue.map((renderValue, index) => {
    return <ResultBlock resultName={`${index + 1}`} key={v4()} result={renderValue} />;
  });

  return (
    <Lesson013_P_Component>
      <Button name="GET MORE INFO" onButtonClick={getInfoCat} />

      {resultValue.length > 0 && (
        <ResultWrapper>
          {render}
          {/* <ResultBlock result={resultValue} /> */}
          <Button name="DELETE ALL DATA" onButtonClick={deletInfoCat} />
        </ResultWrapper>
      )}
    </Lesson013_P_Component>
  );
}

export default Lesson013_P;
