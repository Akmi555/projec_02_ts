import { StyledNavLink } from "./stiles"
import { NavigationLinkProps } from "./types"

function NavigationLink({ path, nameLink }: NavigationLinkProps) {
    return (
      <StyledNavLink
        to={path}
        style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
      >
        {nameLink}
      </StyledNavLink>
    )
  }

export default NavigationLink