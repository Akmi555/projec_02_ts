import { ChangeEvent, useState } from "react";
import { Homework010Component } from "./styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import ResultBlock from "../../components/ResultBlock/ResultBlock";

function Homework010() {
    // 1. Создаем состояние, в котором будет храниться актуальное значение поля
    const [resultValue1, setResultValue1] = useState<string>('')
    const [resultValue2, setResultValue2] = useState<string>('')
    // 3. Создаём функцию, которая будет вызываться при изменении resultValue и изменять его состояние (значение)
    const changeResultValue1 = (event: ChangeEvent<HTMLInputElement>) => {
        setResultValue1(event.target.value)
    }
    const changeResultValue2 = (event: ChangeEvent<HTMLInputElement>) => {
        setResultValue2(event.target.value)
    }

    return (
    <Homework010Component>
        {/* 2. Передача значения в поле */}
        <Input
        label='Result 1'
        name='result1'
        placeholder='Enter result 1'
        value={resultValue1}
        // 4. Передача функции для изменения инпута resultValue
        onChange={changeResultValue1} 
        />
        <Button
        name='Result Value'
        onButtonClick={()=> resultValue1 !=='' && <ResultBlock resultName='result 1' result={resultValue1}/>}
        />
         {/* 2. Передача значения в поле */}
         <Input
        label='Result 2'
        name='result1'
        placeholder='Enter result 2'
        value={resultValue2}
        // 4. Передача функции для изменения инпута resultValue
        onChange={changeResultValue2} 
        />
        <Button
        name='Result Value'
        onButtonClick={()=> resultValue2 && <ResultBlock resultName='result 1' result={resultValue2}/>}
        />
    </Homework010Component>
)
    
}

export default Homework010;