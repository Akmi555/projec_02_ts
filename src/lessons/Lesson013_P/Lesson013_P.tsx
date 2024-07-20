import { useEffect, useState } from "react";

import Button from "components/Button/Button";
import { Lesson013_P_Component } from "./styles";
import ResultBlock from "components/ResultBlock/ResultBlock";
import { v4 } from "uuid";


function Lesson013_P() {
    const [resultValue, setResultValue] = useState<[]>([])


    const getInfoCat = async () => {
        const response = await fetch('https://catfact.ninja/fact')   
        // console.log(response);            
        const result = await response.json();
        console.log(result);
        setResultValue(result.map((element)=>element.fact))
        
    }

    useEffect(()=>{
        getInfoCat()
    },[])

    const deletInfoCat = () => {
        setResultValue([])
    }

    console.log(resultValue);
    

    // const render = resultValue.map((renderValue) => {
    //   return (<ResultBlock key={v4()} result={renderValue}/>);
    // })
    

    

    return (
    <Lesson013_P_Component>
        <Button name="GET MORE INFO" onButtonClick={getInfoCat}/>
        {/* {render} */}
        {resultValue  && <ResultBlock result={resultValue}/>}


        {resultValue && <Button name="DELETE ALL DATA" onButtonClick={deletInfoCat}/>}         
    </Lesson013_P_Component>
    )
}

export default Lesson013_P;