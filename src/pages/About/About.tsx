import { useNavigate } from "react-router-dom";

import { AboutPage, Title } from "./styles";
import Button from "components/Button/Button";
import GoBack from "components/GoBack/GoBack";

function About() {
  const navigateFunction = useNavigate()
  return (
    <AboutPage>
      <Title>About page content</Title>
      <GoBack/>
    </AboutPage>
  )
}

export default About;