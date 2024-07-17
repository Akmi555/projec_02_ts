import { ChangeEvent, useState } from "react";
import Input from "../../components/Input/Input"
import { Lesson010Component } from "./styles"
import ResultBlock from "../../components/ResultBlock/ResultBlock";


function Lesson010() {
    // 1. Создаем состояние, в котором будет храниться актуальное значение поля
    const [example2Value, setExample2Value] = useState<string>('')

    // 3. Создаём функцию, которая будет вызываться при изменении Example2 и изменять его состояние (значение)
    const handleChangeExample2 = (event: ChangeEvent<HTMLInputElement>) => {
        setExample2Value(event.target.value)
        console.log(event.target.value);        
    }

    return (
        <Lesson010Component>
            {/* пример не контролируемого компонента */}
            {/* <Input
            label="Example 1"
            placeholder="Enter value 1"
            name="example1"
            />
            <ResultBlock resultName="Example1" result='' /> 
            */}
            {/* 2. Передача значения в поле */}
            <Input
            label="Example 2"
            placeholder="Enter value 2"
            name="example2"
            value={example2Value}
            // 4. Передача функции для изменения инпута Example2
            onChange={handleChangeExample2}
            />
            {/* Оператор условного рендеринга - && (если условие с левой части оператора возвращает true, тогда элемент с правой части будет возврщать в код) */}
            {example2Value !== '' && <ResultBlock resultName="field Example 2" result={example2Value}/>}
            {/* {example2Value && <ResultBlock resultName="field Example 2" result={example2Value} />} */}
        </Lesson010Component>   
    )
}

export default Lesson010;