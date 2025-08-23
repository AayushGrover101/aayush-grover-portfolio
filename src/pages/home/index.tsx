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
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding-right: 3rem;
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