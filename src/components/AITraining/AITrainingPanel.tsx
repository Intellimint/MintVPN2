import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  ${({ theme }) => theme.glassMorphism};
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 20px 0;
  font-size: 1.4rem;
  text-align: center;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  animation: fadeIn 0.6s ease-out;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatLabel = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 6px 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.6rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const AITrainingPanel: React.FC = () => {
  return (
    <Panel>
      <Title>Contribution Stats</Title>
      <StatsContainer>
        <StatItem>
          <StatLabel>Computing Time</StatLabel>
          <StatValue>0h</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>INTM Earned</StatLabel>
          <StatValue>0</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>Tasks Done</StatLabel>
          <StatValue>0</StatValue>
        </StatItem>
      </StatsContainer>
    </Panel>
  );
};

export default AITrainingPanel; 