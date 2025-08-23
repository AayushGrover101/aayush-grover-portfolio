
import React from "react";
import { styled } from "styled-components";
import { workExperienceData } from 'src/constants/workExperience';
import { theme } from 'src/styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 20rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 1.55rem;
  margin-bottom: 0.2rem;
`;

const DownloadButton = styled.button`
  background-color: ${theme.colors.primary.lightGray};
  padding: 0.35rem 0.65rem; 
  margin-left: 1rem;
  border: 0px;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;

  &:hover {
    background-color: ${theme.colors.primary.mediumGray};
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExperienceLogo = styled.img`
  width: 2.7rem;
  height: 2.7rem;
`;

const ExperienceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.65rem;
`;

const ExperienceTitle = styled.p`
  font-weight: 700;
  line-height: 0.9;
  font-size: 0.8rem;
`;

const ExperienceCompany = styled.p`
  font-size: 0.65rem;
  margin-top: 0.12rem;
  line-height: 1rem;
`;

const ExperienceDates = styled.p`
  font-size: 0.7rem;
  justify-content: flex-end;
  color: ${theme.colors.primary.gray};
`;

const WorkExperience: React.FC = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>Work Experience</Heading>
        <DownloadButton>Download CV</DownloadButton>
      </HeadingContainer>
      {workExperienceData.map((workExperience) => {
        return (
          <ExperienceContainer>
            <a href={workExperience.companyUrl} target="_blank"><ExperienceLogo src={workExperience.logo}></ExperienceLogo></a>
            <ExperienceTextContainer>
              <ExperienceTitle>{workExperience.jobTitle}</ExperienceTitle>
              <ExperienceCompany>{workExperience.company}</ExperienceCompany>
              <ExperienceDates>{workExperience.startDate} - {workExperience.endDate}</ExperienceDates>
            </ExperienceTextContainer>
          </ExperienceContainer>
        );
      })}
    </Container>
  );
};

export default WorkExperience;