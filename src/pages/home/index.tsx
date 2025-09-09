import React from "react";
import HomeBody from "./sections/HomeBody";
import WorkExperience from "./sections/WorkExperience";
import RecordLibrary from "./sections/RecordLibrary";
import { styled } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4rem;
  justify-content: center;
  
  @media (max-width: 1300px) {
    justify-content: center;
    padding: 0 0rem;
    gap: 4rem;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    padding: 0 4rem;
  }
  
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    padding: 0 1.5rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding-right: 3rem;
  
  @media (max-width: 1300px) {
    padding-right: 0rem;
  }
  
  @media (max-width: 1000px) {
    width: 100%;
    align-items: flex-start;
    padding-right: 0;
    max-width: 100%;
    padding: 0 2rem;
  }
  
  @media (max-width: 300px) {
    align-items: center;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HomeBody />
      <RightContainer>
        <WorkExperience />
        <RecordLibrary />
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;