import React from 'react';
import styled from 'styled-components';
import InfoCard from './InfoCard';

const InfoCardsContainerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
`;

const StyledInfoCard = styled(InfoCard)`
  width: 300px; 
  margin: 10px;

  @media (max-width: 1200px) {
    width: 45%; 
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

const InfoCardsContainer = () => {
  return (
    <InfoCardsContainerWrapper>
      <StyledInfoCard title="Questions Asked" value="7,214" />
      <StyledInfoCard title="Joined Users" value="5,678" />
      <StyledInfoCard title="Questions Solved" value="6,560" />
    </InfoCardsContainerWrapper>
  );
};

export default InfoCardsContainer;
