import { useNavigate } from "react-router-dom";

import { RobotPage, Title } from "./styles";
import Button from "components/Button/Button";

function Robot() {
  const navigateFunction = useNavigate()
  return (
    <RobotPage>
      <Title>Robot page content</Title>
      <Button name='Go back' onButtonClick={()=> navigateFunction('/clients')}/>
    </RobotPage>
  )
}

export default Robot