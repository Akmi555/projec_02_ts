import { useNavigate } from "react-router-dom";

import { ClientsPage, Title, StyledLink } from "./styles";
import Button from "components/Button/Button";
import { StyledNavLink } from "components/Layout/styles";

function Clients() {
  const navigateFunction = useNavigate();
  return (
    <ClientsPage>
      <Title>
        Clients:        
      </Title>
      <StyledLink to="hammer">Hammer</StyledLink>
        <StyledLink
          to="robot"
          >Robot</StyledLink>
        <StyledLink
          to="wheel"
          >Wheel</StyledLink>
      <Button
        name="Go to Home page"
        onButtonClick={() => navigateFunction("/")}
      />
    </ClientsPage>
  );
}

export default Clients;
