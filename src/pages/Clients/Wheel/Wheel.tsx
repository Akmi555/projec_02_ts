import { useNavigate } from "react-router-dom";

import { WheelPage, Title } from "./styles";
import Button from "components/Button/Button";

function Wheel() {
  const navigateFunction = useNavigate()
  return (
    <WheelPage>
      <Title>Wheel page content</Title>
      <Button name='Go back' onButtonClick={()=> navigateFunction('/clients')}/>
    </WheelPage>
  )
}

export default Wheel