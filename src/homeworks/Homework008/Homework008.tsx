import { Homework008Component } from "./styles";
import Button from "../../components/Button/Button";

function Homework008() {
  return (
    <Homework008Component>
      <Button disabled={true} name="Simple button" onButtonClick={()=>console.log('test')
      }/>
      <Button disabled={false} name="Disabled button" />
    </Homework008Component>
  );
}

export default Homework008;
