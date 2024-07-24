import { Footer, Header, HeaderLogo, LayoutComponent, Main, NavContainer, StyledNavLink } from "./styles"
import Avatar from 'assets/free-icon-avatars-4725937.png'
import { LayoutProps } from "./types"

function Layout({children}: LayoutProps) {

  return (
    <LayoutComponent>
      <Header>
        <HeaderLogo src={Avatar} />
        <NavContainer>
            <StyledNavLink 
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
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <HeaderLogo src={Avatar} />
      </Footer>
    </LayoutComponent>
  )
}

export default Layout