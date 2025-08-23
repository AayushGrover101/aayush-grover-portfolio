
import React from "react";
import { styled } from "styled-components";
import { workExperienceData } from 'src/constants/workExperience';
import { theme } from 'src/styles';
import resume from 'src/assets/documents/Aayush_Grover_Resume.pdf';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  min-width: 21rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const DownloadButton = styled.button`
  background-color: ${theme.colors.primary.lightGray};
  padding: 0.35rem 0.65rem; 
  margin-left: 0.75rem;
  border: 0px;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${theme.colors.primary.mediumGray};
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ExperienceLogo = styled.img`
  width: 3.1rem;
  height: 3.1rem;
`;

const ExperienceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.7rem;
`;

const ExperienceTitle = styled.p`
  font-weight: 700;
  line-height: 0.9;
  font-size: 0.9rem;
`;

const ExperienceCompany = styled.p`
  font-size: 0.75rem;
  margin-top: 0.175rem;
  line-height: 1.2rem;
`;

const ExperienceDates = styled.p`
  font-size: 0.75rem;
  justify-content: flex-end;
  color: ${theme.colors.primary.gray};
`;

const WorkExperience: React.FC = () => {
  const handleOpenResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <Container>
      <HeadingContainer>
        <Heading>Work Experience</Heading>
        <DownloadButton onClick={handleOpenResume}>View CV</DownloadButton>
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