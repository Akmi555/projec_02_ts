import { useNavigate } from "react-router-dom";

import { ClientsPage, Title } from "./styles";
import Button from "components/Button/Button";
import { StyledNavLink } from "components/Layout/styles";

function Clients() {
  const navigateFunction = useNavigate();
  return (
    <ClientsPage>
      <Title>
        Clients:
        <StyledNavLink
          to="/clients/hammer"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >Hammer</StyledNavLink>
        <StyledNavLink
          to="/clients/robot"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >Robot</StyledNavLink>
        <StyledNavLink
          to="/clients/wheel"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "none",
          })}
        >Wheel</StyledNavLink>
      </Title>
      <Button
        name="Go to Home page"
        onButtonClick={() => navigateFunction("/")}
      />
    </ClientsPage>
  );
}

export default Clients;
