import React from 'react';
import styled from 'styled-components';
import { Container, Line, Button } from '../styled-components';


const InfoBoxWrapper = styled(Container)`
  width: 300px;
  height: 316px;
  border: 2px solid #BEE239; 
  border-radius: 8px; 
  padding: 20px; 
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative; 

  @media (max-width: 800px) {
    width: 320px; 
    height: 250px; 
  }
`;

const Title = styled.h3`
  font-family: "Pixelify Sans", sans-serif;
  font-size: 30px; 
  margin: 0;

  @media (max-width: 800px) {
    font-size: 24px;
  }
`;

const NormalText = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px; 

  @media (max-width: 800px) {
    font-size: 20px; 
  }
`;

const ContentText = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  margin: 20px 0 0; 

  @media (max-width: 800px) {
    font-size: 16px; 
    margin: 10px 0 0; 
  }
`;

const InfoLine = styled(Line)`
  width: 100%; 
  height: 2px; 
  background-color: #BEE239;
  margin: 10px 0; 
`;

const ButtonContainer = styled.div`
  width: 100%; 
  position: absolute; 
  bottom: 20px; 
  left: 0;
  display: flex;
  justify-content: center; 
`;

const TopRow = styled.div`
  display: flex;
  justify-content: center; 
  gap: 50px;
  margin-bottom: 50px; 

  @media (max-width: 1000px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center; 
  gap: 50px; 

  @media (max-width: 1000px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

function InfoBox() {
  return (
    <>
      <TopRow>
        <InfoBoxWrapper>
          <Title>Ask a question</Title>
          <InfoLine />
          <ContentText>
            We're here to support developers in solving their challenges. Ask a question and get an answer.
          </ContentText>
          <ButtonContainer>
            <Button variant="desktop-filled" width="85%">Get Help</Button> 
          </ButtonContainer>
        </InfoBoxWrapper>

        <InfoBoxWrapper>
          <Title>Terminal</Title>
          <InfoLine />
          <ContentText>
            Access AskADev directly through your terminal. It’s quick and it’s easy.
          </ContentText>
          <ButtonContainer>
            <Button variant="desktop-filled" width="85%">Learn More</Button> 
          </ButtonContainer>
        </InfoBoxWrapper>

        <InfoBoxWrapper>
          <Title>Community</Title>
          <InfoLine />
          <ContentText>
            A vibrant community awaits you! Connect, share, and learn together.
          </ContentText>
          <ButtonContainer>
            <Button variant="desktop-filled" width="85%">Go Now</Button> 
          </ButtonContainer>
        </InfoBoxWrapper>
      </TopRow>

      <BottomRow>
        <InfoBoxWrapper>
          <Title>Open Source</Title>
          <InfoLine />
          <ContentText>
            Collab on exciting projects and contribute to the open-source movement.
          </ContentText>
          <ButtonContainer>
            <Button variant="desktop-filled" width="85%">Learn More</Button> 
          </ButtonContainer>
        </InfoBoxWrapper>

        <InfoBoxWrapper>
          <Title>
            Web<NormalText>5</NormalText>
          </Title>
          <InfoLine />
          <ContentText>
            Discover the future of the internet with real security and privacy.
          </ContentText>
          <ButtonContainer>
            <Button variant="desktop-filled" width="85%">Learn More</Button> 
          </ButtonContainer>
        </InfoBoxWrapper>
      </BottomRow>
    </>
  );
}

export default InfoBox;
