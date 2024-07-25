import {
  Footer,
  Header,
  HeaderLogo,
  LayoutComponent,
  Main,
  NavContainer,
} from "./styles";
import Avatar from "assets/free-icon-avatars-4725937.png";
import { LayoutProps } from "./types";
import NavigationLink from "components/NavigationLink/NavigationLink";
import { Link, useNavigate } from "react-router-dom";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  return (
    <LayoutComponent>
      <Header>
        <Link to="/">
          <HeaderLogo src={Avatar} />
        </Link>
        <NavContainer>
          {/* <StyledNavLink 
              to='/'
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >Home</StyledNavLink>
            <StyledNavLink 
              to='/users'
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >Users</StyledNavLink>
            <StyledNavLink 
              to='/about'
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >About</StyledNavLink>
            <StyledNavLink 
              to='/clients'
              style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            >Clients</StyledNavLink> */}
          <NavigationLink path="/" nameLink="Home" />
          <NavigationLink path="/users" nameLink="Users" />
          <NavigationLink path="/about" nameLink="About" />
          <NavigationLink path="/clients" nameLink="Clients" />
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogo src={Avatar} onClick={() => navigate("/")} />
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
