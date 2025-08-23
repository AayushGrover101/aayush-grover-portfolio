import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { PAGES } from "./constants";
import { SOCIALS, SocialPlatforms } from "src/constants/social";

const NavbarContainer = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const NavSection = styled.div`
  margin-bottom: 2rem;
`;

const NavTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: block;
  padding: 0.5rem 0;
  color: ${props => props.$isActive ? "#000" : "#666"};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? "600" : "400"};
  transition: color 0.2s ease;
  
  &:hover {
    color: #000;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #e5e5e5;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  display: block;
  padding: 0.5rem 0;
  color: #666;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
  
  &:hover {
    color: #000;
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
        <NavTitle>Navigation</NavTitle>
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
        <NavTitle>Social</NavTitle>
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
