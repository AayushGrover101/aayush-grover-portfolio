import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { PAGES } from "./constants";
import { SOCIALS, SocialPlatforms } from "src/constants/social";
import { theme } from "src/styles";

const NavbarContainer = styled.nav`
  min-width: 175px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-left: 3rem;
`;

const NavSection = styled.div`
  margin-bottom: 0rem;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  background-color: ${props => props.$isActive ? theme.colors.primary.lightGray : "transparent"};
  
  &:hover {
    background-color: ${props => props.$isActive ? theme.colors.primary.lightGray : theme.colors.primary.lightGray};
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0.5rem 0;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  display: block;
  padding: 0.5rem 0.75rem;
  color: #000;
  text-decoration: none;
  font-weight: 400;
  font-size: 1rem;
  border-radius: 6px;
  margin-bottom: 0.25rem;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${theme.colors.primary.lightGray};
  }
`;

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.includes(path)) return true;
    return false;
  };

  return (
    <NavbarContainer>
      <NavSection>
        {Object.entries(PAGES).map(([pageId, pageName]) => (
          <NavLink 
            key={pageId}
            to={pageId} 
            $isActive={isActive(pageId)}
          >
            {pageName}
          </NavLink>
        ))}
      </NavSection>

      <Divider />

      <NavSection>
        <SocialLink href={SOCIALS[SocialPlatforms.X].link} target="_blank" rel="noopener noreferrer">
          Twitter
        </SocialLink>
        <SocialLink href={SOCIALS[SocialPlatforms.GITHUB].link} target="_blank" rel="noopener noreferrer">
          GitHub
        </SocialLink>
        <SocialLink href={SOCIALS[SocialPlatforms.LINKEDIN].link} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </SocialLink>
      </NavSection>
    </NavbarContainer>
  );
};

export default Navbar;
