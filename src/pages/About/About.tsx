import { useNavigate } from "react-router-dom";

import { AboutPage, Title } from "./styles";
import Button from "components/Button/Button";

function About() {
  const navigateFunction = useNavigate()
  return (
    <AboutPage>
      <Title>About page content</Title>
      <Button name='Go to Home page' onButtonClick={()=> navigateFunction('/')}/>
    </AboutPage>
  )
}

export default About;