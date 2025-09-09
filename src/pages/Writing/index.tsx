import React from "react";
import styled from "styled-components";

const WritingContainer = styled.div`
  max-width: 50rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #000;
`;

const Writing: React.FC = () => {
  return (
    <WritingContainer>
      <Title>Writing</Title>
      <p>This is the writing page. Your articles and blog posts will be displayed here.</p>
    </WritingContainer>
  );
};

export default Writing;
