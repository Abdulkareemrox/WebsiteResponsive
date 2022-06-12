import styled from "styled-components";


export const HeaderContainer = styled.header`
 height: 80px;
 top: 78px;

  margin-top: -80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1rem;
z-index: 3;
position: absolute;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: none;
  }
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MenuIcon = styled.div`
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  color: #8794BA;
`;

export const NavLink = styled.div`
  color: #8794BA;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavButton = styled.button`
padding: 10px 53px;
background: transparent;
border: 1px solid #465B95;
border-radius: 68px;
color: #8794BA;
`;