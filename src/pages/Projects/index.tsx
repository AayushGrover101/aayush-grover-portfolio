import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  max-width: 50rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #000;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <p>This is the projects page. Your projects will be displayed here.</p>
    </ProjectsContainer>
  );
};

export default Projects;
