import React from "react";
import styled from "styled-components";
import { theme } from "src/styles";

const MobileNavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: #ffffff;
  border-bottom: 1px solid ${theme.colors.primary.lightGray};
  padding: 0.4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MobileNavbarWrapper = styled.div`
  display: flex;
  max-width: 80rem;
  width: 100%;
  justify-content: center;
`;

const MobileNavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;

const HamburgerLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: #000;
  transition: all 0.2s ease;
`;

const MobileNavbar: React.FC = () => {
  return (
    <MobileNavbarContainer>
      <MobileNavbarWrapper>
        <MobileNavbarContent>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/writing">Writing</NavLink>
          </NavLinks>
          <HamburgerButton>
            <HamburgerLine />
            <HamburgerLine />
            <HamburgerLine />
          </HamburgerButton>
        </MobileNavbarContent>
      </MobileNavbarWrapper>
    </MobileNavbarContainer>
  );
};

export default MobileNavbar;
