import { useNavigate } from "react-router-dom";

import { HammerPage, Title } from "./styles";
import Button from "components/Button/Button";

function Hammer() {
  const navigateFunction = useNavigate()
  return (
    <HammerPage>
      <Title>Hammer page content</Title>
      <Button name='Go back' onButtonClick={()=> navigateFunction('/clients')}/>
    </HammerPage>
  )
}

export default Hammer