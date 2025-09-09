import React from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import MobileNavbar from "../../Navbar/MobileNavbar";

const LayoutContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: ${props => props.$isMobile ? '5rem' : '4.75rem'};
  padding-bottom: 4rem;
  min-height: 100vh;
`;

const ContentWrapper = styled.div<{ $hasSidebar: boolean }>`
  display: flex;
  max-width: 80rem;
  width: 100%;
  background-color: #ffffff;
  position: relative;
  overflow: visible;
  isolation: isolate;
  justify-content: ${props => props.$hasSidebar ? 'flex-start' : 'center'};
`;

const MainContent = styled.main<{ $hasSidebar: boolean }>`
  padding-left: ${props => props.$hasSidebar ? '3rem' : '0'};
  align-self: flex-start;
  padding-top: 0;
  max-width: ${props => props.$hasSidebar ? 'none' : '60rem'};
  width: ${props => props.$hasSidebar ? 'auto' : '100%'};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isWideScreen, setIsWideScreen] = React.useState(window.innerWidth > 1300);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 1300);

  React.useEffect(() => {
    const handleResize = () => {
      const newIsWideScreen = window.innerWidth > 1300;
      const newIsMobile = window.innerWidth < 1300;
      setIsWideScreen(newIsWideScreen);
      setIsMobile(newIsMobile);
      console.log('Window width:', window.innerWidth, 'Mobile:', newIsMobile);
    };

    // Call once on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && <MobileNavbar />}
      <LayoutContainer $isMobile={isMobile}>
        <ContentWrapper $hasSidebar={isWideScreen}>
          {isWideScreen && <Navbar />}
          <MainContent $hasSidebar={isWideScreen}>
            {children}
          </MainContent>
        </ContentWrapper>
      </LayoutContainer>
    </>
  );
};

export default Layout;
