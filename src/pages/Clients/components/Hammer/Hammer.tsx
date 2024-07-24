import { Description, GoBackButtonWrapper, HammerPage, Title } from "./styles";
import GoBack from "components/GoBack/GoBack";

function Hammer() {
  return (
    <HammerPage>
      <Title>Hammer page content</Title>
      <Description>Hammer company description</Description>
      <GoBack/>            
    </HammerPage>
  )
}

export default Hammer