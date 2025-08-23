import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  max-width: 800px;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #666;
  }
`;

const Link = styled.a`
  color: #0088FF;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Name>Aayush Grover</Name>
      <Subtitle>
        I'm a Computer Science student at the{" "}
        <Link href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          University of Waterloo
        </Link>
      </Subtitle>

      <Section>
        <SectionTitle>What I'm up to:</SectionTitle>
        <List>
          <ListItem>
            I'm currently doing ML Engineering at{" "}
            <Link href="https://shopify.com" target="_blank" rel="noopener noreferrer">
              Shopify
            </Link>
            , working on Sidekick
          </ListItem>
          <ListItem>
            Previously, I worked on quantitative benchmarks & evaluations (agent frameworks, embedding models, etc.) at{" "}
            <Link href="https://nokia.com" target="_blank" rel="noopener noreferrer">
              Nokia
            </Link>
          </ListItem>
          <ListItem>
            I'm also building at{" "}
            <Link href="https://hackthenorth.com" target="_blank" rel="noopener noreferrer">
              Hack the North
            </Link>
            , Canada's largest hackathon
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Things that scream Aayush:</SectionTitle>
        <List>
          <ListItem>
            I unintentionally talk really fast - my mouth can rarely keep up with my mind, so I end up speaking like a podcast played on 2x speed.
          </ListItem>
          <ListItem>
            I change a lot every year; whether it's the clothes I wear or my personal worldview, the only constant in my life is change and growth.
          </ListItem>
          <ListItem>
            I view a broken status quo, not as a limitation, but as a challenge; countless others have changed it before me, so why shouldn't I try?
          </ListItem>
          <ListItem>
            I hold my values close, but I'm always open to rethinking my opinions. Make a strong case and I'll leave behind old assumptions.
          </ListItem>
          <ListItem>
            Art is at the heart of everything I do, from music to theater to design - if I'm not creating, I'm getting lost in someone else's work.
          </ListItem>
        </List>
      </Section>

      <p>
        Feel free to check out some of my{" "}
        <Link href="/projects">projects</Link>,{" "}
        <Link href="/writing">writing</Link>, and{" "}
        <Link href="/ml-archives">ML archives</Link>.
      </p>
    </HomeContainer>
  );
};

export default Home;