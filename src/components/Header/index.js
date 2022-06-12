import React from "react";
import {
  HeaderContainer,
  NavLogo,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
} from "./Header";
import Logo from "../../Images/Subtract.png";
const Header = () => {
  return (
    <HeaderContainer>
      <NavLogo>
        <MenuIcon>
          <img src={Logo} alt="logo" />
        </MenuIcon>
        ANALYTICS
      </NavLogo>

      <NavMenu>
        <NavItem>
          <NavLink>Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>FAQ</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Blog</NavLink>
        </NavItem>
      </NavMenu>
      <NavMenu>
        <NavItem>
          <NavLink>Sign Up</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <NavButton>Sign Up</NavButton>
          </NavLink>
        </NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};
export default Header;