import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components'; 

const QACContainerWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  margin-top: 20px;
  position: relative; 
`;

const Title = styled.h2`
  font-family: "Pixelify Sans", sans-serif; 
  font-size: 36px; 
  margin: 0; 
  text-align: center;
  position: relative;
  top: 10px; 

  @media (max-width: 1000px) {
    font-size: 48px; 
  }

  @media (max-width: 600px) {
    font-size: 36px; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 40px; 
  margin-top: 30px; 
  margin-bottom: 60px;

  @media (max-width: 1000px) {
    flex-direction: column; 
    gap: 20px; 
    margin-top: 20px; 
  }
`;

const StyledButton = styled(Button)`
  padding-bottom: 20px;
`;

const LineContainer = styled.div`
  width: 100%; 
  margin-top: -20px;
  margin-bottom: 30px;
  display: none; 

  @media (max-width: 1000px) {
    display: block; 
  }
`;

const Line = styled.div`
  width: 100%; 
  height: 1px; 
  background-color: #BEE239; 
`;

function QACContainer() {
  return (
    <>
     <QACContainerWrapper>
      <Title>Quick Access Commands</Title>
      <ButtonContainer>
        <StyledButton variant="desktop-filled" width="200px">Help Develop</StyledButton>
        <StyledButton variant="desktop-filled" width="200px">GitHub</StyledButton>
        <StyledButton variant="desktop-filled" width="200px">Instant Help</StyledButton>
      </ButtonContainer>
      <LineContainer>
        <Line /> 
      </LineContainer>
    </QACContainerWrapper>
    </>
  );
}

export default QACContainer;
