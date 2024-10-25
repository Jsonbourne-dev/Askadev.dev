import React from 'react';
import AppBar from '../components/Topappbar';
import BackGroundLines from '../assets/backgroundlines.png';
import styled from 'styled-components';
import WelcomeContainer from '../components/WelcomeContainer';
import QACContainer from '../components/QACcontainer';
import InfoBox from '../components/Infoboxes'; 
import Footer from '../components/Footer';
import { Container, Line } from '../styled-components';

const BackgroundImage = styled.img`
position: absolute; 
top: 0; 
right: 0; 
height: 100%;  // Set height to match the TopContainer's height
width: auto;   // Maintain the aspect ratio by allowing width to adjust automatically
z-index: -1; 

@media (max-width: 1024px) {
  height: 100%; 
}

@media (max-width: 768px) {
  height: 100%;  
}

@media (max-width: 480px) {
  height: 100%;  
}
`;



const TopContainer = styled(Container)`
  position: relative;
  height: 800px;  
  overflow: hidden; 
  background-color: transparent; 
  max-width: 100vw; 

  @media (max-width: 1024px) {
    height: 700px;
  }

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 480px) {
    height: 387px;
  }
`;


const StyledContainer = styled(Container)`
  position: relative; 
  top: 45%; 
  left: 60%; 
  transform: translate(-50%, -50%); 
  z-index: 1; 

  @media (max-width: 768px) {
    top: 30%; 
    left: 50%; 
  }

  @media (max-width: 480px) {
    top: 35%; 
  }
`;

const Spacer = styled.div`
  height: ${(props) => props.height || '20px'}; 
`;

function Welcome() {
  return (
    <>
      <TopContainer>
        <BackgroundImage src={BackGroundLines} alt="Background Lines" />
        <AppBar />
        <StyledContainer>
          <WelcomeContainer /> 
        </StyledContainer>
      </TopContainer>
      <Line color="#BEE239" width="100vw" />
      <Spacer />
      <QACContainer filled="filled" />
      <Spacer />
      <InfoBox />
      <Spacer height="100px" /> 
      <Footer />
    </>
  );
}

export default Welcome;
