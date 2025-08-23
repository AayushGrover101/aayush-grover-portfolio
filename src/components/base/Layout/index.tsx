import React from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4.75rem;
  padding-bottom: 4rem;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 79rem;
  width: 100%;
  background-color: #ffffff;
  position: relative;
  overflow: visible;
  isolation: isolate;
`;

const MainContent = styled.main`
  padding-left: 3rem;
  align-self: flex-start;
  padding-top: 0;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <ContentWrapper>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
      </ContentWrapper>
    </LayoutContainer>
  );
};

export default Layout;
