import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  NavItem,
  NavLink,
  NavMenu,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer";
import FooterLogo from "../../Images/logo.png";
import fb from "../../Images/Facebook.png";
import insta from "../../Images/Instagram.png";
import twitter from "../../Images/Twitter.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo>
              <img src={FooterLogo} alt="footer logo" />
            </SocialLogo>
            <WebsiteRights>
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
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <img src={fb} alt="fb" />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <img src={twitter} alt="fb" />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <img src={insta} alt="fb" />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
