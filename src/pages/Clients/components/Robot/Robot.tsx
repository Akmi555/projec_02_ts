import { Description, RobotPage, Title } from "./styles";
import GoBack from "components/GoBack/GoBack";

function Robot() {
  return (
    <RobotPage>
      <Title>Robot page content</Title>
      <Description>Robot company description</Description>
      <GoBack/>
    </RobotPage>
  )
}

export default Robot