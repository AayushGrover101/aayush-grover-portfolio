import React from "react";
import styled from "styled-components";
import Link from "src/components/base/Link";

const HomeContainer = styled.div`
  max-width: 37.5rem;
  line-height: 1.6;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #374151;
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-weight: 400;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
  line-height: 1.4;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.25rem;
  position: relative;
  font-size: 1rem;
  color: #374151;
  line-height: 1.4;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #6B7280;
    font-weight: 600;
    font-size: 1.1rem;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BottomText = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.7;
  margin-top: 2rem;
`;

const LastUpdated = styled.p`
  font-size: 0.8rem;
  color: #374151;
  line-height: 1.7;
  margin-top: 1rem;
`;

const HomeBody: React.FC = () => {
  return (
    <HomeContainer>
      <Name>Aayush Grover</Name>
      <Subtitle>
        I'm a second year computer science student at the{" "}
        <Link href="https://uwaterloo.ca" target="_blank" rel="noopener noreferrer">
          University of Waterloo
        </Link>
        .
      </Subtitle>

      <Section>
        <SectionTitle>What I've been up to lately:</SectionTitle>
        <List>
          <ListItem>
            I'm currently doing ML engineering at{" "}
            <Link href="https://shopify.com" target="_blank" rel="noopener noreferrer">
              Shopify
            </Link>
            , working on Sidekick.
          </ListItem>
          <ListItem>
            Recently, I designed high-value agentic infrastructure for autonomous network agents at{" "}
            <Link href="https://shopify.com" target="_blank" rel="noopener noreferrer">
              Nokia 
            </Link>
            , pending internal-approval for a system patent
          </ListItem>

          <ListItem>
            In parallel, I worked on quantitative benchmarks & evaluations (agent frameworks, embedding models, etc.) on Nokia's research teams.
          </ListItem>

          <ListItem>
            I built a voice AI interviewer overnight, scaling {" "}
            <Link href="https://www.meetcode.world/" target="_blank" rel="noopener noreferrer">
              MeetCode 
            </Link>
            {" "}to 1.5k users without marketing in &lt;24 hours.
          </ListItem>

          <ListItem>
            I'm also building at{" "}
            <Link href="https://hackthenorth.com" target="_blank" rel="noopener noreferrer">
              Hack the North
            </Link>
            , Canada's largest hackathon.
          </ListItem>
        </List>
      </Section>

      <Section>
        <SectionTitle>Things that interest me:</SectionTitle>
        <List>
          <ListItem>
            Building beautiful products and experiences. Impact is all about scale, and scaling consumer products requires killer user experience.
          </ListItem>
          <ListItem>
            ML research. While building products gives me the "thrill" of a quick win, I find the pursuit of deeper knowledge most rewarding.
          </ListItem>
          <ListItem>
            Art is at the heart of everything I do. From design to theater to jazz – if I'm not creating, I'm getting lost in someone else's work.
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
        </List>
      </Section>

      <BottomText>
        Feel free to check out some of my{" "}
        <Link href="/projects">projects</Link>,{" "}
        <Link href="/writing">writing</Link>, and{" "}
        <Link href="/ml-archives">ML archives</Link>.
      </BottomText>

      <LastUpdated>
        Last updated: August 27rd, 2025.
      </LastUpdated>
    </HomeContainer>
  );
};

export default HomeBody;
