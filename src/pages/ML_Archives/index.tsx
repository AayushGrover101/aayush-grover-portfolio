import React from "react";
import styled from "styled-components";

const MLArchivesContainer = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #000;
`;

const MLArchives: React.FC = () => {
  return (
    <MLArchivesContainer>
      <Title>ML Archives</Title>
      <p>This is the ML Archives page. Your machine learning projects and research will be displayed here.</p>
    </MLArchivesContainer>
  );
};

export default MLArchives;
